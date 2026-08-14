"use client";

import React from "react";

const CLIENTS = [
  { title: "Client 1", src: "/client1.heic" },
  { title: "Client 2", src: "/client2.webp" },
  { title: "Client 3", src: "/client3.jpg" },
  { title: "Client 4", src: "/client4.jpg" },
  { title: "Client 5", src: "/client5.jpg" },
  { title: "Client 6", src: "/client6.jpg" },
  { title: "Client 7", src: "/client7.jpg" },
  { title: "Client 8", src: "/client8.jpg" },
];

export default function Edge() {
  return (
    <div id="edge" className="w-full pt-16 md:pt-24 pb-4 md:pb-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1720px] px-[4%] lg:px-[8%]">
        <div className="flex gap-6 pb-12 lg:items-end lg:pb-16 w-full">
          <div>
            {/* <p className="text-xl font-medium uppercase tracking-[0.18em] text-[#e77800]">Our Works</p> */}
            <h2 className="heading-normal-case tracking-tighter text-4xl sm:text-4xl lg:text-4xl xl:text-6xl">
              Projects that Define Our <br />
              <span className="opacity-80 lg:text-5xl">Strategy, Creativity, and Growth.</span>
            </h2>
          </div>
          {/* <p className="max-w-xl text-base leading-relaxed  text-slate-600 sm:text-lg">
            Recognized by platforms like Awwwards for visual excellence, our work is built to meet the technical demands of industry-leading brands.
          </p> */}
        </div>
      </div>
      
      {/* Auto Carousel */}
      <div className="mx-auto max-w-[1750px] px-[4%] lg:px-[8%]">
        <div className="relative w-full flex overflow-hidden">
          {/* Smooth Fade Overlays on Both Ends - Subtle Half Opacity */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-14 md:w-16 bg-gradient-to-r from-white/60 via-white/30 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-14 md:w-16 bg-gradient-to-l from-white/60 via-white/30 to-transparent z-20" />

          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            {/* Duplicate the list to create a seamless infinite loop */}
            {[...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div
                key={idx}
                className="relative flex h-80 w-56 md:h-[35rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 shrink-0 mx-2 md:mx-4"
              >
                <img
                  src={client.src}
                  alt={client.title}
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
