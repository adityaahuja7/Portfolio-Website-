"use client";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import HoverCard from "@/components/Current";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { socialsList } from "@/app/socialsList";
import Clock from "@/components/Clock";

export default function Home() {
  const container = useRef(null);
  const tlref = useRef<gsap.core.Timeline>();
  const [renderTextNodes, setRenderTextNodes] = useState(true);
  let mm = gsap.matchMedia();

  const { contextSafe } = useGSAP(
    () => {
      mm.add("(min-width: 768px)", () => {
        gsap.from(".social-icons", {
          xPercent: -200,
          opacity: 1,
          stagger: 0.1,
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.from(".social-icons", {
          yPercent: 200,
          opacity: 1,
          stagger: 0.1,
        });
      });

      tlref.current = gsap
        .timeline({
          onComplete: () => {
            setRenderTextNodes(false);
          },
        })
        .from(".whisper-text-1", {
          y: "200px",
          opacity: 1,
          delay: 2,
          ease: "power1.inOut",
        })
        .to(".whisper-text-1", {
          y: "200px",
          opacity: 1,
          delay: 2,
          ease: "power1.inOut",
        })
        .from(".whisper-text-2", {
          y: "200px",
          opacity: 1,
          delay: 0.5,
          ease: "power1.inOut",
        })
        .to(".whisper-text-2", {
          y: "200px",
          opacity: 1,
          delay: 2,
          ease: "power1.inOut",
        });
    },
    { scope: container }
  );

  const socialHoverAnimationEnter = contextSafe(
    (event: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(event.target, {
        x: 10,
      });
    }
  );

  const socialHoverAnimationExit = contextSafe(
    (event: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(event.target, {
        x: 0,
      });
    }
  );

  return (
    <Wrapper>
    <div>
    </div>
    </Wrapper>
  );
}
