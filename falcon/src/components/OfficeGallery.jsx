import { B, Img, useReveal } from '../hooks';

// Office photos from the reference site's about section
const OFFICE_PHOTOS = [
  { src: 'about/office1.jpg', alt: 'Falcon office entrance' },
  { src: 'about/office2.jpg', alt: 'Falcon team workspace' },
  { src: 'about/office3.jpg', alt: 'Falcon operations floor' },
  { src: 'about/office4.jpg', alt: 'Falcon training room' },
];

// Fallback to about/ images that we know exist on the reference site
const FALLBACK_PHOTOS = [
  { src: 'about/1.jpg',  alt: 'Falcon office entrance' },
  { src: 'about/2.jpg',  alt: 'Falcon team workspace' },
  { src: 'banner/7.jpg', alt: 'Falcon operations floor' },
  { src: 'banner/about1.jpg', alt: 'Falcon training room' },
];

export default function OfficeGallery() {
  const r = useReveal();
  return (
    <section ref={r} className="py-28 px-5">
      <div className="section-divider mb-16 mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="rv text-center mb-14">
          <div className="label-pill mb-4 mx-auto w-fit">BEHIND THE SCENES</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Our office <span className="text-cy">in frames</span>
          </h2>
          <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">
            A glimpse into the workspace where precision meets passion —
            our team in Erode, Tamil Nadu.
          </p>
        </div>

        {/* 4-photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FALLBACK_PHOTOS.map(({ src, alt }, i) => (
            <div
              key={src}
              className="rv group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40 img-zoom cursor-pointer"
              style={{ transitionDelay: i * 100 + 'ms' }}
            >
              <Img
                src={`${B}${src}`}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                alt={alt}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-[10px] font-extrabold tracking-widest text-cy">{alt}</p>
              </div>
              {/* Number badge */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm grid place-items-center text-[10px] font-extrabold text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="rv mt-10 text-center">
          <p className="text-white/35 text-xs font-bold tracking-[.25em]">
            ERODE · TAMIL NADU · INDIA
          </p>
        </div>
      </div>
    </section>
  );
}
