"use client";

import React, { useState } from "react";
import { User, Phone, Mail, MessageSquare, X as CloseIcon } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-[32px] sm:rounded-[36px] shadow-2xl p-6 sm:p-8 md:p-9 text-neutral-900 overflow-hidden my-auto">
        
        {/* Circular Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-black flex items-center justify-center transition-all cursor-pointer"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        {/* Top Header */}
        <div className="text-center mb-6 pt-1">
          <img
            src="/images/ck.logo.png"
            alt="CK Creatives Logo"
            className="h-6 sm:h-7 w-auto object-contain mx-auto mb-3"
          />
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
            Let's build the{" "}
            <span className="font-serif italic font-normal text-neutral-400 block sm:inline">
              extraordinary.
            </span>
          </h2>
          
          <p className="text-xs sm:text-sm text-neutral-500 max-w-[320px] mx-auto mt-2.5 leading-relaxed">
            Fill out the form below and our strategy team will reach out to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-1.5 pl-0.5">
                YOUR FULL NAME
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-3 bg-white border border-neutral-200 rounded-2xl text-xs sm:text-sm placeholder:text-neutral-400 text-neutral-900 focus:outline-none focus:border-[#028F1A] focus:ring-2 focus:ring-[#028F1A]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-1.5 pl-0.5">
                PHONE NUMBER
              </label>
              <div className="relative flex items-center">
                <Phone className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                <input
                  type="tel"
                  required
                  placeholder="7994707927"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-3 bg-white border border-neutral-200 rounded-2xl text-xs sm:text-sm placeholder:text-neutral-400 text-neutral-900 focus:outline-none focus:border-[#028F1A] focus:ring-2 focus:ring-[#028F1A]/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-1.5 pl-0.5">
              EMAIL ADDRESS
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 bg-white border border-neutral-200 rounded-2xl text-xs sm:text-sm placeholder:text-neutral-400 text-neutral-900 focus:outline-none focus:border-[#028F1A] focus:ring-2 focus:ring-[#028F1A]/20 transition-all"
              />
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label className="block text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-1.5 pl-0.5">
              MESSAGE (OPTIONAL)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
              <textarea
                rows={3}
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pl-10 pr-3.5 py-3 bg-white border border-neutral-200 rounded-2xl text-xs sm:text-sm placeholder:text-neutral-400 text-neutral-900 focus:outline-none focus:border-[#028F1A] focus:ring-2 focus:ring-[#028F1A]/20 transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-4 bg-black hover:bg-[#028F1A] text-white font-bold text-xs tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              {isSubmitted ? (
                <span className="text-white">Message Sent Successfully ✓</span>
              ) : (
                <span>SEND MESSAGE</span>
              )}
            </button>
          </div>
        </form>

        {/* Footer Social Follow */}
        <div className="mt-6 pt-5 border-t border-neutral-100 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3">
            FOLLOW OUR JOURNEY
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#028F1A] hover:text-white text-neutral-600 flex items-center justify-center transition-all"
            >
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#028F1A] hover:text-white text-neutral-600 flex items-center justify-center transition-all"
            >
              {/* LinkedIn SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://wa.me/917994707927"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#028F1A] hover:text-white text-neutral-600 flex items-center justify-center transition-all"
            >
              {/* WhatsApp SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.1 7.69C7.86 7.96 7.18 8.6 7.18 9.9C7.18 11.2 8.13 12.45 8.26 12.63C8.39 12.8 10.12 15.47 12.78 16.61C13.41 16.88 13.9 17.04 14.29 17.16C14.92 17.36 15.49 17.33 15.94 17.26C16.45 17.19 17.49 16.63 17.71 16.02C17.93 15.41 17.93 14.88 17.86 14.78C17.79 14.67 17.62 14.61 17.35 14.47C17.09 14.34 15.8 13.7 15.56 13.61C15.32 13.52 15.15 13.48 14.97 13.74C14.8 14.01 14.3 14.61 14.15 14.78C14 14.96 13.85 14.98 13.59 14.85C13.33 14.71 12.48 14.43 11.48 13.54C10.7 12.84 10.17 11.98 10.02 11.72C9.87 11.45 10 11.31 10.14 11.17C10.26 11.05 10.4 10.87 10.53 10.72C10.66 10.57 10.71 10.46 10.79 10.29C10.88 10.11 10.84 9.96 10.77 9.83C10.71 9.7 10.19 8.41 9.97 7.89C9.76 7.37 9.54 7.45 9.38 7.44C9.23 7.43 9.06 7.35 8.83 7.35Z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#028F1A] hover:text-white text-neutral-600 flex items-center justify-center transition-all"
            >
              {/* X / Twitter SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
