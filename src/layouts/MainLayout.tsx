"use client";

import SideBar from "@/components/sidebar/SideBar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <TooltipProvider delayDuration={100}>
      <SideBar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <main
        className={`flex-1 px-4 py-7 lg:px-9 ${isOpen ? "ml-[16.5vw]" : "ml-[5vw]"}`}
      >
        {children}
      </main>
    </TooltipProvider>
  );
};

export default MainLayout;
