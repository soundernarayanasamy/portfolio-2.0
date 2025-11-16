'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiMail, FiPhone, FiInstagram, FiLinkedin } from "react-icons/fi"
import { TbBrandBehance } from "react-icons/tb"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { name: "SKILLS", href: "#skills" },
    { name: "WORKS", href: "#works" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <>
      {/* BLUR OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-3xl
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          z-[90]
        `}
      ></div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full h-[85px] bg-black border-b border-white/10 z-[200]">
        <div className="h-full px-6 md:px-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <Image src="/me.svg" alt="logo" width={42} height={42} />
          </Link>

          {/* HAMBURGER / X BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex items-center justify-center cursor-pointer z-[9999]"
          >
            {/* TOP BAR */}
            <span
              className={`
                absolute w-8 h-[2px] bg-white rounded transition-all duration-300
                pointer-events-none
                ${open ? "rotate-45" : "-translate-y-[7px]"}
              `}
            />

            {/* BOTTOM BAR */}
            <span
              className={`
                absolute w-8 h-[2px] bg-white rounded transition-all duration-300
                pointer-events-none
                ${open ? "-rotate-45" : "translate-y-[7px]"}
              `}
            />
          </button>

        </div>
      </header>

      {/* FULLSCREEN MENU (BEHIND THE BUTTON) */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 flex items-center justify-center
          text-white transition-all duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          z-[150]
        `}
      >
        {/* CONTENT */}
        <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">

          {/* LETTER-SCROLL ANIMATION LINKS */}
          <div className="flex flex-col items-center gap-8 text-3xl md:text-4xl font-light">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative overflow-hidden cursor-pointer"
                style={{ lineHeight: "1em" }}
              >
                <span
                  className="
                    block transition-transform duration-300 ease-out
                    group-hover:-translate-y-full
                  "
                >
                  {item.name.split("").map((l, i) => (
                    <span key={i} className="inline-block">{l}</span>
                  ))}
                </span>

                <span
                  className="
                    absolute top-full left-0 block transition-transform duration-300 ease-out 
                    text-white/60 group-hover:-translate-y-full
                  "
                >
                  {item.name.split("").map((l, i) => (
                    <span key={i} className="inline-block">{l}</span>
                  ))}
                </span>
              </Link>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-14 text-2xl opacity-80">
            <a href="mailto:your@mail.com" className="hover:opacity-100 transition"><FiMail /></a>
            <a href="tel:+910000000000" className="hover:opacity-100 transition"><FiPhone /></a>
            <a href="https://behance.net" target="_blank" className="hover:opacity-100 transition"><TbBrandBehance /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:opacity-100 transition"><FiLinkedin /></a>
            <a href="https://instagram.com" target="_blank" className="hover:opacity-100 transition"><FiInstagram /></a>
          </div>

        </div>
      </div>
    </>
  )
}
