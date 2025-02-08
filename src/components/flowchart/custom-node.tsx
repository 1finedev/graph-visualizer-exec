import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { type LucideIcon } from "lucide-react";

type CustomData = {
  id: string;
  overlay: React.FC;
  icon: React.FC;
  handles: {
    type: "target" | "source";
    position: "left" | "right";
    id: number;
  }[];
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
      {data?.handles?.map((handle) => (
        <Handle
          key={handle.id}
          id={handle.id.toString()}
          type={handle.type}
          position={handle.position === "left" ? Position.Left : Position.Right}
          onConnect={(params) => console.log("handle onConnect", params)}
        />
      ))}
      {data?.meta && (
        <div
          className={`${data.meta.background} absolute -right-2 -top-3 flex items-center justify-center rounded-full border border-white p-1`}
        >
          <data.meta.icon />
        </div>
      )}

      <Tooltip>
        <TooltipTrigger>
          <div className="relative cursor-pointer">
            <data.icon />
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform text-sm font-semibold text-secondary">
              {data.text}
            </p>
            {data.subText && (
              <p className="absolute -bottom-12 text-xs font-semibold text-secondary-muted">
                {data.subText}
              </p>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side={Number(data.id) > 2 ? "left" : "bottom"}
          sideOffset={50}
        >
          <data.overlay />
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default CustomNode;
