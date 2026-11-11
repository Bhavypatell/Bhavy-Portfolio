import { useEffect, useRef } from 'react'

export default function Background() {
  const cv = useRef<HTMLCanvasElement>(null), glow = useRef<HTMLDivElement>(null), ring = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(pointer: fine)').matches
    const c = cv.current!, ctx = c.getContext('2d')!
    let w = 0, h = 0, raf = 0
    const size = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    size(); addEventListener('resize', size)
    const ps = Array.from({ length: innerWidth < 640 ? 25 : 55 }, () => ({ x: Math.random() * w, y: Math.random() * h, v: 0.1 + Math.random() * 0.25, r: Math.random() * 1.4 + 0.4 }))
    const draw = () => {
      ctx.clearRect(0, 0, w, h); ctx.fillStyle = 'rgba(255,138,36,.5)'
      for (const p of ps) { p.y -= p.v; if (p.y < 0) { p.y = h; p.x = Math.random() * w } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill() }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    draw()
    const mv = (e: MouseEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 250}px,${e.clientY - 250}px)`
      if (ring.current) { ring.current.style.opacity = '.8'; ring.current.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)` }
    }
    if (fine && !reduce) addEventListener('mousemove', mv)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('mousemove', mv) }
  }, [])
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-grid" />
      <canvas ref={cv} className="absolute inset-0" />
      <div ref={glow} className="glow" />
      <div ref={ring} className="ring" />
    </div>
  )
}
