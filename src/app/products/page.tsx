"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lens } from "../about/Lens"; // Adjust path if necessary
import Link from "next/link";
import { products } from "./product";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate individual cards
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      });

      const border = card.querySelector(".animated-border") as HTMLElement | null;
      if (border) {
        gsap.to(border, {
          backgroundPosition: "200% 0",
          duration: 4,
          repeat: -1,
          ease: "linear",
        });
      }
    });

    // Animate section title
    if (sectionRef.current) {
      gsap.from(".section-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    // Marquee animation
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const cards = marquee.children;

      if (cards.length === 0) return;

      const originalCards = Array.from(cards);
      const singleLoopWidth = originalCards.reduce((acc, card) => {
        return acc + (card as HTMLElement).offsetWidth + 32;
      }, 0);

      const viewportWidth = window.innerWidth || 1200;
      const cloneSets = Math.ceil((2 * viewportWidth) / singleLoopWidth);

      for (let i = 0; i < cloneSets; i++) {
        const clones = originalCards.map((card) => card.cloneNode(true));
        marquee.append(...clones);
      }

      gsap.to(marquee, {
        x: -singleLoopWidth,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleLoopWidth),
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4 section-title">
            Our Products
          </h2>
          <p className="text-lg text-gray-700">
            Tailored feed solutions to meet every farm’s needs.
          </p>
        </div>

        <div ref={marqueeRef} className="flex flex-nowrap gap-8 w-[200%]">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              prefetch={true} // Ensure prefetching for faster navigation
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative min-w-[250px] max-w-[300px]"
              ref={(el: HTMLAnchorElement | null) => {
                cardRefs.current[index] = el;
              }}
            >
              <div
                className="animated-border absolute inset-0 rounded-2xl overflow-hidden z-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)",
                  backgroundSize: "200% 100%",
                }}
              ></div>

              <div className="relative z-10 bg-white/95 rounded-2xl m-[2px]">
                <Lens>
                  <div className="relative w-full h-52 sm:h-60">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Lens>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;