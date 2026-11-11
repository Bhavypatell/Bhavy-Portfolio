import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { Section, Photo, Trace, Lightbox, Modal } from './ui'
import { activities } from '../data/activities'

export default function Journal() {
  const [active, setActive] = useState<(typeof activities)[number] | null>(null)
  const [zoom, setZoom] = useState<number | null>(null)

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-10"><Trace /></div>
      <Section id="journal" code="BEYOND THE CODE" title="Building Beyond Technology">
        <p className="mb-10 max-w-3xl text-base leading-7 text-ink/75 md:mb-12 md:ml-[calc(200px+1rem)] md:text-lg">
          A collection of experiences, initiatives, collaborations, and opportunities that shape my journey as an engineer and emerging leader.
        </p>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {activities.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full min-h-[30rem] flex-col overflow-hidden border border-line bg-surface text-left focus-visible:outline-offset-4"
              aria-label={`View details: ${item.title}`}
            >
              <div className="relative h-[18rem] shrink-0 overflow-hidden md:h-[20rem]">
                <Photo src={item.photos[0]} label={`${item.title} — featured photograph`} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.025]" position="center 35%" />
                <span className="lbl absolute left-3 top-3 border border-surface/70 bg-bg/90 px-2 py-1 text-navy">FIG_{String(index + 1).padStart(2, '0')} / {item.id.toUpperCase()}</span>
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center border border-surface/70 bg-navy text-surface transition-colors group-hover:bg-sig" aria-hidden="true"><ArrowUpRight size={17} /></span>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div>
                  <p className="lbl mb-2 text-blue">{item.role}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-navy md:text-[1.7rem]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">{item.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/85">{item.text}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {item.dimensions.map(tag => <span key={tag} className="lbl border border-line px-2 py-1 text-navy">{tag}</span>)}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-3 text-mute">
          <span className="lbl">FIELD_NOTES / PEOPLE · PRACTICE · PARTICIPATION</span>
          <span className="lbl">{String(activities.length).padStart(2, '0')} RECORDS</span>
        </div>
      </Section>

      <Modal open={active !== null} onClose={() => setActive(null)}>
        {active && <>
          <p className="lbl mb-2 text-blue">EXPERIENCE_RECORD / {active.id.toUpperCase()}</p>
          <h3 className="pr-8 text-3xl font-semibold text-navy">{active.title}</h3>
          <p className="mt-2 text-blue">{active.org}</p>
          <p className="lbl mt-3 text-mute">{active.role}</p>
          <p className="mt-5 max-w-3xl leading-7 text-ink/85">{active.text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {active.dimensions.map(tag => <span key={tag} className="lbl border border-line px-2 py-1 text-navy">{tag}</span>)}
            {active.tags.map(tag => <span key={tag} className="chip text-navy">{tag}</span>)}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-2 md:grid-cols-3">
            {active.photos.map((src, n) => <button key={src} onClick={() => setZoom(n)} className="group relative block overflow-hidden border border-line" aria-label={`Expand ${active.title} photograph ${n + 1}`}>
              <Photo src={src} label={`${active.title} photograph ${n + 1}`} className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.025]" position="center 35%" />
              <span className="lbl absolute bottom-2 left-2 bg-bg/90 px-1.5 py-1 text-navy">FIG_{String(n + 1).padStart(2, '0')}</span>
              <Maximize2 size={15} className="absolute right-2 top-2 bg-navy p-1 text-surface" />
            </button>)}
          </div>
          <Lightbox images={active.photos} index={zoom} onIndex={setZoom} alt={active.title} />
        </>}
      </Modal>
    </>
  )
}
