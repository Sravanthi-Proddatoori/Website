import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 pb-28">
      <SectionHeading eyebrow="$ cat education.log" title="Education" />
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg font-semibold text-ink">{e.school}</h3>
            <p className="mt-1 text-sm text-muted">{e.degree}</p>
            <p className="mt-3 font-mono text-xs text-cyan">{e.meta}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
