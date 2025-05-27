'use client';

import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <div className="min-h-screen bg-white text-black">
      {children}
    </div>
  );
};

export default Provider;