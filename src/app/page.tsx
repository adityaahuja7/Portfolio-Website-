"use client";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import HoverCard from "@/components/Current";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef(null);
  const tlref = useRef<gsap.core.Timeline>();
  const { contextSafe } = useGSAP(
    () => {
      tlref.current = gsap
        .timeline()
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

  const socialHoverAnimationEnter = contextSafe((event) => {
    gsap.to(event.target, {
      x: 10,
    });
  });

  const socialHoverAnimationExit = contextSafe((event) => {
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
        className="main-container w-[100%] flex flex-row justify-center mt-12 select-none"
      >
        <div className="left-container my-14 flex flex-col space-between items-baseline">
          <section>
            <span className="font-quicksand body-large font-extralight text-white">
              {" "}
              Hello,{" "}
            </span>
            <div>
              <span className="font-quicksand font-regular body-Xlarge text-accent1">
                {" "}
                I am{" "}
              </span>
              <span className="font-quicksand font-regular body-XXlarge text-accent1">
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
          <section className="card-grid lg:mt-16 mx-5">
            <HoverCard />
          </section>
        </div>
        <section className="image-container mx-12">
          {" "}
          <Image
            src="/home_image.png"
            width={600}
            height={600}
            alt="Picture of the author"
            priority
          />
        </section>
        <div className="socials fixed left-0 bottom-0 mb-4 ml-4 flex md:flex-col space-y-2">
          {socialsList.map((social, index) => {
            return (
              <Link key={index} href={social.link}>
                <div className="socials">
                  <Image
                    src={social.path}
                    width={40}
                    height={40}
                    alt={social.name}
                    className="social-icons"
                    onMouseEnter={socialHoverAnimationEnter}
                    onMouseLeave={socialHoverAnimationExit}
                    onClick = {socialHoverAnimationExit}
                  />
                </div>
              </Link>
            );
          })}
          <div className="fixed font-quicksand whisper-text-1 body-big text-white bottom-[20px] left-[70px]">
            Hi There 😀
          </div>
          <div className="fixed font-quicksand whisper-text-2 body-big text-white bottom-[20px] left-[70px]">
            Feel free to reach out any time! 🤙
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
