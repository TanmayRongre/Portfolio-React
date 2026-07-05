// src/components/IDCard.jsx
// Exact replica of the original portfolio ID card with lanyard + spring physics
import { useEffect, useRef } from 'react';

export default function IDCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    // Stop CSS animation — we drive transform via JS spring
    card.style.animation = 'none';

    // Spring state
    let rotX = 0, rotY = 0, scale = 1;
    let velX = 0, velY = 0, velS = 0;
    let targetX = 0, targetY = 0, targetS = 1;
    let isHovered = false;
    let mouseRX = 0, mouseRY = 0;

    const STIFFNESS  = 0.1;
    const DAMPING    = 0.72;
    const IDLE_AMP_X = 1.8;
    const IDLE_AMP_Y = 1.2;
    const IDLE_SPEED = 0.0004;

    let lastTime = null;
    let elapsed  = 0;

    function tick(now) {
      if (lastTime !== null) {
        const dt = Math.min(now - lastTime, 50);
        elapsed += dt;
      }
      lastTime = now;

      if (isHovered) {
        targetX = mouseRX;
        targetY = mouseRY;
        targetS = 1.03;
      } else {
        targetX = Math.sin(elapsed * IDLE_SPEED * 0.7) * IDLE_AMP_X;
        targetY = Math.cos(elapsed * IDLE_SPEED) * IDLE_AMP_Y;
        targetS = 1;
      }

      velX = (velX + (targetX - rotX) * STIFFNESS) * DAMPING;
      velY = (velY + (targetY - rotY) * STIFFNESS) * DAMPING;
      velS = (velS + (targetS - scale) * STIFFNESS) * DAMPING;
      rotX += velX;
      rotY += velY;
      scale += velS;

      card.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg) scale(${scale.toFixed(4)})`;

      requestAnimationFrame(tick);
    }
    const rafId = requestAnimationFrame(tick);

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left - rect.width / 2)  / (rect.width  / 2);
      const ny = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
      mouseRX = -ny * 14;
      mouseRY =  nx * 14;
    };
    const onMouseEnter = () => {
      isHovered = true;
      card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(255,74,28,0.35)';
    };
    const onMouseLeave = () => {
      isHovered = false;
      card.style.boxShadow = '';
    };

    card.addEventListener('mousemove',  onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      card.removeEventListener('mousemove',  onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="id-card-wrapper">
      {/* ── Lanyard ── */}
      <div className="lanyard-strap">
        <div className="strap-weave" />
        <div className="strap-clip">
          <div className="clip-bar" />
          <div className="clip-hook" />
        </div>
      </div>

      {/* ── Card ── */}
      <div className="name-card" ref={cardRef}>
        {/* Top colour band */}
        <div className="id-strip">
          <span className="id-strip-label">DEVELOPER ID</span>
          <div className="id-hole-container">
            <div className="id-hole" />
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Org row */}
          <div className="card-org-row">
            <div className="org-logo-dot" />
            <span className="org-name">TR<span className="org-dot">.</span>DEV</span>
            <span className="card-year">2026</span>
          </div>

          {/* Photo */}
          <div className="profile-image">
            <img src="/profile.png" alt="Tanmay Rongre" />
            <div className="profile-ring" />
          </div>

          {/* Info */}
          <div className="profile-info">
            <h2>Tanmay Rongre</h2>
            <div className="role-badge">FULL STACK ENGINEER</div>
            <p>MERN · React · Node · MongoDB</p>
          </div>

          {/* Grid */}
          <div className="card-info-grid">
            <div className="card-info-item">
              <span className="info-label">DEPT</span>
              <span className="info-value">Web Engineering</span>
            </div>
            <div className="card-info-item">
              <span className="info-label">STATUS</span>
              <span className="info-value status-active">
                <span className="status-dot" />Available
              </span>
            </div>
          </div>

          {/* Barcode */}
          <div className="id-barcode">
            <div className="barcode-lines" />
            <span className="barcode-num">TR-2026-MERN</span>
          </div>

          {/* Socials */}
          <div className="sidebar-socials">
            <a href="https://github.com/tanmayrongre" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <img src="/github.png" alt="GitHub" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
              <img src="/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
