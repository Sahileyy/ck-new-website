"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenTalkModal: () => void;
}

export default function CKNavbar({ onOpenTalkModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs px-[8%] py-4">
      <div className="w-full flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/images/ck.logo.png?v=1"
            alt="CK Creatives Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-12 text-base lg:text-lg font-light tracking-wide text-gray-700 flex-1 mx-auto">
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About Us</a>
          <a href="#insights" className="hover:text-gray-900 transition-colors">Insights</a>
          <a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Right Side Spacer for Perfect Desktop Balance */}
        <div className="hidden lg:block w-24 shrink-0" />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-700 p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAFA] border-b border-gray-200 px-6 py-4 mt-2 space-y-3 text-sm">
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">Work</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">About Us</a>
          <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">Insights</a>
          <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">Careers</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium tracking-[-0.01em]">Contact</a>
        </div>
      )}
    </header>
  );
}
