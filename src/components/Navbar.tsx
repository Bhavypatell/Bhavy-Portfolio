import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'

export default function Navbar() {
  const [active, setActive] = useState('home'), [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll(), sx = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    nav.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <motion.div style={{ scaleX: sx }} className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-sig" />
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="lbl text-sm font-medium text-navy">BHAVY_PATEL</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className={`relative px-3 py-2 text-sm transition-colors hover:text-sig ${active === id ? 'text-navy' : 'text-mute'}`}>
              {label}{active === id && <motion.span layoutId="nav-line" className="absolute inset-x-3 -bottom-[9px] h-0.5 bg-sig" />}
            </a></li>
          ))}
        </ul>
        <button className="p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg px-5 py-2 lg:hidden">
          {nav.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 ${active === id ? 'text-sig' : 'text-mute'}`}>{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
