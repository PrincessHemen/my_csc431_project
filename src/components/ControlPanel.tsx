import React, { useState } from "react";
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

  const handleLine = (algorithm: string) => {
    let points: Point[] = []; // Explicitly define type for points
    if (algorithm === "dda") points = ddaLine(x1, y1, x2, y2);
    else if (algorithm === "bresenham") points = bresenhamLine(x1, y1, x2, y2);
    onRender(points);
  };

  const handleCircle = () => {
    const points: Point[] = midpointCircle(x1, y1, r); // Explicitly define type for points
    onRender(points);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-1/3">
      <h2 className="text-xl font-semibold mb-4">Control Panel</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center text-gray-300">
          <label>X1:</label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(+e.target.value)}
            className="bg-gray-700 text-white rounded p-2 w-16"
          />
          <label>Y1:</label>
          <input
            type="number"
            value={y1}
            onChange={(e) => setY1(+e.target.value)}
            className="bg-gray-700 text-white rounded p-2 w-16"
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <label>X2:</label>
          <input
            type="number"
            value={x2}
            onChange={(e) => setX2(+e.target.value)}
            className="bg-gray-700 text-white rounded p-2 w-16"
          />
          <label>Y2:</label>
          <input
            type="number"
            value={y2}
            onChange={(e) => setY2(+e.target.value)}
            className="bg-gray-700 text-white rounded p-2 w-16"
          />
        </div>
        <div className="flex justify-between items-center text-gray-300">
          <label>Radius:</label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(+e.target.value)}
            className="bg-gray-700 text-white rounded p-2 w-16"
          />
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition"
            onClick={() => handleLine("dda")}
          >
            Render Line (DDA)
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition"
            onClick={() => handleLine("bresenham")}
          >
            Render Line (Bresenham)
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 transition"
            onClick={handleCircle}
          >
            Render Circle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
