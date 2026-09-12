'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Clapperboard, HelpCircle } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Advertisement',
    message: ''
  });

  const faqs = [
    {
      q: 'What is Amusemac Studio all about?',
      a: 'Amusemac Studio is where stories come alive. From films and web series to music videos and branding content, we’re your all-in-one creative powerhouse based in Mumbai.'
    },
    {
      q: 'Do you work with brands and corporates?',
      a: 'Yes. We work with brands, startups, agencies, and corporates to produce ad films, promotional videos, corporate films, and branded content that connect with their audience.'
    },
    {
      q: 'Do you also work with independent artists and filmmakers?',
      a: 'Absolutely. We collaborate with independent filmmakers, musicians, and content creators to bring their stories and vision to life through films, music videos, and creative visuals.'
    },
    {
      q: 'Do you handle every step of the production journey?',
      a: 'Absolutely! From brainstorming the concept to the final cut, we take care of every detail. Your vision, brought to life — seamlessly.'
    }
  ];

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
            <span>[ SCENE 99 // REACH US • LET&apos;S CONNECT ]</span>
          </div>
          
          <h2 className="film-title-xl text-[#F4EFE6] font-black tracking-tighter uppercase leading-none">
            READY TO MAKE SOMETHING <br />
            <span className="text-[#D89B37]">UNFORGETTABLE?</span>
          </h2>
          <p className="text-base sm:text-lg font-editorial text-[#F4EFE6]/70">
            “Lights, camera, action — let’s make your story shine.”
          </p>
        </div>

        {/* End Credits Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 6 Cols: Verified Address & Studio Coordinates */}
          <div className="lg:col-span-6 space-y-10 border-b lg:border-b-0 lg:border-r border-[#F4EFE6]/10 pb-12 lg:pb-0 lg:pr-12">
            
            {/* Direct Lines */}
            <div className="space-y-6">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
                [ STUDIO CONTACT & HEADQUARTERS ]
              </span>

              <div className="space-y-4 font-mono-film text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-[#F4EFE6]/10 gap-1">
                  <span className="text-[#F4EFE6]/40 text-xs">DIRECT MAIL</span>
                  <a 
                    href="mailto:Contact@amusemacstudio.in" 
                    onClick={() => soundEngine.playMechanicalClick()}
                    className="text-[#F4EFE6] hover:text-[#D89B37] font-semibold transition-colors"
                  >
                    Contact@amusemacstudio.in
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-[#F4EFE6]/10 gap-1">
                  <span className="text-[#F4EFE6]/40 text-xs">STUDIO PHONE</span>
                  <div className="flex flex-col sm:items-end">
                    <a 
                      href="tel:+918770382125" 
                      onClick={() => soundEngine.playMechanicalClick()}
                      className="text-[#F4EFE6] hover:text-[#D89B37] transition-colors"
                    >
                      +91 87703 82125
                    </a>
                    <a 
                      href="tel:02246667477" 
                      onClick={() => soundEngine.playMechanicalClick()}
                      className="text-xs text-[#F4EFE6]/60 hover:text-[#D89B37] transition-colors"
                    >
                      022 4666 7477
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-[#F4EFE6]/10 gap-2">
                  <span className="text-[#F4EFE6]/40 text-xs">MUMBAI LOCATION</span>
                  <span className="text-[#F4EFE6]/90 text-left sm:text-right text-xs leading-relaxed">
                    C 304 Shiv Sadan Apartment,<br />
                    Chincholi Bunder, Malad West,<br />
                    Mumbai - 400064, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick FAQs from amusemacstudio.in */}
            <div className="space-y-4 pt-4">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
                [ STUDIO FAQS ]
              </span>
              <div className="space-y-3 text-xs font-mono-film">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded bg-[#121210] border border-[#F4EFE6]/10 space-y-1.5">
                    <p className="font-bold text-[#F4EFE6]">{faq.q}</p>
                    <p className="font-editorial text-[#F4EFE6]/70 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 6 Cols: Send Us A Message Form */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
              [ SEND US A MESSAGE // START A PROJECT ]
            </span>

            {formSubmitted ? (
              <div className="p-8 rounded-sm bg-[#181816] border border-[#D89B37] space-y-4 animate-in fade-in duration-300">
                <span className="text-xs font-mono-film text-[#D89B37] block font-bold">
                  [ MESSAGE TRANSMITTED ]
                </span>
                <h3 className="text-2xl font-black uppercase text-[#F4EFE6]">
                  THANK YOU FOR REACHING OUT.
                </h3>
                <p className="text-sm font-editorial text-[#F4EFE6]/80 leading-relaxed">
                  We have received your dispatch. The Amusemac production team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono-film text-[#D89B37] underline"
                >
                  SEND ANOTHER MESSAGE →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-film text-xs">
                <div className="space-y-1">
                  <label className="text-[#F4EFE6]/60 text-[11px] block">FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Studio"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="space-y-1">
                    <label className="text-[#F4EFE6]/60 text-[11px] block">PHONE NUMBER</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91- 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#F4EFE6]/60 text-[11px] block">PROJECT CANVAS</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121210] border border-[#F4EFE6]/15 rounded-xs text-[#F4EFE6] focus:border-[#D89B37] focus:outline-hidden transition-colors"
                  >
                    <option value="Advertisement">Advertisement / Commercial TVC</option>
                    <option value="Corporate Films">Corporate Films & Brand Storytelling</option>
                    <option value="Music Videos">Music Videos</option>
                    <option value="Documentaries">Documentaries</option>
                    <option value="Film & Webseries">Film & Webseries</option>
                    <option value="Script to Screen">Script to Screen / Development</option>
                    <option value="Set Design & Art Direction">Set Design & Art Direction</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#F4EFE6]/60 text-[11px] block">WRITE A MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, idea, or collaboration..."
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
                  <span>SEND MESSAGE</span>
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