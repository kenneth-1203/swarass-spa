import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const transitionDelay = 0.02;
  let runningDelay = 0;

  return (
    <>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, letterIndex) => {
            const delay = runningDelay * transitionDelay;
            runningDelay++;

            return (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
          <motion.span
            transition={{ delay: runningDelay * transitionDelay }}
            className="inline-block"
          >
            &nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
};

export default AnimatedText;
