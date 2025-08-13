import Section from '../components/Section'
import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '12+' },
  { label: 'Team Members', value: '80+' },
  { label: 'Deployments', value: '120K' },
  { label: 'Countries Active', value: '14' },
  { label: 'Uptime', value: '99.98%' },
  { label: 'Net Zero Goal', value: '2029' }
]

const values = [
  { t: 'Integrity', d: 'Transparency & accountability in every interaction.' },
  { t: 'Sustainability', d: 'Optimizing for planetary impact & lifecycle efficiency.' },
  { t: 'Innovation', d: 'Relentless pursuit of better, safer energy systems.' },
  { t: 'Empowerment', d: 'Autonomy & growth paths for every team member.' },
  { t: 'Security', d: 'Designing defensible infrastructure from day one.' },
  { t: 'Impact', d: 'Measured outcomes that accelerate the transition.' }
]

const Company = () => (
  <div>
    <PageHeader
      eyebrow="About us"
      title="Building the infrastructure for a decarbonized world"
      description="A multidisciplinary team shipping pragmatic technology that scales clean energy ecosystems."
    />

    <Section className="py-10">
      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
            className="rounded-xl p-4 bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 text-center shadow-soft"
          >
            <p className="text-xl md:text-2xl font-extrabold text-ink-900 dark:text-white leading-tight">{s.value}</p>
            <p className="mt-1 text-[11px] tracking-wide uppercase font-medium text-ink-500 dark:text-ink-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="pt-0 pb-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white mb-8">Our values</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl p-6 bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10" />
              <h3 className="font-semibold text-ink-900 dark:text-white tracking-tight">{v.t}</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>

    <Section className="pt-0 pb-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white text-center">Culture evolution</h2>
        <div className="mt-12 space-y-10">
          {[
            { y: '2016', d: 'Founding team forms; prototype microgrid controller.' },
            { y: '2018', d: 'First enterprise deployment; security automation layer added.' },
            { y: '2021', d: 'AI forecasting module launches; international expansion.' },
            { y: '2024', d: 'Edge-to-cloud fabric unifies analytics & operations.' }
          ].map((e, i) => (
            <motion.div
              key={e.y}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-primary-500/30" />
              <p className="text-sm font-semibold text-primary-600">{e.y}</p>
              <p className="text-sm text-ink-600 dark:text-ink-400 mt-1 leading-relaxed">{e.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  </div>
)

export default Company
