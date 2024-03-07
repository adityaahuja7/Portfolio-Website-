import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { EffectFlip, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { socialsList } from "@/app/socialsList";
import Image from "next/image";

function ProjectSlide(props: { content: string }) {
  let { content } = props;
  return (
    <div className=" project-slide w-full h-full rounded-3xl bg-slide  flex flex-row items-center justify-center  hover:cursor-grab select-none ">
      <div className="card-tl-text font-bold fixed top-0 left-0 m-3 body-XXlarge text-accent3">
        {content}
      </div>
    </div>
  );
}

function StackSlide() {
  return (
    <div className="stack-slide w-full h-full bg-slide rounded-3xl flex flex-row items-center hover:cursor-grab select-none ">
      <div className="flex justify-between w-full px-12">
      <span className = "body-large font-quicksand text-bold text-accent3">Stack:</span>
          <div className="inner-stack flex space-x-11">
            {
            socialsList.map((social)=>{
              return <Image key={social["name"]} src={social.path} width={40} height={40} alt={social.name}/>
            })
            }
          </div>
      </div>
    </div>
  );
}

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
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        onReachEnd={() => reachEndCallback()}
      >
        <SwiperSlide>{ProjectSlide({ content: "Project-1" })}</SwiperSlide>
        <SwiperSlide>{ProjectSlide({ content: "Project-2" })}</SwiperSlide>
        <SwiperSlide>{ProjectSlide({ content: "Project-3" })}</SwiperSlide>
      </Swiper>
      <Swiper
        className="w-full h-[10%] rounded-xl"
        modules={[Controller]}
        onSwiper={setSecondSwiper}
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
