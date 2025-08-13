import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiArrowRight } from 'react-icons/fi'
import Button from '../components/Button'

const contactBlocks = [
  { icon: FiMail, title: 'Email', value: 'support@rayn.energy', desc: 'Respon 24 jam hari kerja.' },
  { icon: FiPhone, title: 'Telepon', value: '+62 812-3456-7890', desc: 'Jam 09.00 – 18.00 WIB.' },
  { icon: FiMapPin, title: 'Kantor', value: 'Jakarta / Remote', desc: 'Kunjungan by appointment.' },
  { icon: FiClock, title: 'SLA', value: '< 2 jam', desc: 'Rata-rata respon tiket prioritas.' },
]

const Contact = () => (
  <div>
    <PageHeader
      eyebrow="Hubungi kami"
      title="Mari diskusikan kebutuhan Anda"
      description="Tim kami siap membantu implementasi, integrasi, dan optimisasi solusi energi Anda."
    />

    <Section className="py-10">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3 space-y-8">
          <div className="rounded-3xl p-8 bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 shadow-soft">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-6">Formulir</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Nama</label>
                  <input required placeholder="Nama lengkap" className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Email</label>
                  <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Perusahaan</label>
                  <input placeholder="Nama perusahaan" className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Telepon</label>
                  <input placeholder="Nomor aktif" className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Topik</label>
                <select className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40">
                  <option>Implementasi</option>
                  <option>Integrasi API</option>
                  <option>Optimisasi</option>
                  <option>Demo Produk</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide uppercase text-ink-600 dark:text-ink-400 mb-2">Pesan</label>
                <textarea rows={5} required placeholder="Ceritakan kebutuhan Anda..." className="w-full resize-none rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" className="flex items-center gap-2">Kirim <FiSend className="text-sm" /></Button>
                <p className="text-xs text-ink-500 dark:text-ink-400">Dengan mengirim, Anda setuju pada kebijakan privasi.</p>
              </div>
            </form>
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white shadow-soft relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <h3 className="text-lg font-semibold mb-2">Butuh NDA dulu?</h3>
            <p className="text-sm text-white/80 leading-relaxed">Kami dapat menandatangani perjanjian kerahasiaan sebelum Anda berbagi detail sensitif.</p>
            <button className="mt-5 text-sm font-semibold inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors px-4 py-2 rounded-xl">Ajukan NDA <FiArrowRight /></button>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactBlocks.map((b,i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-5 bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 shadow-soft flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center ring-1 ring-primary-500/20">
                    <b.icon className="text-lg" />
                  </div>
                  <h4 className="font-semibold text-ink-900 dark:text-white text-sm tracking-wide">{b.title}</h4>
                </div>
                <p className="text-sm font-medium text-ink-800 dark:text-ink-200">{b.value}</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-3xl p-8 bg-ink-900 text-ink-100 dark:bg-ink-800/60 border border-ink-800 dark:border-ink-700 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary-500/10 blur-xl" />
            <h3 className="text-lg font-semibold mb-3">Jam Operasional</h3>
            <ul className="space-y-2 text-sm text-ink-400">
              <li><span className="text-ink-300">Senin - Jumat:</span> 09:00 - 18:00</li>
              <li><span className="text-ink-300">Sabtu:</span> 10:00 - 14:00 (terbatas)</li>
              <li><span className="text-ink-300">Minggu / Libur:</span> Darurat via email</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </div>
)

export default Contact
