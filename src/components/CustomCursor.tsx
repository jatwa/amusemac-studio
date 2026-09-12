'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor-text], [data-cursor-action], a, button');
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute('data-cursor-text') || 
                     (interactive.getAttribute('data-cursor-action') ? `[${interactive.getAttribute('data-cursor-action')}]` : '');
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div
        className={`flex items-center justify-center transition-all duration-300 ${
          cursorText
            ? 'px-3 py-1 bg-[#D89B37] text-[#090908] rounded-full text-[11px] font-mono-film font-bold uppercase tracking-wider shadow-lg scale-100'
            : isHovered
            ? 'w-10 h-10 rounded-full border border-[#D89B37]/60 bg-[#D89B37]/10 backdrop-blur-xs scale-100'
            : 'w-3.5 h-3.5 rounded-full bg-[#F4EFE6]/70 mix-blend-difference'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
