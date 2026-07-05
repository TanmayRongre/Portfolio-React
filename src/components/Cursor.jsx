// src/components/Cursor.jsx
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Touch device — hide custom cursor
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) {
      dot.style.display = 'none';
      outline.style.display = 'none';
      return;
    }

    // Hide native cursor
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      dot.style.left = `${x}px`;
      dot.style.top  = `${y}px`;

      outline.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 500, fill: 'both' }
      );
    };

    window.addEventListener('mousemove', onMove);

    // Hover effect on interactive elements
    const selectors = 'a, button, input, textarea, [role="button"]';
    const addHover = (e) => {
      dot.classList.add('cursor-hover');
      outline.classList.add('cursor-hover');
    };
    const removeHover = (e) => {
      dot.classList.remove('cursor-hover');
      outline.classList.remove('cursor-hover');
    };

    // Use event delegation instead of per-element listeners
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(selectors)) addHover();
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(selectors)) removeHover();
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"     ref={dotRef} />
      <div id="cursor-outline" ref={outlineRef} />
    </>
  );
}
