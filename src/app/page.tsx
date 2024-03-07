"use client";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import HoverCard from "@/components/Current";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Clock = () => {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString('en-IN', {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/(:\d{2}|)$/, "")
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString('en-IN', {
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(/(:\d{2}|)$/, "")
      );
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="clock hidden md:block social-icons body-medium font-quicksand text-socials">
      {time}
    </div>
  );
};

export default function Home() {
  const container = useRef(null);
  const tlref = useRef<gsap.core.Timeline>();
  const [renderTextNodes, setRenderTextNodes] = useState(true);

  const { contextSafe } = useGSAP(
    () => {
      tlref.current = gsap
        .timeline({
          onComplete: () => {
            setRenderTextNodes(false);
          },
        })
        .from(".social-icons", {
          xPercent: -200,
          opacity: 1,
          stagger: 0.1,
        })
        .from(".whisper-text-1", {
          y: "200px",
          opacity: 1,
          delay: 0.5,
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

  const socialHoverAnimationEnter = contextSafe((event:React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.target, {
      x: 10,
    });
  });

  const socialHoverAnimationExit = contextSafe((event:React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.target, {
      x: 0,
    });
  });

  const socialsList = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aditya-ahuja-iiitd/",
      path: "/linkedin.svg",
    },
    {
      name: "Github",
      link: "https://github.com/adityaahuja7",
      path: "/github.svg",
    },
    {
      name: "Gmail",
      link: "mailto:ahujaaditya00@gmail.com",
      path: "/gmail.svg",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/8287608797",
      path: "/whatsapp.svg",
    },
  ];

  return (
    <Wrapper>
      <div
        ref={container}
        className="main-container w-screen md:h-full flex flex-col items-center md:items-start justify-start md:flex-row md:justify-center select-none"
      >
        <div className="left-container mt-20 md:mt-16 flex flex-col items-center md:items-baseline leading-loose px-8">
          <section className="text-left">
            <span className="font-quicksand body-large font-extralight text-white">
              {" "}
              Hello,{" "}
            </span>
            <div>
              <span className="font-quicksand font-regular body-Xlarge text-white">
                {" "}
                I am{" "}
              </span>
              <span className="font-quicksand font-regular body-XXlarge text-accent3">
                {" "}
                Aditya Ahuja,{" "}
              </span>
            </div>
            <div className="lg:mt-8">
              <span className="font-quicksand font-extralight body-big text-white">
                {" "}
                a Computer Science & Applied Mathematics Undergraduate <br /> at{" "}
                <span className="font-quicksand font-bold body-link ">
                  <a href="https://iiitd.ac.in">
                    Indraprastha Institute of Information Technology, Delhi.
                  </a>
                </span>
                <br />
                <br />
                Welcome to my personal website 👋 <br />
                Have a look around and feel free to reach out! <br />{" "}
              </span>
            </div>
          </section>
          <section className="card-grid mt-20 md:mt-16 mx-5">
            <HoverCard />
          </section>
        </div>
        <div className="image-container hidden md:block md:mt-11">
          {" "}
          <Image
            className = " hidden md:mt-5 md:block"
            src="/home_image.png"
            width={600}
            height={600}
            alt="Picture of the author"
            priority
          />
        </div>
        <div className="socials fixed  bottom-0 md:left-0 mb-4  md:ml-4 flex justify-center md:flex-col space-y-2">
          {Clock()}
          {socialsList.map((social, index) => {
            return (
              <Link key={index} href={social.link}>
                <div >
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
          {renderTextNodes && (
            <div className="md:fixed hidden md:inline font-quicksand whisper-text-1 body-big text-white bottom-[20px] left-[70px]">
              Hi There 😀
            </div>
          )}
          {renderTextNodes && (
            <div className="md:fixed hidden md:inline font-quicksand whisper-text-2 body-big text-white bottom-[20px] left-[70px]">
              Feel free to reach out! 🤙
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
