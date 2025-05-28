'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const mainHeadingRef = useRef(null);
  const storyTextRef = useRef(null);
  const storyImageRef = useRef(null);

  const historyHeadingRef = useRef(null);
  const historyParagraphRef = useRef(null);
  const historyImgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const strengthsHeadingRef = useRef(null);
  const strengthItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.from(mainHeadingRef.current, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: mainHeadingRef.current,
        start: 'top 85%',
      },
    });

    gsap.from(storyTextRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: storyTextRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(storyImageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: storyImageRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(historyHeadingRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: historyHeadingRef.current,
        start: 'top 85%',
      },
    });

    gsap.from(historyParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: historyParagraphRef.current,
        start: 'top 85%',
      },
    });

    gsap.from(historyImgRefs.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: historyImgRefs.current[0],
        start: 'top 90%',
      },
    });

    gsap.from(strengthsHeadingRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: strengthsHeadingRef.current,
        start: 'top 85%',
      },
    });

    strengthItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-lime-100 py-16 px-4 sm:px-8 overflow-hidden">
      {/* Section 1: Main Title */}
      <h1 ref={mainHeadingRef} className="text-5xl md:text-6xl font-extrabold text-green-900 text-center mb-16 leading-tight">
        Discover Way Agro Industry
      </h1>

      {/* Section 2: Our Story */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div ref={storyTextRef} className="p-6 md:p-8 bg-white rounded-3xl shadow-xl border border-green-100">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story & Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
            <strong>Way Agro</strong> was born from the dream of young rural entrepreneurs in Bangladesh. Since 2010, we&lsquo;ve addressed key farming issues, from poor feed to technology gaps.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
            Our innovations like <strong>CDF</strong> and <strong>FPPA</strong> ensure quality and farmer empowerment. We&lsquo;re committed to safe nutrition, process control, and sustainability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            With our flagship brand <strong>&ldquo;Sujala&quot;</strong>, we deliver superior feed and farming success — fulfilling our motto: <em>&#34;Progressive Farming: Prosperous Life.&ldquo;</em>
          </p>
        </div>
        <div ref={storyImageRef} className="relative p-6 bg-gradient-to-br from-green-100 via-lime-50 to-green-200 rounded-3xl shadow-2xl w-fit mx-auto">
          <Image
            src="/assets/feedmp1.jpg"
            alt="Way Agro Overview"
            width={600}
            height={450}
            className="rounded-2xl border-[8px] border-white shadow-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Section 3: History */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 ref={historyHeadingRef} className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Our Journey: The History of Way Agro
        </h2>
        <p ref={historyParagraphRef} className="text-gray-700 text-lg leading-relaxed text-justify px-4 mb-16">
          Sujala ensures safe nutrition for thousands of families. With quality control, toxin checks, and support for farmers, we’ve become a symbol of trust and sustainability. Our products are not just cost-effective — they’re part of a national mission for growth.
        </p>
    
      </section>

      {/* Section 4: Our Strengths */}
      <section className="py-20 px-4 bg-green-50 rounded-tl-full rounded-br-full max-w-7xl mx-auto shadow-inner">
        <h2 ref={strengthsHeadingRef} className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-16">
          Pillars of Our Success: Our Strengths
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Quality Assurance',
              desc: 'Every product meets the highest international standards.',
              icon: (
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              ),
            },
            {
              title: 'Full Transparency',
              desc: 'Open communication and ethical operations.',
              icon: (
                <>
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </>
              ),
            },
            {
              title: 'Widespread Accessibility',
              desc: 'Our products reach farmers in every region.',
              icon: (
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
              ),
            },
            {
              title: 'Consistency',
              desc: 'We deliver dependable quality and results every time.',
              icon: (
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 4h2v5h-2V6zm1 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              ),
            },
          ].map((item, i) => (
            <li
              key={i}
            ref={(el: HTMLLIElement | null) => {
  strengthItemsRef.current[i] = el;
}}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
