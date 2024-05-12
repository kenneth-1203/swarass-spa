"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/card";
import { TextParallaxContent } from "@/components/parallax-scroll";
import {
  INVIEW_ANIMATION_VARIANTS,
  INVIEW_ANIMATION_VIEWPORT,
} from "@/lib/animations";

const items = [
  {
    heading: "Dinner & Get Togethers",
    description: `We understand that organization dinners are a way for various companies to show their appreciation for the clients, highlight important company affairs and just have a good time socializing and being together.`,
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Corporate Launches",
    description: `We have a wide experience in creating events for launches and officiating events for various products, buildings, programs, initiatives etc. This can often be coordinated with your PR or marketing teams to create the necessary exposure or coverage required`,
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Exhibition",
    description: `Create memorable booth designs that make them stand out during their exbitions`,
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Conference",
    description: `Conference, convention, meeting or seminar - these types of events are commonly held to introduce new products, share knowledge, announce fresh sales goals, provide periodic reviews as well as revealing of new incentive schemes`,
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Roadshows & Multiple On The Road Campaigns",
    description: `Our consistency in replicating your desired setup for each roadshow in different locations is something we take pride in. We believe that this consistency will help add value to how your brand is perceived and create the awareness your product or service desires.`,
    imgSrc: "card-1.jpg",
  },
  {
    heading: "Awards & Appreciation Presentation",
    description: `You can expect us to be able to create the perfect ceremony for you, be it for awards, cheque presentation, prize giving and so forth. We can not only help set the stage but also help design the mockups or create dazzling displays to help create the scene and make it memorable.`,
    imgSrc: "card-1.jpg",
  },
];

const Activities = () => {
  return (
    <section id="Activities" className="relative bg-background mb-20">
      <TextParallaxContent>
        <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold mb-8">
          Activities
          <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
        </h1>
        <div className="relative h-full w-full flex items-center justify-center">
          {items.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView={"visible"}
              className={`absolute flex items-center justify-center w-full h-screen`}
              style={{ top: `${index * 100}vh` }}
              variants={INVIEW_ANIMATION_VARIANTS}
              viewport={{
                margin: "0px 0px -400px 0px",
              }}
            >
              <Card
                imgSrc={`/images/${card.imgSrc}`}
                heading={card.heading}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </TextParallaxContent>
    </section>
  );
};

export default Activities;
