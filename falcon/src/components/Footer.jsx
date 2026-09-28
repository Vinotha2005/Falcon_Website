import { Phone, Mail, MapPin } from 'lucide-react';
import { B } from '../hooks';

const LINKS = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Process',  id: 'process'  },
  { label: 'Contact',  id: 'contact'  },
];

const SERVICES = [
  'Concrete Estimation',
  'Concrete Detailing',
  'PT Cable Estimation',
  'PT Cable Detailing',
  'Rebar BBS Preparation',
  'Structural Takeoffs',
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900/60">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-5 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src={`${B}PNG/Falcon%20Rebar%20Services%20-%20Logo%20-%20Final-02.png`}
            alt="Falcon Rebar Services"
            className="h-12 w-auto mb-4"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A leading name in the rebar service industry specializing in Rebar Detailing
            and Rebar Estimating — serving clients across the USA, Canada and the UK.
          </p>
          <div className="mt-5 h-0.5 w-12 bg-fr rounded-full" />
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-extrabold text-sm tracking-widest mb-5 text-white">QUICK LINKS</h4>
          <ul className="space-y-2.5">
            {LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-white/50 text-sm hover:text-cy transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-fr shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-extrabold text-sm tracking-widest mb-5 text-white">OUR SERVICES</h4>
          <ul className="space-y-2.5">
            {SERVICES.map(s => (
              <li key={s}>
                <span className="text-white/50 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cy shrink-0" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-extrabold text-sm tracking-widest mb-5 text-white">CONTACT</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/55">
              <Phone size={15} className="text-cy mt-0.5 shrink-0" />
              <div>
                <a href="tel:+918637618690" className="block hover:text-cy transition-colors">+91 8637618690</a>
                <a href="tel:04242227371" className="block hover:text-cy transition-colors">0424 - 2227371</a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/55">
              <Mail size={15} className="text-cy mt-0.5 shrink-0" />
              <a href="mailto:info@falconrebarservices.com" className="hover:text-cy transition-colors break-all">
                info@falconrebarservices.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/55">
              <MapPin size={15} className="text-cy mt-0.5 shrink-0" />
              Erode, Tamil Nadu, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Falcon Rebar Services · All rights reserved.</p>
          <p className="font-bold tracking-widest">PRECISION ENGINEERING · SMARTER CONSTRUCTION</p>
        </div>
      </div>
    </footer>
  );
}
