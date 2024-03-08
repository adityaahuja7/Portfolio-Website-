"use client";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "@/components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { socialsList } from "@/app/socialsList";
import Link from "next/link";
import Image from "next/image";
import Clock from "@/components/Clock";

export default function Projects() {
  const container = useRef(null);
  let mm = gsap.matchMedia();
  const tlref = useRef<gsap.core.Timeline>();

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

      gsap.from(".carousel-container",{
        xPercent:-50,
      })

      tlref.current = gsap
        .timeline({ paused: true })
        .from(".end-text", {
          y: 100,
          duration: 0.5,
        })
        .to(".end-text", {
          y: 100,
          duration: 0.5,
          delay: 10,
        });
    },
    { scope: container }
  );

  const onReachEnd = contextSafe(() => {
    tlref.current!.play();
  });

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
      <div
        ref={container}
        className="main-container w-screen h-full flex flex-col items-center justify-center md:flex-row select-none overflow-hidden"
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 carousel-container flex flex-col items-center  w-[70%] h-[80%] justify-center mt-4">
          <ProjectCard reachEndCallback={onReachEnd} />
        </div>
        <a className="end-text fixed bottom-0 right-0 m-4 body-big text-links" href="https://github.com/adityaahuja7">Check out my other projects on GitHub</a>
        <div className="socials fixed bottom-0 md:left-0 mb-4 md:ml-4 flex justify-center md:flex-col space-y-2">
          {Clock()}
          {socialsList.map((social, index) => {
            return (
              <Link key={index} href={social.link}>
                <div>
                  <Image
                    src={social.path}
                    width={40}
                    height={40}
                    alt={social.name}
                    className="social-icons"
                    onMouseEnter={socialHoverAnimationEnter}
                    onMouseLeave={socialHoverAnimationExit}
                    onClick={socialHoverAnimationExit}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
