import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // your Gmail
    pass: process.env.EMAIL_PASS    // Gmail App Password
  }
});

// Send OTP Email
export const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `Admin Panel <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🔐 Your OTP Code",
      html: `
        <div style="background:#f6f8fb; padding:20px; font-family:Arial, sans-serif;">
          <div style="max-width:480px; margin:auto; background:#ffffff; border-radius:10px; padding:24px; border:1px solid #e5e7eb;">
            <h2 style="text-align:center; color:#4f46e5; margin-top:0;">OTP Verification</h2>
            <p>Hello 👋,</p>
            <p>Your One-Time Password (OTP) is:</p>

            <div style="text-align:center; margin:24px 0;">
              <span style="
                display:inline-block;
                font-size:28px;
                letter-spacing:6px;
                font-weight:bold;
                color:#111827;
                background:#eef2ff;
                padding:12px 20px;
                border-radius:8px;
              ">
                ${otp}
              </span>
            </div>

            <p>This OTP will expire in <b>3 minutes</b>.</p>
            <p style="color:#6b7280; font-size:12px;">
              If you didn’t request this, please ignore this email.
            </p>

            <hr style="margin:24px 0;" />
            <p style="font-size:12px; color:#6b7280; text-align:center;">
              © ${new Date().getFullYear()} Admin Panel
            </p>
          </div>
        </div>
      `
    });

    return { success: true, message: "OTP email sent successfully" };

  } catch (error) {
    console.error("❌ Email send error:", error.message);
    return { success: false, message: "Failed to send OTP email" };
  }
};
