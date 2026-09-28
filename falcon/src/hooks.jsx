import { useEffect, useRef, useState } from 'react';
export const B = 'https://falconrebarservices.com/assets/images/';

export function useReveal() {
  const r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(
      e => e.forEach(x => x.isIntersecting && (x.target.classList.add('in'), o.unobserve(x.target))),
      { threshold: .1 }
    );
    r.current && r.current.querySelectorAll('.rv').forEach(n => o.observe(n));
    return () => o.disconnect();
  }, []);
  return r;
}

export function Count({ to, suffix = '' }) {
  const [v, s] = useState(0);
  const r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      const f = t => {
        const p = Math.min((t - t0) / 1600, 1);
        s(Math.round(to * (1 - Math.pow(1 - p, 3))));
        p < 1 && requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    o.observe(r.current);
    return () => o.disconnect();
  }, [to]);
  return <span ref={r}>{v.toLocaleString()}{suffix}</span>;
}

export function Img({ src, className = '', alt = '' }) {
  const [bad, setBad] = useState(false);
  return bad
    ? <div className={`${className} bg-gradient-to-br from-navy-800 to-navy-900 grid-bp`} />
    : <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={className} />;
}
