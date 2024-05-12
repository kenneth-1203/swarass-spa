"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  INVIEW_ANIMATION_TRANSITION,
  INVIEW_ANIMATION_VARIANTS,
  INVIEW_ANIMATION_VIEWPORT,
} from "@/lib/animations";

type Item = {
  imgSrc: string;
  heading: string;
  description: string;
};

const Carousel = ({ items }: { items: Item[] }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });

  return (
    <div ref={containerRef} className="flex overflow-x-hidden w-full">
      <motion.div className="flex gap-4 md:gap-8 px-8" style={{ x: scrollY }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            variants={INVIEW_ANIMATION_VARIANTS}
            transition={{ ...INVIEW_ANIMATION_TRANSITION, delay: i * 0.05 }}
            viewport={INVIEW_ANIMATION_VIEWPORT}
            whileInView="visible"
            className="relative w-[18rem] h-[32rem] md:w-[24rem] md:h-[42rem] flex flex-col justify-between overflow-hidden p-4"
          >
            {/* <Image
              src={`/images/${item.imgSrc}`}
              className="absolute object-cover object-center pointer-events-none inset-0 blur-sm scale-105"
              loading="eager"
              sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
              alt={`${item.heading} image`}
              fill
              priority
            /> */}
            <h1 className="z-10 text-background font-semibold text-xl md:text-4xl text-shadow">
              {item.heading}
            </h1>
            <p className="z-10 text-background md:font-medium text-xs md:text-base text-shadow">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
