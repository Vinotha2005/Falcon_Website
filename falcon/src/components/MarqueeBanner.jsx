// Scrolling marquee banner between hero and stats
const ITEMS = [
  '🦅 REBAR DETAILING',
  '⚡ CONCRETE ESTIMATION',
  '🔗 PT CABLE ESTIMATION',
  '✅ 24/7 CLIENT SUPPORT',
  '📐 PRECISE SHOP DRAWINGS',
  '🏗️ 5,000+ TONS / MONTH',
  '🌍 USA · CANADA · UK',
  '📊 QUANTITY TAKEOFFS',
];

export default function MarqueeBanner() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-fr/90 py-3 overflow-hidden relative z-10">
      <div className="marquee flex gap-12 whitespace-nowrap select-none">
        {doubled.map((item, i) => (
          <span key={i} className="text-white text-xs font-extrabold tracking-[.2em] shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
