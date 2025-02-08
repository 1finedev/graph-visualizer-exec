"use client";

import { NAV_LINKS, NAV_LINKS_BASE } from "@/data/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AsteliaLogo, AsteliaLogoText, IconLogout } from "public/svg";
import { useState } from "react";

interface SideBarProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const SideBar = ({ isOpen, toggleIsOpen }: SideBarProps) => {
  const [currentPage, setCurrentPage] = useState(1); // use the id to track just to simulate the select

  return (
    <div
      className={`fixed min-h-screen shadow-sidebar ${
        isOpen ? "w-[17vw]" : "w-[5vw]"
      } flex max-w-[17vw] flex-col rounded-br-xl rounded-tr-xl bg-white px-4 py-7 transition-all duration-300`}
    >
      <nav className="relative flex flex-1 flex-col justify-between">
        <span
          onClick={toggleIsOpen}
          className="absolute -right-8 top-0 hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#F0F1F3] bg-green-700 shadow-sidebar-collapse md:flex"
        >
          {isOpen ? (
            <ChevronLeft className="stroke-white" />
          ) : (
            <ChevronRight className="stroke-white" />
          )}
        </span>{" "}
        <TooltipProvider delayDuration={100}>
          <div>
            <div className="mb-8 flex items-center gap-2 px-3">
              <div>
                <AsteliaLogo />
              </div>
              {isOpen && <AsteliaLogoText />}
            </div>
            <div>
              {NAV_LINKS.map((item) => (
                <Link key={item.id} href={item.pageUrl}>
                  <div
                    onClick={() => setCurrentPage(item.id)}
                    className={`${currentPage === item.id && "bg-[#E9FAF0]"} ${!isOpen && "w-fit"} mb-1.5 flex items-center gap-2 rounded-lg px-3 py-2.5`}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <item.icon hovered={currentPage === item.id} />
                      </TooltipTrigger>
                      <TooltipContent
                        className={`text-base ${isOpen && "hidden"}`}
                        side="right"
                        sideOffset={20}
                      >
                        {item.label}
                      </TooltipContent>
                      {isOpen && (
                        <p className="hidden flex-shrink-0 text-base text-secondary md:inline-block">
                          {item.label}
                        </p>
                      )}
                    </Tooltip>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            {NAV_LINKS_BASE.map((item) => (
              <Link key={item.id} href={item.pageUrl}>
                <div
                  onClick={() => setCurrentPage(item.id)}
                  className={`${currentPage === item.id && "bg-[#E9FAF0]"} mb-1.5 flex items-center gap-2 rounded-lg px-3 py-2.5`}
                >
                  <Tooltip>
                    <TooltipTrigger className="m-[1px] flex-shrink-0" asChild>
                      <item.icon hovered={currentPage === item.id} />
                    </TooltipTrigger>
                    <TooltipContent
                      className={`text-base ${isOpen && "hidden"}`}
                      side="right"
                      sideOffset={20}
                    >
                      {item.label}
                    </TooltipContent>
                    {isOpen && (
                      <p className="hidden flex-shrink-0 text-base text-secondary md:inline-block">
                        {item.label}
                      </p>
                    )}
                  </Tooltip>
                </div>
              </Link>
            ))}

            <hr className="my-5" />
            <div className="flex cursor-pointer items-center justify-between">
              {isOpen && (
                <div className="hidden gap-3 md:flex md:items-center">
                  <Image src="/avatar.jpeg" width={60} height={60} alt="" />
                  <div>
                    <p className="text-base">Lorem</p>
                    <p className="text-base">Lorem</p>
                  </div>
                </div>
              )}
              <IconLogout />
            </div>
          </div>
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default SideBar;
