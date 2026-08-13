"use client";

import React from "react";

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

export default function Work() {
  return (
    <>
      <section id="work" className="w-full bg-white pb-4 md:pb-6 pt-12 md:pt-16 px-2 md:px-4">
        {/* 4-Column Grid, Small Gaps, Carousel Height */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2">
          {VIDEOS.map((vid, idx) => (
            <div 
              key={idx} 
              className="relative flex h-72 md:h-[32rem] flex-col items-start justify-start overflow-hidden bg-gray-100 group w-full rounded-3xl"
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
      </section>

      {/* Yellow Banner Section */}
      <section className="w-full bg-[#EBF400] text-black py-20 md:py-32 px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
          <div className="flex-1 lg:w-3/5">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-black">
              We're a design studio that does branding, video, product, and web. One team, end-to-end, since 2011.
            </h2>
          </div>
          <div className="flex-1 lg:w-2/5 lg:pt-4">
            <p className="text-lg md:text-2xl font-normal leading-[1.6] text-black/90">
              <strong className="font-bold text-black">328</strong> projects. <strong className="font-bold text-black">147</strong> clients across <strong className="font-bold text-black">12</strong> industries on <strong className="font-bold text-black">6</strong> continents. Built by a <strong className="font-bold text-black">38</strong>-person team in <strong className="font-bold text-black">4</strong> countries who still obsess over pixels, pacing, and every story we ship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
