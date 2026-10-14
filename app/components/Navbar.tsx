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
      className={`sticky top-0 z-50 w-full bg-[#FAFAFA]/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs px-[8%] py-5 md:py-6 transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/images/ck.logo.png?v=1"
            alt="CK Creatives Logo"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Right Section Navigation Links matching reference screenshot */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs sm:text-sm font-medium tracking-wider text-neutral-900 uppercase">
          <Link href="/" className="hover:text-[#028F1A] transition-colors">Home</Link>
          <a href="#about" className="hover:text-[#028F1A] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#028F1A] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#028F1A] transition-colors">Projects</a>
          <a href="#clients" className="hover:text-[#028F1A] transition-colors">Clients</a>
          <button
            type="button"
            onClick={onOpenTalkModal}
            className="hover:text-[#028F1A] transition-colors uppercase tracking-wider cursor-pointer"
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
        <div className="lg:hidden bg-[#FAFAFA] border-b border-gray-200 px-6 py-6 mt-2 space-y-4 text-sm font-medium tracking-wider uppercase text-neutral-900">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#028F1A]">Home</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#028F1A]">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#028F1A]">Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#028F1A]">Projects</a>
          <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#028F1A]">Clients</a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTalkModal();
            }}
            className="block w-full text-left hover:text-[#028F1A] uppercase cursor-pointer pt-3 border-t border-gray-200"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
