import React, { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Canvas from "./components/Canvas";

const App = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">Graphics Algorithms</h1>
        <div className="flex gap-8 justify-center">
          <ControlPanel onRender={setPoints} />
          <Canvas points={points} />
        </div>
      </div>
    </div>
  );
};

export default App;
