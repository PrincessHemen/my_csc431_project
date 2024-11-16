import React from "react";
import { Stage, Layer, Circle } from "react-konva";

interface CanvasProps {
  points: { x: number; y: number }[];
}

const Canvas: React.FC<CanvasProps> = ({ points }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Stage width={800} height={600} className="border border-gray-500">
        <Layer>
          {points.map((point, idx) => (
            <Circle key={idx} x={point.x} y={point.y} radius={2} fill="white" />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
