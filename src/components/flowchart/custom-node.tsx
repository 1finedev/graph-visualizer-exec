import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { type LucideIcon } from "lucide-react";

type CustomData = {
  icon: React.FC;
  isInvisible?: boolean;
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
          <div className="cursor-pointer">
            <data.icon />
            <p className="absolute -bottom-5 text-sm font-semibold text-secondary">
              {data.text}
            </p>
            {data.subText && (
              <p className="absolute -bottom-10 text-xs font-semibold text-secondary-muted">
                {data.subText}
              </p>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          // className={`rounded-full bg-accent px-4 text-base font-medium ${isOpen && "hidden"}`}
          // side="right"
          sideOffset={20}
        >
          hello world
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default CustomNode;
