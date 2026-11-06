import { Section, Reveal } from './ui'
import { aboutHighlights } from '../data/content'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Software, AI and practical problem-solving">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-lg text-mute">
          <p>I come from a Computer Engineering background, and I like working where software development, AI and practical problem-solving meet. I am interested in AI/ML and web development, and I learn by building.</p>
          <p>I have built technical projects such as KalNetra and Climatrix, taken part in workshops and innovation events, and helped coordinate and anchor a career-guidance seminar. Speaking in front of an audience has made me a better communicator and a better teammate.</p>
          <p>I don't just learn technologies: I experiment, build, present ideas, and keep improving.</p>
        </Reveal>
        <Reveal delay={0.1} className="card p-6">
          <h3 className="font-mono text-sm text-amber">Highlights</h3>
          <ul className="mt-4 space-y-3">{aboutHighlights.map(h => <li key={h} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-amber" />{h}</li>)}</ul>
        </Reveal>
      </div>
    </Section>
  )
}
