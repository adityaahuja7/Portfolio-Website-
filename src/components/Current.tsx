"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Current() {
  const container = useRef(null);
  const tlref = useRef<gsap.core.Timeline>();
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

      tlref.current = gsap
        .timeline({ paused: true })
        .to(".displayed-text", {
          x: "2rem",
          opacity:0,
          duration: 0.2,
        })
        .to(".hidden-text", {
          display:"inline",
          opacity:1,
          duration:0.2
        })
    },
    { scope: container }
  );

  const toggleEnter = contextSafe(() => {
    tlref.current!.play(0);
    gsap.to(".button-main",{
      scale: 1.1,
      xPercent:5,
      yPercent:-5,
      boxShadow: "-5px 5px 0px 0px rgba(0,0,0,0.6)",
      cursor: "pointer",
      duration:0.1
    })
  });

  const toggleLeave = contextSafe(() => {
    tlref.current!.reversed(!tlref.current!.reversed());
    gsap.to(".button-main",{
      scale: 1,
      xPercent:-5,
      yPercent:5,
      boxShadow:"none",
      duration:0.1,
    })
  });

  
  const handleClick = contextSafe(() => {
    gsap.to(".button-main",{
      scale: 1,
      xPercent:-5,
      yPercent:5,
      boxShadow:"none",
      duration:0.1,
    })
  });
  
  
  return (
    <div ref={container} className="hover-card flex flex-col space-y-5 w-max select-none">
      <Link href="/projects" className = "w-max">
        <div
          className="button-main bg-accent2 opacity-80 rounded-3xl border border-black shadow-lg w-36 h-20 flex flex-col items-center justify-center p-4 "
          onMouseEnter={() => {
            toggleEnter();
          }}
          onMouseLeave={() => {
            toggleLeave();
          }}
          onMouseDown={() => {handleClick()}}
        >
          <Image
            src="/RightArrow.svg"
            alt="right arrow"
            width={25}
            height={25}
            className="arrow-right"
          />
        </div>
        </Link>
        <span className="bottom-text body-big font-quicksand text-white">
          <div className="hidden-text text-links hidden opacity-0">
            Go to my Project Page!
          </div>
          <div className="displayed-text">Find out what I am working on!</div>
        </span>
      </div>
  );
}
