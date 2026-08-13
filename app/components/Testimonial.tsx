"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; 
import Image from "next/image";

interface ServicesProps {
  onOpenTalkModal: () => void;
}

const services = [
  {
    num: "01",
    title: "A partner that understands growth.",
    desc: "CK Creatives helped us bring clarity to our marketing and turn our campaigns into a more consistent source of qualified business.",
    image: "/images/testimonials/testimonial-01.jpg",
  },
  {
    num: "02",
    title: "They made our marketing work harder.",
    desc: "CK Creatives brought the right strategy, testing, and optimisation to help us reach better customers and improve our overall performance.",
    image: "/images/testimonials/testimonial-02.jpg",
  },
  {
    num: "03",
    title: "From ideas to measurable results.",
    desc: "CK Creatives understood our business quickly and built campaigns that helped us grow while keeping our goals at the centre.",
    image: "/images/testimonials/testimonial-03.jpg",
  },
  {
    num: "04",
    title: "A team that thinks beyond campaigns.",
    desc: "TCK Creatives helped us connect our marketing efforts with real business goals and make better decisions from the data.",
    image: "/images/testimonials/testimonial-04.jpg",
  },
  {
    num: "05",
    title: "They brought structure to our growth.",
    desc: "Working with CK Creatives gave us a clearer strategy and a much better understanding of what was actually driving our results.",
    image: "/images/testimonials/testimonial-05.jpg",
  },
  {
    num: "06",
    title: "They genuinely became part of our team.",
    desc: "CK Creatives challenged our thinking, brought fresh ideas, and continuously looked for ways to improve our marketing performance.",
    image: "/images/testimonials/testimonial-06.jpg",
  },
  {
    num: "07",
    title: "Growth feels more predictable now.",
    desc: "CK Creatives gave us the strategy and insights we needed to scale with greater confidence and build a stronger foundation for the future.",
    image: "/images/testimonials/testimonial-07.jpg",
  },
];

// Flex grow distribution ratios for the 6 preview slots in order of proximity to featured image
const flexRatios = [5.2, 2.6, 1.4, 1.1, 0.95, 0.85];
const hoverFlexRatios = [7.8, 4.4, 2.8, 2.3, 2.0, 1.8];

