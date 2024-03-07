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
    <nav className="navbar-main flex flex-row justify-between items-end w-screen mt-3 py-3 select-none px-8 md:px-12">
      <div className="logo  text-accent1 font-quicksand font-bold ">
        <Link href="/">ADITYA AHUJA</Link>
      </div>
      <div className="nav-buttons flex flex-row justify-evenly align-bottom items-end space-x-[1rem] md:space-x-[8rem]">
        {Object.keys(Links).map((key,index) => {
          return (
            <Link key = {index} href={Links[key as keyof typeof Links]}>
              <span className={`font-quicksand body-nav font-medium ${pathname == Links[key as keyof typeof Links]? "text-active":"text-accent2 hover:text-buttonhover"}`}>
                {key}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
