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
        className={`ml-auto px-4 py-7 lg:px-9 ${!isOpen ? "w-[calc(100%-5vw)]" : "w-[calc(100%-17vw)]"}`}
      >
        {children}
      </main>
    </TooltipProvider>
  );
};

export default MainLayout;
