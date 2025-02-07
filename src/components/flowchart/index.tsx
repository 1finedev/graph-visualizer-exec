import {
  BaseEdge,
  Connection,
  EdgeProps,
  getStraightPath,
  Node,
  NodeProps,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import {
  type LucideIcon,
  Server,
  ShieldX,
  Users,
  VenetianMask,
} from "lucide-react";
import { useCallback } from "react";

type CustomData = {
  icon: LucideIcon;
  subText?: string;
  iconColor: string;
  background: string;
  text: string;
  meta: {
    icon: LucideIcon;
    iconColor: string;
    background: string;
  };
};

type CustomNode = Node<CustomData, "custom">;

const CustomNode = ({ data }: NodeProps<CustomNode>) => {
  return (
    <div
      className={`rounded-full ${data.background} relative mx-10 flex items-center justify-center p-3`}
    >
      {data?.meta && (
        <div
          className={`${data.meta.background} absolute -top-1 right-0 flex items-center justify-center rounded-full border border-white p-1`}
        >
          <data.meta.icon className={`${data.meta.iconColor} h-2.5 w-2.5`} />
        </div>
      )}
      <data.icon className={`${data.iconColor} h-6 w-6`} />
      <p className="absolute -bottom-5 text-sm font-semibold text-[#525D73]">
        {data.text}
      </p>
      {data.subText && (
        <p className="absolute -bottom-10 text-xs font-semibold text-[#667085]">
          {data.subText}
        </p>
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "0",
    type: "custom",
    position: { x: 100, y: 100 },
    data: {
      text: "Loremipsumm",
      icon: VenetianMask,
      iconColor: "stroke-[#E5372B]",
      background: "bg-[#FFF1F0]",
      meta: {
        icon: Users,
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
      text: "Loremipsu",
      icon: Server,
      iconColor: "stroke-[#1873DE]",
      background: "bg-[#D7EAFF]",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 100 },
    data: {
      text: "Loremipsumm",
      icon: Server,
      iconColor: "stroke-[#1873DE]",
      background: "bg-[#D7EAFF]",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 650, y: 0 },
    data: {
      text: "Loremipsumdolorsit",
      subText: "192.168.1.1",
      icon: Server,
      iconColor: "stroke-[#1873DE]",
      background: "bg-[#D7EAFF]",
      meta: {
        icon: ShieldX,
        iconColor: "stroke-[#FFFFFF]",
        background: "bg-[#E5372B]",
      },
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 650, y: 200 },
    data: {
      text: "Loremipsumdolorsit002",
      subText: "192.168.1.2",
      icon: Server,
      iconColor: "stroke-[#1873DE]",
      background: "bg-[#D7EAFF]",
      meta: {
        icon: ShieldX,
        iconColor: "stroke-[#FFFFFF]",
        background: "bg-[#E5372B]",
      },
    },
  },
];

const initialEdges = [
  { id: "0->1", source: "1", target: "2", label: "to the", type: "step" },
];

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
          <div className="rounded-full bg-[#E5372B] p-1">
            <ShieldX className="fill-[#E5372B] stroke-white" />
          </div>
          <p className="text-xl font-bold text-[#E5372B]">Lorem</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#FF9500] p-1">
            <ShieldX className="fill-[#FF9500] stroke-white" />
          </div>
          <p className="text-xl font-bold text-[#FF9500]">Lorem</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#02983E] p-1">
            <ShieldX className="fill-[#02983E] stroke-white" />
          </div>
          <p className="text-xl font-bold text-[#02983E]">Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
