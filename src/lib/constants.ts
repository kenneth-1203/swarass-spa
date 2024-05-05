
export const tabs = ["Home", "Services", "Activities", "Contact"];

const STAGGER_DELAY = 0.1;
const CHILDREN_DELAY = 0.2;

export const HAMBURGER_ANIMATION_VARIANTS = {
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

export const HAMBURGER_CHILD_VARIANTS = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: 10,
  },
};
