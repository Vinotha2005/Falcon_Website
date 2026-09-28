import { Count, useReveal } from '../hooks';

const STATS = [
  { value: <Count to={5000} suffix="+" />, unit: 'tons', label: 'DETAILING / MONTH',   color: 'text-cy' },
  { value: <Count to={25000} suffix="+" />, unit: 'tons', label: 'ESTIMATION / MONTH', color: 'text-cy' },
  { value: '24/7', unit: '',  label: 'CLIENT SUPPORT',                                  color: 'text-fr' },
  { value: <Count to={10} suffix="+" />, unit: 'yrs',  label: 'EXPERIENCE',            color: 'text-cy' },
];

export default function FloatingStats() {
  const r = useReveal();
  return (
    <section ref={r} className="relative -mt-10 z-10 px-5 pb-4">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ value, unit, label, color }, i) => (
          <div
            key={label}
            className="glass rv p-5 sm:p-7 group hover:border-cy/40 transition-all duration-300 hover:-translate-y-1"
            style={{ transitionDelay: i * 80 + 'ms' }}
          >
            <p className={`text-3xl sm:text-4xl font-extrabold ${color}`}>
              {value}
              {unit && <span className="text-sm text-white/50 ml-1 font-bold">{unit}</span>}
            </p>
            <p className="mt-2 text-[11px] tracking-widest text-white/55 font-extrabold">{label}</p>
            <div className="mt-3 h-0.5 w-8 bg-fr rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
