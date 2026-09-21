import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          SP<span className="text-amber">.</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition-colors hover:text-cyan">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-amber/40 px-4 py-1.5 font-mono text-sm text-amber transition-colors hover:bg-amber/10"
        >
          resume
        </a>
      </nav>
    </header>
  )
}