export default function Testimonial({ onOpenTalkModal }: ServicesProps) {
  const total = services.length;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animatingState, setAnimatingState] = useState<{
    isAnimating: boolean;
    outgoingIndex: number | null;
    direction: "next" | "prev";
  }>({
    isAnimating: false,
    outgoingIndex: null,
    direction: "next",
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (targetIndex: number, dir: "next" | "prev") => {
      const nextIndex = (targetIndex + total) % total;
      if (nextIndex === active) return;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      const currentActive = active;

      setAnimatingState({
        isAnimating: true,
        outgoingIndex: currentActive,
        direction: dir,
      });

      setDirection(dir);
      setActive(nextIndex);

      timerRef.current = setTimeout(() => {
        setAnimatingState({
          isAnimating: false,
          outgoingIndex: null,
          direction: dir,
        });
      }, 850);
    },
    [active, total]
  );

  const next = useCallback(() => goTo(active + 1, "next"), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1, "prev"), [active, goTo]);

  // Auto-slide to the next testimonial every 3 seconds (3000ms)
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [next]);
  const select = useCallback(
    (index: number) => {
      if (index === active) return;
      const diff = (index - active + total) % total;
      const dir: "next" | "prev" = diff <= total / 2 ? "next" : "prev";
      goTo(index, dir);
    },
    [active, goTo, total]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const current = services[active];

  // The 6 non-active preview items in cyclic order starting from active + 1
  const previewItems = Array.from({ length: total - 1 }, (_, slotIdx) => {
    const serviceIndex = (active + 1 + slotIdx) % total;
    return {
      slotIdx,
      serviceIndex,
      service: services[serviceIndex],
      flexRatio: flexRatios[slotIdx] || 1,
      hoverFlexRatio: hoverFlexRatios[slotIdx] || 2,
    };
  });

  return (
    <section
      id="services"
      onKeyDown={onKeyDown}
      tabIndex={0}
      className="w-full bg-white px-[8%] py-16 lg:py-24 scroll-mt-14 focus:outline-none"
    >
      <div className="w-full mx-auto">
        {/* --- HEADER --- */}
        <div className="flex items-end justify-between gap-4 mb-6 lg:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#0F172A] tracking-tighter">
              What's our clients say
            </h2>
            <p className="text-slate-500 text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-tighter">
              Real experiences from the brands
            </p>
          </div>

          <div className="flex items-center justify-end gap-1.5 sm:gap-2 shrink-0">
           <button onClick={prev} aria-label="Previous services" className="flex size-14 items-center justify-center rounded-full border border-[#0F172A] text-2xl text-[#0F172A] transition-colors hover:border-[#6366F1] hover:text-[#6366F1] "><ArrowLeft className="w-5 h-5" /></button>
            <button onClick={next} aria-label="Next services" className="flex size-14 items-center justify-center rounded-full border border-[#0F172A] text-2xl text-[#0F172A] transition-colors hover:border-[#6366F1]  hover:text-[#6366F1]  "><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>

        {/* --- MAIN VISUAL STAGE: LARGE FEATURED IMAGE + PROGRESSIVE PREVIEW RAIL --- */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-3.5 items-stretch w-full h-[320px] sm:h-[380px] lg:h-[420px] xl:h-[460px]">
          {/* Large featured media (~73% width on desktop) */}
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="main-featured-stage min-w-0 h-full relative rounded-sm lg:rounded-sm overflow-hidden bg-slate-100 shadow-xs"
          >
            {animatingState.isAnimating && animatingState.outgoingIndex !== null ? (
              <>
                {/* Outgoing image sliding OUT */}
                <div
                  key={`outgoing-${animatingState.outgoingIndex}`}
                  className={`absolute inset-0 z-0 ${
                    animatingState.direction === "next"
                      ? "animate-img-slide-out-left"
                      : "animate-img-slide-out-right"
                  }`}
                >
                  <Image
                    src={services[animatingState.outgoingIndex].image}
                    alt={services[animatingState.outgoingIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                  />
                </div>

                {/* Incoming image sliding IN */}
                <div
                  key={`incoming-${active}`}
                  className={`absolute inset-0 z-10 ${
                    animatingState.direction === "next"
                      ? "animate-img-slide-in-right"
                      : "animate-img-slide-in-left"
                  }`}
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </>
            ) : (
              /* Static Active Image */
              <div key={`static-${active}`} className="absolute inset-0 z-0">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Progressively Compressed Horizontal Preview Rail (~27% width on desktop) */}
          <div className="preview-rail-container hidden lg:flex shrink-0 gap-3 lg:gap-3.5 h-full items-stretch min-w-0">
            {previewItems.map(({ serviceIndex, service, flexRatio, hoverFlexRatio }) => {
              return (
                <button
                  key={service.title}
                  onClick={() => select(serviceIndex)}
                  aria-label={`View ${service.title}`}
                  style={{
                    "--base-flex": `${flexRatio} 1 0%`,
                    "--hover-flex": `${hoverFlexRatio} 1 0%`,
                  } as React.CSSProperties}
                  className="preview-thumbnail relative h-full rounded-sm lg:rounded-sm overflow-hidden cursor-pointer ring-1 ring-black/5 min-w-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="200px"
                    className="object-cover object-left"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* --- EDITORIAL CONTENT & CTA BELOW IMAGE STAGE --- */}
        <div className="mt-5 lg:mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Active service caption */}
          <div key={`caption-${active}`} className="max-w-3xl animate-slide-right text-lg sm:text-xl lg:text-2xl">
            <h3 className="inline font-medium text-[#0F172A] tracking-tighter mr-2">
              {current.title}.
            </h3>
            <span className="text-slate-500 font-normal tracking-tighter">
              {current.desc}
            </span>
          </div>

          {/* Right-aligned CTA button matching reference screenshot layout */}
          <div className="shrink-0 md:self-center">
            <button
              onClick={onOpenTalkModal}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-[#6366F1] border border-slate-200 hover:border-[#6366F1] rounded-lg shadow-2xs font-medium text-sm tracking-[-0.01em] transition-all inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Discuss Your Project</span>
              <span className="text-sm group-hover:translate-x-0.5 transition-transform">›</span>
            </button>
          </div>
        </div>

        {/* --- MOBILE / TABLET HORIZONTAL SWIPEABLE THUMBNAIL STRIP --- */}
        <div className="lg:hidden mt-6 -mx-[8%] px-[8%]">
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => select(i)}
                aria-label={`View ${s.title}`}
                aria-current={i === active}
                className={`relative shrink-0 w-28 h-20 rounded-xl overflow-hidden snap-center transition-all cursor-pointer ring-2 ${
                  i === active ? "ring-[#6366F1] scale-105 opacity-100 z-10" : "ring-transparent opacity-65"
                }`}
              >
                <Image src={s.image} alt={s.title} fill sizes="112px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
