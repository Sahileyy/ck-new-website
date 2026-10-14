"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  scrollThreshold?: number;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className, scrollThreshold }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  const updateVisibility = (latestScrollY?: number) => {
    const videoSection =
      typeof document !== "undefined"
        ? document.getElementById("hero-video-section") ||
          document.querySelector(".hero-video-container")
        : null;

    if (videoSection) {
      const videoTop = videoSection.getBoundingClientRect().top;
      const navbarBottom = ref.current
        ? ref.current.getBoundingClientRect().bottom
        : 80;
      // Shrink navbar as soon as the video section reaches/touches the navbar
      setVisible(videoTop <= navbarBottom);
      return;
    }

    const heroEl = typeof document !== "undefined" ? document.querySelector(".hero-section") : null;
    if (heroEl) {
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      setVisible(heroBottom <= 100);
      return;
    }

    const threshold = scrollThreshold ?? 200;
    const currentY = latestScrollY ?? (typeof window !== "undefined" ? window.scrollY : 0);
    setVisible(currentY > threshold);
  };

  useEffect(() => {
    updateVisibility();
  }, [scrollThreshold]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    updateVisibility(latest);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-6 sm:top-8 z-50 w-full px-0", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 8px 30px rgba(0, 0, 0, 0.08)"
          : "0 4px 20px rgba(0, 0, 0, 0.05)",
        maxWidth: visible ? "72vw" : "86vw",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 28,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-[86vw] flex-row items-center justify-between self-start rounded-full px-6 sm:px-5 py-2 sm:py-2.5 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 lg:flex",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative hidden flex-row items-center justify-center space-x-2 text-base sm:text-lg font-medium text-[#1a1b1f] lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-5 py-2 text-[#1a1b1f] hover:text-black transition-colors rounded-full"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-black/[0.06]"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 8px 30px rgba(0, 0, 0, 0.08)"
          : "0 4px 20px rgba(0, 0, 0, 0.05)",
        width: "100%",
        borderRadius: "9999px",
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-5 py-2.5 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-3xl bg-white border-0 px-6 py-6 shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-[#1a1b1f]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1.5 text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
      aria-label="Toggle Menu"
    >
      {isOpen ? (
        <IconX className="w-6 h-6 text-black" />
      ) : (
        <IconMenu2 className="w-6 h-6 text-black" />
      )}
    </button>
  );
};
