import Image from "next/image";

const services = [
  ["Digital Marketing Strategy", "Build campaigns with a clear strategy, the right audience, and performance that keeps improving.", "/images/cards/digi-market.jpeg"],
  ["Brand Strategy and Design", "Create a distinctive brand identity that earns attention and makes every customer interaction meaningful.", "/images/cards/brands.jpeg"],
  ["Content and Creative Development", "Turn your ideas into content that tells a compelling story and gives your audience a reason to engage.", "/images/cards/content.creatives.jpeg"],
  ["Website Design and Development", "Build fast, polished digital experiences that make your business easy to discover and choose.", "/images/cards/web.dev.jpeg"],
  ["Social Media Management", "Keep your brand active and relevant with content made for conversation, community, and growth.", "/images/cards/seo.jpeg"],
  ["Video Production and VFX", "Bring your story to life through memorable film, motion, and visuals crafted for maximum impact.", "/images/cards/production.jpeg"],
  ["2D and 3D Animation", "Make complex ideas clear and exciting through animation designed to capture attention.", "/images/cards/2d.jpeg"],
  ["Search Engine Optimisation", "Help the right people discover your brand with search content and optimisation built for long-term visibility.", "/images/cards/seo2image.jpg"],
] as const;

export default function ServicesShowcase() {
  return (
    <section id="our-services" className="w-full bg-white px-[4%] py-20 lg:px-[8%] lg:py-28">
      <div className="mx-auto max-w-[1720px]">
        {/* <div className="text-center">
          <p className="text-3xl font-bold opacity-80 lg:text-4xl uppercase mb-20 text-neutral-900 "> services</p>
        </div> */}
        <div className="grid gap-6 pb-14 lg:grid-cols-[1.4fr_0.9fr] lg:items-end lg:pb-20">
          <div>
            <p className="text-xl font-medium uppercase tracking-[0.18em] text-[#e77800]">Services</p>
            <h2 className="heading-normal-case text-4xl font-bold leading-[0.95]  opacity-80 sm:text-4xl lg:text-5xl xl:text-6xl"> Our Area of Expertise </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">CK Creatives brings strategy, design, content, and technology together to create marketing that moves your business forward.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map(([title, description, image]) => (
            <article key={title} className="group relative min-h-[350px] rounded-md  overflow-hidden bg-slate-200 sm:min-h-[400px] lg:min-h-[488px]">
              <Image src={image} alt={title} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 22vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 border border-white/25 bg-[#e77800]/65 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                <h3 className="text-2xl font-light leading-[1.12] tracking-[-0.045em] sm:text-3xl">{title}</h3>
                <p className="grid grid-rows-[0fr] transition-[grid-template-rows,margin] duration-500 group-hover:mt-36 group-hover:grid-rows-[1fr] lg:group-hover:mt-40"><span className="overflow-hidden text-base leading-relaxed">{description}</span></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
