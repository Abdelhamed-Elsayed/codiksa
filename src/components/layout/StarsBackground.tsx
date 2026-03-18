'use client'

import { useEffect, useRef } from 'react'
import { useThemeStore } from '@/store'

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isDark } = useThemeStore()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.scale(dpr, dpr)

    const W = window.innerWidth
    const H = window.innerHeight

    const cols = 15
    const rows = 10
    const cellW = W / cols
    const cellH = H / rows

    // ألوان حسب الـ mode
    const starColors = isDark
      ? ['rgba(255, 255, 255,', 'rgba(96, 165, 250,', 'rgba(129, 140, 248,', 'rgba(196, 181, 253,']
      : ['rgba(29, 78, 216,', 'rgba(37, 99, 235,', 'rgba(59, 130, 246,', 'rgba(67, 56, 202,']

    const lineColor = isDark
      ? 'rgba(96, 165, 250,'
      : 'rgba(29, 78, 216,'

    const pentagonColor = isDark
      ? 'rgba(129, 140, 248,'
      : 'rgba(37, 99, 235,'

    const stars: {
      x: number
      y: number
      size: number
      opacity: number
      duration: number
      delay: number
      color: string
    }[] = []

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const offsetX = (Math.random() - 0.5) * cellW * 0.8
        const offsetY = (Math.random() - 0.5) * cellH * 0.8
        stars.push({
          x: cellW * c + cellW / 2 + offsetX,
          y: cellH * r + cellH / 2 + offsetY,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.3,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 4,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        })
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            const opacity = (1 - dist / 180) * (isDark ? 0.15 : 0.2)
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `${lineColor} ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const drawPentagon = (
      x: number,
      y: number,
      radius: number,
      opacity: number,
      rings: number
    ) => {
      for (let r = 1; r <= rings; r++) {
        const currentRadius = (radius / rings) * r
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
          const px = x + currentRadius * Math.cos(angle)
          const py = y + currentRadius * Math.sin(angle)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.strokeStyle = `${pentagonColor} ${opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        if (r === rings) {
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
            const px = x + currentRadius * Math.cos(angle)
            const py = y + currentRadius * Math.sin(angle)
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(px, py)
            ctx.strokeStyle = `${pentagonColor} ${opacity * 0.5})`
            ctx.lineWidth = 0.3
            ctx.stroke()
          }
        }
      }
    }

    const drawStars = () => {
      stars.forEach((star) => {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        )
        gradient.addColorStop(0, `${star.color} ${star.opacity})`)
        gradient.addColorStop(1, `${star.color} 0)`)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color} ${star.opacity})`
        ctx.fill()
      })
    }

    const pentagons = [
      { x: W * 0.15, y: H * 0.2, r: 100 },
      { x: W * 0.8, y: H * 0.15, r: 130 },
      { x: W * 0.5, y: H * 0.6, r: 110 },
      { x: W * 0.1, y: H * 0.75, r: 90 },
      { x: W * 0.85, y: H * 0.7, r: 120 },
    ]

    let animationFrame: number

    const animate = (time: number) => {
      ctx.clearRect(0, 0, W, H)

      stars.forEach((star) => {
        const phase = ((time / 1000 + star.delay) % star.duration) / star.duration
        star.opacity = 0.3 + Math.sin(phase * Math.PI * 2) * 0.4
      })

      drawConnections()
      pentagons.forEach((p) => drawPentagon(p.x, p.y, p.r, isDark ? 0.12 : 0.18, 4))
      drawStars()

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}