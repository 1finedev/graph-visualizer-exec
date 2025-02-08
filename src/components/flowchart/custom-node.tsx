import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

type CustomData = {
  id: string;
  overlay: React.FC<{ position: { x: number; y: number } }>;
  icon: React.FC;
  handles: {
    type: "target" | "source";
    position: "left" | "right";
    id: number;
  }[];
  subText?: string;
  background: string;
  text: string;
  meta: {
    icon: React.FC;
    background: string;
  };
};

export type TCustomNode = Node<CustomData, "custom">;

const CustomNode = ({ data }: NodeProps<TCustomNode>) => {
  return (
    <div
      className={`relative mx-14 flex cursor-pointer items-center justify-center rounded-full p-3 ${data.background} `}
    >
      {data?.meta && (
        <div
          className={`${data.meta.background} absolute -right-2 -top-3 flex items-center justify-center rounded-full border border-white p-1`}
        >
          <data.meta.icon />
        </div>
      )}
      <data.icon />
      <p className="absolute -bottom-5 text-sm font-semibold text-secondary">
        {data.text}
      </p>
      {data.subText && (
        <p className="absolute -bottom-10 text-xs font-semibold text-secondary-muted">
          {data.subText}
        </p>
      )}
      {data?.handles?.map((handle) => (
        <Handle
          key={handle.id}
          id={handle.id.toString()}
          type={handle.type}
          position={handle.position === "left" ? Position.Left : Position.Right}
        />
      ))}
      <div className="bg-brand-pink" />
    </div>
  );
};

export default CustomNode;
