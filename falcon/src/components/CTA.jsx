import { ArrowRight, Zap } from 'lucide-react';
import { useReveal } from '../hooks';

export default function CTA() {
  const r = useReveal();
  return (
    <section ref={r} className="py-16 px-5">
      <div className="rv mx-auto max-w-5xl relative overflow-hidden rounded-[2.5rem] border border-fr/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fr/20 via-navy-900 to-cy/10" />
        <div className="absolute inset-0 grid-bp opacity-30" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-fr/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cy/10 blur-3xl" />

        {/* Content */}
        <div className="relative p-10 sm:p-16 text-center">
          <div className="label-pill mb-6 mx-auto w-fit">
            <Zap size={12} className="fill-cy" /> READY TO START?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            LET'S BUILD WITH{' '}
            <span className="text-cy">PRECISION.</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto leading-relaxed">
            Have a project in progress? Send us your drawings and requirements.
            Our team will review your scope and help you plan the next step —
            fast, accurately, and affordably.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn bg-fr hover:bg-red-600 text-white shadow-xl shadow-fr/35">
              REQUEST A QUOTE <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn border border-cy/50 text-cy hover:bg-cy/10">
              CONTACT OUR TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
