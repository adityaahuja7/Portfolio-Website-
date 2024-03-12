import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { EffectFlip, EffectFade, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import { socialsList } from "@/app/socialsList";
import Image from "next/image";

interface contentType {
  name: string;
  description: string;
  association: string;
  timeperiod: string;
  teamsize: number;
  stack: string[];
  github: string;
  relevant_links: string[] | null;
}

function ProjectSlide(props: { content: contentType }) {
  let {
    name,
    description,
    association,
    timeperiod,
    teamsize,
    stack,
    github,
    relevant_links,
  } = props.content;
  return (
    <div className=" project-slide w-full h-full font-inter rounded-3xl bg-secondary bg-opacity-10 hover:cursor-grab select-none overflow-none">
      <div className="card-tl-text fixed top-0 left-0 m-3 text-accent2 flex flex-col py-8">
        <div className="project-card-header body-large px-8 leading-loose">
          <span className="text-secondary">Duration:</span>
          <span className="text-text"> {timeperiod}</span>
          <br />
          <span className="text-secondary">Team Size:</span>
          <span  className="text-text"> {teamsize}</span>
          <br />

        </div>
        <div className="body-XXlarge text-primary font-inter px-7  leading-snug">
          {name}
        </div>
        <div className="body-medium text-text font-inter px-8  leading-loose">
          {description}
        </div>
      </div>
      <Image
          src="/stockai.png"
          width={370}
          height={370}
          alt="github"
          className="absolute bottom-0 right-0 hover:cursor-pointer -scale-x-100 opacity-60"
        />
    </div>
  );
}

function StackSlide() {
  return (
    <div className="stack-slide w-1/2 h-full bg-slide rounded-3xl flex flex-row items-center hover:cursor-grab select-none m-auto">
      <div className="flex justify-center w-full px-12">
        <div className="inner-stack flex space-x-11">
          {socialsList.map((social) => {
            return (
              <Image
                key={social["name"]}
                src={social.path}
                width={40}
                height={40}
                alt={social.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const dummyData: contentType[] = [
  {
    name: "Project-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, ipsum aliquam sed fuga ratione ea optio quia rem repudiandae. Enim delectus aliquam corrupti aperiam rem voluptate quo nemo eveniet nobis.",
    association: "Midas Labs, IIIT-Delhi",
    timeperiod: "Jan-2020 to Dec-2020",
    teamsize: 5,
    stack: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/adityaahuja7",
    relevant_links: ["www.google.com"],
  },
  {
    name: "Project-2",
    description: "Description-2",
    association: "Individual",
    timeperiod: "Jan-2021 to Dec-2021",
    teamsize: 10,
    stack: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/adityaahuja7",
    relevant_links: ["www.google.com"],
  },
];

export default function ProjectCard(props: { reachEndCallback: () => void }) {
  const [firstSwiper, setFirstSwiper] = useState<any | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<any | null>(null);

  const { reachEndCallback } = props;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-5">
      <Swiper
        modules={[Pagination, Mousewheel, EffectFlip, Controller]}
        className="w-full h-[80%] "
        direction={"vertical"}
        effect={"flip"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          el: ".swiper-custom-pagination",
        }}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        onReachEnd={() => reachEndCallback()}
      >
        {dummyData.map((content, index) => {
          return (
            <SwiperSlide key={index}>{ProjectSlide({ content })}</SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        className="w-full h-[10%] rounded-xl"
        allowTouchMove={false}
        modules={[Controller, EffectFade]}
        onSwiper={setSecondSwiper}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={1000}
        controller={{ control: firstSwiper }}
      >
        <SwiperSlide>{StackSlide()}</SwiperSlide>
        <SwiperSlide>{StackSlide()}</SwiperSlide>
        <SwiperSlide>{StackSlide()}</SwiperSlide>
      </Swiper>
    </div>
  );
}
