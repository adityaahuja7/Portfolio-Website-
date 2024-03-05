"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";

var Poggi = () => {
  let coords = { x: 0, y: 0 };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      for (var i of index) {
        gsap.to(`.circle-${i}`, {
          x: coords.x,
          y: coords.y,
          duration: 0.5,
          ease: "power3",
          scale: 1,
          xPercent: -50,
          yPercent: -50,
        });
      }
    });
  });

  let index = [1, 2, 3, 4];

  

  let circle_scales = [1, 0.7, 0.4, 0.1];

  return (
    <>
      <div className="yogi">
        {circle_scales.map((scale, index) => {
          return (
            <div
              key={index}
              className={`circle-${index} rounded-full h-[24px] w-[24px] bg-accent1 z-2 absolute`}
              style={{
                scale: scale,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Poggi;
