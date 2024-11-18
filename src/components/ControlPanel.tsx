// Importing React's useState hook for managing local state
import { useState } from "react";

// Importing algorithms for rendering graphics
import { ddaLine } from "../utils/DDA"; // Digital Differential Analyzer (DDA) algorithm for line drawing
import { bresenhamLine } from "../utils/Bresenham"; // Bresenham's line drawing algorithm
import { midpointCircle } from "../utils/MidpointCircle"; // Midpoint algorithm for circle rendering

// Define the type for points used in the algorithms
interface Point {
  x: number;
  y: number;
}

// ControlPanel component handles user inputs and triggers rendering of graphics
const ControlPanel = ({ onRender }: { onRender: (points: Point[]) => void }) => {
  // State variables for user inputs (line endpoints and circle radius)
  const [x1, setX1] = useState(0); // x-coordinate of the first point
  const [y1, setY1] = useState(0); // y-coordinate of the first point
  const [x2, setX2] = useState(0); // x-coordinate of the second point
  const [y2, setY2] = useState(0); // y-coordinate of the second point
  const [r, setR] = useState(0); // Radius for circle rendering
  const [gridSize, setGridSize] = useState(10); 

  // Measures and logs the performance of a rendering algorithm
  const measurePerformance = (algorithm: string, points: Point[]) => {
    const start = performance.now(); // Start the timer
    onRender(points); // Trigger rendering by passing points to parent
    const end = performance.now(); // End the timer
    console.log(`${algorithm} rendered in:`, end - start, "ms");
  };

  // Handles rendering lines using the selected algorithm
  const handleLine = (algorithm: string) => {
    try {
      let points: Point[] = [];
      if (algorithm === "dda") points = ddaLine(x1, y1, x2, y2); // Generate points using DDA
      else if (algorithm === "bresenham") points = bresenhamLine(x1, y1, x2, y2); // Generate points using Bresenham
  
      measurePerformance(algorithm, points); // Measure performance and trigger rendering
    } catch (error) {
      // Display an alert if there's an error
      alert((error as Error).message); // Safely cast error to Error and display its message
    }
  };
  

  // Handles rendering a circle using the Midpoint Circle algorithm
  const handleCircle = () => {
    if (r <= 0) {
      alert("Radius must be greater than 0");
      return;
    }
    const points: Point[] = midpointCircle(x1, y1, r);
    measurePerformance("midpointCircle", points);
  };

  const handleGrid = () => {
    const points: Point[] = [];
    // Generate grid points based on gridSize
    for (let i = 0; i <= 800; i += gridSize) {
      for (let j = 0; j <= 600; j += gridSize) {
        points.push({ x: i, y: j });
      }
    }
    measurePerformance("grid", points); // Log performance for grid rendering
  };
  

  return (
    // Container for the control panel with flexbox and responsive styles
    <div className="flex flex-col gap-4 sm:w-1/3 w-full max-w-sm">
      {/* Input fields for line endpoints and circle radius */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label className="mb-1">X1: </label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(+e.target.value)} // Update state with user input
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Y1: </label>
          <input
            type="number"
            value={y1}
            onChange={(e) => setY1(+e.target.value)}
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">X2: </label>
          <input
            type="number"
            value={x2}
            onChange={(e) => setX2(+e.target.value)}
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Y2: </label>
          <input
            type="number"
            value={y2}
            onChange={(e) => setY2(+e.target.value)}
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="mb-1">Radius (Circle): </label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(+e.target.value)}
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="mb-1">Grid Size: </label>
          <input
            type="number"
            value={gridSize}
            onChange={(e) => setGridSize(+e.target.value)}
            className="p-2 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
        </div>
      </div>

      {/* Buttons to trigger rendering with the selected algorithm */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
          onClick={() => handleLine("dda")} // Trigger DDA line rendering
        >
          Render Line (DDA)
        </button>
        <button
          className="btn bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md"
          onClick={() => handleLine("bresenham")} // Trigger Bresenham line rendering
        >
          Render Line (Bresenham)
        </button>
        <button
          className="btn bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md"
          onClick={handleCircle} // Trigger circle rendering
        >
          Render Circle
        </button>
        <button
          className="btn bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md"
          onClick={handleGrid} // Trigger grid rendering
        >
          Render Grid
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
