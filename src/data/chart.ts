import {
  OverlayFour,
  OverlayOne,
  OverlayThree,
  OverlayTwo,
  OverlayZero,
} from "@/components/flowchart/overlays";
import {
  IconGroup,
  IconServer,
  IconShieldX,
  IconVenetianMask,
} from "public/svg";

export const initialNodes = [
  {
    id: "0",
    type: "custom",
    position: { x: 100, y: 100 },
    data: {
      id: "0",

      overlay: OverlayZero,
      handles: [{ type: "source", position: "right", id: 0 }],
      text: "Loremipsumm",
      icon: IconVenetianMask,
      iconColor: "stroke-brand-red",
      background: "bg-[#FFF1F0]",
      meta: {
        icon: IconGroup,
        iconColor: "stroke-[#FFFFFF]",
        background: "bg-[#7A44FF]",
      },
    },
  },
  {
    id: "1",
    type: "custom",
    position: { x: 250, y: 100 },
    data: {
      id: "1",

      overlay: OverlayOne,
      handles: [
        { type: "target", position: "left", id: 0 },
        { type: "source", position: "right", id: 1 },
      ],
      text: "Loremipsu",
      icon: IconServer,
      background: "bg-brand-blue-faded",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 100 },
    data: {
      id: "2",
      overlay: OverlayTwo,
      handles: [
        { type: "target", position: "left", id: 0 },
        { type: "source", position: "right", id: 1 },
      ],
      text: "Loremipsumm",
      icon: IconServer,
      background: "bg-brand-blue-faded",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 650, y: 0 },
    data: {
      id: "3",
      overlay: OverlayThree,
      handles: [{ type: "target", position: "left", id: 0 }],
      text: "Loremipsumdolorsit",
      subText: "192.168.1.1",
      icon: IconServer,
      iconColor: "stroke-[#1873DE]",
      background: "bg-brand-blue-faded",
      meta: {
        icon: IconShieldX,
        background: "bg-brand-red",
      },
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 650, y: 200 },
    data: {
      id: "4",
      overlay: OverlayFour,
      handles: [{ type: "target", position: "left", id: 0 }],
      text: "Loremipsumdolorsit002",
      subText: "192.168.1.2",
      icon: IconServer,
      iconColor: "stroke-[#1873DE]",
      background: "bg-brand-blue-faded",
      meta: {
        icon: IconShieldX,
        background: "bg-brand-red",
      },
    },
  },
];

export const initialEdges = [
  { id: "0-1", source: "0", target: "1" },
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "2-4", source: "2", target: "4" },
];
