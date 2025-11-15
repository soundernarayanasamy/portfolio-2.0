import React from "react";

export default function HeroSection() {
  return (
    <div className="p-4 bg-[#f9f2e9]">
      <section className="flex flex-col items-center justify-center min-h-[100dvh] w-full rounded-2xl bg-[#2659bf] text-[#f9f2e9] px-6 sm:px-8 md:px-12 text-center">
        
        {/* Status badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#f9f2e9] text-[#2659bf] rounded-full px-4 py-1 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm sm:text-base font-medium">
              Available for projects
            </span>
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-[clamp(2rem,6vw,4rem)] font-semibold mb-3 leading-tight">
          Design. Build. Inspire.
        </h1>

        {/* Subtext / tagline */}
        <p className="text-[#f9f2e9]/90 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Crafting digital experiences that blend creativity, clarity, and impact — one project at a time.
        </p>

        {/* CTA button */}
        <button className="inline-flex items-center gap-2 bg-[#f9f2e9] text-[#2659bf] font-medium text-sm sm:text-base px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          Book a Meeting
        </button>

      </section>
    </div>
  );
}
