'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Clapperboard, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Feature Film',
    timeline: 'Within 3 Months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClapperSnap();
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="relative w-full bg-[#080808] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none"
    >
      <div className="max-w-[1720px] mx-auto space-y-20">
        
        {/* End Credits Header */}
        <div className="space-y-4 border-b border-[#F4EFE6]/10 pb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono-film text-[#D89B37]">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>[ SCENE 99 // FINAL FRAME & ROLL CREDITS ]</span>
          </div>
          
          <h2 className="film-title-xl text-[#F4EFE6] font-black tracking-tighter uppercase leading-none">
            HAVE A STORY? <br />
            <span className="text-[#D89B37]">LET&apos;S MAKE IT.</span>
          </h2>
        </div>

        {/* End Credits Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 6 Cols: End Credits Style Contact Information */}
          <div className="lg:col-span-6 space-y-10 border-b lg:border-b-0 lg:border-r border-[#F4EFE6]/10 pb-12 lg:pb-0 lg:pr-12">
            
            {/* Direct Lines */}
            <div className="space-y-6">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
                [ STUDIO CONTACT & HEADQUARTERS ]
              </span>

              <div className="space-y-4 font-mono-film text-sm sm:text-base">
                <div className="flex items-start justify-between py-2 border-b border-[#F4EFE6]/10">
                  <span className="text-[#F4EFE6]/40 text-xs">DIRECT DISPATCH</span>
                  <a 
                    href="mailto:hello@amusemac.com" 
                    onClick={() => soundEngine.playMechanicalClick()}
                    className="text-[#F4EFE6] hover:text-[#D89B37] font-semibold transition-colors"
                  >
                    hello@amusemac.com
                  </a>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F4EFE6]/10">
                  <span className="text-[#F4EFE6]/40 text-xs">PRODUCTION DESK</span>
                  <a 
                    href="mailto:production@amusemac.com" 
                    onClick={() => soundEngine.playMechanicalClick()}
                    className="text-[#F4EFE6] hover:text-[#D89B37] font-semibold transition-colors"
                  >
                    production@amusemac.com
                  </a>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F4EFE6]/10">
                  <span className="text-[#F4EFE6]/40 text-xs">STUDIO PHONE</span>
                  <a 
                    href="tel:+919820000000" 
                    onClick={() => soundEngine.playMechanicalClick()}
                    className="text-[#F4EFE6] hover:text-[#D89B37] transition-colors"
                  >
                    +91 (022) MUMBAI-FILM
                  </a>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F4EFE6]/10">
                  <span className="text-[#F4EFE6]/40 text-xs">PHYSICAL STUDIO</span>
                  <span className="text-[#F4EFE6]/90 text-right">
                    Amusemac Creative Studio<br />
                    Near Mehboob Studios, Bandra West<br />
                    Mumbai 400050, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-4">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
                [ OFFICIAL CHANNELS ]
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-mono-film">
                {['Instagram', 'Vimeo', 'LinkedIn', 'YouTube', 'Letterboxd'].map((net) => (
                  <a
                    key={net}
                    href={`https://${net.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playMechanicalClick()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A1918] border border-[#F4EFE6]/10 hover:border-[#D89B37] hover:text-[#D89B37] transition-colors"
                  >
                    <span>{net}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right 6 Cols: Interactive Slate Dispatch (Script Submission / Inquiry) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
              [ DIRECT CALL SHEET // COMMISSION OR COLLABORATE ]
            </span>

            {formSubmitted ? (
              <div className="p-8 rounded-sm bg-[#181816] border border-[#D89B37] space-y-4 animate-in fade-in duration-300">
                <span className="text-xs font-mono-film text-[#D89B37] block font-bold">
                  [ CALL SHEET LOGGED // SYNC COMPLETE ]
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F4EFE6]">
                  THANK YOU FOR REACHING OUT.
                </h3>
                <p className="text-sm font-editorial text-[#F4EFE6]/80 leading-relaxed">
                  Our producers and creative directors review incoming treatments daily. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono-film text-[#D89B37] underline"
                >
                  SEND ANOTHER DISPATCH →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-film text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#F4EFE6]/60 text-[11px] block">YOUR NAME / STUDIO</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mira Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#F4EFE6]/60 text-[11px] block">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#F4EFE6]/60 text-[11px] block">PROJECT TYPE</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                    >
                      <option value="Feature Film">Feature Film</option>
                      <option value="Production Design / Soundstage">Production Design & Set Build</option>
                      <option value="Commercial / Ad Film">Commercial / Branded Film</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Music Video">Music Video</option>
                      <option value="Visual Development">Visual Development & Pre-vis</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#F4EFE6]/60 text-[11px] block">TIMELINE</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                    >
                      <option value="Immediate / 1 Month">Immediate / 1 Month</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="Q3/Q4 2025">Q3/Q4 2025</option>
                      <option value="Concept Stage / Exploring">Concept Stage / Exploring</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#F4EFE6]/60 text-[11px] block">LOGLINE / PROJECT BRIEF / VISION</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the world, story, or project you want to create..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-action="TRANSMIT"
                  className="w-full py-4 bg-[#D89B37] hover:bg-[#E5AD45] text-[#090908] font-bold text-xs uppercase tracking-widest transition-all rounded-xs flex items-center justify-center gap-2"
                >
                  <span>TRANSMIT CALL SHEET DISPATCH</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
