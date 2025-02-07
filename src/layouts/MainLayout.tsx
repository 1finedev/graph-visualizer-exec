"use client";

import SideBar from "@/components/sidebar/SideBar";
import { useState } from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <>
      <SideBar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <main
        className={`ml-auto px-9 py-7 ${!isOpen ? "w-[calc(100%-5vw)]" : "w-[calc(100%-17vw)]"}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
