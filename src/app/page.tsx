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
      <div
        ref={container}
        className="main-container w-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="font-inter flex flex-col items-center justify-center mt-20 p-4">
          <section>
            <div className="body-Xlarge text-center font-light leading-normal text-text">
              Hello,
              <br />
              <span className="font-regular body-Xlarge text-text">
                {" "}
                I am{" "}
              </span>
              <span className="font-semibold body-XXlarge text-primary">
                {" "}
                Aditya Ahuja,{" "}
              </span>
            </div>
            <div className="lg:mt-8 text-center">
              <span className="font-light body-large text-text">
                {" "}
                a Computer Science & Applied Mathematics Undergraduate <br /> at{" "}
                <span className="font-light body-link text-accent hover:opacity-55">
                  <a href="https://iiitd.ac.in">
                    Indraprastha Institute of Information Technology, Delhi.
                  </a>
                </span>
                <br />
                <br />
                Welcome to my personal website!
                <br />
                Have a look around and feel free to reach out! <br />{" "}
              </span>
            </div>
          </section>
          <section className="card-grid mt-20 md:mt-16 mx-5">
            <HoverCard />
          </section>
        </div>
        <div className="socials fixed bottom-0 md:left-0 mb-4 md:ml-4 flex flex-col items-center md:items-baseline">
          <div>{Clock()}</div>
          <div className = "flex justify-center items-baseline md:flex-col space-y-2 space-x-5 md:space-x-0">
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
          {renderTextNodes && (
            <div className="md:fixed hidden md:inline font-quicksand whisper-text-1 body-big text-text bottom-[20px] left-[70px]">
              Hi There 👋
            </div>
          )}
          {renderTextNodes && (
            <div className="md:fixed hidden md:inline font-quicksand whisper-text-2 body-big text-text bottom-[20px] left-[70px]">
              Feel free to reach out!
            </div>
          )}
          <div className = "disclaimer absolute body-small right-0 bottom-[96vh] md:bottom-0 p-3 text-white">2024 ©️ Aditya Ahuja, Ph: +91-8287608797</div>
      </div>
    </Wrapper>
  );
}
