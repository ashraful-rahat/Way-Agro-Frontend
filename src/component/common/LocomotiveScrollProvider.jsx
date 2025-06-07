'use client';

import React, { useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const [LocomotiveScroll, setLocomotiveScroll] = useState(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    // Only run this on the client
    import('locomotive-scroll').then((module) => {
      const LocomotiveScroll = module.default;
      scrollInstance.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.075,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
      setLocomotiveScroll(scrollInstance.current);
    });

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
