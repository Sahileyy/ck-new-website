'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
};

type ServiceCategory = {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    projects: Project[];
};

const SERVICES: ServiceCategory[] = [
    {
        id: 'animations',
        number: '(01)',
        title: 'Animations & Motion Graphics',
        shortTitle: 'Animations',
        description: '3D CGI character animation, visual effects, and high-octane motion graphics built for digital campaigns.',
        projects: [
            {
                id: 'anim-1',
                title: '3D Character & Motion Campaign',
                category: '3D Animation & VFX',
                image: '/images/cards/vfx.jpeg',
                description: 'Hyper-realistic 3D CGI assets and motion visuals engineered to boost campaign ad retention by 140%.',
                link: '/case-study/creative-engagement',
            },
            {
                id: 'anim-2',
                title: 'High-Octane 2D Motion Graphics',
                category: '2D Visual Storytelling',
                image: '/images/cards/2d.jpeg',
                description: 'Engaging vector explainer series created for high-converting social and digital ad channels.',
                link: '/case-study/creative-engagement',
            },
        ],
    },
    {
        id: 'web-dev',
        number: '(02)',
        title: 'Web Development & Design',
        shortTitle: 'Web Development',
        description: 'Blazing-fast web platforms, custom e-commerce engines, and interactive digital product experiences.',
        projects: [
            {
                id: 'web-1',
                title: 'High-Performance E-Commerce Hub',
                category: 'Full-Stack Web Dev',
                image: '/images/cards/web.dev.jpeg',
                description: 'Speed-optimized web architecture cutting page load by 70% and increasing user conversions.',
                link: '/case-study/site-performance',
            },
            {
                id: 'web-2',
                title: 'Interactive Digital Experience Engine',
                category: 'Next.js & Headless UI',
                image: '/images/cards/redlap.jpeg',
                description: 'Custom web application with fluid micro-interactions and seamless cross-platform responsiveness.',
                link: '/case-study/site-performance',
            },
        ],
    },
    {
        id: 'performance',
        number: '(03)',
        title: 'Performance Marketing & SEO',
        shortTitle: 'Performance Marketing',
        description: 'Data-driven paid ads, funnel optimization, and search engine authority scaling revenue rapidly.',
        projects: [
            {
                id: 'perf-1',
                title: 'Meta & Search Ads Scaling to ₹6M Revenue',
                category: 'Paid Acquisition',
                image: '/images/cards/digi-market.jpeg',
                description: 'Data-driven multi-channel ad campaigns scaling direct-to-consumer monthly revenue.',
                link: '/case-study/trax',
            },
            {
                id: 'perf-2',
                title: 'Organic Search & Keyword Dominance Engine',
                category: 'SEO & Growth Strategy',
                image: '/images/cards/seo.jpeg',
                description: 'Targeted organic search optimization driving 10M+ impressions and massive sales in 6 months.',
                link: '/case-study/bfc-payment',
            },
        ],
    },
    {
        id: 'brand',
        number: '(04)',
        title: 'Brand Strategy & Production',
        shortTitle: 'Brand & Production',
        description: 'Complete visual identity systems, commercial media production, and high-converting ad creatives.',
        projects: [
            {
                id: 'brand-1',
                title: 'Brand Identity Refresh for Next-Gen Audience',
                category: 'Visual Identity',
                image: '/images/cards/brands.jpeg',
                description: 'Complete brand redesign including visual design systems, typography, and positioning strategy.',
                link: '/case-study/rebrand',
            },
            {
                id: 'brand-2',
                title: 'Commercial Production & Content Creatives',
                category: 'Media Production',
                image: '/images/cards/content.creatives.jpeg',
                description: 'Full-scale media production and social-first content design driving 3x audience engagement.',
                link: '/case-study/pr-coverage',
            },
        ],
    },
];

