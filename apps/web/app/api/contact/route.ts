import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      cc: [process.env.CTO_CC!],
      subject,
      replyTo: email,
      text: message.text,
      html: message.html
    });

    return NextResponse.json(
      { message: 'Message sent successfully', info },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message', error: (error as Error).message },
      { status: 500 }
    );
  }
}
