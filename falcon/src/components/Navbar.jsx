import { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { B } from '../hooks';

const LINKS = [
  { label: 'Home',      id: 'home'     },
  { label: 'About',     id: 'about'    },
  { label: 'Services',  id: 'services' },
  { label: 'Projects',  id: 'projects' },
  { label: 'Process',   id: 'process'  },
  { label: 'Contact',   id: 'contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = LINKS.map(l => l.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(ids[i]); break; }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="topbar hidden lg:block">
        <div className="mx-auto max-w-7xl px-5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Erode, Tamil Nadu, India</span>
            <span className="flex items-center gap-1.5"><Phone size={12} /> +91 8637618690</span>
          </div>
          <span className="tracking-widest opacity-90">PRECISION ENGINEERING · TRUSTED EXCELLENCE</span>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-400
          ${scrolled
            ? 'py-2 bg-navy-950/90 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/40'
            : 'py-3 bg-navy-950/70 backdrop-blur-md'}`}
      >
        <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={`${B}PNG/Falcon%20Rebar%20Services%20-%20Logo%20-%20Final-02.png`}
              alt="Falcon Rebar Services"
              className={`transition-all duration-300 w-auto ${scrolled ? 'h-8' : 'h-11'}`}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="sr-only">Falcon Rebar Services</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative px-4 py-2 text-sm font-bold tracking-wide rounded-full transition-all duration-200
                  ${active === id
                    ? 'text-cy'
                    : 'text-white/70 hover:text-white'}`}
              >
                {label}
                {active === id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fr" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn bg-fr hover:bg-red-600 text-white hidden lg:inline-flex shadow-lg shadow-fr/25">
            REQUEST A QUOTE
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 glass !rounded-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
          <div className="glass mx-5 p-5 flex flex-col gap-1 !rounded-2xl">
            {LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`py-3 px-2 text-base font-bold border-b border-white/5 transition-colors
                  ${active === id ? 'text-cy' : 'text-white/80'}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn bg-fr mt-3 text-white"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
