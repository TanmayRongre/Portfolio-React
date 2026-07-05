// src/components/Services.jsx
import { useRef, useEffect } from 'react';

const services = [
  {
    icon: '🖥️',
    title: 'Web Design',
    desc: 'I craft stunning UI/UX designs that give your website a unique, memorable identity — combining aesthetics with usability.',
    features: ['Figma Prototyping', 'Responsive Layouts', 'Brand Identity', 'Animation Design'],
    color: '#FF4A1C',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'I build high-performance, blazing-fast web applications using modern frameworks and best coding practices.',
    features: ['MERN Stack', 'REST APIs', 'Database Design', 'Performance Optimization'],
    color: '#ff7a50',
    featured: true,
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'I develop mobile applications with eye-catching UIs and smooth user flows across Android platforms.',
    features: ['React Native', 'Cross Platform', 'Native Features', 'App Store Ready'],
    color: '#cc3a16',
  },
];

export default function Services() {
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { secRef.current?.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 relative">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4A1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 section-reveal" ref={secRef}>
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest font-semibold uppercase" style={{ color: 'var(--accent)' }}>
            What I will do for you
          </span>
          <h2
            className="text-5xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: 'var(--muted)' }}>MY</span>{' '}
            <span className="gradient-text">SERVICES</span>
            <span style={{ color: 'var(--muted)' }}>.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`glass rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-all duration-400 hover:scale-[1.03] hover:-translate-y-3 ${s.featured ? 'ring-1' : ''}`}
              style={{
                border: '1px solid var(--border)',
                ...(s.featured ? { boxShadow: `0 0 30px ${s.color}25` } : {}),
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}55)` }}
              />
              <div
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: s.color }}
              />

              {s.featured && (
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
                >
                  ⭐ Popular
                </div>
              )}

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
              >
                {s.icon}
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text)', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="leading-relaxed mb-6 flex-1" style={{ color: 'var(--muted)' }}>
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.features.map((feat, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
