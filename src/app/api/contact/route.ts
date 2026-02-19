import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;
const ipRequestMap = new Map<string, { count: number; firstRequest: number }>();

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined");
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Rate Limiting
    const currentData = ipRequestMap.get(ip) || { count: 0, firstRequest: now };
    if (now - currentData.firstRequest > RATE_LIMIT_WINDOW) {
      // Reset window
      currentData.count = 1;
      currentData.firstRequest = now;
    } else {
      currentData.count++;
    }
    ipRequestMap.set(ip, currentData);

    if (currentData.count > MAX_REQUESTS) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { fullName, companyEmail, targetCertification, message, website } = body;

    // Honeypot check
    if (website) {
      // Silent success for bots
      return NextResponse.json({ success: true, message: "Your request has been received." });
    }

    // Validation
    if (!fullName || !companyEmail || !targetCertification || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(companyEmail)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    // Email 1: Internal Notification
    await resend.emails.send({
      from: "ITIS-Secure Website <office@itis-secure.com>",
      to: "office@itis-secure.com",
      subject: `New Assessment Request — ${fullName} at ${companyEmail}`,
      html: `
        <div style="font-family: sans-serif; bg-color: #f5f5f5; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden;">
            <div style="background: #0A2463; padding: 20px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 24px;">ITIS-Secure</h1>
            </div>
            <div style="padding: 20px;">
              <h2 style="color: #0A2463; margin-top: 0;">New Lead Received</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Target Certification</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${targetCertification}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Submission Time (UTC)</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toISOString()}</td>
                </tr>
                 <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">IP Address</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${ip}</td>
                </tr>
              </table>
            </div>
            <div style="background: #f9f9f9; padding: 15px; text-align: center; color: #666; font-size: 12px;">
              This is an automated notification from your website contact form.
            </div>
          </div>
        </div>
      `,
    });

    // Email 2: Confirmation to User
    await resend.emails.send({
      from: "ITIS-Secure <office@itis-secure.com>",
      to: companyEmail,
      subject: `Your ITIS-Secure Assessment Request — We'll be in touch within 24 hours`,
      html: `
        <div style="font-family: sans-serif; bg-color: #f5f5f5; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden;">
             <div style="background: #0A2463; padding: 20px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 24px;">ITIS-Secure</h1>
            </div>
            <div style="padding: 30px;">
              <p style="color: #333; font-size: 16px;">Dear ${fullName},</p>
              <p style="color: #333; font-size: 16px; line-height: 1.5;">
                Thank you for contacting ITIS-Secure. We have received your request regarding <strong>${targetCertification}</strong>.
              </p>
              <p style="color: #333; font-size: 16px; line-height: 1.5;">
                One of our compliance experts will review your details and contact you within <strong>1 business day</strong> to discuss your specific requirements.
              </p>
              <div style="margin: 30px 0; padding: 20px; background: #f0f4f8; border-left: 4px solid #D4AF37; border-radius: 4px;">
                <p style="margin: 0; color: #0A2463; font-weight: bold;">Need immediate assistance?</p>
                <p style="margin: 5px 0 0 0; color: #333;">Call us directly at <a href="tel:+40741711770" style="color: #0A2463; text-decoration: none;">+40 741 711 770</a></p>
              </div>
              <p style="color: #333; font-size: 16px; margin-top: 30px;">
                Best regards,<br>
                <strong>The ITIS-Secure Team</strong>
              </p>
            </div>
            <div style="background: #0A2463; padding: 20px; text-align: center; color: rgba(255,255,255,0.6); font-size: 12px; line-height: 1.5;">
              <p style="margin: 0;">Information Security Consulting SRL | J32/68/2022 | VAT: RO45485372</p>
              <p style="margin: 5px 0 0 0;">office@itis-secure.com | www.itis-secure.com</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Your request has been received." });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
