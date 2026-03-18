import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StarsBackground from '@/components/layout/StarsBackground'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Codiksa | We Build Scalable Software Solutions',
  description: 'From web & mobile apps to AI-powered solutions — we partner with ambitious teams to ship products that matter.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behaviour="smooth">
      <body className={spaceGrotesk.variable} style={{ position: 'relative' }}>
        <StarsBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}