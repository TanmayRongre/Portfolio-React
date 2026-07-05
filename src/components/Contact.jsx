// src/components/Contact.jsx
import { useRef, useEffect, useState } from 'react';

export default function Contact() {
  const secRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { secRef.current?.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('done');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2`;

  const contactInfo = [
    { icon: '📧', label: 'Email', val: 'tanmayrongre@gmail.com' },
    { icon: '📍', label: 'Location', val: 'India' },
    { icon: '💼', label: 'Status', val: 'Open for Freelance' },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4A1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 section-reveal" ref={secRef}>
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest font-semibold uppercase" style={{ color: 'var(--accent)' }}>
            Get in touch
          </span>
          <h2
            className="text-5xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">LET'S WORK</span>{' '}
            <span style={{ color: 'var(--muted)' }}>TOGETHER.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{ border: '1px solid var(--border)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(255,74,28,0.1)' }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs tracking-widest font-semibold uppercase mb-0.5" style={{ color: 'var(--muted)' }}>
                    {info.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{info.val}</div>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6" style={{ border: '1px solid var(--border)' }}>
              <h4 className="text-sm font-semibold mb-4 tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                Find me on
              </h4>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com/tanmayrongre', icon: '⌨️' },
                  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
                  { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl text-xs font-medium transition-all duration-200 hover:scale-105"
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                  >
                    <span className="text-xl">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8" style={{ border: '1px solid var(--border)' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'var(--muted)' }}>
                      Name
                    </label>
                    <input
                      type="text" name="name" id="contact-name"
                      value={form.name} onChange={handleChange}
                      placeholder="Your Name" required
                      className={inputClass}
                      style={{
                        background: 'var(--surface2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        '--tw-ring-color': 'rgba(255,74,28,0.4)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'var(--muted)' }}>
                      Email
                    </label>
                    <input
                      type="email" name="email" id="contact-email"
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required
                      className={inputClass}
                      style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'var(--muted)' }}>
                    Subject
                  </label>
                  <input
                    type="text" name="subject" id="contact-subject"
                    value={form.subject} onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={inputClass}
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'var(--muted)' }}>
                    Message
                  </label>
                  <textarea
                    name="message" id="contact-message"
                    value={form.message} onChange={handleChange}
                    rows={5} placeholder="Tell me about your project..." required
                    className={inputClass}
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'none' }}
                  />
                </div>

                <button
                  type="submit" id="contact-submit"
                  disabled={status === 'sending' || status === 'done'}
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #FF4A1C, #cc3a16)', boxShadow: '0 0 30px var(--glow)' }}
                >
                  {status === 'idle'    && 'Send Message →'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'done'    && '✓ Message Sent!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
