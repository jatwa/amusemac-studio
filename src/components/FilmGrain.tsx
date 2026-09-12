'use client';

import React from 'react';

export function FilmGrain() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.045] mix-blend-overlay"
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="film-grain-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-filter)" />
      </svg>
    </div>
  );
}
