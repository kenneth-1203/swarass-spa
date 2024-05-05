"use client";

import { animate } from "framer-motion";
import { tabs } from "@/lib/constants";

export const useScrollAction = () => {
  const handleScrollTab = (
    setter: (tab: string) => void,
    latestScrollY: number
  ) => {
    const sectionOffsets = tabs.map((tab) => {
      const el = document.getElementById(tab);
      return el ? el.offsetTop : 0;
    });

    for (let i = tabs.length - 1; i >= 0; i--) {
      if (latestScrollY >= sectionOffsets[i] - 300) {
        setter(tabs[i]);
        break;
      }
    }
  };

  const scrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const start = window.scrollY;
      const end = targetElement.getBoundingClientRect().top + start;
      const duration = 0.5;

      animate(start, end, {
        duration,
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  };

  return { scrollTo, handleScrollTab };
};
