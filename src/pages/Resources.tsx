import Section from '../components/Section'
import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { FiFileText, FiVideo, FiBookOpen, FiCpu, FiArrowRight } from 'react-icons/fi'

const all = [
  { title: 'Whitepaper: Future Grid', tag: 'PDF', icon: FiFileText, desc: 'System-level architecture patterns for resilient decentralized grids.' },
  { title: 'Guide: Solar ROI', tag: 'Guide', icon: FiBookOpen, desc: 'Framework to evaluate lifetime value & payback dynamics.' },
  { title: 'Webinar: AI in Energy', tag: 'Video', icon: FiVideo, desc: 'Panel on predictive operations & adaptive balancing.' },
  { title: 'API Docs', tag: 'Docs', icon: FiCpu, desc: 'Interface specs & examples for platform integration.' },
  { title: 'Blueprint: Microgrid Edge', tag: 'PDF', icon: FiFileText, desc: 'Reference deployment enabling sub‑second telemetry loops.' },
  { title: 'Playbook: Security Hardening', tag: 'Guide', icon: FiBookOpen, desc: 'Checklists & controls to elevate device + cloud posture.' }
]

const Resources = () => (
  <div>
    <PageHeader
      eyebrow="Knowledge base"
      title="Insights, guides & technical artifacts"
      description="Practical material to accelerate evaluation, integration & scaling."
    />

    <Section className="py-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {all.map((r, i) => (
          <motion.a
            key={r.title}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative block h-full rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/80 dark:bg-ink-800/80 backdrop-blur-sm p-6 shadow-soft overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10" />
            <div className="flex items-start gap-4 relative">
              <div className="h-12 w-12 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center ring-1 ring-primary-500/20 group-hover:scale-110 transition-transform">
                <r.icon className="text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-semibold tracking-wide uppercase text-primary-600 bg-primary-500/10 ring-1 ring-primary-500/20 px-2 py-1 rounded mb-3">{r.tag}</span>
                <h3 className="font-semibold text-ink-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 line-clamp-3 leading-relaxed">{r.desc}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-wide text-ink-400">
              <span>Read more</span>
              <FiArrowRight className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
            </div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-500/0 group-hover:bg-primary-500/10 blur-2xl transition-colors" />
          </motion.a>
        ))}
      </div>
    </Section>

    <Section className="pt-0 pb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white">Stay updated</h2>
        <p className="mt-4 text-ink-600 dark:text-ink-400">Monthly digest of platform improvements & field insights.</p>
        <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" required placeholder="you@example.com" className="w-full sm:w-72 rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 placeholder:text-ink-400 dark:placeholder:text-ink-500" />
          <button className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm shadow-soft transition-colors">Subscribe</button>
        </form>
        <p className="mt-3 text-xs text-ink-500 dark:text-ink-500">No spam. Unsubscribe anytime.</p>
      </div>
    </Section>
  </div>
)

export default Resources
