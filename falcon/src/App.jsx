import { useEffect, useState } from 'react';
import { useReveal } from './hooks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import FloatingStats from './components/FloatingStats';
import Services from './components/Services';
import WhyFalcon from './components/WhyFalcon';
import Process from './components/Process';
import Industries from './components/Industries';
import Projects from './components/Projects';
import OfficeGallery from './components/OfficeGallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div id="preloader">
      <div className="preloader-letters">
        {'FALCON'.split('').map((c, i) => <span key={i}>{c}</span>)}
      </div>
      <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '11px', letterSpacing: '4px', fontWeight: 700 }}>
        REBAR SERVICES
      </p>
      <div className="preloader-bar mt-4">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const f = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', f);
    return () => window.removeEventListener('mousemove', f);
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [hide, setHide] = useState(false);

  function handleDone() {
    setHide(true);
    setTimeout(() => setLoaded(true), 650);
  }

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}
      {hide && (
        <div id="preloader" className="hide" aria-hidden="true">
          <div className="preloader-letters">
            {'FALCON'.split('').map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      )}
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <FloatingStats />
        <Services />
        <WhyFalcon />
        <Process />
        <Industries />
        <Projects />
        <OfficeGallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
