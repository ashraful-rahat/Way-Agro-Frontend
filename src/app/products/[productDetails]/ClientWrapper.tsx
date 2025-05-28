"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { FaBookmark as FaBookmarkSolid, FaHeart as FaHeartSolid } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface ClientWrapperProps {
  productId: string;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ productId }) => {
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoved, setIsLoved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load state from localStorage
    const savedWishlist = localStorage.getItem(`wishlist-${productId}`);
    const savedLoved = localStorage.getItem(`loved-${productId}`);
    if (savedWishlist) setIsWishlisted(JSON.parse(savedWishlist));
    if (savedLoved) setIsLoved(JSON.parse(savedLoved));
    setIsLoading(false);

    // GSAP Animations
    if (buttonsRef.current) {
      gsap.from(buttonsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [productId]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(`wishlist-${productId}`, JSON.stringify(isWishlisted));
      localStorage.setItem(`loved-${productId}`, JSON.stringify(isLoved));
    }
  }, [isWishlisted, isLoved, productId, isLoading]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div ref={buttonsRef} className="space-y-4">
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
      >
        {isWishlisted ? (
          <FaBookmarkSolid className="w-5 h-5 mr-2" />
        ) : (
          <FaBookmark className="w-5 h-5 mr-2" />
        )}
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
      <button
        onClick={() => setIsLoved(!isLoved)}
        className="flex items-center justify-center w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md"
      >
        {isLoved ? (
          <FaHeartSolid className="w-5 h-5 mr-2" />
        ) : (
          <FaHeart className="w-5 h-5 mr-2" />
        )}
        {isLoved ? "Remove from Favorites" : "Love this Product"}
      </button>
    </div>
  );
};

export default ClientWrapper;