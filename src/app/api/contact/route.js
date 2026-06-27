import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, service, budget, message } = await request.json()

    // 1. Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const brevoApiKey = process.env.BREVO_API_KEY

    // If API key is missing (e.g. user hasn't set it yet in .env.local)
    // We will log a warning and return a mock success response so the UI doesn't break in dev.
    if (!brevoApiKey) {
      console.warn("⚠️ BREVO_API_KEY environment variable is not defined. Simulating mail send.")
      return Response.json({
        success: true,
        message: "Demo mode: form submitted successfully (simulate success without Brevo API key)."
      })
    }

    // 2. Setup Nodemailer Transporter using Brevo SMTP details
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: "ad619d001@smtp-brevo.com",
        pass: brevoApiKey // Contains the xsmtpsib- password
      }
    })

    // 3. Send admin notification email
    const adminMailOptions = {
      from: '"AuraBix Portal" <hello@aurabix.com>',
      to: "hello@aurabix.com",
      subject: `🔥 New Lead: ${name} - ${service || "General Inquiry"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: sans-serif; line-height: 1.5; color: #333; }
            .container { padding: 20px; border: 1px solid #eee; border-radius: 8px; max-width: 600px; }
            h2 { color: #A47E3B; border-bottom: 2px solid #DFBA73; padding-bottom: 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; font-size: 16px; background-color: #f9f9f9; padding: 10px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Business Consultation Inquiry</h2>
            <div class="field">
              <div class="label">Client Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Client Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Client Phone Number:</div>
              <div class="value">${phone || "Not Provided"}</div>
            </div>
            <div class="field">
              <div class="label">Selected Service / Interest:</div>
              <div class="value">${service || "Not Specified"}</div>
            </div>
            <div class="field">
              <div class="label">Estimated Budget Tier:</div>
              <div class="value">${budget || "Not Specified"}</div>
            </div>
            <div class="field">
              <div class="label">Project Details / Message:</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // 4. Send client auto-reply thank you email
    const clientMailOptions = {
      from: '"Sohail Shaikh | AuraBix" <hello@aurabix.com>',
      to: email,
      subject: "AuraBix | Strategic Consultation Inquiry Received 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #05040a; color: #f3f4f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #0b0914; border: 1px solid rgba(223, 186, 115, 0.2); border-radius: 20px; overflow: hidden; margin-top: 40px; margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
            .header { background-color: #05040a; padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(223, 186, 115, 0.1); }
            .logo { height: 38px; width: auto; display: block; margin: 0 auto; }
            .content { padding: 40px 30px; line-height: 1.7; font-size: 16px; color: #d1d5db; }
            .highlight { color: #DFBA73; font-weight: 600; }
            .button-container { text-align: center; margin: 35px 0 10px 0; }
            .btn { background: linear-gradient(135deg, #DFBA73 0%, #B45309 100%); color: #05040a !important; font-weight: bold; text-decoration: none; padding: 15px 35px; border-radius: 50px; display: inline-block; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; box-shadow: 0 10px 20px rgba(223, 186, 115, 0.15); }
            .footer { background-color: #05040a; padding: 30px; text-align: center; border-top: 1px solid rgba(223, 186, 115, 0.08); font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.12em; }
            a { color: #DFBA73; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://aurabix.com/aurabix-logo.png" alt="AuraBix Logo" class="logo" />
            </div>
            <div class="content">
              <p>Hello <span class="highlight">${name}</span>,</p>
              <p>Thank you for initiating a strategic consultation request with <strong>AuraBix</strong>.</p>
              <p>We have successfully received your inquiry for <span class="highlight">${service || "our scaling services"}</span>. Our team is currently reviewing your project details, market positioning, and objectives.</p>
              <p>You can expect a direct response or call scheduling invitation from us within <span class="highlight">24 hours</span>. We will reach you soon to discuss your scaling path.</p>
              <p>If you have any additional brief, audit sheets, or design references you'd like to share in the meantime, feel free to reply directly to this email at <a href="mailto:hello@aurabix.com">hello@aurabix.com</a>.</p>
              
              <div class="button-container">
                <a href="https://aurabix.com" class="btn">Explore Our Architecture</a>
              </div>
              
              <br />
              <p style="margin-bottom: 0;">To your exponential growth,</p>
              <p style="margin-top: 5px; font-weight: bold; color: #f3f4f6;">Sohail Shaikh<br><span style="font-weight: normal; font-size: 13px; color: #dfba73; text-transform: uppercase; letter-spacing: 0.1em;">Founder & CEO, AuraBix</span></p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} AuraBix &bull; Elite Digital Infrastructure &bull; Scaling Globally
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Send emails via SMTP
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(clientMailOptions)

    return Response.json({
      success: true,
      message: "Consultation request submitted successfully. Check your email inbox shortly!"
    })

  } catch (error) {
    console.error("Error in contact route:", error)
    return Response.json(
      { error: "Internal server error. Failed to send message: " + error.message },
      { status: 500 }
    )
  }
}
