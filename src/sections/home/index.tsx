"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button";
import TextReveal from "@/components/text-reveal";
import { useAppContext } from "@/components/providers/app-context-provider";
import AnimatedText from "@/components/animated-text";

const title = "SWARASS";
const subtitle = "PRODUCTIONS & COMMUNICATIONS";
const headline =
  "Orchestrating Memorable Events, Crafting Stunning Designs, and Delivering Interior Excellence.";

const BUTTON_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { scrollTo } = useAppContext();

  return (
    <section id={"Home"} className="relative flex h-dvh p-8">
      <Image
        src={"/images/bg.png"}
        alt="Background image"
        quality={100}
        className="-z-1 object-cover"
        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
        loading="eager"
        fill
        priority
      />
      {/* <video className="object-cover" loop autoPlay muted playsInline>
            <source src="/bg-video.mp4" type="video/mp4" />
          </video> */}
      <div className="h-full w-full flex flex-col xl:px-20">
        <div className="relative flex mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40, scale: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-0 bg-primary h-20 w-20 lg:h-30 lg:w-30 xl:w-32 xl:h-32 triangle-tr"
          />
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40, scale: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-0 max-[420px]:w-42 max-[420px]:h-42 mt-4 mr-4 xl:mr-10 xl:mt-10 border-[1.5rem] border-foreground h-28 w-28 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:w-48 xl:h-48 triangle-tr"
          />
        </div>
        <div className="h-full relative flex flex-col mb-12 justify-center sm:m-0">
          <div className="mt-20 sm:m-0">
            <h1
              className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary"
              aria-label={title}
            >
              <TextReveal phrases={["SWARASS"]} />
            </h1>
            <div
              className="text-3xl min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black"
              aria-label={subtitle}
            >
              <TextReveal phrases={["PRODUCTIONS", "COMMUNICATIONS"]} />
            </div>
            <div
              className="text-md sm:text-xl md:text-3xl lg:text-4xl my-4 md:my-8 mb-8 max-w-xl"
              aria-label={headline}
            >
              <AnimatedText text={headline} />
            </div>
            <div className="flex gap-4">
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                variants={BUTTON_VARIANTS}
              >
                <Button variant="outline" onClick={() => scrollTo("Services")}>
                  Services
                </Button>
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
                variants={BUTTON_VARIANTS}
              >
                <Button
                  variant="outline"
                  onClick={() => scrollTo("Activities")}
                >
                  Activities
                </Button>
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.4 }}
                variants={BUTTON_VARIANTS}
              >
                <Button variant="outline" onClick={() => scrollTo("Contact")}>
                  Contact
                </Button>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
