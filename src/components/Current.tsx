"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Current() {
  const container = useRef(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap
        .timeline()
        .from(
          ".button-main",
          {
            xPercent: -100,
            opacity: 0,
            ease:"power1.out"
          },
          "start"
        )
        .from(".bottom-text", {
          opacity: 0,
          yPercent: -100,
        });
      }


  );

  const toggleEnter = contextSafe(() => {

    gsap.to(".button-main",{
      scale: 1.1,
      yPercent:-1,
      boxShadow: "0px 0px 25px 25px rgba(137, 31, 129,0.2)",
      cursor: "pointer",
      duration:0.3
    })
  });

  const toggleLeave = contextSafe(() => {
    gsap.to(".button-main",{
      scale: 1,
      yPercent:1,
      boxShadow:"none",
      duration:0.3,
    })
  });

  
  const handleClick = contextSafe(() => {
    gsap.to(".button-main",{
      scale: 1,
      yPercent:1,
      boxShadow:"none",
      duration:0.3,
    })
  });
  
  
  return (
    <div ref={container} className="hover-card flex flex-col items-center space-y-5 select-none">
      <Link href="/projects" className = "w-max">
        <div
          className="button-main bg-primary opacity-80 rounded-3xl border border-black shadow-lg w-36 h-20 flex flex-col items-center justify-center"
          onMouseEnter={() => {
            toggleEnter();
          }}
          onMouseLeave={() => {
            toggleLeave();
          }}
          onMouseDown={() => {handleClick()}}
        >
          <Image
            src="socials/Laptop.svg"
            alt="right arrow"
            width={35}
            height={35}
            className="arrow-right"
          />
        </div>
        </Link>
        <div className="bottom-text font-regular body-big font-inter text-text">
          <div className="displayed-text hidden md:inline text-center ">Check out my most recent project ➡️</div>
        </div>
      </div>
  );
}
