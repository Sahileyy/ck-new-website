import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Lexend } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deutsche — Business Growth Consultants",
  description: "Expert solutions in legal, finance, digital, and creative production to drive your business forward.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${lexend.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#141414] selection:bg-[#028F1A] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

