import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const neutralFace = localFont({
  src: [
    {
      path: "./fonts/NeutralFace.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeutralFace-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neutral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deutsche — Business Growth Consultants",
  description: "Expert solutions in legal, finance, digital, and creative production to drive your business forward.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${neutralFace.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#141414] selection:bg-[#028F1A] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

