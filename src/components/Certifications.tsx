import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowUpRight, ExternalLink, ShieldCheck, Brain, Cloud, Code2, Globe, Database, Users, Award, type LucideIcon } from 'lucide-react'
import { Section, Modal, Trace } from './ui'
import { certifications, certCategories, certUrl, type Cert } from '../data/certifications'

const PAGE = 8
const icons: Record<string, LucideIcon> = {
  'AI & Machine Learning': Brain, Cloud, Programming: Code2, Cybersecurity: ShieldCheck,
  'Web Development': Globe, 'Data & SQL': Database, 'Professional Skills': Users,
}
const iconFor = (c: string) => icons[c] ?? Award
const fmt = (iso: string) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

function CredentialCard({ c, id, onOpen }: { c: Cert; id: number; onOpen: () => void }) {
  const Icon = iconFor(c.category)
  return (
    <button onClick={onOpen} aria-label={`Open details: ${c.title}`}
      className="group relative flex h-full min-h-[176px] w-full flex-col border border-navy/25 bg-surface p-5 text-left transition-colors duration-200 hover:border-navy">
      <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-sig opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <span className="lbl flex items-center gap-2 text-mute"><Icon size={15} className="text-blue" aria-hidden="true" />{`CRED_${String(id + 1).padStart(3, '0')}`}</span>
        <span className="lbl truncate text-blue">{c.category}</span>
      </div>
      <h3 className="mt-4 line-clamp-3 text-lg font-semibold leading-snug text-navy">{c.title}</h3>
      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
        <p className="text-sm text-mute">{c.provider || 'Provider not specified'}</p>
        <ArrowUpRight size={18} className="shrink-0 text-navy transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sig" aria-hidden="true" />
      </div>
    </button>
  )
}

export default function Certifications() {
  const [cat, setCat] = useState('All'), [q, setQ] = useState(''), [all, setAll] = useState(false), [sel, setSel] = useState<Cert | null>(null)
  const indexed = useMemo(() => certifications.map((c, id) => ({ c, id })), [])
  const list = useMemo(() => {
    const term = q.trim().toLowerCase()
    return indexed.filter(({ c }) => (cat === 'All' || c.category === cat) && `${c.title} ${c.provider} ${c.category}`.toLowerCase().includes(term))
  }, [indexed, cat, q])
  const shown = all ? list : list.slice(0, PAGE)
  const url = sel ? certUrl(sel) : ''
  const details: [string, string][] = sel ? ([
    sel.issued && ['Issued', fmt(sel.issued)], sel.validUntil && ['Valid until (as stated)', fmt(sel.validUntil)], sel.platform && ['Delivered via', sel.platform],
  ].filter(Boolean) as [string, string][]) : []
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-10"><Trace /></div>
      <Section id="certifications" code="THE TECHNICAL ARCHIVE" title="Technical Credentials">
        <p className="-mt-6 mb-10 max-w-2xl text-lg text-ink/80 md:ml-[216px]">A growing record of learning, exploration, and technical development across software, AI, cloud, and data.</p>

        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" aria-hidden="true" />
          <input type="search" value={q} onChange={e => { setQ(e.target.value); setAll(false) }} placeholder="Search title, provider or category" aria-label="Search credentials"
            className="min-h-11 w-full border border-navy bg-surface py-3 pl-10 pr-3 outline-none focus:border-sig" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {certCategories.map(c => (
            <button key={c} onClick={() => { setCat(c); setAll(false) }} aria-pressed={cat === c}
              className={`lbl min-h-11 border px-3.5 transition-colors ${cat === c ? 'border-navy bg-navy text-surface' : 'border-navy/25 bg-surface text-navy hover:border-navy'}`}>{c}</button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{`${list.length} credentials match`}</p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map(({ c, id }) => (
              <motion.li key={c.title} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <CredentialCard c={c} id={id} onOpen={() => setSel(c)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {list.length === 0 && <p className="mt-8 text-mute">No credentials match that search. Clear the search or choose another category.</p>}
        {list.length > PAGE && (
          <button className="btn btn-g mt-8" onClick={() => setAll(!all)} aria-expanded={all}>{all ? 'Show less' : 'Show more'}</button>
        )}

        <Modal open={!!sel} onClose={() => setSel(null)}>
          {sel && (<>
            <span className="chip text-blue">{sel.category}</span>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-navy">{sel.title}</h3>
            <p className="mt-2 text-mute">{sel.provider ? `Issued by ${sel.provider}` : 'Provider not specified'}</p>
            {details.length > 0 && (
              <dl className="mt-6 border-t border-line">
                {details.map(([k, v]) => <div key={k} className="flex flex-wrap justify-between gap-2 border-b border-line py-3 text-sm"><dt className="lbl text-mute">{k}</dt><dd>{v}</dd></div>)}
              </dl>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {url && <a href={url} target="_blank" rel="noreferrer" className="btn btn-p"><ExternalLink size={16} /> View Certificate</a>}
              {sel.verifyUrl && <a href={sel.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-g">Verify online</a>}
            </div>
          </>)}
        </Modal>
      </Section>
    </>
  )
}
