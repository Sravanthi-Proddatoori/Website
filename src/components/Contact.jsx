import { motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/resumeData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
      >
        <p className="font-mono text-sm text-cyan">$ contact --open</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let's build something that has to work.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Open to full-stack, backend, and AI-integration roles. Reach out directly or connect below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={copyEmail}
            className="rounded-full bg-amber px-6 py-3 font-mono text-sm font-medium text-base transition-transform hover:scale-105"
          >
            {copied ? 'copied!' : profile.email}
          </button>
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
            className="rounded-full border border-ink/20 px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-cyan hover:text-cyan"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 font-mono text-sm text-muted">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">
            LinkedIn ↗
          </a>
          <a href={profile.scholar} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan">
            Google Scholar ↗
          </a>
        </div>
      </motion.div>
    </section>
  )
}
