"use client";

import { NAV_LINKS } from "@/data/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="shadow-sidebar fixed min-h-screen w-[17vw] max-w-[17vw] rounded-br-xl rounded-tr-xl bg-white px-4 py-7">
      <nav className="relative">
        <span
          onClick={() => setShowLabels((prev) => !prev)}
          className="shadow-sidebar-collapse absolute -right-8 top-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#F0F1F3] bg-green-700"
        >
          {showLabels ? (
            <ChevronLeft className="stroke-white" />
          ) : (
            <ChevronRight className="stroke-white" />
          )}
        </span>
        {NAV_LINKS.map((item) => (
          <Link key={item.id} href={item.pageUrl}>
            <div className="mb-1.5 flex items-center gap-2 rounded-lg px-3 py-2.5">
              <span className="m-[1px] flex-shrink-0">
                <item.icon className="stroke-0.5 h-5 w-5 border-0 fill-[#A3A9B6] stroke-white" />
              </span>
              {showLabels && (
                <span className="hidden flex-shrink-0 text-base md:inline-block">
                  {item.label}
                </span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
