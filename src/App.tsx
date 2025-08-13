import { FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Company from './pages/Company';
import Resources from './pages/Resources';
import Home from './pages/Home';
import Contact from './pages/Contact';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(pct);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => { window.removeEventListener('scroll', handle); window.removeEventListener('resize', handle); };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-ink-200/40 dark:bg-ink-800/40">
      <div className="h-full bg-primary-500 transition-[width] duration-150" style={{ width: progress + '%' }} />
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return (
    <div className="bg-white text-ink-800 dark:bg-ink-900 dark:text-ink-100 min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-ink-900 text-ink-100 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-ink-800 p-8 rounded-xl">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold">Support zero pollution with renewables</h2>
            </div>
            <button className="bg-white text-ink-900 font-bold py-3 px-6 rounded-xl hover:bg-ink-100 transition-colors inline-flex items-center gap-2">
              <span>Get started now</span>
              <FiArrowRight />
            </button>
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-ink-700 pt-8 w-full">
            <div className="flex items-center gap-4">
              <span className="font-extrabold tracking-tight text-lg">RAYN</span>
              <p className="text-ink-400 text-sm">&copy; {new Date().getFullYear()} Rayn. All rights reserved.</p>
            </div>
            <div className="flex gap-5 mt-6 md:mt-0">
              <a href="#" aria-label="Twitter" className="text-ink-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-ink-400 hover:text-white"><FaLinkedin size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-ink-400 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-ink-400 hover:text-white"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 0.65, 0.4, 0.9] }}
        className="will-change-transform"
      >
        <Routes location={location}>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
          <Route path="/company" element={<Layout><Company /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;