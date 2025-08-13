import { FiArrowRight } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 dark:supports-[backdrop-filter]:bg-ink-900/70 dark:bg-ink-900/60 border-b border-ink-100 dark:border-ink-800">
  <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="font-extrabold text-primary-600 tracking-tight text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40">
            RAYN
          </NavLink>
          <nav className="hidden md:flex items-center gap-6 text-ink-600 dark:text-ink-400 text-sm">
            {[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Solutions', to: '/solutions' },
              { label: 'Company', to: '/company' },
              { label: 'Resources', to: '/resources' },
            ].map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `relative py-1 hover:text-ink-900 dark:hover:text-ink-100 transition-colors ${isActive ? 'text-ink-900 dark:text-ink-100 font-semibold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary-500' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <NavLink to="/contact">
            <Button className="!py-2 !px-5">Contact us <FiArrowRight className="text-sm" /></Button>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default Navbar
