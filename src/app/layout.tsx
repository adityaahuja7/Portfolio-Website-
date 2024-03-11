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
  const [isDesktop,setIsDesktop] = useState(false);
  useLayoutEffect(()=>{
    if (window?.innerWidth > 650){
      setIsDesktop(true)
    }
  })
  let path = usePathname();
  return (
    <html lang="en" className="bg-background">
      <body key="bodymain">
        {isDesktop && <Particles />}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
