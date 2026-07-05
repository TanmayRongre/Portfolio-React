// src/components/Projects.jsx
import { useRef, useEffect } from 'react';

const projects = [
  {
    name: 'Connect Hub',
    desc: 'A custom-built unified routing platform that connects all personal links and projects in one elegant portal. Designed for speed, simplicity, and a premium look.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TanmayRongre/Connect-Hub',
    demo: 'https://tanmayrongre.github.io/Connect-hub',
    featured: true,
    color: '#FF4A1C',
    icon: '🌐',
  },
  {
    name: 'Calculator',
    desc: 'A sleek, glassmorphism-styled calculator with arithmetic and scientific operations. Smooth keypress animations and responsive design.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/TanmayRongre/Simple-Calculator',
    demo: 'https://tanmayrongre.github.io/Simple-Calculator',
    featured: false,
    color: '#ff7a50',
    icon: '🧮',
  },
  {
    name: 'Discount Calculator',
    desc: 'Smart discount and savings calculator with real-time price computation and beautiful comparison breakdown UI.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/TanmayRongre/Discount-Calculator',
    demo: 'https://tanmayrongre.github.io/Discount-Calculator',
    featured: false,
    color: '#cc3a16',
    icon: '💰',
  },
  {
    name: 'Cricket Score Counter',
    desc: 'Real-time cricket scoreboard with live tracking, innings management, and clean responsive interface.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/TanmayRongre',
    demo: '#',
    featured: false,
    color: '#e05530',
    icon: '🏏',
  },
  {
    name: 'Joke Generator',
    desc: 'A fun, API-powered joke generator that fetches random jokes with smooth animations and share functionality.',
    tags: ['HTML', 'CSS', 'JS', 'API'],
    github: 'https://github.com/TanmayRongre',
    demo: '#',
    featured: false,
    color: '#ff9070',
    icon: '😄',
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { secRef.current?.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4A1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 section-reveal" ref={secRef}>
        <div className="mb-16">
          <span className="text-sm tracking-widest font-semibold uppercase" style={{ color: 'var(--accent)' }}>
            What I've Built
          </span>
          <h2
            className="text-5xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: 'var(--muted)' }}>MY</span>{' '}
            <span className="gradient-text">PROJECTS</span>
            <span style={{ color: 'var(--muted)' }}>.</span>
          </h2>
        </div>

        {/* Featured */}
        {featured.map(p => (
          <div
            key={p.name}
            className="glass rounded-3xl p-8 mb-8 relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1"
            style={{ border: '1px solid var(--border)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}70)` }}
            />
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
              style={{ background: p.color }}
            />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{p.icon}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text)', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.name}
                    </h3>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}45` }}
                    >
                      Featured
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ background: 'var(--surface2)', color: 'var(--muted)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-6 max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>

            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                <GithubIcon /> GitHub Repo
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 text-white"
                style={{ background: `linear-gradient(135deg, ${p.color}, #cc3a16)` }}
              >
                <ExternalIcon /> Live Demo
              </a>
            </div>
          </div>
        ))}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map(p => (
            <div
              key={p.name}
              className="glass rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--surface2)', color: 'var(--muted)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)', fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: 'var(--surface2)', color: 'var(--muted)' }}
                >
                  <GithubIcon /> Repo
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  <ExternalIcon /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
