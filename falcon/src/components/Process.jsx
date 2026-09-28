import { FileSearch, Cpu, ClipboardCheck, ShieldCheck, Truck } from 'lucide-react';
import { useReveal } from '../hooks';

const STEPS = [
  { Icon: FileSearch,     label: 'PROJECT DRAWINGS',          desc: 'Receive & review client drawings, specs and scope.' },
  { Icon: Cpu,            label: 'ANALYSIS',                  desc: 'Structural analysis and material identification.' },
  { Icon: ClipboardCheck, label: 'ESTIMATION / DETAILING',    desc: 'Accurate BBS, BOQ or shop drawing production.' },
  { Icon: ShieldCheck,    label: 'QUALITY CHECK',             desc: 'Multi-level QC review before delivery.' },
  { Icon: Truck,          label: 'DELIVERY',                  desc: 'On-time delivery in your preferred format.' },
];

export default function Process() {
  const r = useReveal();
  return (
    <section id="process" ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="rv flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="label-pill mb-4">HOW WE WORK</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              OUR <span className="text-cy">WORKFLOW</span>
            </h2>
          </div>
          <p className="rv text-white/55 max-w-sm text-sm leading-relaxed">
            A systematic five-step process that ensures precision and reliability from
            first drawings to final delivery.
          </p>
        </div>

        {/* Steps – desktop horizontal, mobile vertical */}
        <div className="grid gap-0 md:grid-cols-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5">
            <div className="line w-full" />
          </div>

          {STEPS.map(({ Icon, label, desc }, i) => (
            <div
              key={label}
              className="rv relative flex md:flex-col md:items-center gap-5 md:gap-0 pb-10 md:pb-0 md:text-center"
              style={{ transitionDelay: i * 110 + 'ms' }}
            >
              {/* Mobile vertical connector */}
              {i < 4 && (
                <div className="md:hidden absolute left-[1.65rem] top-14 w-0.5 h-[calc(100%-2rem)]">
                  <div className="line h-full w-[2px]" style={{ background: 'repeating-linear-gradient(#22d3ee 0 8px,transparent 8px 16px)', animation: 'none' }} />
                </div>
              )}

              {/* Step circle */}
              <div className="relative shrink-0 z-10">
                <div className="w-14 h-14 md:mx-auto rounded-2xl glass grid place-items-center text-cy border border-cy/25 group hover:bg-cy/10 transition-colors">
                  <Icon size={24} />
                </div>
                <span className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-fr text-white text-[10px] font-extrabold grid place-items-center">
                  {i + 1}
                </span>
              </div>

              {/* Label */}
              <div className="md:mt-6 pt-2 md:pt-0 px-2">
                <p className="font-extrabold text-sm tracking-wider text-white">{label}</p>
                <p className="mt-1.5 text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
