import { Section, Reveal } from './ui'
import { skills } from '../data/content'
import { Code2, Terminal, Brain, Cloud, Wrench, BarChart3 } from 'lucide-react'

const icons = [Code2, Terminal, Brain, Cloud, Wrench, BarChart3]
export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Skills & technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => { const I = icons[i]; return (
          <Reveal key={s.group} delay={i * 0.06}>
            <div className="card h-full p-6">
              <I className="text-amber" size={24} />
              <h3 className="mt-4 font-semibold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{s.items.map(t => <span key={t} className="tag transition-colors hover:border-amber hover:text-amber">{t}</span>)}</div>
            </div>
          </Reveal>) })}
      </div>
    </Section>
  )
}
