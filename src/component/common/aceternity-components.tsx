// src/component/common/aceternity-components.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-0 w-3/4 h-full bg-white shadow-lg z-40 p-6"
    >
      {children}
    </motion.div>
  );
};

export const MenuItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, x: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-xl font-semibold text-gray-800 hover:text-primary cursor-pointer py-2 border-b"
    >
      {children}
    </motion.div>
  );
};

export const ProductItem = ({ title }: { title: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-100 rounded shadow text-center"
    >
      {title}
    </motion.div>
  );
};

export const HoveredLink = ({
  
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={href}
        className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
};
