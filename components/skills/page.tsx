"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface PillItem {
  label: string;
  icon: string;
  color: string;
}

const leftPills: PillItem[] = [
  { label: "Design systems", icon: "⬛", color: "#2659bf" },
  { label: "UX Design", icon: "◼︎", color: "#0A0A0A" },
  { label: "Research", icon: "🔍", color: "#2659bf" },
];

const rightPills: PillItem[] = [
  { label: "Animation", icon: "⟲", color: "#00c98d" },
  { label: "Branding", icon: "★", color: "#ff4bb2" },
  { label: "Strategy", icon: "✕", color: "#ffb300" },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const leftPillsRef = useRef<HTMLDivElement | null>(null);
  const rightPillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headingRef.current || !sectionRef.current) return;

    // Split heading into characters
    const split = new SplitType(headingRef.current, { types: "chars" });

    // Start letters gray
    gsap.set(split.chars, { color: "#bfbfbf" });

    // Smooth color fade, ending at center of screen
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1.2,
      },
    }).to(split.chars, {
      color: "#000000",
      ease: "power2.out",
      stagger: 0.02,
      duration: 1.2,
    });

    // Fade-in for label & pills
    const label = labelRef.current;
    const leftEl = leftPillsRef.current;
    const rightEl = rightPillsRef.current;

    const leftItems = leftEl
      ? leftEl.querySelectorAll<HTMLDivElement>(".pill-item-left")
      : [];
    const rightItems = rightEl
      ? rightEl.querySelectorAll<HTMLDivElement>(".pill-item-right")
      : [];

    gsap.set(label, { opacity: 0, y: 10 });
    gsap.set(leftItems, { opacity: 0, y: 18, x: -16 });
    gsap.set(rightItems, { opacity: 0, y: 18, x: 16 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })
      .to(label, { opacity: 1, y: 0, duration: 0.35 })
      .to(
        leftItems,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .to(
        rightItems,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full bg-[#f9f2e9]
        px-5 sm:px-6 md:px-10 lg:px-16
        py-16 sm:py-20 md:py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          grid gap-8 lg:gap-12
          items-center justify-items-center
          lg:grid-cols-[1fr_1.4fr_1fr]
        "
      >
        {/* Left pills */}
        <div
          ref={leftPillsRef}
          className="hidden lg:flex flex-col gap-6 items-start justify-center"
        >
          {leftPills.map((pill, index) => (
            <div
              key={pill.label}
              className={`
                pill-item-left
                flex items-center gap-3
                bg-white rounded-full
                px-5 py-3
                shadow-[0_14px_30px_rgba(0,0,0,0.08)]
                opacity-0
                ${index === 0 ? "ml-2 -rotate-2" : ""}
                ${index === 1 ? "ml-6 rotate-1" : ""}
                ${index === 2 ? "ml-10 -rotate-1" : ""}
              `}
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full text-white text-xs"
                style={{ backgroundColor: pill.color }}
              >
                {pill.icon}
              </span>
              <span className="font-display text-[0.9rem] text-[#111111]">
                {pill.label}
              </span>
            </div>
          ))}
        </div>

        {/* Center */}
        <div className="flex flex-col items-center text-center">
          <div
            ref={labelRef}
            className="mb-4 flex items-center justify-center gap-4 opacity-0"
          >
            <span className="hidden sm:block h-[0.5px] w-16 bg-[#d3d3d3]/70" />
            <span className="font-serif-label text-[#9a9a9a] text-base sm:text-lg italic tracking-[0.08em]">
              Hello!
            </span>
            <span className="hidden sm:block h-[0.5px] w-16 bg-[#d3d3d3]/70" />
          </div>

          <h2
            ref={headingRef}
            className="
              font-display font-normal
              max-w-[48rem]
              text-[1.8rem]
              sm:text-[2.2rem]
              md:text-[2.75rem]
              leading-[1.4em]
              tracking-[-0.04em]
            "
          >
            My skills are the direction behind great design.
          </h2>
        </div>

        {/* Right pills */}
        <div
          ref={rightPillsRef}
          className="hidden lg:flex flex-col gap-6 items-end justify-center"
        >
          {rightPills.map((pill, index) => (
            <div
              key={pill.label}
              className={`
                pill-item-right
                flex items-center gap-3
                bg-white rounded-full
                px-5 py-3
                shadow-[0_14px_30px_rgba(0,0,0,0.08)]
                opacity-0
                ${index === 0 ? "mr-2 rotate-2" : ""}
                ${index === 1 ? "mr-6 -rotate-1" : ""}
                ${index === 2 ? "mr-10 rotate-1" : ""}
              `}
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full text-white text-xs"
                style={{ backgroundColor: pill.color }}
              >
                {pill.icon}
              </span>
              <span className="font-display text-[0.9rem] text-[#111111]">
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile pills */}
      <div className="mt-10 flex lg:hidden flex-wrap justify-center gap-4">
        {[...leftPills, ...rightPills].map((pill, index) => (
          <div
            key={pill.label}
            className={`
              flex items-center gap-2.5
              bg-white rounded-full
              px-4 py-2.5
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
            `}
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-white text-[0.6rem]"
              style={{ backgroundColor: pill.color }}
            >
              {pill.icon}
            </span>
            <span className="font-display text-[0.8rem] text-[#111111]">
              {pill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
