"use client";

import { animate, useMotionValueEvent, useScroll } from "framer-motion";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { tabs } from "@/lib/constants";

type AppContextProps = {
  currentTab: string;
  scrollTo: (targetId: string) => void;
  shouldHideNav: boolean;
  setShouldHideNav: Dispatch<SetStateAction<boolean>>;
  lastScrollY: number;
  setLastScrollY: Dispatch<SetStateAction<number>>;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextProps | null>(null);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [currentTab, setCurrentTab] = useState<string>("Home");
  const [shouldHideNav, setShouldHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

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

  const handleScrollTab = (latestScrollY: number) => {
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

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    handleScrollTab(latest);
    if (latest > lastScrollY && latest > 50) {
      setShouldHideNav(true);
    } else {
      setShouldHideNav(false);
    }

    setLastScrollY(latest);
  });

  return (
    <AppContext.Provider
      value={{
        currentTab,
        scrollTo,
        shouldHideNav,
        setShouldHideNav,
        lastScrollY,
        setLastScrollY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be within a AppContextProvider");
  }
  return context;
}
