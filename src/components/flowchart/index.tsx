"use client";

import { ReactFlow } from "@xyflow/react";

import { initialEdges, initialNodes } from "@/data/chart";
import "@xyflow/react/dist/style.css";
import { IconShieldX } from "public/svg";
import { useState } from "react";
import CustomEdge from "./custom-edge";
import CustomNode from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowChart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="rounded-2xl bg-[#FAFAFA] p-4">
      <div className="h-[40vh]">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="top-right"
        />
      </div>
      <hr />
      <div className="mt-2.5 flex gap-3">
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-brand-red p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-base font-bold leading-[38px] text-brand-red">
            Lorem
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#FF9500] p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-base font-bold leading-[38px] text-brand-red">
            Lorem
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-brand-green p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-base font-bold leading-[38px] text-brand-red">
            Lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
