import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { profile, contact } from '../data/content'
import { Photo } from './ui'

const specs = [['DISCIPLINE', 'COMPUTER ENGINEERING'], ['FOCUS', 'SOFTWARE + AI/ML'], ['INTEREST', 'BUILDING SYSTEMS'], ['STATUS', 'LEARNING / BUILDING']]

export default function Hero() {
  const up = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: d } })
  return (
    <section id="home" className="blueprint border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.25fr_0.75fr] lg:pb-24 lg:pt-32">
        <div className="flex flex-col justify-center">
          <motion.p {...up(0)} className="lbl inline-flex items-center gap-2 text-navy">
            <span className="pulse h-2 w-2 rounded-full bg-sig" />SYSTEM_001 · ONLINE
          </motion.p>
          <motion.h1 {...up(0.08)} className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Engineering ideas into working technology.
          </motion.h1>
          <motion.p {...up(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            I'm Bhavy Patel, a Computer Engineering student, developer, and AI/ML enthusiast exploring the intersection of software, intelligent systems, and real-world problem solving.
          </motion.p>
          <motion.p {...up(0.22)} className="lbl mt-5 text-blue">COMPUTER ENGINEERING / SOFTWARE DEVELOPMENT / AI &amp; ML / BUILDER</motion.p>
          <motion.div {...up(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-p">View Projects <ArrowRight size={18} /></a>
            <a href="#contact" className="btn btn-g">Let's Connect</a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 text-navy hover:text-sig"><Github /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 text-navy hover:text-sig"><Linkedin /></a>
          </motion.div>
        </div>
        <motion.div {...up(0.2)} className="mx-auto w-full max-w-sm lg:max-w-none">
          <figure className="relative ml-auto w-[88%] border border-line bg-surface p-2">
            <Photo src={profile.photo.src} position={profile.photo.position} label="Bhavy Patel" className="aspect-[4/5] w-full" />
            <span className="lbl absolute -left-px -top-6 text-mute">X:000 Y:000</span>
            <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-sig" />
            <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-sig" />
            <figcaption className="lbl mt-2 flex justify-between text-mute"><span>FIG_01</span><span>BHAVY PATEL</span></figcaption>
          </figure>
          <dl className="-mt-10 mr-[10%] border border-navy bg-navy p-4 text-surface">
            <p className="lbl mb-2 text-[#9DB6D1]">BUILD_STATUS</p>
            {specs.map(([k, v]) => <div key={k} className="lbl flex justify-between gap-4 border-t border-surface/15 py-1.5"><dt className="text-[#9DB6D1]">{k}</dt><dd className="text-right">{v}</dd></div>)}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
