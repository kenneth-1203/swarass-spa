"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Card from "@/components/card-image";
import {
  INVIEW_ANIMATION_VARIANTS,
  INVIEW_ANIMATION_VIEWPORT,
  INVIEW_ANIMATION_TRANSITION,
} from "@/lib/animations";
import {
  EventConsultancy,
  Exhibition,
  StagingProductions,
  TechnicalManagement,
} from "./contents";
import useTimer from "@/lib/hooks";
import { cn } from "@/lib/utils";

const tabs = [
  "Event Consultancy",
  "Staging Productions",
  "Technical Management",
  "Exhibition",
];

const cards = [
  {
    heading: "Technical",
    description:
      "You can't have great events without the technical know-how. This includes lighting, special effects, decorative production, construction and manufacturing as well as event features and highlights.",
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Creative",
    description:
      "You can count on us to produce all necessary creative writing and graphics including the production of posters, set pieces and decorations necessary to make the event unique and memorable.",
    imgSrc: "card-2.jpg",
  },
  {
    heading: "Client Servicing",
    description:
      "We are with you every step of the way from our initial production till the post event debriefing.",
    imgSrc: "card-3.jpg",
  },
  {
    heading: "Production",
    description:
      "We'll scout several locations before getting to the nitty gritty of creating all the necessary elements, event features and items needed to make our events a success.",
    imgSrc: "card-4.jpg",
  },
];

const Services = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const { secondsLeft, startTimer, resetTimer } = useTimer(5);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      const currentIndex = tabs.findIndex((tab) => tab === selected);
      const nextIndex = currentIndex + 1 >= tabs.length ? 0 : currentIndex + 1;
      handleSelectTab(tabs[nextIndex]);
    }
  }, [secondsLeft, selected]);

  const handleSelectTab = (tab: string) => {
    setSelected(tab);
    resetTimer();
  };

  const tabContent = useMemo(() => {
    switch (selected) {
      case "Event Consultancy":
        return <EventConsultancy />;
      case "Staging Productions":
        return <StagingProductions />;
      case "Technical Management":
        return <TechnicalManagement />;
      case "Exhibition":
        return <Exhibition />;
      default:
        return null;
    }
  }, [selected]);

  return (
    <section
      id={"Services"}
      className="flex flex-col py-12 sm:py-20 bg-background"
    >
      <div className="mb-20">
        <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold mb-12">
          Services
          <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full max-w-6xl mx-auto px-8">
          {cards.map((card) => (
            <motion.div
              key={card.heading}
              initial="hidden"
              whileInView={"visible"}
              variants={INVIEW_ANIMATION_VARIANTS}
              viewport={INVIEW_ANIMATION_VIEWPORT}
            >
              <Card
                imgSrc={`/images/${card.imgSrc}`}
                heading={card.heading}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={INVIEW_ANIMATION_VARIANTS}
        transition={INVIEW_ANIMATION_TRANSITION}
        viewport={INVIEW_ANIMATION_VIEWPORT}
        className="flex flex-col justify-center md:flex-row"
      >
        <div className="min-w-[18.5rem] flex flex-wrap md:flex-nowrap justify-center md:justify-start md:flex-col md:gap-4 md:pl-8 md:py-8">
          {tabs.map((tab) => (
            <Tab
              text={tab}
              selected={selected === tab}
              handleSelectTab={handleSelectTab}
              key={tab}
            />
          ))}
        </div>
        <div className="flex flex-col justify-start max-w-[50rem] min-h-[30rem] text-sm md:text-base">
          {selected && (
            <motion.div
              key={selected}
              initial="hidden"
              animate="visible"
              variants={INVIEW_ANIMATION_VARIANTS}
              className="relative px-16 pt-8"
            >
              {tabContent}
              <div className="absolute triangle-tr bg-primary w-8 h-8 right-5 top-0"></div>
              <div className="absolute triangle-tr border-[0.5rem] border-foreground w-16 h-16 right-7 top-2"></div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

const Tab = ({
  text,
  selected,
  handleSelectTab,
}: {
  text: string;
  selected: boolean;
  handleSelectTab: (tab: string) => void;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <motion.button
      onClick={() => handleSelectTab(text)}
      className="w-fit sm:text-start text-sm md:text-lg lg:text-xl font-semibold capitalize transition-colors p-2 md:p-0 md:py-2 rounded-md relative origin-left"
    >
      <motion.span
        animate={!isMobile ? { paddingLeft: selected ? 20 : 0 } : {}}
        className="relative z-10 md:pr-4"
      >
        {text}
      </motion.span>
      {selected && (
        <>
          <motion.span
            layoutId="service-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="hidden md:flex absolute mr-auto my-auto inset-0 z-0 w-2.5 h-4 bg-primary triangle-r"
          ></motion.span>
          <motion.span
            layoutId="mobile-service-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="md:hidden absolute inset-0 z-0 border-b-4 border-primary"
          ></motion.span>
        </>
      )}
    </motion.button>
  );
};

export default Services;
