"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Puls",
    tech: ["Wellness", "Fitness"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
  },
  {
    title: "EyeCatcher",
    tech: ["Beauty", "Hairs"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop",
  },
  {
    title: "FnAxiom Website",
    tech: ["Development", "Design"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
  },
];

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !labelRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      const label = labelRef.current!;
      const heading = headingRef.current!;

      // Split heading into word spans
      const originalText = heading.innerText;
      const words = originalText.split(" ");
      heading.innerHTML = words
        .map(
          (word, i) =>
            `<span class="project-word inline-block">${word}${
              i < words.length - 1 ? "&nbsp;" : ""
            }</span>`
        )
        .join("");

      const wordSpans =
        heading.querySelectorAll<HTMLSpanElement>(".project-word");

      // Initial states
      gsap.set(label, { opacity: 0, y: 10 });
      gsap.set(wordSpans, {
        opacity: 0.15,
        y: 10,
        color: "#b3b3b3",
      });

      // Scroll animation for label + heading only
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .to(label, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        })
        .to(
          wordSpans,
          {
            opacity: 1,
            y: 0,
            color: "#000000",
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.04,
          },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#f9f2e9]
        px-5 sm:px-6 md:px-10 lg:px-16
        py-16 sm:py-20 md:py-24
      "
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        <div
          ref={labelRef}
          className="mb-0 flex items-center justify-center gap-4"
        >
          <span className="hidden sm:block h-px w-16 bg-[#d6d6d6]" />
          <span
            className="
              text-[#9a9a9a]
              text-xl
              font-['Instrument_Serif',serif]
              italic
              tracking-tighter
            "
          >
            Our Projects
          </span>
          <span className="hidden sm:block h-px w-16 bg-[#d6d6d6]" />
        </div>

        <h2
          ref={headingRef}
          className="
            font-['Inter_Display','Inter',system-ui,-apple-system,BlinkMacSystemFont,sans-serif]
            font-normal
            text-[#2659bf]
            tracking-tighter
            text-[2.3rem]
            sm:text-[2.6rem]
            md:text-[3rem]
            md:leading-[67px]
          "
        >
          Selected Projects
        </h2>
      </div>

      {/* Projects Grid - 2xN mobile, 3xN desktop */}
      <div
        className="
          max-w-7xl mx-auto
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6 md:gap-8
        "
      >
        {projects.map((project) => (
          <div key={project.title} className="bg-transparent">
            <div
              className="
                group
                relative
                bg-white
                rounded-[1.5rem]
                p-3 sm:p-4 md:p-5
                shadow-[0_6px_22px_rgba(0,0,0,0.04)]
              "
            >
              {/* Image with subtle zoom on hover */}
              <div
                className="
                  relative
                  w-full
                  aspect-[16/10]
                  overflow-hidden
                  rounded-xl
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform
                    duration-400
                    ease-[cubic-bezier(0.33,1,0.68,1)]
                    group-hover:scale-[1.025]
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-4
                  text-[#0A0A0A]
                  font-['Inter_Display','Inter',system-ui,-apple-system,BlinkMacSystemFont,sans-serif]
                  font-normal
                  tracking-tight
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  md:text-[1.15rem]
                "
              >
                {project.title}
              </h3>

              {/* Tech chips */}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1
                      rounded-full
                      bg-white
                      text-[0.65rem]
                      sm:text-[0.7rem]
                      text-[#7a7a7a]
                      font-light
                      border border-[#e0d7cb]
                      whitespace-nowrap
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
