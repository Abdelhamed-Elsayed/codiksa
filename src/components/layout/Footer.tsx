'use client'
import Link from 'next/link'
import { Code2, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
]

const servicesLinks = [
  { label: 'Web Development', href: '/services' },
  { label: 'Mobile Apps', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Cloud Solutions', href: '/services' },
]

const resourcesLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '' },
]

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/username', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/username', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/username', icon: Github },
  { label: 'Email', href: 'mailto:your@email.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'transparent' , borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl w-fit" style={{ color: 'var(--text-primary)' }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--brand-gradient)' }}>
                <Code2 size={18} color="white" />
              </span>
              <span>Codiksa</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We build scalable software solutions that help businesses grow and succeed in the digital age.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 hover:scale-110"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', backgroundColor: 'transparent'  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-primary)'
                    e.currentTarget.style.color = 'var(--brand-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>Company</h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>Services</h3>
            <ul className="flex flex-col gap-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--text-primary)' }}>Resources</h3>
            <ul className="flex flex-col gap-2">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
        >
          <p>© {new Date().getFullYear()} Codiksa. All rights reserved.</p>
          <p>Built with passion for innovation.</p>
        </div>
      </div>
    </footer>
  )
}
