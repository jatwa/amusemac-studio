import React from 'react';
import Link from 'next/link';
import { Film, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#090908] text-[#F4EFE6] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-xl space-y-8">
        <div className="flex items-center justify-center gap-2 text-xs font-mono-film text-[#D89B37]">
          <Film className="w-4 h-4" />
          <span>[ ERROR 404 // MISSING FRAME ]</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter uppercase text-[#F4EFE6]">
          CUT<span className="text-[#D89B37]">.</span>
        </h1>

        <p className="text-base sm:text-lg font-editorial text-[#F4EFE6]/70">
          The frame you are looking for has been left on the cutting room floor or moved to another reel.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D89B37] hover:bg-[#E5AD45] text-[#090908] text-xs font-mono-film font-bold uppercase tracking-wider transition-colors rounded-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO REEL</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
