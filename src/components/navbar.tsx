"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { socialsList } from "@/app/socialsList";
import download from "/public/socials/download.svg";

const Links = {
  Home: "/",
  Projects: "/projects",
  Resume: "/resume",
};

const LinkButton = (props: any) => {
  let content = props.text;
  const link = props.link;
  const pathname = usePathname();
  return (
    <div>
      <Link className="navbutton" href={link}>
        {pathname === link ? (
          <div className="font-inter body-nav font-bold rounded-lg px-6 py-1 bg-secondary text-background  md:hover:-translate-y-[1px] md:active:translate-y-[0.5px] transition-all duration-200">
            {content === "Resume" ? (
              <div className="flex space-x-2">
                <Image src={download} alt="download" width={18} />{" "}
                <div>{content}</div>
              </div>
            ) : (
              content
            )}
          </div>
        ) : (
          <div className="font-inter body-nav font-bold rounded-lg px-6 py-1 bg-primary text-background  md:hover:-translate-y-[1px] md:active:translate-y-[0.5px] transition-all duration-200">
            {content === "Resume" ? (
              <div className="flex space-x-2">
                <Image src={download} alt="download" width={18} />{" "}
                <div>{content}</div>
              </div>
            ) : (
              content
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default function Navbar() {
  const contextRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".nav-slot", { yPercent: -250, delay: 0.2, duration: 0.5 });
    },
    { scope: contextRef }
  );
  return (
    <nav
      ref={contextRef}
      className="navbar-main w-full select-none pt-10 px-12 flex items-center justify-between"
    >
      <div className="nav-slot flex space-x-5 md:space-x-36">
        {Object.keys(Links).map((key, index) => {
          return (
            <LinkButton
              key={index}
              text={key}
              link={Links[key as keyof typeof Links]}
            />
          );
        })}
      </div>
      <div className="nav-slot flex space-x-5 md:space-x-12">
        {socialsList.map((social, index) => {
          return (
            <a key={index} href={social.link} target="_blank" rel="noreferrer">
              <img
                src={social.path}
                alt={social.name}
                className="w-8 h-8 md:hover:-translate-y-[1px] md:active:translate-y-[1px] transition-all duration-200"
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
