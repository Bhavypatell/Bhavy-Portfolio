import { useState, ReactNode, useId } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowRight, Maximize2 } from 'lucide-react'
import { Section, Reveal, Modal, Lightbox, Photo } from './ui'
import { projects } from '../data/content'

type P = (typeof projects)[number]
const F = 'IBM Plex Mono, monospace'

const Panel = ({ children, label }: { children: ReactNode; label: string }) => {
  const pid = 'grid' + useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 480 270" className="block h-auto w-full bg-navy" role="img" aria-label={label}>
      <defs><pattern id={pid} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#376A9B" strokeOpacity=".25" /></pattern></defs>
      <rect width="480" height="270" fill={`url(#${pid})`} />{children}
      <text x="12" y="260" fontSize="9" fill="#9DB6D1" fontFamily={F}>ILLUSTRATIVE PREVIEW · SAMPLE DATA</text>
    </svg>
  )
}

function Network() {
  const n: [number, number, string][] = [[60, 130, 'V'], [150, 70, 'M'], [150, 190, 'M'], [250, 40, 'M'], [260, 130, 'M'], [250, 220, 'M'], [370, 80, 'A'], [370, 180, 'C'], [430, 130, 'C']]
  const e = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8]]
  return <Panel label="Sample transaction network graph">
    {e.map(([a, b], i) => <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} stroke="#376A9B" strokeWidth="1.5" className="flow" />)}
    {n.map(([x, y, t], i) => <g key={i}><circle cx={x} cy={y} r={t === 'V' ? 11 : 8} fill={t === 'V' ? '#FAF9F5' : t === 'M' ? '#376A9B' : '#172B45'} stroke={t === 'C' || t === 'A' ? '#D87839' : '#9DB6D1'} strokeWidth="2" />
      <text x={x} y={y + 22} fontSize="9" textAnchor="middle" fill="#9DB6D1" fontFamily={F}>{t === 'V' ? 'victim' : t === 'M' ? 'account' : t === 'A' ? 'cash-out' : 'flagged'}</text></g>)}
  </Panel>
}
function Dash() {
  const b = [40, 70, 55, 105, 85, 130, 95]
  return <Panel label="Sample fraud investigation dashboard">
    {['Flagged accounts', 'Open cases', 'Trails traced'].map((t, i) => <g key={t}><rect x={20 + i * 150} y="22" width="140" height="52" fill="#0F1E32" stroke={i === 0 ? '#D87839' : '#376A9B'} /><text x={30 + i * 150} y="42" fontSize="10" fill="#9DB6D1" fontFamily={F}>{t}</text><rect x={30 + i * 150} y="52" width={[70, 44, 90][i]} height="6" fill={i === 0 ? '#D87839' : '#376A9B'} /></g>)}
    <rect x="20" y="90" width="290" height="150" fill="#0F1E32" stroke="#376A9B" />
    {b.map((h, i) => <rect key={i} x={36 + i * 38} y={225 - h} width="24" height={h} fill={i === 5 ? '#D87839' : '#376A9B'} />)}
    <rect x="325" y="90" width="135" height="150" fill="#0F1E32" stroke="#376A9B" />
    {[0, 1, 2, 3, 4].map(i => <g key={i}><circle cx="341" cy={115 + i * 26} r="4" fill={i === 1 ? '#D87839' : '#9DB6D1'} /><rect x="355" y={111 + i * 26} width={90 - i * 8} height="7" fill="#376A9B" opacity=".7" /></g>)}
  </Panel>
}
function Trail() {
  const xs = [50, 170, 290, 410]
  return <Panel label="Sample money trail across four hops">
    {xs.slice(1).map((x, i) => <g key={x}><line x1={xs[i] + 20} y1="130" x2={x - 20} y2="130" stroke="#D87839" strokeWidth="2" className="flow" /><text x={(xs[i] + x) / 2} y="118" fontSize="9" textAnchor="middle" fill="#9DB6D1" fontFamily={F}>hop {i + 1}</text></g>)}
    {xs.map((x, i) => <g key={x}><rect x={x - 20} y="110" width="40" height="40" fill="#0F1E32" stroke={i === 3 ? '#D87839' : '#9DB6D1'} strokeWidth="2" /><text x={x} y="175" fontSize="9" textAnchor="middle" fill="#9DB6D1" fontFamily={F}>{['source', 'account A', 'account B', 'cash-out'][i]}</text></g>)}
  </Panel>
}
const kal = [['Transaction Network', <Network key="n" />], ['Investigation Dashboard', <Dash key="d" />], ['Money Trail Tracking', <Trail key="t" />]] as const

