"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IMG_PADDING = 12;

export const TextParallaxContent = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[500vh]">
        <StickyVideo />
        <OverlayCopy>{children}</OverlayCopy>
      </div>
    </div>
  );
};

const StickyVideo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <video className="h-full object-cover w-full" loop autoPlay muted playsInline>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

const OverlayCopy = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [1, 1, 1]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[100vh] w-full flex-col items-center justify-center text-white"
    >
      {children}
    </motion.div>
  );
};
