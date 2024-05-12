export const INVIEW_ANIMATION_VARIANTS = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, damping: 10, stiffness: 100, type: "spring" } },
  hidden: { opacity: 0, y: 40, transition: { duration: 1, damping: 10, stiffness: 100, type: "spring" } },
};

export const INVIEW_ANIMATION_TRANSITION = {
  damping: 10,
  duration: 0.4,
  stiffness: 100,
  type: "spring",
};

export const INVIEW_ANIMATION_VIEWPORT = {
  once: true,
};
