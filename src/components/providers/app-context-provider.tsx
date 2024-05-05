"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AppContextProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
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

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
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
