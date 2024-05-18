"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Particles from "@/components/particles";
import { useLayoutEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="bg-background">
      <body key="bodymain">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
