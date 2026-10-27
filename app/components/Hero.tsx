
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface HeroProps {
  onOpenTalkModal?: () => void;
}

export default function DeutscheHero({ onOpenTalkModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Scroll progress for the sticky expansion track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Only width transitions: Old width (86vw) -> Full screen width (100vw) -> Returns to old width (86vw)
  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["86vw", "100vw", "100vw", "86vw"]
  );

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="hero-section relative w-full bg-white">
      {/* 1. First: Bold Grand Editorial Heading (matching reference) */}
      <div className="w-[86vw] mx-auto text-left pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 px-0">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-medium tracking-[-0.035em] text-[#141414] leading-[1.06] select-none normal-case [text-transform:none]">
          Guiding your business. <br className="hidden sm:block" />
          Towards growth.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[21px] font-normal text-neutral-500 mt-4 sm:mt-5 leading-relaxed tracking-[-0.01em] whitespace-normal lg:whitespace-nowrap">
          We help ambitious businesses grow with marketing, branding &amp; digital solutions.
        </p>
      </div>

      {/* 2. Sticky Scroll Container: Card -> Full Screen (100vw x 100vh) -> Returns to Old Width */}
      <div
        ref={containerRef}
        id="hero-video-section"
        className="hero-video-container relative w-full"
        style={{ height: "240vh" }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-20">
          <motion.div
            style={{
              width: videoWidth,
              height: "100vh",
              borderRadius: "0px",
            }}
            onClick={togglePlay}
            className="relative h-screen overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.18)] cursor-pointer group select-none rounded-none"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/drgpcbhjc/video/upload/v1778837604/CK_WEBSITE_VIDEO_wide_1_zm8yux.mp4" type="video/mp4" />
            </video>

            {/* Vibrant Circular Play/Pause Indicator (matching screenshots 1 & 2) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  scale: isPlaying ? 0.9 : 1,
                  opacity: isPlaying ? 0.45 : 1,
                }}
                whileHover={{ scale: 1.15, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5A52FF] text-white flex items-center justify-center shadow-[0_10px_35px_rgba(90,82,255,0.45)]"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </motion.div>
            </div>

            {/* Brand Watermark Bottom Right (matching screenshot 3) */}
            <div className="absolute bottom-6 right-8 pointer-events-none select-none z-10">
              <span className="text-white/60 font-bold text-lg sm:text-xl tracking-tight">
                CK Creatives
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}