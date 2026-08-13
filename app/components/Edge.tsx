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
    <section id="work-header" className="w-full bg-white text-black pt-16 md:pt-24 pb-8">
      {/* Header Container matching px-[8%] placement and typography */}
      <div className="w-full px-[8%] mb-10 sm:mb-14">
        <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-[-0.025em] leading-[1.08] mb-4">
          Our Work
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] leading-[1.6] max-w-[50ch]">
          Award-winning craft and technical reliability. Recognized by platforms like Awwwards for visual excellence, our work is built to meet the demands of industry-leading brands.
        </p>
      </div>

      {/* Infinite Auto Marquee Carousel */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={idx}
              className="relative flex h-80 w-56 md:h-[36rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 shrink-0 mx-2 md:mx-3"
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
    </section>
  );
}
