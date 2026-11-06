import { FormEvent, useState } from 'react'
import { Phone, Mail, Github, Linkedin } from 'lucide-react'
import { Section, Reveal } from './ui'
import { contact } from '../data/content'

export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({}), [done, setDone] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget), name = String(f.get('name') || '').trim(), email = String(f.get('email') || '').trim(), msg = String(f.get('msg') || '').trim()
    const er: Record<string, string> = {}
    if (name.length < 2) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) er.email = 'Enter a valid email address.'
    if (msg.length < 10) er.msg = 'Write at least 10 characters.'
    setErr(er); setDone(false)
    if (Object.keys(er).length) return
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio message from ' + name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')')}`
    setDone(true)
  }
  const cards = [[Phone, 'Phone', contact.phone, contact.tel], [Mail, 'Email', contact.email, `mailto:${contact.email}`], [Github, 'GitHub', 'Bhavypatell', contact.github], [Linkedin, 'LinkedIn', 'bhavypatell', contact.linkedin]] as const
  const field = 'mt-1 w-full rounded-lg border border-line bg-bg2 p-3 outline-none focus:border-amber'
  return (
    <Section id="contact" eyebrow="contact" title="Have an idea? Let's build something meaningful.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(([I, l, v, h], i) => (
              <Reveal key={l} delay={i * 0.06}><a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="card block h-full p-5">
                <I className="text-amber" size={22} /><p className="mt-3 text-sm text-mute">{l}</p><p className="break-all font-medium">{v}</p></a></Reveal>))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contact.tel} className="btn btn-p">Let's talk</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-g">View GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-g">Connect on LinkedIn</a>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="card space-y-4 p-6">
          {([['name', 'Your name', 'text'], ['email', 'Your email', 'email']] as const).map(([n, l, t]) => (
            <label key={n} className="block text-sm">{l}<input name={n} type={t} className={field} aria-invalid={!!err[n]} />{err[n] && <span role="alert" className="text-amber">{err[n]}</span>}</label>))}
          <label className="block text-sm">Message<textarea name="msg" rows={4} className={field} aria-invalid={!!err.msg} />{err.msg && <span role="alert" className="text-amber">{err.msg}</span>}</label>
          <button className="btn btn-p">Open in email app</button>
          <p className="text-xs text-mute">{done ? 'Your email app should have opened with the message ready to send.' : 'This form has no server. It opens your email app with the message filled in, and nothing is sent until you press send there.'}</p>
        </form>
      </div>
    </Section>
  )
}
