'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type CaseStudy = {
    image: string;
    title: string;
    date: string;
    description: string;
    link: string;
};

const CASE_STUDIES_BY_CATEGORY: Record<string, CaseStudy[]> = {
    'Performance Marketing': [
        {
            image: '/images/case/case5.png',
            title: 'From 0 to ₹6 Million Revenue per month',
            date: 'March 8, 2024',
            description: 'Explore how we transformed Bluetyga into a revenue-generating company from scratch.',
            link: '/case-study/trax',
        },
    ],
    SEO: [
        {
            image: '/images/case/case2.png',
            title: 'Generated a Massive ₹10 Million in 6 Months',
            date: 'March 8, 2024',
            description: "Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading brands.",
            link: '/case-study/bfc-payment',
        },
    ],
    'PR & Communication': [
        {
            image: '/images/case/case3.png',
            title: 'Landed Coverage in 15+ National Publications',
            date: 'March 8, 2024',
            description: 'A press strategy that turned a product launch into a nationwide media moment.',
            link: '/case-study/pr-coverage',
        },
    ],
    Branding: [
        {
            image: '/images/case/case4.png',
            title: 'Rebranded a Legacy Company for a New Generation',
            date: 'March 8, 2024',
            description: 'A full visual identity refresh that repositioned the brand for younger.',
            link: '/case-study/rebrand',
        },
    ],
    'Creative Strategy': [
        {
            image: '/images/case/case6.png',
            title: '3x Engagement with a Bold New Content Direction',
            date: 'March 8, 2024',
            description: 'How a shift in creative strategy turned a stagnant feed into a growth engine.',
            link: '/case-study/creative-engagement',
        },
    ],
    'Web Development': [
        {
            image: '/images/case/case1.png',
            title: 'Cut Page Load Time by 70% Site-Wide',
            date: 'March 8, 2024',
            description: 'A full performance overhaul that turned a slow site into a fast, conversion-ready one.',
            link: '/case-study/site-performance',
        },
    ],
};

type CaseStudyWithCategory = CaseStudy & {
    category: string;
};

const ALL_CASE_STUDIES: CaseStudyWithCategory[] = Object.entries(CASE_STUDIES_BY_CATEGORY).map(
    ([category, studies]) => ({ ...studies[0], category })
);

export default function CaseStudies() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <section ref={sectionRef} className="w-full bg-white text-black py-16 md:py-24 px-[8%]">
            <div className="w-full">
                <div className="flex flex-col gap-10 md:flex-row lg:gap-12 items-start">
                    {/* LEFT — Sticky Intro Column (4 columns) */}
                    <div className="lg:col-span-4 w-full lg:sticky lg:top-28">
                        {/* <span className="text-[12px] font-normal text-[#8d8d8d] tracking-[0.12px] uppercase mb-3 block">
              Selected work
            </span> */}
                        <h2 className="text-left text-5xl sm:text-5xl font-bold opacity-70 text-black  leading-[1.08] mb-5">
                            Our case study
                        </h2>
                        <p className="text-[15px] text-[#666666] leading-[1.6] max-w-[38ch] mb-8">
                            A quick look at how we approached each project, the decisions we made
                            along the way, and the results that came out of it.
                        </p>
                        <Link
                            href="/case-study"
                            className="group hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-black tracking-[0.05em] uppercase border-b border-black hover:text-[#b75928] hover:border-[#b75928] transition-colors duration-300 pb-0.5"
                        >
                            <span>View all case studies</span>
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* RIGHT — fixed 2-column / 3-row grid, only splits into columns once the layout is actually side-by-side */}
                    <div className="max-md:w-full lg:col-span-8 flex flex-col gap-x-6 gap-y-3 md:grid md:grid-cols-2 lg:gap-x-10 lg:gap-y-14 auto-rows-fr">
                        {ALL_CASE_STUDIES.map((study, index) => (
                            <div
                                key={`${study.link}-${index}`}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="w-full h-full flex flex-col rounded-[16px] border border-[#e5e4e4] bg-white shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
                            >
                                {/* Image placeholder */}

                                <div className="w-full aspect-[3/2] bg-[#f4f4f4] overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Name & description */}
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[12px] font-mono text-[#8d8d8d] uppercase">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[11px] font-medium text-[#b75928] uppercase tracking-wide">
                                            {study.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-light text-black tracking-[-0.02em] leading-[1.2] mb-3">
                                        {study.title}
                                    </h3>

                                    <p className="text-[14px] text-[#666666] leading-[1.55] mb-5 flex-1">
                                        {study.description}
                                    </p>

                                    <Link
                                        href={study.link}
                                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-black tracking-[0.05em] uppercase border-b border-black hover:text-[#b75928] hover:border-[#b75928] transition-colors duration-300 pb-0.5"
                                    >
                                        <span>View Case Study</span>
                                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
