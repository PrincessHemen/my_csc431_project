import { useState } from "react";
import { ddaLine } from "../utils/DDA";
import { bresenhamLine } from "../utils/Bresenham";
import { midpointCircle } from "../utils/MidpointCircle";

// Define the type for the points
interface Point {
  x: number;
  y: number;
}

const ControlPanel = ({ onRender }: { onRender: (points: Point[]) => void }) => {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);
  const [r, setR] = useState(0);

  const measurePerformance = (algorithm: string, points: Point[]) => {
    const start = performance.now();
    // Simulate rendering by invoking the onRender function with points
    onRender(points);
    const end = performance.now();
    console.log(`Performance of ${algorithm}:`, end - start, "ms");
  };
  

  const handleLine = (algorithm: string) => {
    let points: Point[] = [];
    if (algorithm === "dda") points = ddaLine(x1, y1, x2, y2);
    else if (algorithm === "bresenham") points = bresenhamLine(x1, y1, x2, y2);
  
    // Measure performance before rendering
    measurePerformance(algorithm, points);
  };
  
  const handleCircle = () => {
    const points: Point[] = midpointCircle(x1, y1, r); // Explicitly define type for points
  
    // Measure performance before rendering
    measurePerformance("midpointCircle", points);
  };
  

  return (
    <div className="flex flex-col gap-4 sm:w-1/3 w-full max-w-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label className="mb-1">X1: </label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(+e.target.value)}
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
      </div>
      <div className="flex gap-4 mt-4 justify-center">
        <button
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          onClick={() => handleLine("dda")}
        >
          Render Line (DDA)
        </button>
        <button
          className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
          onClick={() => handleLine("bresenham")}
        >
          Render Line (Bresenham)
        </button>
        <button
          className="btn bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
          onClick={handleCircle}
        >
          Render Circle
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
