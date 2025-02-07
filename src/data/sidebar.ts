import {
  Cuboid,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Shrink,
  TriangleAlert,
  Unplug,
} from "lucide-react";

export const NAV_LINKS = [
  {
    id: 1,
    icon: LayoutDashboard,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-0",
  },
  {
    id: 2,
    icon: TriangleAlert,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-0.5 stroke-white",
    selected: true,
  },
  {
    id: 3,
    icon: Cuboid,
    label: "Integration",
    pageUrl: "/",
    className: "stroke-0.5 stroke-white",
    selected: true,
  },
  {
    id: 4,
    icon: Shrink,
    label: "Vulnerability",
    pageUrl: "/",
    className: "stroke-[#A3A9B6]",
  },
  {
    id: 5,
    icon: Unplug,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-[#A3A9B6]",
  },
  {
    id: 6,
    icon: FileText,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-0.5 stroke-white",
    selected: true,
  },
  {
    id: 7,
    icon: FileText,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-0.5 stroke-white",
    selected: true,
  },
];

export const NAV_LINKS_BASE = [
  {
    id: 8,
    icon: Settings,
    label: "Settings",
    pageUrl: "/",
    className: "stroke-0.5 stroke-black",
    selected: true,
  },
  {
    id: 9,
    icon: LogOut,
    label: "Lorem",
    pageUrl: "/",
    className: "stroke-0.5 stroke-white",
    selected: true,
  },
];
