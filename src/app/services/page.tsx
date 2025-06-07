'use client'; // This entire file needs to be a Client Component due to useState, framer-motion

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | never;
};

const Tabs = ({
  tabs: propTabs,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(selectedTab[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          contentClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-6 py-2 rounded-full transition-all duration-300 z-20",
              tabClassName,
              active.value === tab.value
                ? "text-blue-700 font-semibold"
                : "text-gray-600 hover:text-gray-800"
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-white rounded-full shadow-md border border-blue-200",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full h-[30rem] md:h-[35rem] relative max-w-3xl mx-auto">
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("w-full h-full", contentClassName)}
        />
      </div>
    </>
  );
};

const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => tab.value === active.value;

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -30 : 0,
            zIndex: -idx,
            opacity: isActive(tab) ? 1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, -10, 0] : 0,
            opacity: isActive(tab) ? 1 : 0,
          }}
          transition={{
            layout: {
              duration: 0.6,
              type: "spring",
              bounce: 0.3,
            },
            opacity: { duration: 0.2 },
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {isActive(tab) && tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const Services = () => {
  const feedTabs: Tab[] = [
    {
      title: "Cow Feed",
      value: "cow-feed",
      content: (
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            src="/assets/banner1.jpg"
            alt="Cow Feed Background"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 p-6 md:p-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Superior Bovine Nutrition
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-700 mb-6 max-w-2xl">
                Our specialized cow feed blends are crafted to meet the unique nutritional demands of dairy and beef cattle. We focus on enhancing digestibility, promoting healthy growth, and maximizing productivity for a thriving herd. Each formulation is backed by research to ensure optimal well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-sm">
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Boosts Milk Production</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Supports Healthy Digestion</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Enhances Growth Rate</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Rich in Essential Minerals & Vitamins</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Chicken Feed",
      value: "chicken-feed",
      content: (
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            src="/assets/banner1.jpg"
            alt="Chicken Feed Background"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 p-6 md:p-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Optimal Poultry Performance
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-700 mb-6 max-w-2xl">
                Our poultry feed range is engineered for all stages of chicken development, from starter to layer. It ensures robust health, optimal growth, and consistent egg production, contributing to profitable and sustainable farming operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-sm">
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Accelerates Healthy Growth</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Improves Egg Quality & Quantity</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Strengthens Immunity & Vitality</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Balanced Nutrition Formula</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Fish Feed",
      value: "fish-feed",
      content: (
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
          <Image
            src="/assets/banner1.jpg"
            alt="Fish Feed Background"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>
          <div className="relative z-20 p-6 md:p-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Advanced Aquaculture Solutions
              </h3>
              <p className="text-base md:text-lg font-normal text-gray-700 mb-6 max-w-2xl">
                Formulated for various aquatic species, our fish feed promotes rapid growth, superior flesh quality, and disease resistance. It&apos;s designed for efficiency and sustainability in modern fish farming practices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-sm">
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Promotes Rapid & Healthy Growth</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Enhances Flesh Quality & Color</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Boosts Disease Resistance</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Environmentally Friendly Formulation</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-[50rem] md:min-h-[60rem] [perspective:1000px] relative flex flex-col items-center justify-center py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 text-gray-900">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 leading-tight">
          Our Feed Solutions
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <Tabs
            tabs={feedTabs}
            containerClassName="mb-12 md:mb-16 bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-md border border-gray-200"
            activeTabClassName=""
            tabClassName="font-medium text-lg px-6 py-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
