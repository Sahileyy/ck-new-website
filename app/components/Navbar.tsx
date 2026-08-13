"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenTalkModal: () => void;
}

export default function CKNavbar({ onOpenTalkModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      // Ignore tiny scroll movements so the navigation does not flicker.
      if (Math.abs(scrollDifference) < 8) return;

      setIsVisible(currentScrollY < 80 || scrollDifference < 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs px-[8%] py-4 transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/images/ck.logo.png?v=1"
            alt="CK Creatives Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Right Section Navigation Links & Contact Button */}
        <div className="hidden lg:flex items-center gap-8 text-base font-normal text-neutral-700">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <a href="#about" className="hover:text-black transition-colors">About Us</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          <a href="#clients" className="hover:text-black transition-colors">Clients</a>
          <button
            type="button"
            onClick={onOpenTalkModal}
            className="ml-2 px-6 py-2.5 bg-black hover:bg-[#028F1A] text-white rounded-full text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-700 p-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAFA] border-b border-gray-200 px-6 py-5 mt-2 space-y-3.5 text-base font-normal">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-black">Home</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-black">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-black">Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-black">Projects</a>
          <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-black">Clients</a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTalkModal();
            }}
            className="w-full mt-3 py-3 bg-black hover:bg-[#028F1A] text-white rounded-xl text-sm font-medium transition-all text-center cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
