// src/components/About.jsx
import { useEffect, useRef } from 'react';

const certs = [
  {
    name: 'ChatGPT for Everyone',
    org: 'HCL GUVI',
    year: '2024',
    link: 'https://www.guvi.in/verify-certificate?id=z19M7K08G30a228yt8',
    color: '#FF4A1C',
  },
  {
    name: 'Generative AI Workshop',
    org: 'GrowthSchool',
    year: '2024',
    link: 'https://learners.growthschool.io/certificate/90ea5d28-58f9-47d5-8265-e5ba9bb97a83',
    color: '#ff7a50',
  },
  {
    name: 'Gemini Certified Educator',
    org: 'Google',
    year: '2025',
    link: 'https://arcade.googlecloud.com/',
    color: '#cc3a16',
  },
];

export default function About() {
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { secRef.current?.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 relative">
      <div
        className="absolute right-0 top-1/3 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4A1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 section-reveal" ref={secRef}>
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm tracking-widest font-semibold uppercase" style={{ color: 'var(--accent)' }}>
            Get to know me
          </span>
          <h2
            className="text-5xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: 'var(--muted)' }}>ABOUT</span>{' '}
            <span className="gradient-text">ME</span>
            <span style={{ color: 'var(--muted)' }}>.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <p className="text-xl font-medium mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              I am a driven Full Stack Engineer who loves bridging the gap between
              clean user interfaces and powerful backend logic.
            </p>
            <div className="space-y-4" style={{ color: 'var(--muted)' }}>
              <p className="leading-relaxed">
                My journey into engineering started with a curiosity about how complex digital systems
                work under the hood. Today, I focus on building responsive, highly functional web
                applications using modern languages, robust data structures, and optimized schemas.
              </p>
              <p className="leading-relaxed">
                When I'm not writing code or tweaking UI frames in Figma, you'll usually find me
                exploring offline AI LLM models and troubleshooting hardware performance settings.
              </p>
            </div>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: '📍', text: 'India' },
                { icon: '🎓', text: 'CSE Student' },
                { icon: '⚡', text: 'MERN Stack' },
                { icon: '🎯', text: 'Open to Work' },
              ].map(pill => (
                <span
                  key={pill.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {pill.icon} {pill.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--muted)' }}>
              Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-5 flex items-center gap-5 group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}bb)` }}
                  >
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate" style={{ color: 'var(--text)' }}>
                      {cert.name}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                      {cert.org} · {cert.year}
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                    style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}50` }}
                  >
                    Verify ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
