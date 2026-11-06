import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Section, Modal } from './ui'
import CertificationCard from './CertificationCard'
import { certifications, certCategories, type Cert } from '../data/certifications'

export default function Certifications() {
  const [cat, setCat] = useState('All'), [q, setQ] = useState(''), [all, setAll] = useState(false), [sel, setSel] = useState<Cert | null>(null)
  const list = useMemo(() => certifications.filter(c => (cat === 'All' || c.category === cat) && `${c.title} ${c.provider}`.toLowerCase().includes(q.toLowerCase())), [cat, q])
  const shown = all ? list : list.slice(0, 9)
  return (
    <Section id="certifications" eyebrow="certifications" title={`${certifications.length} certifications and counting`}>
      <div className="relative max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name or provider" aria-label="Search certifications"
          className="w-full rounded-lg border border-line bg-card py-3 pl-10 pr-3 outline-none focus:border-amber" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {certCategories.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${cat === c ? 'border-amber bg-amber text-bg' : 'border-line text-mute hover:border-amber hover:text-amber'}`}>{c}</button>)}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{shown.map(c => <CertificationCard key={c.title} c={c} onOpen={() => setSel(c)} />)}</div>
      {list.length === 0 && <p className="mt-8 text-mute">No certifications match. Try another search or category.</p>}
      {list.length > 9 && <div className="mt-8 text-center"><button className="btn btn-g" onClick={() => setAll(!all)}>{all ? 'Show less' : `View all (${list.length})`}</button></div>}
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (<>
          <span className="tag border-amber/50 text-amber">{sel.category}</span>
          <h3 className="mt-3 text-2xl font-bold">{sel.title}</h3>
          <p className="mt-2 text-mute">{sel.provider ? `Issued by ${sel.provider}` : 'Provider not specified'}</p>
          <p className="mt-4 text-sm text-mute">Certificate ID, issue date and verification link are not listed. They can be added in <code className="text-amber">src/data/certifications.ts</code>.</p>
        </>)}
      </Modal>
    </Section>
  )
}
