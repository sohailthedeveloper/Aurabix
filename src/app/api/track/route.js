import { recordVisit, getAllProspects, getStats, activateToken, deactivateToken, isTokenDeactivated } from "@/lib/trackingStore"

/**
 * POST /api/track
 * Records a prospect visiting their demo page.
 * Called silently from the demo pages on load.
 */
export async function POST(request) {
  try {
    const body = await request.json()
    const { token, name, template, page, action } = body

    if (!token) {
      return Response.json({ error: "Token is required" }, { status: 400 })
    }

    // Extract geo & device info from Vercel headers (free, automatic)
    const city = request.headers.get("x-vercel-ip-city") || request.headers.get("x-forwarded-for") || "Unknown"
    const country = request.headers.get("x-vercel-ip-country") || "Unknown"
    const userAgent = request.headers.get("user-agent") || ""
    const device = /Mobile|Android|iPhone|iPad/i.test(userAgent) ? "Mobile" : "Desktop"

    // Check if the link is deactivated
    const deactive = await isTokenDeactivated(token)
    if (deactive) {
      // Log the attempted access so the sales rep knows they clicked it
      await recordVisit({
        token,
        name: name || "Unknown Prospect",
        template: template || "dental",
        city: decodeURIComponent(city),
        country,
        device,
        page: page || "demo",
        action: "Attempted to view deactivated page",
      })
      return Response.json({ success: false, deactivated: true, error: "Concept page deactivated" })
    }

    const visit = await recordVisit({
      token,
      name: name || "Unknown Prospect",
      template: template || "dental",
      city: decodeURIComponent(city),
      country,
      device,
      page: page || "demo",
      action: action || null,
    })

    return Response.json({ success: true, visit })
  } catch (error) {
    console.error("Track API Error:", error)
    return Response.json({ error: "Failed to record visit" }, { status: 500 })
  }
}

/**
 * PATCH /api/track
 * Toggle deactivation status of a prospect token.
 */
export async function PATCH(request) {
  try {
    const body = await request.json()
    const { token, active } = body

    if (!token) {
      return Response.json({ error: "Token is required" }, { status: 400 })
    }

    if (active) {
      await activateToken(token)
    } else {
      await deactivateToken(token)
    }

    return Response.json({ success: true, active })
  } catch (error) {
    console.error("Track API PATCH Error:", error)
    return Response.json({ error: "Failed to toggle status" }, { status: 500 })
  }
}

/**
 * GET /api/track
 * Returns all tracked prospects and their visit data.
 * Used by the Generator dashboard to display the activity feed.
 */
export async function GET() {
  try {
    const [prospects, stats] = await Promise.all([
      getAllProspects(),
      getStats(),
    ])

    return Response.json({ success: true, prospects, stats })
  } catch (error) {
    console.error("Track API GET Error:", error)
    return Response.json({ error: "Failed to retrieve tracking data" }, { status: 500 })
  }
}
