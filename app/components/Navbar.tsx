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
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-medium tracking-tight text-gray-900">CK</span>
            <span className="text-[10px] font-medium tracking-[0.15em] text-[#78BE44] uppercase">CREATIVES</span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-[-0.01em] text-gray-600">
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About Us</a>
          <a href="#insights" className="hover:text-gray-900 transition-colors">Insights</a>
          <a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTalkModal}
            className="px-5 py-2 border border-gray-300 rounded-full text-xs font-medium tracking-normal text-gray-800 hover:bg-gray-50 transition-colors"
          >
            LOGIN
          </button>
          
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-xs">
            ☀️
          </button>

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