const Flow = ({ steps }: { steps: string[] }) => (
  <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
    {steps.map((s, i) => (
      <motion.li key={s} className="border border-navy bg-surface px-3 py-2.5 text-sm" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
        <span className="lbl mr-2 text-sig">{`N${i + 1}`}</span>{s}
      </motion.li>
    ))}
  </ol>
)

function ProjectCard({ p, onOpen }: { p: P; onOpen: () => void }) {
  return (
    <article className="flex h-full flex-col border border-line bg-surface transition-colors hover:border-navy">
      <div className="border-b border-line">
        {p.id === 'kalnetra' ? <Network /> : <Photo src={p.photos[0]} label={`${p.title} screenshot 1`} className="aspect-video w-full" />}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="lbl text-mute">{p.code}</span>
          <span className="chip text-sig">{p.status}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-navy">{p.title}</h3>
        <p className="text-sm text-blue">{p.category}</p>
        <p className="text-sm leading-relaxed text-ink/80">{p.blurb}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2 text-navy">
          {p.tech.slice(0, 4).map(t => <span key={t} className="chip">{t}</span>)}
          {p.tech.length > 4 && <span className="chip">{`+${p.tech.length - 4}`}</span>}
        </div>
        <button onClick={onOpen} className="btn btn-g mt-2 self-start" aria-label={`Open case study: ${p.title}`}>
          Open case study <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}

function ProjectDetail({ p, onZoom }: { p: P; onZoom: (n: number) => void }) {
  const [tab, setTab] = useState(0)
  const isKal = p.id === 'kalnetra'
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <span className="lbl text-mute">{p.code}</span>
        <span className="chip text-sig">{p.status}</span>
      </div>
      <h3 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{p.title}</h3>
      <p className="mt-1 text-blue">{p.category}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <dl className="space-y-4">
            {[['PROBLEM', p.problem], ['OBJECTIVE', p.objective], ['SOLUTION', p.solution]].map(([k, v]) => (
              <div key={k}><dt className="lbl text-mute">{k}</dt><dd className="mt-1">{v}</dd></div>
            ))}
          </dl>
          <p className="border-l-2 border-sig pl-3 text-sm leading-relaxed text-ink/80">{p.story}</p>
        </div>

        <div>
          {isKal ? (<>
            <div role="tablist" aria-label="Preview views" className="flex flex-wrap gap-x-4 border-b border-line">
              {kal.map(([label], i) => (
                <button key={label} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
                  className={`-mb-px border-b-2 py-2 text-sm ${tab === i ? 'border-sig text-navy' : 'border-transparent text-mute hover:text-navy'}`}>{label}</button>
              ))}
            </div>
            <div className="mt-3 border border-navy">{kal[tab][1]}</div>
          </>) : (<>
            <p className="lbl mb-3 text-mute">SCREENSHOTS · SELECT TO ENLARGE</p>
            <div className="grid grid-cols-2 gap-3">
              {p.photos.map((s, i) => (
                <button key={s} onClick={() => onZoom(i)} aria-label={`Enlarge screenshot ${i + 1}`}
                  className={`group relative block border border-line bg-bg p-1 ${i === 0 ? 'col-span-2' : ''}`}>
                  <Photo src={s} label={`${p.title} screenshot ${i + 1}`} className="aspect-video w-full" />
                  <Maximize2 size={16} className="absolute right-2 top-2 bg-navy p-1 text-surface" />
                </button>
              ))}
            </div>
          </>)}
        </div>
      </div>

      <div className="mt-10">
        <p className="lbl mb-3 text-mute">SYSTEM_FLOW</p>
        <Flow steps={p.flow} />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="lbl mb-2 text-mute">KEY_FEATURES</p>
          <ul>{p.features.map(f => <li key={f} className="border-t border-line py-2 text-sm">{f}</li>)}</ul>
        </div>
        <div>
          <p className="lbl mb-2 text-mute">TECH_STACK</p>
          <div className="flex flex-wrap gap-1.5 text-navy">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-p mt-6"><Github size={18} /> View on GitHub</a>}
        </div>
      </div>
    </>
  )
}

export default function Projects() {
  const [sel, setSel] = useState<P | null>(null)
  const [zoom, setZoom] = useState<number | null>(null)
  return (
    <Section id="projects" code="PROJECT_ARCHIVE" title="Engineering case studies">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06} className="h-full">
            <ProjectCard p={p} onOpen={() => setSel(p)} />
          </Reveal>
        ))}
      </div>
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && <ProjectDetail p={sel} onZoom={setZoom} />}
      </Modal>
      <Lightbox images={sel?.photos ?? []} index={zoom} onIndex={setZoom} alt={sel?.title ?? 'Project screenshot'} />
    </Section>
  )
}
