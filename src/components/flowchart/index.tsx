"use client";

import { ReactFlow } from "@xyflow/react";

import { initialEdges, initialNodes } from "@/data/chart";
import { Tooltip, TooltipContent } from "@radix-ui/react-tooltip";
import "@xyflow/react/dist/style.css";
import { IconShieldX } from "public/svg";
import { useState } from "react";
import CustomNode, { type TCustomNode } from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

function FlowChart() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<TCustomNode | null>(null);

  return (
    <div className="rounded-2xl bg-[#FAFAFA] p-4">
      <div className="relative h-[23.5vh]">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          fitView
          attributionPosition="top-right"
          onNodeMouseEnter={(_, node) => setSelectedNode(node as TCustomNode)}
          onNodeMouseLeave={() => setSelectedNode(null)}
        />
        {selectedNode && (
          <Tooltip open={!!selectedNode}>
            <TooltipContent>
              <selectedNode.data.overlay position={selectedNode.position} />
            </TooltipContent>
          </Tooltip>
        )}
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
          <p className="text-sm font-bold leading-[38px] text-[#FF9500] lg:text-base">
            Lorem
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 lg:gap-2">
          <div className="rounded-full bg-brand-green p-1">
            <IconShieldX stroke="1.5" />
          </div>
          <p className="text-base font-bold leading-[38px] text-brand-green lg:text-base">
            Lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
