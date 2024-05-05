"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "./providers/app-context-provider";
import { tabs } from "@/lib/constants";

const STAGGER_DELAY = 0.1;
const CHILDREN_DELAY = 0.2;

const HAMBURGER_ANIMATION_VARIANTS = {
  open: {
    y: 0,
    x: 0,
    scale: 1,
    borderRadius: "0%",
    transition: {
      ease: "easeInOut",
      staggerChildren: STAGGER_DELAY,
      delayChildren: CHILDREN_DELAY,
    },
  },
  close: {
    y: -200,
    x: 100,
    scale: 0,
    borderRadius: "100%",
    transition: {
      ease: "easeInOut",
      staggerChildren: STAGGER_DELAY,
      staggerDirection: -1,
      delay: tabs.length * STAGGER_DELAY,
    },
  },
};

const HAMBURGER_CHILD_VARIANTS = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: 10,
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickable, setClickable] = useState(true);
  const { currentTab, scrollTo, shouldHideNav } = useAppContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 flex w-full justify-between z-[100]">
      {/* Desktop View */}
      <motion.div
        initial={{ y: -80 }}
        animate={shouldHideNav ? { y: -80 } : { y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="hidden md:flex justify-center items-center gap-2 sm:gap-8 mx-auto p-4 backdrop-blur-md w-full border-b border-foreground/5"
      >
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={currentTab === tab}
            selectTab={() => scrollTo(tab)}
            key={tab}
          />
        ))}
      </motion.div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="absolute right-0 top-0 flex select-none">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-14 h-14 bg-background m-4 rounded-full shadow-md z-10"
            onClick={clickable ? () => toggleMenu() : undefined}
          >
            <HamburgerToXIcon isOpen={isOpen} />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial="close"
              animate="open"
              exit="close"
              variants={HAMBURGER_ANIMATION_VARIANTS}
              onAnimationStart={() => setClickable(false)}
              onAnimationComplete={() => setClickable(true)}
              className="fixed flex flex-col gap-2 bg-background h-dvh w-full origin-top-right p-8"
            >
              {tabs.map((tab) => (
                <motion.a
                  key={tab}
                  className="text-6xl font-semibold"
                  variants={HAMBURGER_CHILD_VARIANTS}
                  onClick={() => {
                    scrollTo(tab);
                    setIsOpen(false);
                  }}
                >
                  {tab}
                </motion.a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Tab = ({
  text,
  selected,
  selectTab,
}: {
  text: string;
  selected: boolean;
  selectTab: (text: string) => void;
}) => {
  return (
    <button
      onClick={() => selectTab(text)}
      className="text-lg font-semibold capitalize transition-colors p-2 rounded-md relative"
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="nav-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 border-b-4 border-primary"
        ></motion.span>
      )}
    </button>
  );
};

const HamburgerToXIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div>
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Top line */}
        <motion.line
          x1="5"
          y1="10"
          x2="35"
          y2="10"
          stroke="black"
          strokeWidth="3"
          variants={{
            closed: { rotate: 0, translateY: 0 },
            open: { rotate: 45, translateY: 9 },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 10,
            stiffness: 80,
          }}
        />
        {/* Middle line */}
        <motion.line
          x1="5"
          y1="20"
          x2="35"
          y2="20"
          stroke="black"
          strokeWidth="3"
          variants={{
            closed: { opacity: 1, rotate: 0 },
            open: { opacity: 1, rotate: 225 },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 10,
            stiffness: 80,
          }}
        />
        {/* Bottom line */}
        <motion.line
          x1="5"
          y1="30"
          x2="35"
          y2="30"
          stroke="black"
          strokeWidth="3"
          variants={{
            closed: { rotate: 0, translateY: 0 },
            open: { rotate: -45, translateY: -9 },
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            damping: 10,
            stiffness: 80,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Navbar;
