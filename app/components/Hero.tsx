"use client";

import { useState } from "react";

interface HeroProps {
  onOpenTalkModal: () => void;
}

export default function DeutscheHero({ onOpenTalkModal }: HeroProps) {
  const services = [
    {
      title: "Legal Advisory",
      desc: "Customized legal solutions with comprehensive packages",
    },
    {
      title: "Financial Solutions",
      desc: "Customized financial solutions with comprehensive packages",
    },
    {
      title: "Digital Transformation",
      desc: "Driving growth through smart digital solutions.",
    },
    {
      title: "Creative Production",
      desc: "Shaping brands through powerful creative storytelling",
    },
  ];

  return (
    <div className="w-full bg-white px-[8%] pb-12 pt-2">
      <div className="w-full">
        {/* --- MAIN HERO CARD CONTAINER --- */}
        <div className="relative w-full rounded-[32px] bg-[#E4F6F3] p-8 sm:p-14 lg:p-20 overflow-hidden min-h-[500px] lg:min-h-[580px] flex flex-col justify-center">
          
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

        {/* --- SECOND SECTION: INTRO PARAGRAPH & SERVICES SLIDER/GRID --- */}
        <div className="mt-16 text-left">
          <p className="text-gray-600 text-base md:text-lg max-w-4xl leading-[1.7] tracking-[-0.011em] mb-12 font-normal">
            Serving as a trusted business consultant, Deutsche is committed to turning your vision into a thriving business. 
            We at Deutsche are focused on solving critical business challenges you face every day. Being an experienced global business consultant, we will help you meet both today’s demands and tomorrow’s opportunities.
            <br /><br />
            Our comprehensive range of business consulting services covers <strong className="font-medium text-gray-900">Legal, Finance, Digital Solution</strong> and <strong className="font-medium text-gray-900">Creative Production</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:border-[#028F1A] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-[-0.025em] text-gray-900 mb-2.5 group-hover:text-[#028F1A] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.65] tracking-[-0.01em] mb-6">
                    {srv.desc}
                  </p>
                </div>
                <button
                  onClick={onOpenTalkModal}
                  className="text-sm font-medium tracking-[-0.01em] text-[#028F1A] flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
