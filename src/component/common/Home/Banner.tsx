"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Leaf, Sun, Sprout } from "lucide-react"
import Image from "next/image"
const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline()
      tl.fromTo(textRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" })
        .fromTo(imageRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .fromTo(
          iconsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.3"
        )

      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(bannerRef.current, {
        opacity: 0.9,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    loadGSAP()
  }, [])

  return (
    <div
      ref={bannerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 overflow-hidden"
    >
      {/* Floating Icons */}
      <div ref={iconsRef} className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-green-300 w-8 h-8 opacity-60" />
        <Sun className="absolute top-32 right-20 text-yellow-300 w-10 h-10 opacity-50" />
        <Sprout className="absolute bottom-40 left-20 text-green-400 w-6 h-6 opacity-70" />
        <Leaf className="absolute bottom-20 right-32 text-green-200 w-7 h-7 opacity-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left - Text */}
        <div ref={textRef} className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow">
            <Sprout className="w-4 h-4" />
            Sustainable Agriculture
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Grow Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">
              Future
            </span>{" "}
            with Smart Farming
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Transform your farming with modern innovations that support your crops and the planet. Join the green revolution.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-base font-semibold transition"
              aria-label="Start Growing Today"
            >
              Start Growing Today <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
            <button className="px-6 py-3 border border-green-300 text-green-700 rounded-xl text-base font-semibold hover:bg-green-50 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">10K+</div>
              <div className="text-sm text-gray-600">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">95%</div>
              <div className="text-sm text-gray-600">Yield Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/banner1.jpg"
            alt="Smart farming illustration"
            width={800}
            height={450}
            className="rounded-3xl object-cover w-full h-auto"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Smart Irrigation</h3>
                <p className="text-sm text-gray-600">Save 40% water with AI systems</p>
              </div>
            </div>
          </div>

          {/* Decorative Lights */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 opacity-50 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 opacity-40 rounded-full blur-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Banner