"use client";

import { useState } from "react";
import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

interface NavbarProps {
  onOpenTalkModal: () => void;
}

export default function CKNavbar({ onOpenTalkModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content navigation items — direct section links, no dropdowns as requested
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "About Us", link: "#about" },
    { name: "Clients", link: "#clients" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Brand Logo / Name */}
        <Link href="/" className="relative z-20 flex items-center gap-2.5 px-2 py-1 text-black group shrink-0">
          <span className="text-xl sm:text-[22px] font-bold tracking-tight text-black font-sans transition-opacity group-hover:opacity-75">
            CK Creatives
          </span>
        </Link>

        {/* Center Navigation Links with Smooth Floating Pill Glider (No Dropdowns) */}
        <NavItems items={navItems} />

        {/* Right Section: Black Pill CTA Button with Origin Green Fill "Contact Us ↗" */}
        <div className="relative z-20 hidden lg:flex items-center">
          <OriginButton
            onClick={onOpenTalkModal}
            fillClassName="bg-[#028F1A]"
            className="group h-[46px] sm:h-[54px] px-6 sm:px-7 bg-black text-white rounded-full text-[14px] sm:text-lg font-medium tracking-normal shadow-xs hover:shadow-md border-0 transition-shadow duration-200"
          >
            <span>Contact Us</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </OriginButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2 px-2 py-1 text-black">
            <span className="text-xl font-bold tracking-tight text-black font-sans">
              CK Creatives
            </span>
          </Link>
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 text-lg font-medium text-neutral-800 hover:text-[#028F1A] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 w-full">
            <OriginButton
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalkModal();
              }}
              fillClassName="bg-[#028F1A]"
              className="w-full h-12 bg-black text-white rounded-full text-base font-medium shadow-xs border-0"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </OriginButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
