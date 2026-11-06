import { contact } from '../data/content'
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-mute md:flex-row">
        <div><p className="font-semibold text-ink">Bhavy Patel</p><p>Developer • AI/ML Enthusiast • Builder</p></div>
        <div className="flex gap-5"><a className="hover:text-amber" href={contact.github} target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-amber" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-amber" href={`mailto:${contact.email}`}>Email</a></div>
        <p>© 2026 Bhavy Patel</p>
      </div>
    </footer>
  )
}
