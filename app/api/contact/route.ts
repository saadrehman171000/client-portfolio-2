import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()
    const currentDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ayeshaamin@gmail.com",
      subject: `New Client Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #2d3748;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
                color: white;
                padding: 30px 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .header h2 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                letter-spacing: 0.5px;
              }
              .header p {
                margin: 10px 0 0;
                font-size: 16px;
                opacity: 0.9;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 25px;
              }
              .label {
                font-weight: 600;
                color: #4a5568;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .value {
                color: #2d3748;
                font-size: 16px;
                background-color: #f7fafc;
                padding: 12px 15px;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
              }
              .message-box {
                background-color: #f7fafc;
                padding: 20px;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
                margin-top: 8px;
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 30px;
                text-align: center;
                color: #718096;
                font-size: 14px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
              }
              .date {
                text-align: right;
                color: #718096;
                font-size: 14px;
                margin-bottom: 20px;
              }
              .logo {
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 10px;
                color: white;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">WF</div>
                <h2>New Client Inquiry</h2>
                <p>You have received a new message from your portfolio website</p>
              </div>
              <div class="content">
                <div class="date">${currentDate}</div>
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Contact Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Inquiry Topic</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message Details</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This notification was sent from your portfolio website's contact system</p>
                <p>© ${new Date().getFullYear()} Ayesha Amin Academic Services | Professional Academic Writing & Research</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
} 