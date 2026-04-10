import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const PROFILE_SRC = '/bit.jpeg';
const NAV_LINKS = [
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#experience', label: 'Experience' },
  { to: '#skills', label: 'Skills' },
  { to: '#certifications', label: 'Certifications' },
  { to: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Re-integrated the scroll listener for your glass effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState('');

useEffect(() => {
  const sections = NAV_LINKS.map(({ to }) => document.getElementById(to.slice(1))).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section!));
  return () => observer.disconnect();
}, []);

  // Professional Scroll Logic with 150ms timeout for mobile unmounting
  const handleNavClick = (e: React.MouseEvent, to: string) => {
    const sectionId = to.slice(1);
    const section = document.getElementById(sectionId);

    if (section) {
      e.preventDefault();
      setMobileOpen(false); // 1. Trigger menu close

      // 2. Wait for the exit animation to begin before scrolling
      setTimeout(() => {
        const offset = 0; // Updated to 100 to prevent Navbar covering headings
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 150);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out',
        isScrolled ? 'mx-3 mt-3 sm:mx-6' : ''
      )}
      style={isScrolled ? {
        background: 'rgba(10, 10, 60, 0.45)',
        backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
        borderRadius: '2rem',
        border: '1px solid rgba(180, 180, 255, 0.18)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 255, 0.08),
          0 2px 8px rgba(0, 0, 0, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.15),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
      } : {}}
    >
      {/* Shimmer glint — top edge light reflection */}
      {isScrolled && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 30%, rgba(200,200,255,0.5) 50%, rgba(255,255,255,0.35) 70%, transparent 100%)',
          }}
        />
      )}

      <nav className="mx-auto flex h-[4.25rem] max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div
  className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden font-semibold text-sm text-background"
  style={{
    boxShadow: '0 2px 8px rgba(100, 100, 255, 0.4)',
  }}
>
  <img
    src={PROFILE_SRC}
    alt="Yasser Ahmed"
    className="h-full w-full object-cover object-center"
    loading="eager"
    decoding="async"
    draggable="false"
  />
</div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
  to={to}
  className={cn(
    'relative rounded-pill px-3 py-1.5 text-sm font-label transition-all duration-200 hover:text-white',
    activeSection === to ? 'text-white' : 'text-body'
  )}
  onClick={(e) => handleNavClick(e, to)}
>
  {label}
  {activeSection === to && (
    <motion.span
      layoutId="active-nav"
      className="absolute bottom-0 left-0 right-0 h-px rounded-full bg-primary"
    />
  )}
</Link>
            </li>
          ))}
        </ul>

        {/* Desktop "Hire Me" Button */}
        <div className="hidden md:block">
          <Link
            to="#contact"
            className="inline-flex items-center justify-center rounded-pill px-6 py-2.5 font-label text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, rgba(100,100,255,0.9), rgba(60,60,200,0.9))',
              boxShadow: '0 2px 12px rgba(100, 100, 255, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-heading"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            /* UPDATED: Added overflow-y-auto and max-h to enable mobile menu scrolling */
            className="overflow-y-auto overflow-x-hidden rounded-b-[1.5rem] max-h-[80vh] no-scrollbar"
            style={{
              background: 'rgba(10, 10, 60, 0.75)', 
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              borderTop: '1px solid rgba(180, 180, 255, 0.12)',
            }}
          >
            <ul className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block py-3 text-body font-label hover:text-white transition-colors border-b border-white/5"
                    onClick={(e) => handleNavClick(e, to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="#contact"
                  className="block mt-4 rounded-button py-3 text-center font-label text-white transition-all hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(100,100,255,0.9), rgba(60,60,200,0.9))',
                  }}
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}