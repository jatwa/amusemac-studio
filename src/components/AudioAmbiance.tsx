'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function AudioAmbiance() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMuted(soundEngine.getMutedState());
  }, []);

  const handleToggle = () => {
    const isNowMuted = soundEngine.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <button
      onClick={handleToggle}
      data-cursor-action={muted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F4EFE6]/15 hover:border-[#D89B37]/60 text-[#F4EFE6]/70 hover:text-[#D89B37] text-xs font-mono-film transition-all bg-[#121210]/60 backdrop-blur-md"
      title={muted ? 'Enable film sound effects' : 'Mute sound effects'}
    >
      {muted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="hidden sm:inline tracking-wider">SOUND: OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D89B37] animate-pulse" />
          <span className="hidden sm:inline tracking-wider text-[#D89B37]">SOUND: ON</span>
        </>
      )}
    </button>
  );
}
