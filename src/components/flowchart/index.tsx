"use client";

import {
  type Connection,
  type EdgeProps,
  BaseEdge,
  getStraightPath,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import { initialEdges, initialNodes } from "@/data/chart";
import "@xyflow/react/dist/style.css";
import { ShieldX } from "lucide-react";
import { useCallback } from "react";
import CustomNode from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
};
const edgeTypes = {
  "custom-edge": CustomEdge,
};

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        type: "custom-edge",
        label: "",
        id: `${connection.source}->${connection.target}`,
      };
      setEdges((eds) => [...eds, edge]);
    },
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
        />
      </div>
      <hr />
      <div className="mt-2.5 flex gap-3">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-brand-red rounded-full p-1">
            <ShieldX className="fill-brand-red stroke-white" />
          </div>
          <p className="text-brand-red text-xl font-bold">Lorem</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#FF9500] p-1">
            <ShieldX className="fill-[#FF9500] stroke-white" />
          </div>
          <p className="text-xl font-bold text-[#FF9500]">Lorem</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="bg-brand-green rounded-full p-1">
            <ShieldX className="fill-brand-green stroke-white" />
          </div>
          <p className="text-brand-green text-xl font-bold">Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
