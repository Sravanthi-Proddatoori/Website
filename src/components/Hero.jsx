import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile, stats } from '../data/resumeData'

const responseLines = [
  'GET /engineer/sravanthi',
  '200 OK',
  '{',
  '  "role": "Full-Stack Software Engineer",',
  '  "experience": "3+ years",',
  '  "stack": ["Java", "Spring Boot", "React", "AWS"],',
  '  "focus": ["microservices", "payments", "RAG"],',
  '  "status": "available_for_hire"',
  '}',
]

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= responseLines.length) return
    const delay = visibleLines === 0 ? 500 : 160
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className="glass w-full max-w-md rounded-2xl p-5 shadow-2xl shadow-black/40">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-muted">api-response.json</span>
      </div>
      <pre className="min-h-[220px] font-mono text-[13px] leading-relaxed">
        {responseLines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {i === 1 ? (
              <span className="text-cyan">{line}</span>
            ) : (
              <span className="text-ink/90">{line}</span>
            )}
          </div>
        ))}
        {visibleLines < responseLines.length && (
          <span className="cursor-blink text-amber">▍</span>
        )}
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="min-w-0"
        >
          {/* <p className="mb-4 font-mono text-sm text-cyan">$ whoami</p> */}
          <h1 className="text-glow-amber font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl text-amber sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Sravanthi_Proddatoori_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:scale-105"
            >
              view resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              get in touch
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-1 font-mono text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="flex min-w-0 justify-center md:justify-end"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  )
}
