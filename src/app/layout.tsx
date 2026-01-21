import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lumynr | The Career Community for Black Women in IT',
  description: 'Join the invitation-only community where Black women in IT learn, connect, and rise together. Curated learning paths, weekly webinars, book club, and sisterhood.',
  keywords: ['Black women in tech', 'IT career community', 'women in technology', 'career development', 'professional community'],
  authors: [{ name: 'Lumynr' }],
  openGraph: {
    title: 'Lumynr | The Career Community for Black Women in IT',
    description: 'Join the invitation-only community where Black women in IT learn, connect, and rise together.',
    url: 'https://lumynr.com',
    siteName: 'Lumynr',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumynr | The Career Community for Black Women in IT',
    description: 'Join the invitation-only community where Black women in IT learn, connect, and rise together.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
