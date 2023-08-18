import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST!,
    port: Number(process.env.EMAIL_PORT!),
    secure: false,
    auth: {
      user: process.env.EMAIL_ID!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });

  console.log(
    {
      host: process.env.EMAIL_HOST!,
      port: Number(process.env.EMAIL_PORT!),
      secure: false,
      auth: {
        user: process.env.EMAIL_ID!,
        pass: process.env.EMAIL_PASSWORD!,
      },
    }
  );


  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}