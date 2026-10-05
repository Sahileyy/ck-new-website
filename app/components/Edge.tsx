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
    <section id="edge" className="w-full bg-white px-[4%] lg:px-[8%] overflow-hidden">
      <div className="mx-auto max-w-[1720px]">
        {/* Section Heading */}
        <div className="flex gap-6 pb-12 lg:items-end lg:pb-16 w-full">
          <div>
            <h2 className="tracking-tighter text-4xl sm:text-4xl lg:text-4xl xl:text-6xl font-normal uppercase">
              Projects that Define Our <br />
              <span className="opacity-80 lg:text-5xl font-normal">Strategy, Creativity, and Growth.</span>
            </h2>
          </div>
        </div>
        
        {/* Auto Carousel - Exactly aligned with 2nd row (Work section) */}
        <div className="relative w-full flex overflow-hidden">
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-3 md:gap-4 lg:gap-5 pr-3 md:pr-4 lg:pr-5">
            {/* Duplicate the list to create a seamless infinite loop */}
            {[...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div
                key={idx}
                className="relative flex h-80 w-56 md:h-[35rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 shrink-0"
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
    </section>
  );
}
