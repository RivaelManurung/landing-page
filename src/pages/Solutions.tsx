import Section from '../components/Section'
import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { FiHome, FiGrid, FiBarChart2, FiZap, FiCloud, FiCpu } from 'react-icons/fi'

const items = [
  { icon: FiHome, title: 'Residential Solar', body: 'Empower homes with efficient capture, smart storage & demand shaping.' },
  { icon: FiGrid, title: 'Enterprise Grid', body: 'Orchestrate distributed assets at scale with observability & control.' },
  { icon: FiBarChart2, title: 'Analytics & AI', body: 'Predictive insights drive yield, reliability & lifecycle extension.' },
  { icon: FiZap, title: 'Microgrid Control', body: 'Islanding, resilience & dynamic balancing for critical facilities.' },
  { icon: FiCloud, title: 'Edge to Cloud', body: 'Secure data fabric from device to analytical layer.' },
  { icon: FiCpu, title: 'Automation', body: 'Closed-loop optimization leveraging ML-driven triggers.' },
]

const Solutions = () => (
  <div>
    <PageHeader
      eyebrow="Platforms"
      title="Composable solution stack"
      description="A modular architecture that adapts to residential, commercial & utility-scale energy ecosystems."
    />

    <Section className="py-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
            className="relative h-full rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/80 dark:bg-ink-800/80 backdrop-blur-sm p-6 shadow-soft overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10" />
            <div className="relative flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-primary-500/10 text-primary-600 flex items-center justify-center ring-1 ring-primary-500/20 group-hover:scale-110 transition-transform">
                <s.icon className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 dark:text-white tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{s.body}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['API','Secure','Scalable','Modular','Telemetry'].slice(0, 2 + (i % 4)).map(b => (
                <span key={b} className="text-[10px] font-medium px-2 py-1 rounded-full bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300">{b}</span>
              ))}
            </div>
            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-primary-500/0 group-hover:bg-primary-500/10 blur-2xl transition-colors" />
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="pt-0 pb-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white text-center">Adoption flow</h2>
        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/40 via-primary-500/10 to-primary-500/0 md:left-1/2" />
          <div className="space-y-12">
            {[
              { t: 'Phase 1 – Foundation', d: 'Data acquisition, device onboarding & baseline analytics.' },
              { t: 'Phase 2 – Expansion', d: 'Control loops, automation & fleet-wide optimization.' },
              { t: 'Phase 3 – Intelligence', d: 'Predictive maintenance, forecasting & adaptive orchestration.' }
            ].map((step, i) => (
              <motion.div
                key={step.t}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative md:w-1/2 md:pl-12 md:first:ml-auto md:even:ml-auto"
                style={ i % 2 ? { marginLeft: 'auto'} : {} }
              >
                <div className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-[11px] font-bold ring ring-white/40 dark:ring-ink-800 shadow-soft">
                      {i+1}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-xl p-5 shadow-soft">
                    <p className="text-sm font-semibold text-primary-600 mb-1">{step.t}</p>
                    <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </div>
)

export default Solutions
