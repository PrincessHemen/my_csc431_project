import React from "react";
import { Stage, Layer, Circle } from "react-konva";

interface CanvasProps {
  points: { x: number; y: number }[];
}

const Canvas: React.FC<CanvasProps> = ({ points }) => {
  return (
    <Stage width={800} height={600} className="border border-gray-700">
      <Layer>
        {points.map((point: { x: number; y: number }, idx: number) => (
          <Circle
            key={idx}
            x={point.x}
            y={point.y}
            radius={2}
            fill="white"
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
