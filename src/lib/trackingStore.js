/**
 * AuraBix Prospect Analytics — Storage Abstraction
 * 
 * Uses Upstash Redis in production when UPSTASH_REDIS_REST_URL is configured.
 * Falls back to an in-memory Map for local development so the feature
 * works instantly without any external service setup.
 * 
 * Data shape per visit:
 *   { name, token, template, timestamp, city, country, device, page }
 * 
 * Keys:
 *   "tracked-tokens"          → Set of all tokens that have been visited
 *   "visits:{token}"          → List of visit objects (newest first)
 *   "meta:{token}"            → { name, template, totalVisits, firstSeen, lastSeen }
 */

let redisClient = null

// Lazy-load @upstash/redis only when env vars exist
function getRedis() {
  if (redisClient) return redisClient
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      // Dynamic import won't work synchronously, so we use require-style approach
      // eslint-disable-next-line
      const { Redis } = require("@upstash/redis")
      redisClient = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
      return redisClient
    } catch (e) {
      console.warn("⚠️ Failed to load @upstash/redis, falling back to in-memory store:", e.message)
    }
  }
  return null
}

// ─── In-Memory Fallback Store ───
// Survives hot reloads in dev via globalThis caching
const GLOBAL_KEY = "__aurabix_analytics_store__"

function getMemoryStore() {
  if (!globalThis[GLOBAL_KEY]) {
    globalThis[GLOBAL_KEY] = {
      tokens: new Set(),
      visits: new Map(),   // token → [visit, visit, ...]
      meta: new Map(),     // token → { name, template, totalVisits, firstSeen, lastSeen }
    }
  }
  return globalThis[GLOBAL_KEY]
}

// ─── Public API ───

/**
 * Record a prospect visiting their demo page.
 */
export async function recordVisit({ token, name, template, city, country, device, page }) {
  const timestamp = new Date().toISOString()
  const visit = { name, token, template, timestamp, city, country, device, page }

  const redis = getRedis()

  if (redis) {
    // ── Upstash Redis (Production) ──
    await redis.sadd("tracked-tokens", token)

    // Prepend visit to list (newest first), cap at 100 per token
    await redis.lpush(`visits:${token}`, JSON.stringify(visit))
    await redis.ltrim(`visits:${token}`, 0, 99)

    // Update meta
    const existingMeta = await redis.get(`meta:${token}`)
    const parsed = typeof existingMeta === "string" ? JSON.parse(existingMeta) : (existingMeta || {})
    const totalVisits = (parsed.totalVisits || 0) + 1
    await redis.set(`meta:${token}`, JSON.stringify({
      name,
      template: template || parsed.template || "dental",
      totalVisits,
      firstSeen: parsed.firstSeen || timestamp,
      lastSeen: timestamp,
    }))

  } else {
    // ── In-Memory Fallback (Development) ──
    const store = getMemoryStore()

    if (!store.visits.has(token)) {
      console.log("📊 [Analytics] In-memory mode — data persists during this dev session. Connect Upstash Redis for production persistence.")
    }

    store.tokens.add(token)

    const visits = store.visits.get(token) || []
    visits.unshift(visit)
    if (visits.length > 100) visits.length = 100
    store.visits.set(token, visits)

    const existing = store.meta.get(token) || {}
    store.meta.set(token, {
      name,
      template: template || existing.template || "dental",
      totalVisits: (existing.totalVisits || 0) + 1,
      firstSeen: existing.firstSeen || timestamp,
      lastSeen: timestamp,
    })
  }

  return visit
}

/**
 * Get all tracked prospects with their visit data.
 * Returns an array sorted by most recent activity.
 */
export async function getAllProspects() {
  const redis = getRedis()

  if (redis) {
    // ── Upstash Redis ──
    const tokens = await redis.smembers("tracked-tokens")
    if (!tokens || tokens.length === 0) return []

    const prospects = []

    for (const token of tokens) {
      const metaRaw = await redis.get(`meta:${token}`)
      const meta = typeof metaRaw === "string" ? JSON.parse(metaRaw) : metaRaw
      if (!meta) continue

      const visitsRaw = await redis.lrange(`visits:${token}`, 0, 9) // last 10 visits
      const visits = visitsRaw.map(v => typeof v === "string" ? JSON.parse(v) : v)

      prospects.push({
        token,
        name: meta.name,
        template: meta.template,
        totalVisits: meta.totalVisits,
        firstSeen: meta.firstSeen,
        lastSeen: meta.lastSeen,
        recentVisits: visits,
      })
    }

    prospects.sort((a, b) => new Date(b.lastSeen) - new Date(a.lastSeen))
    return prospects

  } else {
    // ── In-Memory ──
    const store = getMemoryStore()
    const prospects = []

    for (const token of store.tokens) {
      const meta = store.meta.get(token)
      if (!meta) continue

      const allVisits = store.visits.get(token) || []

      prospects.push({
        token,
        name: meta.name,
        template: meta.template,
        totalVisits: meta.totalVisits,
        firstSeen: meta.firstSeen,
        lastSeen: meta.lastSeen,
        recentVisits: allVisits.slice(0, 10),
      })
    }

    prospects.sort((a, b) => new Date(b.lastSeen) - new Date(a.lastSeen))
    return prospects
  }
}

/**
 * Get stats summary for the dashboard header.
 */
export async function getStats() {
  const prospects = await getAllProspects()

  const totalProspects = prospects.length
  const totalVisits = prospects.reduce((sum, p) => sum + p.totalVisits, 0)
  const hotLeads = prospects.filter(p => p.totalVisits >= 2).length
  const todayVisits = prospects.filter(p => {
    const lastSeen = new Date(p.lastSeen)
    const today = new Date()
    return lastSeen.toDateString() === today.toDateString()
  }).length

  return { totalProspects, totalVisits, hotLeads, todayVisits }
}
