import { Mic, Users, Lightbulb } from 'lucide-react'
import { Section, Reveal } from './ui'
import { beyond } from '../data/content'

const icons = [Mic, Users, Lightbulb]
export default function BeyondCode() {
  return (
    <Section id="beyond" eyebrow="beyond code" title="What I do beyond the editor">
      <div className="grid gap-5 md:grid-cols-3">
        {beyond.map((b, i) => { const I = icons[i]; return (
          <Reveal key={b.title} delay={i * 0.08}><div className="card h-full p-6"><I className="text-amber" size={28} /><h3 className="mt-4 text-xl font-semibold">{b.title}</h3><p className="mt-2 text-mute">{b.text}</p></div></Reveal>) })}
      </div>
    </Section>
  )
}
