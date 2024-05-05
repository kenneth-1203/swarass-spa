"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 5;
const STAGGER = 0.1;

const TextReveal = ({
  phrases,
  stagger = STAGGER,
  waitTime = WAIT_TIME,
}: {
  phrases: string[];
  stagger?: number;
  waitTime?: number;
}) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, waitTime);

    return () => clearInterval(intervalRef);
  }, [phrases, waitTime]);

  return (
    <AnimatePresence mode="popLayout">
      {phrases[active].split(" ").map((word, wordIndex) => {
        if (wordIndex === 0) {
          countRef.current = 0;
        }

        return (
          <motion.div
            key={word}
            className="whitespace-nowrap overflow-hidden"
            style={{ perspective: "1000px" }}
          >
            {word.split("").map((letter, letterIndex) => {
              const content = (
                <motion.span
                  initial={{
                    opacity: 0,
                    rotateX: -90,
                    y: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: 90,
                    y: -90,
                  }}
                  transition={{
                    delay: countRef.current * stagger,
                    damping: 40,
                    stiffness: 400,
                    type: "spring",
                    duration: 0.5,
                  }}
                  className="inline-block origin-bottom"
                  key={letterIndex}
                >
                  {letter}
                </motion.span>
              );

              countRef.current++;
              return content;
            })}
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

export default TextReveal;
