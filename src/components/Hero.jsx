// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import IDCard from './IDCard';

const techBadges = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind'];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.classList.add('visible');
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Background blobs */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-spin-slow"
        style={{ background: 'radial-gradient(circle, #FF4A1C, #cc3a16)' }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #ff7a50, #FF4A1C)' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="section-reveal" ref={containerRef}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(255,74,28,0.1)', border: '1px solid rgba(255,74,28,0.3)', color: 'var(--accent)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span style={{ color: 'var(--muted)' }}>MERN</span>{' '}
              <span className="gradient-text">FULL</span>
              <br />
              <span className="gradient-text">STACK</span>
              <span style={{ color: 'var(--muted)' }}>.</span>
            </h1>

            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Passionate about creating intuitive and engaging user experiences. I specialize in
              transforming ideas into beautifully crafted, high-performance web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #FF4A1C, #cc3a16)', boxShadow: '0 0 30px var(--glow)' }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 glass"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { number: '+5', label: 'Projects Built' },
                { number: '+3', label: 'Certifications' },
                { number: '+2', label: 'Internships' },
              ].map(stat => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-bold gradient-text"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ID Card */}
          <div className="flex justify-center lg:justify-end items-center">
            <IDCard />
          </div>
        </div>

        {/* Tech badges */}
        <div className="mt-20 flex flex-wrap gap-3 items-center">
          <span className="text-xs tracking-widest font-semibold uppercase mr-4" style={{ color: 'var(--muted)' }}>Tech Stack</span>
          {techBadges.map(badge => (
            <span
              key={badge}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
              style={{ background: 'rgba(255,74,28,0.07)', border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
