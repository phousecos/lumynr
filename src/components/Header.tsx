'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const MEMBER_LOGIN_URL = process.env.NEXT_PUBLIC_MEMBER_PLATFORM_LOGIN_URL || '#'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Membership', href: '/membership' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo-horizontal.png"
              alt="Lumynr"
              width={500}
              height={125}
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium group"
              >
                {item.name}
                <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <div className="w-px h-6 bg-navy-700 mx-4" />
            <a
              href={MEMBER_LOGIN_URL}
              className="btn-primary text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Member Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-navy-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-navy-800/50 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-navy-800/50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <a
                href={MEMBER_LOGIN_URL}
                className="btn-primary w-full text-sm justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Member Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
