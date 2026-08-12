"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import CaseStudies from "./components/CaseStudies";
import TrustedLogos from "./components/TrustedLogos";
import BlogSection from "./components/BlogSection";
import FloatingParticles from "./components/FloatingParticles";
import ServicesShowcase from "./components/ServicesShowcase";

export default function Home() {
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  return (
    <main className="home-page min-h-screen flex flex-col bg-[#FAFAFA] font-sans text-gray-900 relative">
      {/* Canvas Floating Green Particles */}
      <FloatingParticles />

      {/* Persistent Navbar */}
      <Navbar onOpenTalkModal={() => setIsTalkModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenTalkModal={() => setIsTalkModalOpen(true)} />

      {/* Trusted Client Logos Section */}
      <TrustedLogos />

      {/* Case Studies Section */}
      <CaseStudies />

      <Testimonial onOpenTalkModal={() => setIsTalkModalOpen(true)} />
      <ServicesShowcase />
      {/* Blog Cards Section */}
      <BlogSection onOpenTalkModal={() => setIsTalkModalOpen(true)} />

      {/* Simple Modal Contact Drawer */}
      {isTalkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setIsTalkModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-medium text-lg"
            >
              ✕
            </button>
            <h3 className="text-2xl font-medium tracking-[-0.025em] text-gray-900 mb-2">Get in Touch with Deutsche</h3>
            <p className="text-gray-500 text-sm leading-relaxed tracking-[-0.01em] mb-6">
              Fill in your details below and our team will get back to you shortly.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setIsTalkModalOpen(false); }} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm tracking-[-0.01em] focus:outline-none focus:border-[#017315]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm tracking-[-0.01em] focus:outline-none focus:border-[#017315]"
              />
              <textarea
                placeholder="How can we help your business?"
                rows={3}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm tracking-[-0.01em] focus:outline-none focus:border-[#017315]"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-[#017315] hover:bg-[#028f1a] text-white font-medium text-sm tracking-[-0.01em] rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}