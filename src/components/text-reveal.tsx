import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 5;
const STAGGER = 0.1;

const TextReveal = ({ phrases }: { phrases: string[] }) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

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
                    y: 45,
                  }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotateX: 90,
                    y: -45,
                  }}
                  transition={{
                    delay: countRef.current * STAGGER,
                    damping: 40,
                    stiffness: 400,
                    type: "spring",
                    duration: 0.5,
                  }}
                  className="inline-block"
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
