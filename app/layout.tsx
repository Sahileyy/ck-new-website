import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter — a clean geometric sans used as a free stand-in for Söhne.
// Variable font, so no explicit weight array is needed.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#141414] selection:bg-[#028F1A] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

