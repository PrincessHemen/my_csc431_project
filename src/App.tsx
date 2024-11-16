import React, { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Canvas from "./components/Canvas";

const App = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold text-center mb-4 sm:text-3xl md:text-4xl">
        Graphics Algorithms
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
        <ControlPanel onRender={setPoints} />
        <Canvas points={points} />
      </div>
    </div>
  );
};

export default App;
