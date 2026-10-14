"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenTalkModal: () => void;
}

export default function CKNavbar({ onOpenTalkModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
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
      className={`sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 lg:px-8 transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-full border border-neutral-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between relative">
        {/* Brand Logo / Name */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0 group">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-black font-sans transition-opacity group-hover:opacity-80">
            CK Creatives
          </span>
        </Link>

        {/* Center Navigation Links (Matching screenshot: Verticals omitted, Black & White theme) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[14px] sm:text-[15px] font-medium text-neutral-900">
          <a
            href="#projects"
            className="hover:text-neutral-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:text-neutral-500 transition-colors"
          >
            Services
          </a>

          {/* About Link with Chevron */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <a
              href="#about"
              className="flex items-center gap-1.5 hover:text-neutral-500 transition-colors py-1"
            >
              <span>About</span>
              <svg
                className={`w-3.5 h-3.5 text-neutral-700 transition-transform duration-200 ${
                  aboutDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Dropdown Menu */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-36">
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg py-2 px-1 text-sm font-normal text-neutral-900 animate-fadeIn">
                  <a
                    href="#about"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 rounded-xl hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#clients"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="block px-4 py-2 rounded-xl hover:bg-neutral-100 hover:text-black transition-colors"
                  >
                    Clients
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Section: Black Pill CTA Button "Contact Us ↗" */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={onOpenTalkModal}
            className="group px-5 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full text-sm font-medium tracking-normal transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-xs hover:shadow-md active:scale-95"
          >
            <span>Contact Us</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-black p-1.5 cursor-pointer rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full max-w-7xl mx-auto mt-2 bg-white rounded-3xl border border-neutral-200 shadow-xl px-6 py-6 space-y-4 text-sm font-medium text-neutral-900">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-neutral-500 transition-colors"
          >
            Home
          </Link>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-neutral-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-neutral-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-neutral-500 transition-colors"
          >
            About Us
          </a>
          <a
            href="#clients"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-neutral-500 transition-colors"
          >
            Clients
          </a>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalkModal();
              }}
              className="w-full py-3 bg-black hover:bg-neutral-800 text-white rounded-full text-sm font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Contact Us</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
