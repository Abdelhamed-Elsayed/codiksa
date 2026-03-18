import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="flex flex-col items-center gap-6 max-w-md">
        <h1 className="text-8xl font-bold" style={{ color: 'var(--brand-primary)' }}>404</h1>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg font-medium text-white transition-opacity duration-200 hover:opacity-90"
          style={{ background: 'var(--brand-gradient)' }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
