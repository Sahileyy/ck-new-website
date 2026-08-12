import Link from "next/link";

interface ExploreButtonProps {
  href?: string;
  className?: string;
}

export default function ExploreButton({ href = "/blog", className = "" }: ExploreButtonProps) {
  return (
    <Link href={href} className={`inline-block ${className}`}>
      <button className="cta group inline-flex items-center border-none bg-transparent cursor-pointer p-0 text-black">
        <span className="hover-underline-animation relative text-black pb-[7px] tracking-[4px] text-[14px] pr-[15px] uppercase after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
          explore
        </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
          className="-translate-x-[8px] transition-all duration-300 ease-in-out fill-current group-hover:translate-x-0 group-active:scale-90"
        >
          <path
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </button>
    </Link>
  );
}
