import { Section, Reveal } from './ui'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" code="TECH_STACK" title="Skills matrix" dark>
      <div className="border-t border-surface/30">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.04} className="grid gap-3 border-b border-surface/15 py-5 md:grid-cols-[260px_1fr]">
            <h3 className="font-medium">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">{s.items.map(t => <li key={t} className="lbl border border-surface/30 px-2.5 py-1 transition-colors hover:border-sig hover:text-sig">{t}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