export default function ProjectsSection() {
    const [activeServiceId, setActiveServiceId] = useState<string>('animations');

    const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

    return (
        <section id="projects" className="w-full bg-[#FAFAFA] text-black py-16 md:py-24 px-[8%] border-t border-b border-gray-200/60">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
                    {/* LEFT COLUMN: Header & Service Category Navigation List */}
                    <div className="w-full lg:w-4/12 flex flex-col justify-start">
                        {/* Section Header */}
                        <div className="mb-6">
                            <span className="text-[11px] font-mono text-[#8d8d8d] tracking-[0.12em] uppercase mb-2 block">
                                (SERVICES & PROJECTS)
                            </span>
                            <h2 className="text-left text-3xl sm:text-4xl font-light text-black tracking-[-0.025em] leading-[1.08] mb-4">
                                Projects
                            </h2>
                            <p className="text-xs sm:text-sm text-[#666666] leading-[1.6] max-w-[38ch] mb-8">
                                Select a service to view highlighted client projects, visual campaigns, and digital work.
                            </p>
                        </div>

                        <div className="w-full flex flex-col border-t border-[#e5e4e4]">
                            {SERVICES.map((service) => {
                                const isActive = service.id === activeServiceId;
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveServiceId(service.id)}
                                        onMouseEnter={() => setActiveServiceId(service.id)}
                                        className={`group relative w-full text-left py-5 px-4 sm:px-6 transition-all duration-300 border-b border-[#e5e4e4] flex items-center justify-between cursor-pointer ${
                                            isActive
                                                ? 'bg-white shadow-xs rounded-xl border-transparent my-1'
                                                : 'hover:bg-gray-100/60'
                                        }`}
                                    >
                                        {/* Active Left Bar Indicator */}
                                        {isActive && (
                                            <span className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#017315] rounded-r-full transition-all duration-300" />
                                        )}

                                        <div className="flex items-center gap-4 sm:gap-6 pl-2">
                                            <span
                                                className={`text-xs font-mono transition-colors duration-300 ${
                                                    isActive ? 'text-[#017315] font-semibold' : 'text-[#8d8d8d]'
                                                }`}
                                            >
                                                {service.number}
                                            </span>

                                            <span
                                                className={`text-lg sm:text-xl lg:text-2xl transition-all duration-300 ${
                                                    isActive
                                                        ? 'font-medium text-black tracking-[-0.01em] translate-x-1'
                                                        : 'font-light text-gray-400 hover:text-gray-800'
                                                }`}
                                            >
                                                {service.title}
                                            </span>
                                        </div>

                                        <span
                                            className={`text-sm transition-transform duration-300 ${
                                                isActive ? 'text-[#017315] translate-x-1' : 'text-gray-300 opacity-0 group-hover:opacity-100'
                                            }`}
                                        >
                                            →
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Animated Project Cards Container */}
                    <div className="w-full lg:w-8/12">
                        <div
                            key={activeService.id}
                            className="animate-service-fade-in grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {activeService.projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group w-full h-full flex flex-col rounded-[16px] border border-[#e5e4e4] bg-white shadow-xs hover:shadow-md overflow-hidden transition-all duration-300"
                                >
                                    {/* Card Image */}
                                    <div className="w-full aspect-[3/2] bg-[#f4f4f4] overflow-hidden relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-mono text-[#8d8d8d] uppercase">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-[10px] font-medium text-[#017315] uppercase tracking-wide">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-normal text-black tracking-[-0.02em] leading-[1.25] mb-3">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs text-[#666666] leading-[1.55] mb-6 flex-1">
                                            {project.description}
                                        </p>

                                        <Link
                                            href={project.link}
                                            className="group/link inline-flex items-center gap-2 text-xs font-medium text-black tracking-[0.05em] uppercase border-b border-black hover:text-[#017315] hover:border-[#017315] transition-colors duration-300 pb-0.5 mt-auto"
                                        >
                                            <span>View Project</span>
                                            <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
