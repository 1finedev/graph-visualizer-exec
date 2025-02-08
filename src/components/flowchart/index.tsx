"use client";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
} from "@xyflow/react";

import { initialNodes } from "@/data/chart";
import "@xyflow/react/dist/style.css";
import { IconShieldX } from "public/svg";
import { useCallback, useState } from "react";
import CustomEdge from "./custom-edge";
import CustomNode from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

export const initialEdges = [
  { id: "0-1", source: "0", target: "1" },
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "2-4", source: "2", target: "4" },
];

function FlowChart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div className="rounded-2xl bg-[#FAFAFA] p-4">
      <div className="h-[40vh]">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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
