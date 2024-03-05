"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let path = usePathname();
  return (
    <html lang="en" className="bg-background">
      <body key="bodymain">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
