"use client"
import React, { createContext, useState } from 'react';
import { AppContextType } from '@/interFace/interFace';

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleSearchMenu = () => {
    setSearchOpen(!searchOpen);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    searchOpen,
    toggleSideMenu,
    toggleSearchMenu,
    scrollDirection,
    setScrollDirection
  };
 
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
