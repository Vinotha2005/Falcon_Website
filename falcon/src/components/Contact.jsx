import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send } from 'lucide-react';
import { useReveal } from '../hooks';

const I = 'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cy focus:ring-1 focus:ring-cy/30 placeholder:text-white/35 transition-all duration-200 text-sm';

const CONTACT_INFO = [
  { Icon: Phone, label: 'Phone',    lines: ['+91 8637618690', '0424 - 2227371'],      href: 'tel:+918637618690' },
  { Icon: Mail,  label: 'Email',    lines: ['info@falconrebarservices.com'],           href: 'mailto:info@falconrebarservices.com' },
  { Icon: MapPin,label: 'Location', lines: ['Erode, Tamil Nadu, India'],               href: null },
];

export default function Contact() {
  const r = useReveal();
  const [ok, setOk] = useState(false);

  return (
    <section id="contact" ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="rv text-center mb-14">
          <div className="label-pill mb-4 mx-auto w-fit">GET IN TOUCH</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            CONTACT <span className="text-cy">US</span>
          </h2>
          <p className="mt-3 text-white/55 max-w-md mx-auto text-sm">
            Send us your project drawings and scope. We'll respond within 24 hours.
          </p>
        </div>

        {/* Main panel */}
        <div className="rv glass overflow-hidden !rounded-[2rem] grid lg:grid-cols-5">

          {/* Left info panel */}
          <div className="lg:col-span-2 p-8 sm:p-10 bg-gradient-to-b from-fr/15 to-navy-900/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-fr/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-extrabold">Let's talk about<br /><span className="text-cy">your project.</span></h3>
              <p className="mt-3 text-white/55 text-sm leading-relaxed">
                Whether it's a high-rise, industrial plant or residential complex —
                our team is ready to help.
              </p>

              <ul className="mt-10 space-y-6">
                {CONTACT_INFO.map(({ Icon, label, lines, href }) => (
                  <li key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-cy/10 border border-cy/20 grid place-items-center text-cy shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-extrabold tracking-widest mb-1">{label}</p>
                      {lines.map((l, i) => (
                        href && i === 0
                          ? <a key={l} href={href} className="block text-sm font-bold hover:text-cy transition-colors">{l}</a>
                          : <p key={l} className="text-sm font-bold text-white/80">{l}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 relative">
              <p className="text-xs text-white/30 font-bold tracking-widest">SERVING USA · CANADA · UK · AND MORE</p>
            </div>
          </div>

          {/* Right form */}
          <form
            className="lg:col-span-3 p-8 sm:p-10 grid sm:grid-cols-2 gap-4 content-start"
            onSubmit={e => { e.preventDefault(); setOk(true); }}
          >
            <input required className={I} placeholder="Your Name *" />
            <input className={I} placeholder="Company Name" />
            <input required type="email" className={I} placeholder="Email Address *" />
            <input className={I} placeholder="Phone Number" />
            <select className={`${I} sm:col-span-2`} defaultValue="">
              <option value="" disabled>Select Project Type</option>
              <option className="text-black bg-white">Concrete Estimation</option>
              <option className="text-black bg-white">Concrete Detailing</option>
              <option className="text-black bg-white">PT Cable Estimation</option>
              <option className="text-black bg-white">PT Cable Detailing</option>
              <option className="text-black bg-white">Other</option>
            </select>
            <textarea
              rows="4"
              className={`${I} sm:col-span-2`}
              placeholder="Describe your project scope..."
            />

            <button
              type="submit"
              className="btn bg-fr hover:bg-red-600 text-white sm:col-span-2 shadow-lg shadow-fr/25"
            >
              SUBMIT PROJECT <Send size={16} />
            </button>

            {ok && (
              <p className="sm:col-span-2 text-cy text-sm font-bold text-center py-2 bg-cy/10 rounded-xl border border-cy/20">
                ✓ Thank you! Your enquiry has been received. We'll be in touch within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/918637618690"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 grid place-items-center shadow-xl shadow-green-500/40 hover:scale-110 hover:bg-green-400 transition-all duration-200"
      >
        <MessageCircle size={24} />
      </a>
    </section>
  );
}
