import { Section, Reveal, Trace } from './ui'
import { interests, achievements } from '../data/content'

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-10"><Trace /></div>
      <Section id="about" code="ENGINEER_PROFILE" title="The engineer behind the code">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/85">
            <p>I'm a Computer Engineering student who likes working where software development, AI and practical problem-solving meet. I learn by building, and I like turning ideas into applications that work.</p>
            <p>I've built technical projects such as KalNetra and Climatrix, taken part in workshops and innovation events, and helped coordinate and anchor a career-guidance seminar. Speaking in front of an audience has made me a clearer communicator and a better teammate.</p>
            <p>I don't just learn technologies. I experiment, build, present ideas, and keep improving.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-line bg-surface p-6">
              <p className="lbl text-mute">TECH_INTERESTS</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4">{interests.map(i => <li key={i} className="border-t border-line py-2 text-sm">{i}</li>)}</ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-x-8 md:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <a href={`#${a.go}`} className="group block border-t border-ink/70 py-5">
                <h3 className="font-semibold group-hover:text-sig">{a.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-mute">{a.items.map(t => <li key={t}>{t}</li>)}</ul>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
