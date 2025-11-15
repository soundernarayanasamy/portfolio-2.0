import React from "react";
import Image from "next/image";

export default function WhatSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100dvh] w-full bg-[#f9f2e9] px-6 sm:px-8 md:px-12 py-20 text-center">
      
      {/* Section Title */}
      <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-semibold text-[#0a0a0a] mb-4">
        What I Think & What I Say
      </h2>

      {/* Subtitle */}
      <p className="text-[#555555] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        Thoughts and words may look different — but together, they form balance and clarity.
      </p>

      {/* Two Image Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full max-w-4xl">
        
        {/* What I Think */}
        <div className="flex flex-col items-center">
          <Image
            src="/whatithink/whatithink.svg"
            alt="What I Think Illustration"
            width={300}
            height={300}
            className="w-[200px] sm:w-[250px] md:w-[300px] h-auto mb-4"
          />
          <span className="text-lg font-medium text-[#0a0a0a]">
            What I Think
          </span>
        </div>

        {/* What I Say */}
        <div className="flex flex-col items-center">
          <Image
            src="/whatithink/whatisay.svg"
            alt="What I Say Illustration"
            width={300}
            height={300}
            className="w-[200px] sm:w-[250px] md:w-[300px] h-auto mb-4"
          />
          <span className="text-lg font-medium text-[#0a0a0a]">
            What I Say
          </span>
        </div>

      </div>
    </section>
  );
}
