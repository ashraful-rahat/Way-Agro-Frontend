// src/app/ClientLayout.tsx
"use client";

import Navbar from "@/component/common/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
