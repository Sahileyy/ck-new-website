"use client";

import React from "react";
import Link from "next/link";

interface WorkProps {
  onOpenTalkModal?: () => void;
}

const VIDEOS = [
  { src: "/ptoject1.mp4" },
  { src: "/ptoject2.mp4" },
  { src: "/ptoject3.mp4" },
  { src: "/ptoject4.mp4" },
  { src: "/ptoject5.mp4" },
  { src: "/ptoject6.mp4" },
  { src: "/project7.mp4" },
  { src: "/project8.mp4" },
  { src: "/project9.mp4" },
  { src: "/project10.mp4" },
  { src: "/project11.mp4" },
  { src: "/project12.mp4" },
];

function ScrollRevealText({ text }: { text: string }) {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal uppercase tracking-tight leading-[1.1] select-none text-white">
      {text}
    </h2>
  );
}

export default function Work({ onOpenTalkModal }: WorkProps) {
  return (
    <>
      <section id="work" className="w-full bg-white px-[4%] lg:px-[8%]">
        <div className="mx-auto max-w-[1720px]">
          {/* 4-Column Grid matching standard section width */}
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-3 md:gap-4 lg:gap-5">
            {VIDEOS.map((vid, idx) => (
              <div 
                key={idx} 
                className="relative flex h-80 md:h-[35rem] flex-col items-start justify-start overflow-hidden bg-gray-100 group w-full rounded-3xl"
              >
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay on hover for premium feel */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full bg-black text-white py-20 md:py-32 px-[4%] lg:px-[8%] mt-[170px]">
        <div className="mx-auto max-w-[1720px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
          <div className="flex-1 lg:w-3/5">
            <ScrollRevealText text="We're a design studio that does branding, video, product, and web. One team, end-to-end, since 2011." />
          </div>
          <div className="flex-1 lg:w-2/5 flex flex-col gap-6 md:gap-8">
            <p className="text-lg md:text-2xl font-normal leading-[1.6] text-zinc-200">
              <strong className="font-bold text-white">328</strong> projects. <strong className="font-bold text-white">147</strong> clients across <strong className="font-bold text-white">12</strong> industries on <strong className="font-bold text-white">6</strong> continents. Built by a <strong className="font-bold text-white">38</strong>-person team in <strong className="font-bold text-white">4</strong> countries who still obsess over pixels, pacing, and every story we ship.
            </p>

            {/* Parallel Action Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={onOpenTalkModal}
                className="px-6 py-3.5 bg-white text-black hover:bg-zinc-200 rounded-xl font-medium text-sm md:text-base tracking-[-0.01em] transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Discuss project
              </button>

              <Link
                href="/about"
                className="px-6 py-3.5 bg-black border-2 border-white text-white hover:bg-white hover:text-black rounded-xl font-medium text-sm md:text-base tracking-[-0.01em] transition-all cursor-pointer inline-flex items-center justify-center"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
