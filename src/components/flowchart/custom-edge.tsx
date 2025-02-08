import { BaseEdge, getStraightPath } from "@xyflow/react";

export interface DerivedEdges {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

[] = [];
const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: DerivedEdges) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
};

export default CustomEdge;
