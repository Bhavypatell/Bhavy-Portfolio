import { ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
)

export const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) => (
  <section id={id} className="relative z-10 mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:py-24">
    <Reveal>
      <p className="font-mono text-xs tracking-widest text-amber">{'// ' + eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
    </Reveal>
    <div className="mt-10">{children}</div>
  </section>
)

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-card p-6 sm:rounded-2xl sm:p-8"
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}>
            <button aria-label="Close" onClick={onClose} className="absolute right-3 top-3 rounded-full p-3 text-mute hover:text-amber"><X size={20} /></button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Shows the image if the file exists; otherwise a labelled placeholder showing where to put it.
export function Photo({ src, label, className = '', position = 'center' }: { src: string; label: string; className?: string; position?: string }) {
  const [bad, setBad] = useState(!src)
  return bad
    ? <div className={`grid place-items-center rounded-lg border border-dashed border-line bg-bg2 p-2 text-center font-mono text-[10px] text-mute ${className}`}>Add photo<br />{src || label}</div>
    : <img src={src} alt={label} loading="lazy" onError={() => setBad(true)} style={{ objectPosition: position }} className={`rounded-lg object-cover ${className}`} />
}
