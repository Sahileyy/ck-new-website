"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";

const CLIENT_LOGOS = [
    { src: "/images/logos/1RM0.png", alt: "1RM" },
    { src: "/images/logos/abeer0.png", alt: "Abeer" },
    { src: "/images/logos/ACadru Logo.png", alt: "ACadru" },
    { src: "/images/logos/english cafe.png", alt: "English Cafe" },
    { src: "/images/logos/fynday.png", alt: "Fynday" },
    { src: "/images/logos/Fiffty.png", alt: "Fiffty" },
    { src: "/images/logos/grand0.png", alt: "Grand" },
    { src: "/images/logos/lulu0.png", alt: "Lulu" },
    { src: "/images/logos/rose.png", alt: "Rose" },
    { src: "/images/logos/walkaroo-logo.png", alt: "Walkaroo" },
    { src: "/images/logos/BAKERS - LOGO.png", alt: "Bakers" },
    { src: "/images/logos/fcslog4.png", alt: "FCS" },
    { src: "/images/logos/popees_logo .png", alt: "Khills" },
    { src: "/images/logos/Kinza logo@6x.png", alt: "Kinza" },
    { src: "/images/logos/english cafe.png", alt: "PGM" },
    { src: "/images/logos/rozia.avif", alt: "Rozia" },
    { src: "/images/logos/brooke.png", alt: "Brooke" },
    { src: "/images/logos/popees_logo .png", alt: "Popees" },
    { src: "/images/logos/Toyota-logo.png", alt: "Toyota" },
    { src: "/images/logos/Canara-Bank-Logo.png", alt: "Canara Bank" },
];

export default function TrustedLogos() {
    return (
        <section
            id="clients"
            className="w-full h-screen min-h-screen flex flex-col justify-between items-center py-10 px-[8%] bg-white text-neutral-900 relative overflow-hidden"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(0,0,0,0.03)"
            />
            <div className="relative z-10 w-full h-full max-w-full mx-auto text-center flex flex-col justify-between items-center py-4">
                {/* Header Group */}
                <div className="flex flex-col items-center">
                    <h2 className="font-heading text-2xl opacity-80 sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight leading-tight text-neutral-900">
                        Trusted by leading <br />
                        <span className="animate-minimal-gradient inline-block">brands</span> across industries
                    </h2>

                    <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed font-normal text-center text-neutral-600">
                        Our team is here to help you design &amp; build your next project.
                    </p>
                </div>

                {/* Logos Grid: Fills full viewport area with spacious row/column gaps, without enlarging logos */}
                <div className="w-full flex-1 flex items-center justify-center my-auto">
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20 items-center justify-items-center justify-center">
                        {CLIENT_LOGOS.map((logo, idx) => (
                            <div
                                key={idx}
                                className="w-full h-12 sm:h-14 flex items-center justify-center p-2"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-8 sm:h-10 md:h-11 w-auto max-w-[130px] sm:max-w-[140px] max-h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}