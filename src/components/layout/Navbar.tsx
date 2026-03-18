
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import { useThemeStore, useUIStore } from '@/store'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { isDark, toggleTheme } = useThemeStore()
  const { isMenuOpen, isScrolled, setMenuOpen, setScrolled, toggleMenu } = useUIStore()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrolled])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
  }, [isDark])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, setMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b' : 'bg-transparent border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--navbar-bg-scrolled)' : 'transparent',
        borderColor: isScrolled ? 'var(--navbar-border)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl"
          style={{ color: 'var(--text-primary)' }}
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--brand-gradient)' }}
          >
            <Code2 size={18} color="white" />
          </span>
          <span>Codiksa</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive(link.href)
                    ? 'var(--brand-primary)'
                    : 'var(--text-secondary)',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-card)' }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            href="/contact"
            className="hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
            style={{ background: 'var(--brand-gradient)' }}
          >
            Get Started
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-card)' }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden menu-overlay"
          style={{
            backgroundColor: isDark ? '#05051a' : '#f8faff',
            borderTop: '1px solid var(--border)',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: isActive(link.href) ? 'var(--brand-primary)' : 'var(--text-primary)',
                    backgroundColor: isActive(link.href) ? 'var(--bg-card)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 500,
              color: 'white',
              background: 'var(--brand-gradient)',
              textDecoration: 'none',
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}