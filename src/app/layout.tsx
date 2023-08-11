import Layout from '@/component/templates/Layout'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
}: {
}) {
  return (
    <html lang="ja">
      <body>
        <Layout />
      </body>
    </html>
  )
}
