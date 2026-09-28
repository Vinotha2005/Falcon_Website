import { Check, Star } from 'lucide-react';
import { B, Img, useReveal } from '../hooks';

const FEATURES = [
  { title: 'Experienced Engineering Team',    desc: 'Skilled estimators and detailers based in Tamil Nadu with global project exposure.' },
  { title: 'Accurate Quantity Takeoffs',       desc: 'Precision material schedules that cut waste and improve budget accuracy.' },
  { title: 'Detailed Project Breakouts',       desc: 'Itemized BBS and BOQ reports tailored to contractor requirements.' },
  { title: 'Quick Turnaround Time',            desc: 'Fast delivery without compromise — even for complex multi-storey projects.' },
  { title: 'Competitive Rates',                desc: 'Cost-effective solutions that give you more value per project dollar.' },
  { title: 'Customizable Takeoffs',            desc: 'Outputs formatted to match your workflow, software, and reporting standards.' },
];

const MISSION_VISION = [
  {
    tag: 'OUR MISSION',
    title: 'Revolutionize Rebar Services',
    body: `At FALCON, our mission is to deliver unmatched precision, efficiency and reliability
      in rebar detailing and estimating — empowering construction professionals with innovative
      solutions that enhance project accuracy, reduce waste, and drive success.`,
  },
  {
    tag: 'OUR VISION',
    title: 'Global Benchmark for Excellence',
    body: `Our vision is to become the global benchmark for excellence in rebar detailing and
      estimating. We strive to lead the industry through continuous innovation, cutting-edge
      technology and a dedicated team ensuring efficiency in every project we undertake.`,
  },
];

export default function WhyFalcon() {
  const r = useReveal();
  return (
    <section id="about" ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">

        {/* ── Top: image + features ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left – image stack */}
          <div className="rv relative h-[420px] sm:h-[540px]">
            {/* Main photo */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 img-zoom shadow-2xl shadow-black/50">
              <Img src={`${B}banner/about1.jpg`} className="w-full h-full object-cover" alt="Falcon team at work" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <div className="absolute inset-0 grid-bp opacity-25 rounded-3xl" />
            </div>

            {/* Overlay card */}
            <div className="glass float absolute -bottom-6 right-3 p-5 max-w-[230px] text-sm shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#e63946" className="text-fr" />)}
              </div>
              <p className="text-cy font-extrabold text-xs tracking-widest">BASED IN TAMIL NADU</p>
              <p className="mt-1 text-white/80 text-xs leading-relaxed">
                Managed by skilled Estimators and Detailers serving USA, Canada & UK clients.
              </p>
            </div>

            {/* Red accent */}
            <div className="absolute top-4 -left-4 w-20 h-20 rounded-full bg-fr/20 blur-2xl" />
          </div>

          {/* Right – header + feature list */}
          <div className="rv">
            <div className="label-pill mb-4">WHY CHOOSE FALCON</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Accuracy at the <span className="text-cy">Core</span>
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
              With highly qualified engineers, we strive to go above and beyond every project,
              providing excellent value to our clients — on schedule, every time.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map(({ title, desc }, i) => (
                <li
                  key={title}
                  className="group glass !rounded-2xl p-4 flex items-start gap-4 hover:border-cy/40 hover:-translate-x-1 transition-all duration-300"
                  style={{ transitionDelay: i * 60 + 'ms' }}
                >
                  <span className="w-8 h-8 shrink-0 grid place-items-center rounded-full bg-cy/15 text-cy mt-0.5">
                    <Check size={16} />
                  </span>
                  <div>
                    <p className="font-extrabold text-sm">{title}</p>
                    <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom: Mission & Vision cards ── */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {MISSION_VISION.map(({ tag, title, body }, i) => (
            <div
              key={tag}
              className="rv glass p-8 sm:p-10 relative overflow-hidden hover:border-fr/40 transition-all duration-300"
              style={{ transitionDelay: i * 150 + 'ms' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
                style={{ background: i === 0 ? 'rgba(230,57,70,.1)' : 'rgba(34,211,238,.08)' }} />
              <div className="label-pill mb-5">{tag}</div>
              <h3 className="text-2xl font-extrabold">{title}</h3>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">{body}</p>
              <div className="mt-6 h-0.5 w-12 rounded-full"
                style={{ background: i === 0 ? '#e63946' : '#22d3ee' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
