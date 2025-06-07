"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setActive(item)}
        onFocus={() => setActive(item)}
        onBlur={() => setActive(null)}
        aria-haspopup={!!children}
        aria-expanded={active === item}
        className="cursor-pointer text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-yellow-600 hover:to-green-600 font-semibold text-sm lg:text-base relative group focus:outline-none"
        type="button"
      >
        {item}
        <motion.span
          layoutId="underline"
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 group-hover:w-full transition-all duration-300"
        />
      </button>
      <AnimatePresence>
        {active === item && children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50"
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-2xl min-w-[200px] ring-1 ring-green-100 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 opacity-50 pointer-events-none" />
              <motion.div layout className="relative w-full h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type HoveredLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const HoveredLink: React.FC<HoveredLinkProps> = ({
  children,
  href,
  onClick,
}) => (
  <Link href={href} onClick={onClick} passHref>
    <motion.span
      whileHover={{ x: 4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="block text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-600 transition-all duration-200 py-2 text-sm hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 px-3 rounded-lg font-medium cursor-pointer"
    >
      {children}
    </motion.span>
  </Link>
);

// ✅ Updated menuItems array
const menuItems = [
  { name: "Home", links: [], href: "/" },
  {
    name: "Sujala Food",
    links: [
      { name: "Menu", href: "/sujala/menu" },
      { name: "Specialties", href: "/sujala/specialties" },
      { name: "Nutrition", href: "/sujala/nutrition" },
    ],
  },
  { name: "Services", links: [], href: "/services" },
  { name: "About Us", links: [], href: "/about-us" },
  { name: "Contact", links: [], href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        setActive(null);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOutsideClick, handleKeyDown]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg"
        onMouseLeave={() => setActive(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 z-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                className="relative"
              >
                <Image
                  src="/assets/Wayagro-logo.png"
                  alt="Wayagro Logo"
                  width={160}
                  height={50}
                  className="relative h-10 lg:h-12 w-auto drop-shadow-sm"
                  priority
                />
              </motion.div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {menuItems.map((menuItem, index) => (
                <motion.div
                  key={menuItem.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {menuItem.links && menuItem.links.length > 0 ? (
                    <MenuItem
                      item={menuItem.name}
                      active={active}
                      setActive={setActive}
                    >
                      <div className="flex flex-col space-y-1">
                        {menuItem.links.map((link) => (
                          <HoveredLink key={link.name} href={link.href}>
                            {link.name}
                          </HoveredLink>
                        ))}
                      </div>
                    </MenuItem>
                  ) : (
                    <Link href={menuItem.href || "#"} passHref>
                      <motion.span
                        className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:via-yellow-600 hover:to-green-600 font-semibold text-sm lg:text-base relative group cursor-pointer transition-all duration-300 inline-block"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {menuItem.name}
                        <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 group-hover:w-full transition-all duration-300" />
                      </motion.span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-500 transition-all duration-200 shadow-md focus:outline-none"
              type="button"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 lg:top-20 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 opacity-90 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-6">
                {menuItems.map((menuItem, index) => (
                  <motion.div
                    key={menuItem.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <motion.h3
                      className="font-bold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-600 mb-3 text-base cursor-pointer transition-all duration-200"
                      whileHover={{ x: 4, scale: 1.02 }}
                    >
                      {menuItem.name}
                    </motion.h3>
                    {menuItem.links.length > 0 && (
                      <div className="space-y-2 pl-4">
                        {menuItem.links.map((link) => (
                          <HoveredLink
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </HoveredLink>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 lg:h-20" />
    </>
  );
}
