import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Work" />
      <div className="relative">
        <div className="absolute left-[7.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 sm:block" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid min-w-0 gap-4 sm:grid-cols-[7.5rem_1fr]"
            >
              <div className="font-mono text-xs text-muted sm:pt-8">{job.period}</div>
              <div className="glass min-w-0 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                <p className="mt-1 font-mono text-sm text-amber">{job.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
