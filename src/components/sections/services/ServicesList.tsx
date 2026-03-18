'use client'

import type { Service } from '@/types'
import { Globe, Smartphone, Palette, Cloud, Brain, CheckCircle } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  globe: Globe, smartphone: Smartphone, palette: Palette, cloud: Cloud, brain: Brain,
}

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Globe
          const isEven = index % 2 === 0

          const ServiceInfo = (
            <div
              className="p-8 rounded-2xl border flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--brand-gradient)' }}
              >
                <Icon size={24} color="white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
            </div>
          )

          const WhatWeOffer = (
            <div
              className="p-8 rounded-2xl border flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{ backgroundColor: 'transparent', borderColor: 'var(--border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                What we offer:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )

          return (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {isEven ? (
                <>
                  {ServiceInfo}
                  {WhatWeOffer}
                </>
              ) : (
                <>
                  {WhatWeOffer}
                  {ServiceInfo}
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}