// src/components/Footer.jsx
export default function Footer() {
  const navLinks = [
    { href: '#home',     label: 'Home' },
    { href: '#about',    label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact',  label: 'Contact' },
  ];

  return (
    <footer className="relative py-12 mt-8" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="font-bold text-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">TR</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          <nav className="flex flex-wrap gap-6 justify-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm transition-colors duration-200 hover:text-orange-400"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            © 2026 Tanmay Rongre — Built with{' '}
            <span className="gradient-text font-semibold">React & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
