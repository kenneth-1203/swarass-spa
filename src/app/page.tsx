"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, animate } from "framer-motion";

import Navbar from "@/components/navbar";
import Home from "@/sections/home";
import Services from "@/sections/services";
import Activities from "@/sections/activities";
import Contact from "@/sections/contact";

const tabs = ["Home", "Services", "Activities", "Contact"];

export default function Page() {
  const [currentTab, setCurrentTab] = useState<string>("Home");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  const handleScroll = (latestScrollY: number) => {
    const sectionOffsets = tabs.map((tab) => {
      const el = document.getElementById(tab);
      return el ? el.offsetTop : 0;
    });

    for (let i = tabs.length - 1; i >= 0; i--) {
      if (latestScrollY >= sectionOffsets[i] - 300) {
        setCurrentTab(tabs[i]);
        break;
      }
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    handleScroll(latest);
    if (latest > lastScrollY && latest > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollY(latest);
  });

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

  const selectTab = (text: string) => {
    setCurrentTab(text);
    scrollTo(text);
  };

  return (
    <main className="relative">
      <Navbar
        tabs={tabs}
        currentTab={currentTab}
        selectTab={selectTab}
        isHidden={isHidden}
      />
      <Home selectTab={selectTab} />
      <Services />
      <Activities />
      <Contact />
      <footer></footer>
    </main>
  );
}
