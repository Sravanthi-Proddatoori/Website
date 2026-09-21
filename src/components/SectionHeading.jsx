import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-mono text-sm text-cyan">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
    </motion.div>
  )
}
