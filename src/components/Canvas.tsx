// Importing React and the required components from the react-konva library
import React from "react";
import { Stage, Layer, Circle } from "react-konva";

// Defining the interface for Canvas component props
// `points` is an array of objects, each containing `x` and `y` coordinates

interface CanvasProps {
  points: { x: number; y: number }[];
}

// The Canvas component, a functional component with typed props using React.FC
const Canvas: React.FC<CanvasProps> = ({ points }) => {
  return (
    // A container div with flexbox styling to center the Konva Stage
    
    <div className="flex justify-center items-center w-full">
      
      {/* Konva Stage component to create a canvas for 2D rendering */}
      <Stage width={800} height={600} className="border border-gray-500">
        
        {/* Konva Layer component to group visual elements */}
        <Layer>
          
          {/* Mapping over the points array to create a circle for each point */}
          
          {points.map((point, idx) => (
            
            // Konva Circle component for rendering a point
            // `key` ensures unique identification of each circle in the list
            
            <Circle key={idx} x={point.x} y={point.y} radius={2} fill="white" />
          
          ))}
        
        </Layer>
      </Stage>
    </div>
  );
};

// Exporting the Canvas component for use in other parts of the application

export default Canvas;
