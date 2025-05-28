'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const historyTitleRef = useRef(null);
  const historyTextRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  // Missing refs added here:
  const strengthsRef = useRef(null);
  const strengthsTitleRef = useRef(null);

  useEffect(() => {
    // About section animation
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(textRef.current, {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(imageRef.current, {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
    });

    // History section animation
    gsap.from(historyTitleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: historyTitleRef.current,
        start: 'top 85%',
      },
    });

    gsap.from(historyTextRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: historyTextRef.current,
        start: 'top 85%',
      },
    });

    gsap.from([img1Ref.current, img2Ref.current, img3Ref.current], {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: img1Ref.current,
        start: 'top 90%',
      },
    });

    // Optional: Animate strengths section if needed
    gsap.from(strengthsTitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: strengthsRef.current,
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 px-4 sm:px-8">
      <h1
        ref={headingRef}
        className="text-4xl font-bold text-green-800 text-center mb-12"
      >
        About Way Agro Industry
      </h1>

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Left Text */}
        <div ref={textRef}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Way Agro is the dream of young entrepreneurs from a small region in Bangladesh, determined to build a consumer-friendly business model. Since 2010, we’ve faced challenges in farming, from poor-quality feed to technical limitations.
            <br /><br />
            To overcome these, we launched Community Development Farming (CDF) and the Farmer Participatory Program Approach (FPPA), ensuring quality at every level. We’re not just a business — we're a mission-driven company enhancing the country's socio-economic development.
            <br /><br />
            Our commitment lies in ingredient quality, process control, and safety. Through our benchmark brand “Sujala,” we've provided farmers with the best feed, minimized risks, and maximized results — fulfilling our promise: “Progressive Farming: Prosperous Life.”
          </p>
        </div>

        {/* Right Image Collage Container */}
        <div
          ref={imageRef}
          className="p-4 bg-gradient-to-br from-green-100 via-yellow-50 to-green-200 rounded-2xl shadow-2xl w-fit mx-auto"
        >
          <Image
            src="/assets/feedmp1.jpg"
            alt="Way Agro Collage"
            width={500}
            height={400}
            className="rounded-xl shadow-lg border-[6px] border-white"
            priority
          />
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-6xl mx-auto">
        <h2
          ref={historyTitleRef}
          className="text-4xl font-bold text-green-800 text-center mb-10"
        >
          History of Way Agro
        </h2>

        <p
          ref={historyTextRef}
          className="text-gray-700 text-lg leading-relaxed mb-12 text-justify"
        >
          Way Agro started his business concern not only for business but for socio-economic development of the country. We are an extensively growing company in Bangladesh.
          <br /><br />
          Our promise for safe nutrition: Sujala feed is a substantial source of protein & nutrition in a household’s nutritional diet. To ensure health safety, Way Agro looks seriously into the following components: ingredient quality, process control, finished feed quality, and control of toxic substances including pathogenic micro-organisms.
          <br /><br />
          Sujala management ensures support from root-level stakeholders, farm management, and efficient cultivation. By producing cost-effective feed, Sujala sustains growth without compromising profitability.
          <br /><br />
          We ensure the best quality and aim to provide “Progressive Farming: Prosperous Life,” which is the anthem to people’s “Key to Prosperity.” Our product and business are ethical, and our environment is friendly & sustainable.
          <br /><br />
          Sujala has had a tremendous positive impact on farmers for its excellent food conversion ratio and reduced farm management hazards — becoming a trusted companion to stakeholders.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            ref={img1Ref}
            className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <Image
              src="/assets/mach.jpg"
              alt="Fish farming"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            ref={img2Ref}
            className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <Image
              src="/assets/murgiFeed.jpg"
              alt="Poultry feed"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            ref={img3Ref}
            className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <Image
              src="/assets/goru.jpg"
              alt="Cattle feed"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section ref={strengthsRef} className="py-20 container mx-auto px-4">
        <h2 ref={strengthsTitleRef} className="text-4xl font-bold text-green-800 text-center mb-16">
          Our Strengths
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            <li className="strength-item flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                {/* Replace Check with your icon or import */}
                <svg className="text-green-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Quality</h3>
                <p className="text-gray-600">
                  Our unwavering commitment to quality ensures that every product meets the highest standards.
                </p>
              </div>
            </li>

            <li className="strength-item flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg className="text-green-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open communication and transparency in all our business practices.
                </p>
              </div>
            </li>

            <li className="strength-item flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg className="text-green-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Accessibility</h3>
                <p className="text-gray-600">
                  Our products and services are designed to be accessible to farmers of all sizes.
                </p>
              </div>
            </li>

            <li className="strength-item flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg className="text-green-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Consistency</h3>
                <p className="text-gray-600">
                  We deliver consistent quality and service that our customers can rely on.
                </p>
              </div>
            </li>

            <li className="strength-item flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg className="text-green-600 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  Our continuous investment in research and development keeps us at the forefront of agricultural
                  innovation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
