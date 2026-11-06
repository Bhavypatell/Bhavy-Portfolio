import { useState } from 'react'
import { Github, ArrowUpRight } from 'lucide-react'
import { Section, Reveal, Modal, Photo } from './ui'
import { projects } from '../data/content'

type P = (typeof projects)[number]

function KalVisual() {
  const xs = [40, 120, 200, 280, 360], ys = [80, 40, 110, 50, 90], labels = ['Victim', 'Mule', 'Mule', 'Mule', 'ATM / Crypto']
  return (
    <svg viewBox="0 0 400 160" className="w-full" role="img" aria-label="Sample transaction network: victim to mule accounts to ATM or crypto">
      {xs.slice(1).map((x, i) => <line key={i} x1={xs[i]} y1={ys[i]} x2={x} y2={ys[i + 1]} stroke="#FF8A24" strokeWidth="1.5" className="flow" />)}
      {xs.map((x, i) => (<g key={i}>
        <circle cx={x} cy={ys[i]} r="14" fill="#FF8A24" opacity=".12" className="node" />
        <circle cx={x} cy={ys[i]} r="6" fill={i === 0 ? '#F4F4F4' : '#FF8A24'} />
        <text x={x} y={ys[i] + 28} textAnchor="middle" fontSize="10" fill="#9BA4AE" fontFamily="JetBrains Mono, monospace">{labels[i]}</text>
      </g>))}
    </svg>
  )
}
function ClimVisual() {
  const realms = ['Amazonia', 'The Abyss', 'Aether', 'Metropolis']
  return (
    <svg viewBox="0 0 400 160" className="w-full" role="img" aria-label="Globe with four realm indicators">
      <circle cx="200" cy="80" r="46" fill="#101419" stroke="#FF8A24" strokeWidth="1.5" />
      <ellipse cx="200" cy="80" rx="20" ry="46" fill="none" stroke="#FF8A24" opacity=".4" />
      <ellipse cx="200" cy="80" rx="46" ry="16" fill="none" stroke="#FF8A24" opacity=".4" />
      <g className="orbit">
        <circle cx="200" cy="80" r="68" fill="none" stroke="#FFB15C" strokeDasharray="2 6" opacity=".5" />
        {[0, 90, 180, 270].map(a => <circle key={a} cx={200 + 68 * Math.cos(a * Math.PI / 180)} cy={80 + 68 * Math.sin(a * Math.PI / 180)} r="5" fill="#FF8A24" />)}
      </g>
      {realms.map((r, i) => <text key={r} x={i < 2 ? 20 : 380} y={50 + (i % 2) * 60} textAnchor={i < 2 ? 'start' : 'end'} fontSize="10" fill="#9BA4AE" fontFamily="JetBrains Mono, monospace">{`◉ ${r}`}</text>)}
    </svg>
  )
}
const Visual = ({ p }: { p: P }) => (p.visual === 'kal' ? <KalVisual /> : <ClimVisual />)

export default function Projects() {
  const [sel, setSel] = useState<P | null>(null)
  return (
    <Section id="projects" eyebrow="projects" title="Featured projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1}>
            <button onClick={() => setSel(p)} className="card block h-full w-full p-6 text-left" aria-label={`Open ${p.title} case study`}>
              <div className="rounded-lg border border-line bg-bg p-3"><Visual p={p} /></div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span className="tag shrink-0 border-amber/50 text-amber">{p.status}</span>
              </div>
              <p className="mt-1 text-sm text-amber2">{p.category}</p>
              <p className="mt-3 text-mute">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}<span className="tag">+{p.tech.length - 5}</span></div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-amber">Read case study <ArrowUpRight size={16} /></span>
            </button>
          </Reveal>
        ))}
      </div>
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (<>
          <span className="tag border-amber/50 text-amber">{sel.status}</span>
          <h3 className="mt-3 text-3xl font-bold">{sel.title}</h3>
          <p className="text-amber2">{sel.category}</p>
          <div className="my-5 rounded-lg border border-line bg-bg p-3"><Visual p={sel} /></div>
          <p className="text-mute">{sel.story}</p>
          {sel.photos.length > 0 && <div className="mt-5 grid grid-cols-3 gap-3">{sel.photos.map((s, i) => <Photo key={s} src={s} label={`${sel.title} photo ${i + 1}`} className="aspect-[4/3] w-full" />)}</div>}
          <h4 className="mt-6 font-mono text-sm text-amber">Features</h4>
          <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">{sel.features.map(f => <li key={f} className="rounded border border-line px-3 py-2">{f}</li>)}</ul>
          <h4 className="mt-6 font-mono text-sm text-amber">Technology</h4>
          <div className="mt-2 flex flex-wrap gap-2">{sel.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
          {sel.link && <a href={sel.link} target="_blank" rel="noreferrer" className="btn btn-p mt-6"><Github size={18} /> View on GitHub</a>}
        </>)}
      </Modal>
    </Section>
  )
}
