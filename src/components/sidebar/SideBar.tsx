"use client";

import { NAV_LINKS, NAV_LINKS_BASE } from "@/data/sidebar";
import {
  Tooltip,
  TooltipContent,
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
      className={`${isOpen ? "w-[16.5vw]" : "w-fit"} fixed flex min-h-screen flex-col rounded-br-xl rounded-tr-xl bg-white px-4 py-7 shadow-sidebar transition-all duration-300`}
    >
      <nav className="relative flex flex-1 flex-col justify-between">
        <span
          onClick={toggleIsOpen}
          className="absolute -right-8 top-0 hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[3px] border-border bg-[#00732E] shadow-sidebar-collapse lg:flex"
        >
          {isOpen ? (
            <ChevronLeft className="stroke-white" />
          ) : (
            <ChevronRight className="stroke-white" />
          )}
        </span>{" "}
        <div>
          <div className="mb-8 flex items-center">
            <div>
              <AsteliaLogo />
            </div>
            {isOpen && (
              <div className="ml-2 hidden lg:block">
                <AsteliaLogoText />
              </div>
            )}
          </div>
          <div>
            {NAV_LINKS.map((item) => (
              <Link key={item.id} href={item.pageUrl}>
                <div
                  onClick={() => setCurrentPage(item.id)}
                  className={`${currentPage === item.id && "bg-accent"} ${!isOpen ? "w-fit" : "gap-2"} mb-1.5 flex items-center rounded-lg px-3 py-2.5`}
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <item.icon hovered={currentPage === item.id} />
                    </TooltipTrigger>
                    <TooltipContent
                      className={`rounded-full bg-accent px-4 text-base font-medium ${isOpen && "hidden"}`}
                      side="right"
                      sideOffset={20}
                    >
                      {item.label}{" "}
                    </TooltipContent>
                    {isOpen && (
                      <p className="hidden flex-shrink-0 text-base text-secondary lg:inline-block">
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
                className={`${currentPage === item.id && "bg-accent"} ${!isOpen ? "w-fit" : "gap-2"} mb-1.5 flex items-center rounded-lg px-3 py-2.5`}
              >
                <div>
                  <item.icon hovered={currentPage === item.id} />
                </div>
                {isOpen && (
                  <p className="hidden flex-shrink-0 text-base text-secondary lg:inline-block">
                    {item.label}
                  </p>
                )}
              </div>
            </Link>
          ))}

          <hr className="my-5" />
          {isOpen ? (
            <div className="flex cursor-pointer items-center justify-between">
              <div className="hidden gap-3 lg:flex lg:items-center">
                <Image src="/avatar.jpeg" width={60} height={60} alt="" />
                <div>
                  <p className="text-base">Lorem</p>
                  <p className="text-base">Lorem</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <IconLogout />
              </div>
            </div>
          ) : (
            <div>
              <Image src="/avatar.jpeg" width={40} height={40} alt="" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
