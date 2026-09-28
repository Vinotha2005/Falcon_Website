import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '../hooks';

const TESTIMONIALS = [
  {
    name: 'James Patterson',
    role: 'Project Manager, USA',
    stars: 5,
    text: `Falcon's rebar estimation was incredibly accurate. Their team turned around
      detailed BBS reports within 48 hours — saving us weeks of in-house effort.
      Highly recommend for any major concrete project.`,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Structural Engineer, Canada',
    stars: 5,
    text: `The quality of shop drawings from Falcon is exceptional. Every dimension,
      bar mark and schedule is precisely labeled. Their attention to detail
      has become an invaluable part of our workflow.`,
  },
  {
    name: 'David Chen',
    role: 'Construction Director, UK',
    stars: 5,
    text: `We use Falcon exclusively for PT cable estimation on our high-rise projects.
      Fast, accurate, and always on schedule. Their expertise in post-tension
      systems is second to none.`,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#e63946" className="text-fr" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const r = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="rv text-center mb-14">
          <div className="label-pill mb-4 mx-auto w-fit">CLIENT TESTIMONIALS</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            WHAT OUR <span className="text-cy">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, stars, text }, i) => (
            <div
              key={name}
              className="rv glass relative p-8 hover:border-cy/40 hover:-translate-y-2 transition-all duration-400 cursor-default"
              style={{ transitionDelay: i * 120 + 'ms' }}
            >
              {/* Big quote mark */}
              <span className="quote-mark">"</span>
              <div className="relative">
                <Stars count={stars} />
                <p className="mt-5 text-white/70 text-sm leading-relaxed italic">"{text}"</p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fr to-cy grid place-items-center text-sm font-extrabold text-white shrink-0">
                    {name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="font-extrabold text-sm">{name}</p>
                    <p className="text-white/45 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="rv mt-14 glass p-6 sm:p-8 grid sm:grid-cols-4 gap-6 text-center">
          {[
            { val: '99%',   label: 'On-Time Delivery' },
            { val: '200+',  label: 'Projects Completed' },
            { val: '50+',   label: 'Happy Clients' },
            { val: '3',     label: 'Countries Served' },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-fr">{val}</p>
              <p className="text-white/55 text-xs font-bold tracking-widest mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
