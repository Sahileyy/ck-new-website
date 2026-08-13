"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import CaseStudies from "./components/CaseStudies";
import TrustedLogos from "./components/TrustedLogos";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import ServicesShowcase from "./components/ServicesShowcase";
import Edge from "./components/Edge";
import Work from "./components/Work";
import ContactModal from "./components/ContactModal";
import VisionMission from "./components/team";


export default function Home() {
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  return (
    <main className="home-page min-h-screen flex flex-col bg-black font-sans text-gray-900 relative">
      {/* Upper Content Stage - Reveals footer underneath like a curtain */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_25px_50px_rgba(0,0,0,0.3)] rounded-b-3xl pb-1">
        {/* Canvas Floating Green Particles */}
        <FloatingParticles />

        {/* Persistent Navbar */}
        <Navbar onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* Trusted Client Logos Section */}
        <TrustedLogos />

        <ServicesShowcase />
        
        {/* Case Studies Section */}
        <CaseStudies />

        <Testimonial onOpenTalkModal={() => setIsTalkModalOpen(true)} />
 
      <VisionMission />
      {/* Blog Cards Section */}
      {/* <BlogSection onOpenTalkModal={() => setIsTalkModalOpen(true)} /> */}

        {/* Work Section */}
        <Edge />
        <Work onOpenTalkModal={() => setIsTalkModalOpen(true)} />

        {/* Blog Cards Section */}
        <BlogSection onOpenTalkModal={() => setIsTalkModalOpen(true)} />
      </div>

      {/* Footer Section - Sticky Curtain Reveal */}
      <Footer onOpenTalkModal={() => setIsTalkModalOpen(true)} />

      {/* Premium Talk / Contact Modal */}
      <ContactModal
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />
    </main>
  );
}