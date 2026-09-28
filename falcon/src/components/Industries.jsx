import { Building2, Factory, Building, Home, Boxes, Route } from 'lucide-react';
import { useReveal } from '../hooks';

const INDUSTRIES = [
  { Icon: Building2, title: 'Commercial Buildings',  desc: 'Office towers, malls, mixed-use developments.' },
  { Icon: Factory,   title: 'Industrial Structures', desc: 'Warehouses, plants, and manufacturing facilities.' },
  { Icon: Building,  title: 'High-Rise Buildings',   desc: 'Multi-storey residential and commercial towers.' },
  { Icon: Home,      title: 'Residential Projects',  desc: 'Villas, apartment complexes and housing estates.' },
  { Icon: Boxes,     title: 'Precast Structures',    desc: 'Precast elements and modular construction systems.' },
  { Icon: Route,     title: 'Infrastructure',        desc: 'Bridges, highways, and public infrastructure.' },
];

export default function Industries() {
  const r = useReveal();
  return (
    <section ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">
        <div className="rv mb-14">
          <div className="label-pill mb-4">PROJECT TYPES</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            INDUSTRIES WE <span className="text-cy">SERVE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="rv glass group p-6 sm:p-8 hover:border-cy/45 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ transitionDelay: i * 80 + 'ms' }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-cy/0 group-hover:bg-cy/5 rounded-3xl transition-colors duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-cy/10 border border-cy/20 grid place-items-center text-cy mb-5 group-hover:bg-cy/20 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base">{title}</h3>
                <p className="mt-2 text-white/50 text-xs leading-relaxed">{desc}</p>
                <div className="mt-4 h-0.5 w-6 bg-fr rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
