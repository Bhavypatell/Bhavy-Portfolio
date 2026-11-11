import { useState } from 'react'
import { Rocket, Mic, Users, GraduationCap } from 'lucide-react'
import { Section, Reveal, Modal } from './ui'
import { achievements } from '../data/content'

const icons = [Rocket, Mic, Users, GraduationCap]
export default function Achievements() {
  const [sel, setSel] = useState<number | null>(null)
  const a = sel === null ? null : achievements[sel]
  return (
    <Section id="achievements" eyebrow="achievements" title="Beyond writing code.">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((x, i) => { const I = icons[i]; return (
          <Reveal key={x.title} delay={i * 0.07}>
            <button onClick={() => setSel(i)} className="card h-full w-full p-6 text-left">
              <I className="text-amber" size={26} />
              <h3 className="mt-4 text-xl font-semibold">{x.title}</h3>
              <p className="mt-2 text-sm text-mute">{x.items[0]}</p>
            </button>
          </Reveal>) })}
      </div>
      <Modal open={!!a} onClose={() => setSel(null)}>
        {a && (<>
          <h3 className="text-2xl font-bold">{a.title}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">{a.items.map(t => <li key={t}>{t}</li>)}</ul>
          <a href={`#${a.go}`} onClick={() => setSel(null)} className="btn btn-g mt-6">Go to section</a>
        </>)}
      </Modal>
    </Section>
  )
}
