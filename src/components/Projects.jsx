import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { projects } from '../data/resumeData'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass group rounded-2xl p-7 transition-colors hover:border-amber/40"
          >
            <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan/25 px-3 py-1 font-mono text-xs text-cyan"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
