import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="$ cat about.md" title="About" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="glass max-w-3xl rounded-2xl p-8"
      >
        <p className="text-lg leading-relaxed text-ink/90">
          I'm a full-stack engineer who likes the parts of the job that have to actually work in
          production — the payment webhook that can't drop a transaction, the query that can't get
          slower as the table grows, the deploy that can't take the site down. Over the last three
          years I've built authentication, payments, and AI-powered features end to end: Java and
          Spring Boot on the backend, React on the front, AWS underneath, with an eye for shaving
          milliseconds off response times and friction off release pipelines.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink/90">
          Lately that's meant wiring LLMs and retrieval into real workflows — not demos — so the
          answers are grounded, cited, and fast enough that people actually use them.
        </p>
      </motion.div>
    </section>
  )
}
