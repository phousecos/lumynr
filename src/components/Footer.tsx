import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

// Bluesky icon component
function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.844 7.5c-.094 2.063-1.5 5.25-4.875 5.25-1.031 0-1.969-.281-2.781-.844.094.031.281.031.375.031 1.031 0 1.969-.375 2.719-.938-.938 0-1.781-.656-2.063-1.5.375.094.656.094.938 0-1.031-.188-1.781-1.125-1.781-2.156v-.094c.281.188.656.281 1.031.281-.563-.375-.938-1.031-.938-1.781 0-.375.094-.75.281-1.031 1.125 1.406 2.813 2.25 4.688 2.344-.094-.188-.094-.375-.094-.563 0-1.219 1.031-2.25 2.25-2.25.656 0 1.219.281 1.594.75.469-.094.938-.281 1.406-.469-.188.469-.469.938-.938 1.219.469-.094.844-.188 1.219-.375-.281.469-.656.844-1.031 1.125z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Membership', href: '/membership' },
    { name: 'Referral Program', href: '/referral-terms' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/lumynr',
      icon: Linkedin,
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/lumynr.com',
      icon: BlueskyIcon,
    },
  ]

  return (
    <footer className="bg-navy-950 relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/images/logo-horizontal.png"
                alt="Lumynr"
                width={500}
                height={125}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 mb-5 max-w-sm leading-relaxed">
              Where Black Women in IT Rise Together. A private community for learning, connection, and growth.
            </p>
            <a
              href="mailto:members@lumynr.com"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
            >
              members@lumynr.com
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Links Column */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-navy-800/50 border border-navy-700/50 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-navy-800 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800/50">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Lumynr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
