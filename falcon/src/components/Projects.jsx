import { B, Img, useReveal } from '../hooks';

const PROJECTS = [
  {
    title: 'FUTURE MUSEUM',
    address: 'N. 6th Street & W.McKinley Ave.\nMilwaukee, Wisconsin',
    img: 'bg/1.jpg',
  },
  {
    title: 'VISIONS AT BRICKELL STATION',
    address: '1120-1136 SW 3RD AVENUE, MIAMI, FL 33130.',
    img: 'bg/2.jpg',
  },
  {
    title: '8800 COLLINS',
    address: '8800 Collins Ave.\nSurfside, FL 33154',
    img: 'bg/3.jpg',
  },
];

export default function Projects() {
  const r = useReveal();
  return (
    <section id="projects" ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="rv text-center mb-14">
          <div className="label-pill mb-4 mx-auto w-fit">PORTFOLIO</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Projects <span className="text-cy">Portfolio</span>
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map(({ title, address, img }, i) => (
            <article
              key={title}
              className="rv group"
              style={{ transitionDelay: i * 120 + 'ms' }}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 img-zoom">
                <Img
                  src={`${B}${img}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>

              {/* Info below */}
              <div className="mt-5 flex items-start gap-3">
                {/* Accent line */}
                <div className="mt-2 w-8 h-0.5 bg-fr rounded-full shrink-0" />
                <div>
                  <p className="text-[11px] font-extrabold tracking-[.18em] text-white/50 mb-2">
                    {title}
                  </p>
                  <p className="font-extrabold text-navy-100 text-base sm:text-lg leading-snug whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
