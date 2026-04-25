import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lumynr.com'),
  title: 'Lumynr | The Career Community for Black Women in IT',
  description: 'Join the invitation-only community where Black women in IT learn, connect, and rise together. Learning paths, webinars, mentoring, and more—30-day free trial.',
  keywords: ['Black women in tech', 'IT career community', 'women in technology', 'career development', 'professional community'],
  authors: [{ name: 'Lumynr' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-navy-900 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-navy-900"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
