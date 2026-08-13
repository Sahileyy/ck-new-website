"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        id: "who-we-are",
        label: "Who We Are",
        heading: "Who We Are",
        image: "/images/team.bg.png",
        tags: [
            "Interior Designer", "Project Management", "Construction Team", "CAD Team",
            "Site Supervisor & Safety Team", "Mechanical & Electrical", "Quantity Surveyor"
        ]
    },
    // {
    //     id: "our-values",
    //     label: "Our Values",
    //     heading: "Our Values",
    //     image: "/images/team.bg.png",
    //     tags: [
    //         "Interior Designer", "Project Management", "Construction Team", "CAD Team",
    //         "Site Supervisor & Safety Team", "Mechanical & Electrical", "Quantity Surveyor"
    //     ]
    // },
    {
        id: "our-team",
        label: "Our Team",
        heading: "Our Team",
        image: "/images/team.bg.png",
        tags: [
            "Interior Designer", "Project Management", "Construction Team", "CAD Team",
            "Site Supervisor & Safety Team", "Mechanical & Electrical", "Quantity Surveyor"
        ]
    },
    {
        id: "founders",
        label: "Founders",
        heading: "Founders",
        image: "/images/founders/brijin-reworked.png",
        tags: [
            "Interior Designer", "Project Management", "Construction Team", "CAD Team",
            "Site Supervisor & Safety Team", "Mechanical & Electrical", "Quantity Surveyor"
        ]
    }
];

const AboutUs = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = React.useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            content.forEach((item, i) => {
                ScrollTrigger.create({
                    trigger: `#about-section-${item.id}`,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveIndex(i),
                    onEnterBack: () => setActiveIndex(i),
                });

                // Fade out card as it scrolls past (except the last one)
                if (i < content.length - 1) {
                    gsap.to(cardRefs.current[i], {
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `#about-section-${item.id}`,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                }
            });
        }, containerRef);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative bg-white text-black px-[8%]">
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_60%,_rgba(255,255,255,0.2)_100%)]" />

            <div className="relative z-10 flex flex-col lg:flex-row w-full mx-auto">

                {/* LEFT SIDE: Sticky Intro */}
                <div ref={leftRef} className="w-full lg:w-[45%] h-screen sticky top-0 flex flex-col justify-center pr-6 lg:pr-12 py-20 z-10">
                    <div className="w-full text-left">
                        <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#028F1A] mb-5 block">
                            About Us
                        </span>
                        <h2 className="font-neutral text-4xl md:text-5xl leading-[1.15] mb-6 text-[#2B3838] tracking-tight">
                            The talent behind the transformation
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-10">
                            ADM Design and Build is a reliable interior designer &amp; builder that
                            provides integrated services for industrial / office &amp; retail spaces.
                        </p>

                        {/* Nav pills */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12">
                            {content.map((item, i) => (
                                <span
                                    key={item.id}
                                    className={`flex items-center gap-2 text-sm font-bold transition-colors duration-500 ${activeIndex === i ? "text-[#028F1A]" : "text-gray-400"
                                        }`}
                                >
                                    <span
                                        className={`text-[10px] transition-transform duration-500 ${activeIndex === i ? "text-[#028F1A]" : "text-gray-300"
                                            }`}
                                    >
                                        ▶
                                    </span>
                                    {item.label}
                                </span>
                            ))}
                        </div>

                        {/* Static preview image */}
                        <div className="group relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                            <Image
                                src="/images/ck-ai.png"
                                alt="Office space"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* White scrim overlay on the top side */}
                            <div className="absolute inset-x-0 top-0 h-3/8 bg-gradient-to-b from-white/100 via-white/80 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Vertical divider with moving dot */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-gray-100 hidden lg:block">
                        <div
                            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#028F1A] shadow-[0_0_20px_rgba(2,143,26,0.4)] transition-all duration-500"
                            style={{ top: `${((activeIndex + 1) / content.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE: Scrolling cards (fade only, no stacking) */}
                <div className="w-full lg:w-[55%] flex flex-col">
                    {content.map((item, i) => (
                        <div
                            key={item.id}
                            id={`about-section-${item.id}`}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className="h-screen flex flex-col items-center justify-center pl-6 lg:pl-12 bg-white"
                        >
                            {item.id === "who-we-are" ? (
                                <div className="w-full flex flex-col items-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="font-neutral text-4xl md:text-5xl lg:text-6xl leading-none mb-8 bg-gradient-to-r from-[#78BE44] to-[#10B981] bg-clip-text text-transparent"
                                    >
                                        {item.heading}
                                    </motion.h2>

                                    <div className="relative w-full flex flex-col items-center gap-16 pl-8 md:pl-12 mt-16 z-10">
                                        {/* Green spreading glow behind stats */}
                                        <div className="absolute inset-0 w-[90%] h-[110%] rounded-full bg-[#78BE44]/25 blur-3xl pointer-events-none -z-10" />

                                        {[
                                            { number: "20+", label: "Years Of\nExperience" },
                                            { number: "08", label: "Global Offices\nIn Asia Pacific" },
                                            { number: "3M", label: "SQM Project\nCompleted" },
                                        ].map((stat, idx) => (
                                            <div key={idx} className="w-full flex items-center justify-between">
                                                <span className="font-neutral text-7xl md:text-8xl leading-none text-[#2B3838]">
                                                    {stat.number}
                                                </span>
                                                <span className="text-[#2B3838] text-lg md:text-xl text-right leading-snug whitespace-pre-line">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full flex flex-col items-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="relative z-0 font-neutral text-4xl md:text-5xl lg:text-6xl leading-none mb-6 bg-gradient-to-r from-[#78BE44] to-[#10B981] bg-clip-text text-transparent"
                                    >
                                        {item.heading}
                                    </motion.h2>

                                    {item.id === "founders" ? (
                                        <div className="relative z-10 -mt-[5%] w-full max-w-md aspect-[3/4] flex items-center justify-center">
                                            {/* Green spreading glow behind the founder */}
                                            <div className="absolute w-[90%] h-[110%] rounded-full bg-[#78BE44]/30 blur-3xl" />
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.heading}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 30vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative z-10 -mt-[5%] w-full max-w-3xl aspect-[16/10] flex items-center justify-center">
                                            {/* Green spreading glow behind the image */}
                                            <div className="absolute w-[90%] h-[110%] rounded-full bg-[#78BE44]/30 blur-3xl" />
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.heading}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                                    className="object-cover"
                                                    style={{
                                                        maskImage: "linear-gradient(to bottom, black 70%, transparent 95%)",
                                                        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 95%)",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {item.id !== "who-we-are" && item.tags.length > 0 && (
                                <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-gray-600 max-w-2xl">
                                    {item.tags.map((tag, idx) => (
                                        <React.Fragment key={tag}>
                                            <span>{tag}</span>
                                            {idx < item.tags.length - 1 && <span className="text-[#028F1A]">|</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;