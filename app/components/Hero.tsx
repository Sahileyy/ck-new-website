"use client";

import { useState } from "react";

interface HeroProps {
  onOpenTalkModal: () => void;
}

export default function DeutscheHero({ onOpenTalkModal }: HeroProps) {
  return (
    <div className="hero-section w-full bg-white px-[8%] pb-12 pt-2">
      <div className="w-full">
        {/* --- MAIN HERO CARD CONTAINER --- */}
        <div
          className="relative w-full rounded-[32px] bg-[#E4F6F3] p-8 sm:p-14 lg:p-20 overflow-hidden min-h-[90vh] flex flex-col justify-center"
          style={{
            boxShadow: "inset 0 0 220px 90px rgba(255,255,255,0.9), inset 0 0 100px 40px rgba(255,255,255,0.8)",
          }}
        >
          {/* Background Video / 3D Graphics container on right */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 overflow-hidden pointer-events-none opacity-80 lg:opacity-100 flex items-center justify-end">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover lg:object-contain object-right"
            >
              <source src="/hero.meta.webm" type="video/webm" />
            </video>
          </div>

          {/* Left Text Content Box */}
          <div className="relative z-10 max-w-xl text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-0.035em] text-[#2B3838] leading-[1.15] mb-4">
              Guiding Your Business <br />
              Towards <span className="font-medium animate-minimal-gradient inline-block">Growth</span>
            </h1>

            <p className="text-[#64748B] text-base sm:text-lg font-normal tracking-[-0.01em] mb-8">
              Protecting Corporates
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenTalkModal}
                className="px-6 py-3 bg-[#028F1A] hover:bg-[#017315] text-white font-medium text-sm tracking-[-0.01em] rounded-md shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Get Started</span>
                <span className="text-base">→</span>
              </button>

              <button
                onClick={onOpenTalkModal}
                className="px-6 py-3 bg-transparent border border-[#028F1A] hover:bg-[#028F1A]/10 text-[#028F1A] font-medium text-sm tracking-[-0.01em] rounded-md transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}