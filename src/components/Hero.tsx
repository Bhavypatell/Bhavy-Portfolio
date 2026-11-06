import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { profile, contact } from '../data/content'
import { Photo } from './ui'

export default function Hero() {
  const up = (d: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } })
  return (
    <section id="home" className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.35fr_1fr]">
      <div>
        <motion.div {...up(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1 font-mono text-xs text-amber">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-amber opacity-75" /><span className="relative h-2 w-2 rounded-full bg-amber" /></span>
          SYSTEM ONLINE
        </motion.div>
        <motion.h1 {...up(0.1)} className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Building technology that <span className="text-amber">moves beyond</span> the screen.
        </motion.h1>
        <motion.p {...up(0.2)} className="mt-6 max-w-xl text-lg text-mute">{profile.desc}</motion.p>
        <motion.p {...up(0.3)} className="mt-4 font-mono text-sm text-amber2">{profile.tagline}</motion.p>
        <motion.div {...up(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-p">View my projects <ArrowRight size={18} /></a>
          <a href="#contact" className="btn btn-g">Let's connect</a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 text-mute hover:text-amber"><Github /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 text-mute hover:text-amber"><Linkedin /></a>
        </motion.div>
      </div>
      <motion.div {...up(0.3)} className="mx-auto w-full max-w-xs sm:max-w-sm">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
          className="relative rounded-2xl border border-amber/40 bg-card p-1.5 shadow-[0_0_60px_-12px_rgba(255,138,36,.45)]">
          <Photo src={profile.photo.src} position={profile.photo.position} label="Bhavy Patel" className="aspect-[4/5] w-full !rounded-xl" />
          <span className="pointer-events-none absolute -left-px -top-px h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-amber" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-amber" />
        </motion.div>
        <div className="card relative -mt-8 ml-4 sm:ml-6 p-4 font-mono text-xs leading-7 shadow-xl">
          <div className="mb-2 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-amber" /><i className="h-2 w-2 rounded-full bg-amber/50" /><i className="h-2 w-2 rounded-full bg-amber/25" /></div>
          {[['SYSTEM STATUS', 'ONLINE'], ['ROLE', 'DEVELOPER'], ['FOCUS', 'AI / ML / WEB'], ['CURRENT MODE', 'BUILDING']].map(([k, v]) => (
            <div key={k}><span className="text-mute">{k}:</span> <span className="text-amber">{v}</span></div>
          ))}
          <span className="animate-pulse text-amber">▍</span>
        </div>
      </motion.div>
    </section>
  )
}
