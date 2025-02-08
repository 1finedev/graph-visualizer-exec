import { DerivedEdges } from "@/components/flowchart/custom-edge";
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
    sourcePosition: "right",
    position: { x: 100, y: 100 },
    data: {
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
    sourcePosition: "right",
    position: { x: 250, y: 100 },
    data: {
      text: "Loremipsu",
      icon: IconServer,
      background: "bg-brand-blue-faded",
    },
  },
  {
    id: "2",
    type: "custom",
    sourcePosition: "right",
    position: { x: 400, y: 100 },
    data: {
      text: "Loremipsumm",
      icon: IconServer,
      background: "bg-brand-blue-faded",
    },
  },
  {
    id: "3",
    type: "custom",
    sourcePosition: "left",
    position: { x: 650, y: 0 },
    data: {
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
    sourcePosition: "left",
    position: { x: 650, y: 200 },
    data: {
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

const derivedEdges: DerivedEdges[] = [];

initialNodes.map((node) => {
  if (Number(node.id) < 3) {
    const nextNode = initialNodes[Number(node.id) + 1];

    if (!nextNode) return;

    const {
      id,
      position: { x, y },
    } = nextNode;

    if (!id || !x || !y) return;

    derivedEdges.push({
      id: `${node.id}->${id}`,
      sourceX: node.position.x,
      sourceY: node.position.x,
      targetX: x,
      targetY: y,
    });
  }
});

export const initialEdges = [...derivedEdges];
