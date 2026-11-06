import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Reveal, Modal, Photo } from './ui'
import { activities } from '../data/content'

type A = (typeof activities)[number]
export default function Timeline() {
  const [sel, setSel] = useState<A | null>(null)
  return (
    <Section id="experience" eyebrow="experience" title="Experience & activities">
      <div className="relative pl-8">
        <motion.div className="absolute bottom-0 left-2 top-0 w-px origin-top bg-gradient-to-b from-amber to-transparent"
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        <div className="space-y-6">
          {activities.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08} className="relative">
              <span className="absolute -left-[30px] top-7 h-3 w-3 rounded-full border-2 border-amber bg-bg" />
              <button onClick={() => setSel(a)} className="card w-full p-6 text-left" aria-label={`Open details: ${a.title}`}>
                <h3 className="text-xl font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-amber2">{a.org}</p>
                <div className="mt-3 flex flex-wrap gap-2">{a.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (<>
          <h3 className="text-2xl font-bold">{sel.title}</h3>
          <p className="mt-1 text-amber2">{sel.org}</p>
          <p className="mt-4 text-mute">{sel.text}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">{sel.photos.map((s, i) => <Photo key={s} src={s} label={`${sel.title} ${i + 1}`} className="aspect-[4/3] w-full" />)}</div>
          <div className="mt-5 flex flex-wrap gap-2">{sel.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        </>)}
      </Modal>
    </Section>
  )
}
