import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
    host: process.env.EMAIL_HOST!,
    port: Number(process.env.EMAIL_PORT!),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_ID!,
      pass: process.env.EMAIL_PASSWORD!,
    },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method
  switch (method) {
    case 'POST': {
      const { title, body } = req.body
      try {
        await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL_EQS,
          subject: title,
          text: body,
        })
        res.status(200).end()
      } catch (error) {
        res.status(500).end()
      }
      res.status(500).end()
      break
    }
    default: {
      res.status(404).end()
    }
  }
}
