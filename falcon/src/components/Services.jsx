import { Calculator, PencilRuler, Cable, ArrowUpRight } from 'lucide-react';
import { B, Img, useReveal } from '../hooks';

const SERVICES = [
  {
    Icon: Calculator,
    num: '01',
    title: 'CONCRETE ESTIMATION',
    desc: 'Detailed quantity analysis and estimation services that help contractors and construction teams plan materials, costs and project requirements with greater confidence.',
    features: ['BOQ & BBS Preparation', 'Material Scheduling', 'Cost Planning'],
    img: `${B}banner/1.jpg`,
  },
  {
    Icon: PencilRuler,
    num: '02',
    title: 'CONCRETE DETAILING',
    desc: 'Precise construction detailing and documentation designed to support accurate execution, coordination and fabrication across all project types.',
    features: ['Shop Drawings', 'CAD Detailing', 'Structural Plans'],
    img: `${B}banner/7.jpg`,
  },
  {
    Icon: Cable,
    num: '03',
    title: 'PT CABLE ESTIMATION',
    desc: 'Accurate post-tension cable estimation and quantity takeoffs for projects requiring reliable planning and cost control from design to build.',
    features: ['PT Schedules', 'Cable Layouts', 'Takeoff Reports'],
    img: `${B}about/1.jpg`,
  },
];

export default function Services() {
  const r = useReveal();
  return (
    <section id="services" ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="rv flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="label-pill mb-4">OUR SERVICES</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              ENGINEERED FOR <span className="text-cy">ACCURACY</span>
            </h2>
          </div>
          <p className="rv text-white/55 max-w-sm text-sm leading-relaxed">
            Specialized construction estimation and detailing services designed to reduce errors,
            improve planning and keep projects moving forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map(({ Icon, num, title, desc, features, img }, i) => (
            <article
              key={title}
              className="rv glass group relative overflow-hidden hover:-translate-y-3 hover:border-cy/40 transition-all duration-500"
              style={{ transitionDelay: i * 120 + 'ms' }}
            >
              {/* Background image hint */}
              <div className="relative h-44 overflow-hidden rounded-t-3xl">
                <Img src={img} className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700" alt={title} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/90" />
                {/* Number */}
                <span className="absolute top-4 left-5 text-6xl font-extrabold text-white/10 select-none">{num}</span>
                {/* Icon */}
                <div className="absolute bottom-4 right-5 p-3 rounded-2xl bg-cy/15 text-cy border border-cy/20">
                  <Icon size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-extrabold tracking-wide">{title}</h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">{desc}</p>

                {/* Features */}
                <ul className="mt-5 space-y-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-xs font-bold text-white/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-fr shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA arrow */}
                <a
                  href="#contact"
                  aria-label={`Enquire about ${title}`}
                  className="mt-7 w-11 h-11 grid place-items-center rounded-full bg-fr group-hover:rotate-45 transition-transform duration-300 shadow-lg shadow-fr/30"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
