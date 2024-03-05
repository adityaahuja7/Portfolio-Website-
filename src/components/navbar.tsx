"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Links = {
  Home: "/",
  Projects: "/projects",
  Resume: "/resume",
};

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar-main flex flex-row justify-between items-end w-full py-3 px-9">
      <div className="logo text-accent1 font-quicksand text-[3rem] font-bold ">
        <Link href="/">ADITYA AHUJA</Link>
      </div>
      <div className="nav-buttons flex flex-row justify-between align-bottom items-end space-x-[11rem] pr-10">
        {Object.keys(Links).map((key,index) => {
          return (
            <Link key = {index} href={Links[key as keyof typeof Links]}>
              <span className={`font-quicksand body-big font-medium ${pathname == Links[key as keyof typeof Links]? "text-active":"text-accent1 hover:text-buttonhover"}`}>
                {key}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
