import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST!,
    port: Number(process.env.EMAIL_PORT!),
    secure: false,
    auth: {
      user: process.env.EMAIL_ID!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Spring flower sales💐 Don't miss out!",
  }

  // ensure name and email are included
  if (!name || !email) {
    return new Response(
      JSON.stringify({ message: 'Please submit your name and email' }),
      { status: 400 }
    )
  }

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ message: 'Error: Could not send email' }),
        { status: 400 }
      )
    }

    console.log('Email sent: ' + info.response)
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    )
  })
}