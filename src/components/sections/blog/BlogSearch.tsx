'use client'

import { Search } from 'lucide-react'

interface BlogSearchProps {
  value: string
  onChange: (value: string) => void
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative max-w-md mx-auto w-full">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2"
        style={{ color: 'var(--text-muted)' }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles..."
        className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none"
        style={{
          backgroundColor: 'transparent',
          borderColor: 'var(--border)',
          color: 'var(--text-primary)',
        }}
      />
    </div>
  )
}