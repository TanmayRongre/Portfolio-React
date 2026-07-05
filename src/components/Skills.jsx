// src/components/Skills.jsx
import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#FF4A1C',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#ff7a50',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT Auth'],
  },
  {
    title: 'Tools & Design',
    icon: '🛠️',
    color: '#cc3a16',
    skills: ['Git & GitHub', 'Figma', 'VS Code', 'Vite', 'Postman', 'npm / npx'],
  },
];

export default function Skills() {
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          secRef.current?.classList.add('visible');
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 relative">
      <div
        className="absolute left-0 top-1/2 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4A1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 section-reveal" ref={secRef}>
        <div className="mb-16">
          <span className="text-sm tracking-widest font-semibold uppercase" style={{ color: 'var(--accent)' }}>
            What I know
          </span>
          <h2
            className="text-5xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: 'var(--muted)' }}>MY</span>{' '}
            <span className="gradient-text">SKILLS</span>
            <span style={{ color: 'var(--muted)' }}>.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={gi}
              className="glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${group.color}18`, border: `1px solid ${group.color}35` }}
                >
                  {group.icon}
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'var(--text)', fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}28`,
                      color: 'var(--text)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
