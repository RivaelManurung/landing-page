import Section from '../components/Section'
import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { FiActivity, FiShield, FiCpu, FiTrendingUp, FiTool, FiLifeBuoy } from 'react-icons/fi'

const services = [
  { title: 'Consulting', icon: FiActivity, desc: 'Strategic assessments & roadmap definition for energy modernization.' },
  { title: 'Implementation', icon: FiTool, desc: 'Hands-on deployment of platforms, sensors & integration layers.' },
  { title: 'Optimization', icon: FiTrendingUp, desc: 'Fine‑tuning generation, storage & distribution for peak efficiency.' },
  { title: 'Monitoring', icon: FiCpu, desc: 'Real‑time telemetry, anomaly detection & proactive maintenance insights.' },
  { title: 'Security', icon: FiShield, desc: 'Zero‑trust architecture, device hardening & compliance automation.' },
  { title: 'Support', icon: FiLifeBuoy, desc: 'Expert guidance, SLAs & knowledge enablement for your team.' }
]

const Services = () => (
  <div>
    <PageHeader
      eyebrow="What we do"
      title="End‑to‑end services for resilient clean energy"
      description="We partner across your entire lifecycle: strategy, rollout, optimization & protection."
    >
      <div className="flex flex-wrap gap-3">
        {['All','Advisory','Deployment','Ops','Security'].map(tag => (
          <button key={tag} className="px-4 py-2 text-xs font-medium rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {tag}
          </button>
        ))}
      </div>
    </PageHeader>

    <Section className="py-8">
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
            className="group relative h-full rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/80 dark:bg-ink-800/80 backdrop-blur-sm p-6 shadow-soft overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-primary-500/0 to-primary-600/10" />
            <div className="relative flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center ring-1 ring-primary-500/20 group-hover:scale-110 transition-transform">
                <s.icon className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-wide text-ink-400">
              <span className="font-medium">Included</span>
              <span className="text-primary-600 dark:text-primary-400">SLA Ready</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Design','Deploy','Review','Scale'].slice(0, 2 + (i % 3)).map(b => (
                <span key={b} className="text-[10px] font-medium px-2 py-1 rounded-full bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300">{b}</span>
              ))}
            </div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-500/0 group-hover:bg-primary-500/10 blur-2xl transition-colors" />
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="pt-0 pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white">Engagement model</h2>
        <p className="mt-4 text-ink-600 dark:text-ink-400">We combine advisory & execution with measurable deliverables every sprint.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { t: 'Assess', d: 'Baseline metrics & architecture.' },
            { t: 'Implement', d: 'Deploy core building blocks.' },
            { t: 'Optimize', d: 'Iterate & expand capabilities.' }
          ].map(step => (
            <div key={step.t} className="p-5 rounded-xl bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 shadow-soft">
              <p className="text-sm font-semibold text-primary-600 mb-1">{step.t}</p>
              <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
)

export default Services
