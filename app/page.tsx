'use client'
import { useEffect } from 'react'
import Lenis, { LenisOptions } from '@studio-freight/lenis'
import HeroSection from '@/components/hero/page'
import Navbar from '@/components/nav/page'

export default function Page() {
  useEffect(() => {
    // ✅ Add smooth options with custom easing for buttery feel
    const options: LenisOptions & { smoothTouch?: boolean } = {
      duration: 1.6, // longer = smoother
      easing: (t: number) =>
        1 - Math.pow(2, -10 * t), // very smooth ease-out curve
      smoothTouch: true,
    }

    const lenis = new Lenis(options)

    const raf = (time: number): void => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Navbar/>
      <HeroSection />
    </main>
  )
}
