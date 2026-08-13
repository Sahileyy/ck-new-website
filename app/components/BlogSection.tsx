"use client";

import ExploreButton from "./ExploreButton";

interface BlogSectionProps {
  onOpenTalkModal?: () => void;
}

export default function BlogSection({ onOpenTalkModal }: BlogSectionProps) {
  const blogs = [
    {
      id: 1,
      title: "Decarbonizing the Phosphate and Potash Fertilizer Industry",
      type: "Report",
      date: "16 Jul 2026",
      image: "/images/blog/image1.png",
      isFeaturedCard: true,
    },
    {
      id: 2,
      title: "Trellis Impact 26 Insights: Where Innovation Powers Sustainable Business",
      excerpt:
        "Businesses are entering a new phase of sustainable growth, where scaling AI infrastructure, circular models, low-carbon operations, carbon drawdown.",
      type: "Blog",
      date: "10 Jul 2026",
      image: "/images/blog/image2.png",
      isFeaturedCard: false,
    },
    {
      id: 3,
      title: "Sustainability redefined: from ambition to value creation in today's Europe",
      excerpt:
        "Sustainability in Europe is entering a more decisive phase. Amid economic uncertainty, geopolitical tensions, and growing regulatory complexity.",
      type: "Blog",
      date: "10 Jul 2026",
      image: "/images/blog/image3.png",
      isFeaturedCard: false,
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-between bg-white px-[8%] py-16 sm:py-20">
      <div>
        <h2 className="font-neutral font-small text-2xl sm:text-4xl text-[#2B3838] mb-10">
          Blog
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blogs.map((item) => (
            <div
              key={item.id}
              className={`group relative flex flex-col justify-between overflow-hidden transition-colors duration-300 rounded-none p-0 ${item.isFeaturedCard ? "bg-[#edffef]" : "bg-transparent hover:bg-[#edffef]/60"
                }`}
            >
              <div>
                {/* Header Image Container */}
                <div className="w-full h-48 sm:h-52 bg-gray-200 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className={item.isFeaturedCard ? "p-6 sm:p-8" : "py-6 px-4 sm:px-6"}>
                  {/* Title in Editorial Serif Font */}
                  <h3
                    className={`text-xl sm:text-2xl font-serif text-[#2B3838] leading-snug mb-4 ${item.isFeaturedCard ? "font-normal" : "font-serif"
                      }`}
                  >
                    {item.title}
                  </h3>

                  {/* Optional Excerpt */}
                  {item.excerpt && (
                    <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                  )}

                  {/* Metadata Tag */}
                  <div className="text-[11px] font-sans text-gray-500 tracking-wider">
                    <span>{item.type}</span>
                    <span className="mx-2">|</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Featured Card Bottom Action Button */}
              {item.isFeaturedCard && item.buttonText && (
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={onOpenTalkModal}
                    className="px-6 py-2.5 rounded-full border border-[#2B3838] text-[#2B3838] hover:bg-[#2B3838] hover:text-white transition-all text-xs font-bold tracking-wider uppercase cursor-pointer"
                  >
                    {item.buttonText}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Explore CTA Button at bottom of blog section */}
      <div className="mt-9 flex justify-end w-full">
        <ExploreButton />
      </div>
    </section>
  );
}
