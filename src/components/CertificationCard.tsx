import { Award } from 'lucide-react'
import type { Cert } from '../data/certifications'

export default function CertificationCard({ c, onOpen }: { c: Cert; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="card h-full w-full p-5 text-left" aria-label={`Details: ${c.title}`}>
      <div className="flex items-center justify-between"><Award size={20} className="text-amber" /><span className="tag border-amber/50 text-amber">{c.category}</span></div>
      <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
      {c.provider && <p className="mt-2 text-sm text-mute">{c.provider}</p>}
    </button>
  )
}
