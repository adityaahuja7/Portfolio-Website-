"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = {
  Home: "/",
  Projects: "/projects",
  Resume: "/resume",
};

const LinkButton = (props: { text: string; link: string }) => {
  const content = props.text;
  const link = props.link;
  return (
    <div>
      <Link href={link}>
        <div className="font-inter body-nav font-medium rounded-md px-4 py-1 bg-secondary bg-opacity-80 text-black hover:drop-shadow-button hover:-translate-y-1 active:translate-y-1 transition-all duration-500">
          {content}
        </div>
      </Link>
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar-main w-full select-none pt-10 flex flex-row justify-center items-center">
      <div className="nav-buttons flex space-x-5 md:space-x-36">
        {Object.keys(Links).map((key, index) => {
          return LinkButton({
            text: key,
            link: Links[key as keyof typeof Links],
          });
        })}
      </div>
    </nav>
  );
}
