import { contact } from '../data/content'
export default function Footer() {
  return (
    <footer className="dark border-t border-surface/15 bg-navy text-surface">
      <div className="lbl mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-[#B6C4D4] md:flex-row">
        <p>BHAVY PATEL · COMPUTER ENGINEERING · © 2026</p>
        <div className="flex gap-5"><a className="hover:text-sig" href={contact.github} target="_blank" rel="noreferrer">GITHUB</a><a className="hover:text-sig" href={contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a className="hover:text-sig" href={`mailto:${contact.email}`}>EMAIL</a></div>
      </div>
    </footer>
  )
}
