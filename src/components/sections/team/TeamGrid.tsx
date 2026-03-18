'use client'

import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'
import type { TeamMember } from '@/types'

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="group rounded-xl border overflow-hidden flex flex-col transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image src={member.image} alt={member.name} fill sizes='(max-width: 768px) 100vw,50vw' loading='eager'
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--brand-primary)' }}>{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{member.description}</p>
              <div className="flex items-center gap-2 pt-1">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)'; e.currentTarget.style.borderColor = 'var(--brand-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <Linkedin size={14} />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)'; e.currentTarget.style.borderColor = 'var(--brand-primary)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <Github size={14} />
                    
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
