import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { B, Img } from '../hooks';

const SERVICES_PREVIEW = [
  ['ESTIMATION',  'Quantity Analysis'],
  ['DETAILING',   'Construction Drawings'],
  ['PT CABLE',    'Accurate Takeoffs'],
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-8 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bp [mask-image:radial-gradient(ellipse_at_center,#000,transparent_80%)]" />
      <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-cy/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-fr/6 blur-3xl pointer-events-none" />
      <div className="stripe-bg absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">

        {/* ── LEFT ── */}
        <div style={{ animation: 'fadeUp .8s ease both' }}>
          <div className="label-pill mb-6">
            🦅 ENGINEERING · ESTIMATION · DETAILING
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.04] tracking-tight">
            PRECISION<br />
            THAT <span className="text-cy relative">
              BUILDS
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cy/40 rounded-full" />
            </span><br />
            <span className="text-fr">CONFIDENCE.</span>
          </h1>

          <p className="mt-6 text-white/65 max-w-lg text-lg leading-relaxed">
            Accurate concrete estimation, detailing and PT cable estimation services
            engineered for complex construction projects — delivered on schedule, every time.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn bg-fr hover:bg-red-600 text-white shadow-xl shadow-fr/30">
              REQUEST A QUOTE <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn border border-white/25 hover:bg-white/10">
              EXPLORE SERVICES
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-4">
            {['5,000+ tons Detailing/mo','25,000+ tons Estimation/mo','24 / 7 Support'].map(b => (
              <span key={b} className="flex items-center gap-2 text-xs font-bold text-white/60">
                <CheckCircle2 size={14} className="text-cy" /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative h-[430px] sm:h-[540px]" style={{ animation: 'slideLeft .9s ease both .2s' }}>
          {/* Main image */}
          <div className="absolute inset-0 sm:inset-x-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <Img
              src={`${B}banner/1.jpg`}
              className="w-full h-full object-cover opacity-75"
              alt="Construction site"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
            {/* Red diagonal accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-fr/20 blur-2xl" />
          </div>

          {/* Floating services card */}
          <div className="glass float absolute left-0 sm:-left-4 bottom-6 sm:bottom-12 w-[88%] sm:w-[300px] p-6">
            <div className="flex justify-between items-center text-[11px] font-extrabold tracking-widest text-cy mb-4">
              <span>CORE SERVICES</span>
              <span className="flex gap-1">
                <i className="w-2 h-2 rounded-full bg-fr inline-block" />
                <i className="w-2 h-2 rounded-full bg-cy inline-block" />
              </span>
            </div>
            {SERVICES_PREVIEW.map(([a, b]) => (
              <div key={a} className="py-3 border-t border-white/10">
                <p className="text-[10px] text-white/45 font-extrabold tracking-widest">{a}</p>
                <p className="flex items-center gap-2 font-semibold mt-0.5">
                  <CheckCircle2 size={15} className="text-cy" /> {b}
                </p>
              </div>
            ))}
          </div>

          {/* Blueprint badge */}
          <div className="glass absolute right-0 sm:right-2 top-4 px-5 py-2.5 text-xs font-extrabold tracking-widest [animation-delay:-3s] float hidden sm:block">
            BLUEPRINT · REV 01
          </div>

          {/* Experience badge */}
          <div className="glass absolute -right-3 sm:right-0 bottom-28 sm:bottom-36 px-4 py-3 text-center hidden sm:block">
            <p className="text-2xl font-extrabold text-fr">10+</p>
            <p className="text-[10px] tracking-widest text-white/60 font-bold mt-0.5">YEARS EXP.</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-white/40 font-bold tracking-widest hover:text-cy transition-colors"
      >
        <span>SCROLL</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
