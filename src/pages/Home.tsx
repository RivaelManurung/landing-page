import Section from '../components/Section'
import Button from '../components/Button'
import { FiCheckCircle, FiUsers, FiCpu, FiTool, FiDatabase } from 'react-icons/fi'

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-primary-100/40 dark:from-ink-900 dark:via-ink-900 dark:to-ink-800" />
        <div className="container mx-auto px-6">
          <div className="relative rounded-4xl bg-gradient-to-br from-primary-500/90 via-primary-600 to-primary-700 dark:from-primary-600 dark:via-primary-600 dark:to-primary-700 text-white px-8 md:px-14 py-20 overflow-hidden shadow-[0_20px_60px_-15px_var(--color-primary-700)]">
            <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-10 left-10 h-24 w-24 bg-white/15 rounded-xl rotate-6" />
            <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">New Energy for the Future</h1>
            <p className="relative mt-6 max-w-2xl text-primary-50/90 text-lg">Innovative, reliable and sustainable solutions to power tomorrow.</p>
            <div className="relative mt-10 flex flex-wrap gap-4">
              <Button className="!bg-white !text-primary-700 hover:!bg-primary-50">Get started</Button>
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">Learn more</Button>
            </div>
            <div className="relative mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {[{n:'6m+',l:'Users served',color:'from-white/15 to-white/5'},{n:'315',l:'Enterprise clients',color:'from-white/15 to-white/5'},{n:'120K',l:'Deployments',color:'from-white/15 to-white/5'}].map(stat => (
                <div key={stat.l} className={`rounded-2xl p-5 bg-gradient-to-br ${stat.color} backdrop-blur-sm ring-1 ring-white/20 shadow-soft`}> 
                  <p className="text-3xl font-extrabold leading-none mb-2">{stat.n}</p>
                  <p className="text-xs uppercase tracking-wide font-medium text-white/80">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section className="py-20">
        <div className="text-center">
          <div className="mx-auto max-w-xl rounded-3xl bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-600/10 dark:from-primary-400/10 dark:via-primary-500/5 dark:to-primary-600/10 p-6 ring-1 ring-primary-500/20 shadow-soft">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 dark:text-white">Built for quality and trust</h2>
          </div>
          <p className="text-ink-600 dark:text-ink-400 max-w-2xl mx-auto mt-3">We deliver modern, reliable and user-friendly energy solutions.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{icon: FiUsers, label:'Customer Focus', grad:'from-sky-500 to-cyan-600'},{icon: FiCpu, label:'Latest Tech', grad:'from-purple-500 to-fuchsia-600'},{icon: FiTool, label:'Framework', grad:'from-amber-500 to-orange-600'},{icon: FiDatabase, label:'Standards', grad:'from-emerald-500 to-teal-600'}].map(item => (
              <div key={item.label} className="relative flex flex-col items-center justify-center rounded-2xl p-6 shadow-soft overflow-hidden group">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.grad} opacity-90`} />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10" />
                <div className="relative h-16 w-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                  <item.icon className="text-3xl text-white" />
                </div>
                <h3 className="relative font-semibold text-white text-sm tracking-wide uppercase">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="py-20 bg-ink-50 dark:bg-ink-900">
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-4">
            <span className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-500/15 text-primary-600 ring-1 ring-primary-500/20">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 dark:text-white">Quality that scales</h2>
            <p className="text-ink-600 dark:text-ink-400 max-w-2xl">From security to support, every detail crafted for excellence.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Layered security','Tracking of each part','Reliable customer service','Guaranteed service period','Document safety','AI-powered insights'].map(title => (
            <div key={title} className="group relative rounded-3xl p-6 bg-gradient-to-br from-white to-ink-50 dark:from-ink-800 dark:to-ink-900 border border-ink-100 dark:border-ink-700 shadow-soft overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-500/15 text-primary-600 flex items-center justify-center ring-1 ring-primary-500/30">
                    <FiCheckCircle className="text-lg" />
                  </div>
                  <h3 className="font-semibold text-ink-900 dark:text-white leading-tight">{title}</h3>
                </div>
                <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed flex-1">We craft solutions for real-world performance and reliability.</p>
                <div className="mt-5 text-xs font-medium text-primary-600 dark:text-primary-400">Learn more →</div>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-500/0 group-hover:bg-primary-500/10 blur-2xl transition-colors" />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-3xl blur opacity-60" />
              <h2 className="relative text-3xl md:text-4xl font-extrabold tracking-tight text-white px-6 py-4 rounded-3xl bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
                Trusted service for every need
              </h2>
            </div>
            <p className="text-ink-600 dark:text-ink-400 mt-4">Residential or enterprise, our solutions adapt to your scale.</p>
            <div className="mt-8 flex gap-3">
              <Button>Read more</Button>
              <Button variant="outline">Contact sales</Button>
            </div>
          </div>
          <svg className="w-full h-64" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22C18A" />
                <stop offset="100%" stopColor="#52D5A3" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="400" height="200" rx="16" fill="url(#g2)" />
            <g fill="white" opacity="0.25">
              {Array.from({ length: 12 }).map((_, i) => (
                <circle key={i} cx={20 + i * 32} cy={100 + Math.sin(i) * 30} r="6" />
              ))}
            </g>
          </svg>
        </div>
      </Section>
    </div>
  )
}

export default Home
