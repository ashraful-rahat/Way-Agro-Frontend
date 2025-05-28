"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  position?: { x: number; y: number };
  isStatic?: boolean;
  isFocusing?: () => void;
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
}

export const Lens: React.FC<LensProps> = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [localIsHovering, setLocalIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

  const isHovering = hovering !== undefined ? hovering : localIsHovering;
  const setIsHovering = setHovering || setLocalIsHovering;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {isStatic ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.58 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
            transformOrigin: `${position.x}px ${position.y}px`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${position.x}px ${position.y}px`,
            }}
          >
            {children}
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.58 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden z-30"
              style={{
                maskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `scale(${zoomFactor})`,
                  transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                }}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};


    //   {/* Timeline */}
    //   <section className="py-16 bg-green-50 px-6 md:px-20">
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl font-bold text-green-800 mb-4">Our Story</h2>
    //       <p className="text-lg text-gray-700">A journey of dedication, innovation, and growth.</p>
    //     </div>

    //     <div className="flex flex-col gap-8 max-w-4xl mx-auto">
    //       {milestones.map(({ year, title, description, icon: Icon }, idx) => (
    //         <div key={idx} className="flex items-start space-x-4">
    //           <div className="bg-green-600 text-white p-3 rounded-full">
    //             <Icon className="w-6 h-6" />
    //           </div>
    //           <div>
    //             <h4 className="text-xl font-bold text-gray-800">{title} <span className="text-sm text-gray-500 ml-2">({year})</span></h4>
    //             <p className="text-gray-600">{description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>


    //   const galleryImages = [
//     { src: "/assets/banner1.jpg", alt: "Modern farming facility" },
//     { src: "/assets/banner2.jpg", alt: "Quality feed production" },
//     { src: "/assets/agro-banner-4.png", alt: "Happy farmers with livestock" },
//     { src: "/assets/banner1.jpg", alt: "Sustainable farming practices" },
//   ];



// our journy pageXOffset

    //   {/* Timeline */}
    //   <section className="py-20 px-6 md:px-20 bg-white">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl font-bold text-green-800 mb-4">Our Journey</h2>
    //       <p className="text-lg text-gray-700">Milestones in our growth and innovation</p>
    //     </div>

    //     <div 
    //       ref={timelineRef}
    //       className="relative max-w-4xl mx-auto"
    //     >
    //       <div className="absolute left-8 md:left-1/2 h-full w-1 bg-green-200 transform -translate-x-1/2"></div>
          
    //       {milestones.map(({ year, title, description, icon: Icon }, idx) => (
    //         <div 
    //           key={idx} 
    //           className={`relative mb-12 ${idx % 2 === 0 ? "md:pr-8 md:pl-0 md:text-right" : "md:pl-8 md:pr-0 md:text-left"}`}
    //           style={{ 
    //             left: idx % 2 === 0 ? "0" : "auto",
    //             right: idx % 2 === 0 ? "auto" : "0",
    //             maxWidth: "calc(50% - 32px)"
    //           }}
    //         >
    //           <div className={`flex ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"} items-center mb-2`}>
    //             <div className="bg-green-600 text-white p-3 rounded-full absolute md:relative left-0 md:left-auto -ml-4 md:ml-0 z-10">
    //               <Icon className="w-6 h-6" />
    //             </div>
    //             <div className={`ml-12 md:ml-4 ${idx % 2 === 0 ? "md:mr-4" : "md:ml-4"}`}>
    //               <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    //               <span className="text-sm text-gray-500">{year}</span>
    //             </div>
    //           </div>
    //           <p className={`text-gray-600 ml-12 ${idx % 2 === 0 ? "md:ml-0 md:mr-4" : "md:ml-4"}`}>
    //             {description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>