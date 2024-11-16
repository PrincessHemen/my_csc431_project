// Importing React's useState hook for managing state in the component
import { useState } from "react";

// Importing the ControlPanel and Canvas components from the local components directory
import ControlPanel from "./components/ControlPanel";
import Canvas from "./components/Canvas";

// The main App component
const App = () => {
  // State variable to store points as an array of objects, each containing x and y coordinates
  // `points` represents the array of coordinates, and `setPoints` is the function to update it
  
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  return (
    
    // Main container with minimum screen height, padding, and background styling
    
    <div className="min-h-screen p-4 bg-gray-900 text-white">
      
      {/* Header for the application, styled to be bold and responsive */}
      
      <h1 className="text-2xl font-bold text-center mb-4 sm:text-3xl md:text-4xl">
        Graphics Algorithms
      </h1>
      
      {/* Flex container to arrange the ControlPanel and Canvas components */}
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
        
        {/* ControlPanel component, which triggers updates to the points array via the `onRender` prop */}
        
        <ControlPanel onRender={setPoints} />
        
        {/* Canvas component, which displays the points by accepting the `points` array as a prop */}
        
        <Canvas points={points} />
      
      </div>
    </div>
  );
};

// Exporting the App component to be used as the root component in the application

export default App;
