"use client";

import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/card";
import {
  EventConsultancy,
  Exhibition,
  StagingProductions,
  TechnicalManagement,
} from "./contents";

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

const ANIMATION_VARIANTS = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0.8, y: 50 },
};

const ANIMATION_TRANSITION = {
  damping: 10,
  duration: 0.4,
  stiffness: 100,
  type: "spring",
};

const ANIMATION_VIEWPORT = {
  once: true,
};

const Services = () => {
  const [selected, setSelected] = useState(tabs[0]);

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
    <section id={"Services"} className="flex flex-col my-12 sm:my-20">
      <div className="pb-8 md:pb-20">
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
              variants={ANIMATION_VARIANTS}
              viewport={ANIMATION_VIEWPORT}
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
        variants={ANIMATION_VARIANTS}
        transition={ANIMATION_TRANSITION}
        viewport={ANIMATION_VIEWPORT}
        className="flex flex-col justify-center md:flex-row"
      >
        <div className="min-w-[12rem] flex flex-wrap md:flex-nowrap justify-center md:justify-start md:flex-col md:gap-4 p-4 pr-0 md:p-8 md:pr-0">
          {tabs.map((tab) => (
            <Tab
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
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
              variants={ANIMATION_VARIANTS}
              className="relative px-8 pt-8 mr-8"
            >
              {tabContent}
              <div className="absolute triangle-tr bg-primary w-8 h-8 right-0 top-0"></div>
              <div className="absolute triangle-tr border-[0.5rem] border-foreground w-16 h-16 right-2 top-2"></div>
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
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <motion.button
      onClick={() => setSelected(text)}
      className="w-fit sm:text-start text-sm md:text-lg lg:text-xl font-semibold capitalize transition-colors p-2 rounded-md relative origin-left"
    >
      <span className="relative z-10 sm:pr-4">{text}</span>
      {selected && (
        <>
          <motion.span
            layoutId="service-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="hidden md:flex absolute ml-auto my-auto inset-0 z-0 w-2.5 h-4 bg-primary triangle-r"
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
