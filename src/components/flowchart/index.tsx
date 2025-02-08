"use client";

import { ReactFlow } from "@xyflow/react";

import { initialEdges, initialNodes } from "@/data/chart";
import "@xyflow/react/dist/style.css";
import { IconShieldX } from "public/svg";
import { useState } from "react";
import CustomNode from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

function FlowChart() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <div className="rounded-2xl bg-[#FAFAFA] p-4">
      <div className="h-[40vh]">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          fitView
          attributionPosition="top-right"
        />
      </div>
      <hr />
      <div className="mt-2.5 flex gap-2 lg:gap-3">
        <div className="flex items-center justify-center gap-1 lg:gap-2">
          <div className="rounded-full bg-brand-red p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-sm font-bold leading-[38px] text-brand-red lg:text-base">
            Lorem
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 lg:gap-2">
          <div className="rounded-full bg-[#FF9500] p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-sm font-bold leading-[38px] text-brand-red lg:text-base">
            Lorem
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 lg:gap-2">
          <div className="rounded-full bg-brand-green p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-sm font-bold leading-[38px] text-brand-red lg:text-base">
            Lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
