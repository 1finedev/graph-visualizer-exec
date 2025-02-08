import { type Node, type NodeProps } from "@xyflow/react";
import { type LucideIcon } from "lucide-react";

type CustomData = {
  icon: React.FC;
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
        <p className="text-secondary-muted absolute -bottom-10 text-xs font-semibold">
          {data.subText}
        </p>
      )}
    </div>
  );
};

export default CustomNode;
