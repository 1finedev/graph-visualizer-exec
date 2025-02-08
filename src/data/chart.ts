import {
  OverlayFour,
  OverlayOne,
  OverlayThree,
  OverlayTwo,
  OverlayZero,
} from "@/components/flowchart/overlays";
import { MarkerType } from "@xyflow/react";
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
      handles: [{ type: "source" as const, position: "right" as const, id: 0 }],
      text: "Loremipsumm",
      icon: IconVenetianMask,
      background: "bg-brand-pink",
      meta: {
        icon: IconGroup,
        background: "bg-brand-purple",
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
        { type: "target" as const, position: "left" as const, id: 0 },
        { type: "source" as const, position: "right" as const, id: 1 },
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
        { type: "target" as const, position: "left" as const, id: 0 },
        { type: "source" as const, position: "right" as const, id: 1 },
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
      handles: [{ type: "target" as const, position: "left" as const, id: 0 }],
      text: "Loremipsumdolorsit",
      subText: "192.168.1.1",
      icon: IconServer,
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
      handles: [{ type: "target" as const, position: "left" as const, id: 0 }],
      text: "Loremipsumdolorsit002",
      subText: "192.168.1.2",
      icon: IconServer,
      background: "bg-brand-blue-faded",
      meta: {
        icon: IconShieldX,
        background: "bg-brand-red",
      },
    },
  },
];

export const initialEdges = [
  {
    id: "0-1",
    source: "0",
    target: "1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
