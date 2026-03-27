import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const RECIPIENTS = [
  "developer.msaqib@gmail.com",
  "contact@developermsaqib.com",
];

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.EMAIL_HOST;
  const smtpPort = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587;
  const smtpUser = process.env.EMAIL_USER;
  const smtpPass = process.env.EMAIL_PASS;
  const smtpFrom = process.env.EMAIL_FROM || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        error:
          "SMTP is not configured. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASS.",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom ? `"Website Contact" <${smtpFrom}>` : smtpUser,
      to: RECIPIENTS.join(", "),
      replyTo: email,
      subject: subject
        ? `New message from ${name}: ${subject}`
        : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "(none)"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }
}
