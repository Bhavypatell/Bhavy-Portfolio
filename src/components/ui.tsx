import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay }}>{children}</motion.div>
)

// PCB-style trace divider: draws itself once when scrolled into view.
export const Trace = ({ dark = false }: { dark?: boolean }) => (
  <svg viewBox="0 0 1200 24" preserveAspectRatio="none" className="h-6 w-full" aria-hidden="true">
    <motion.path d="M0 12H220L236 4H520L536 20H760L776 12H1200" fill="none" stroke={dark ? '#376A9B' : '#D6D7D1'} strokeWidth="1.5"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} />
    {[236, 536, 776].map(x => <circle key={x} cx={x} cy={x === 536 ? 20 : x === 236 ? 4 : 12} r="3" fill="#D87839" />)}
  </svg>
)

export const Section = ({ id, code, title, dark = false, children }: { id: string; code: string; title: string; dark?: boolean; children: ReactNode }) => (
  <section id={id} className={`relative scroll-mt-14 ${dark ? 'dark bg-navy text-surface' : ''}`}>
    <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="grid gap-4 md:grid-cols-[200px_1fr]">
        <p className={`lbl pt-3 ${dark ? 'text-[#9DB6D1]' : 'text-mute'}`}>{code}</p>
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </div>
  </section>
)

// Open dialogs form a stack: only the topmost handles Escape, and the page scroll
// lock is released only when the last dialog closes.
const modalStack: symbol[] = []

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    if (!open) return
    const id = Symbol('modal')
    modalStack.push(id)
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalStack[modalStack.length - 1] === id) closeRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      modalStack.splice(modalStack.indexOf(id), 1)
      if (modalStack.length === 0) document.body.style.overflow = ''
    }
  }, [open])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/80 sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => closeRef.current()}>
          <motion.div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto border border-line bg-surface p-6 text-ink sm:p-8"
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
            <button aria-label="Close" autoFocus onClick={() => closeRef.current()} className="absolute right-2 top-2 p-3 text-mute hover:text-sig"><X size={20} /></button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Shows the image if the file exists; otherwise a labelled upload slot showing the expected path.
export function Photo({ src, label, className = '', position = 'center', fit = 'cover' }: {
  src: string; label: string; className?: string; position?: string; fit?: 'cover' | 'contain'
}) {
  const [bad, setBad] = useState(!src)
  useEffect(() => setBad(!src), [src])
  return bad
    ? <div className={`lbl grid place-items-center border border-dashed border-mute/50 bg-bg p-2 text-center text-mute ${className}`}>IMAGE_SLOT<br />{src || label}</div>
    : <img src={src} alt={label} loading="lazy" onError={() => setBad(true)} style={{ objectPosition: position }}
        className={`${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`} />
}

// Full-size image viewer with previous/next and arrow-key support. Render it beside, not inside, another Modal.
export function Lightbox({ images, index, onIndex, alt }: { images: string[]; index: number | null; onIndex: (n: number | null) => void; alt: string }) {
  const n = images.length
  useEffect(() => {
    if (index === null || n === 0) return
    const k = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onIndex((index + 1) % n)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + n) % n)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [index, n, onIndex])
  return (
    <Modal open={index !== null && n > 0} onClose={() => onIndex(null)}>
      {index !== null && n > 0 && (
        <figure>
          <Photo src={images[index]} label={`${alt}, image ${index + 1} of ${n}`} fit="contain" className="max-h-[70vh] w-full bg-navy" />
          <figcaption className="mt-4 flex items-center justify-between gap-3">
            <button className="btn btn-g" onClick={() => onIndex((index - 1 + n) % n)}>Previous</button>
            <span className="lbl text-mute">{`${index + 1} / ${n}`}</span>
            <button className="btn btn-g" onClick={() => onIndex((index + 1) % n)}>Next</button>
          </figcaption>
        </figure>
      )}
    </Modal>
  )
}
