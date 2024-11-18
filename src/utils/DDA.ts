// Digital Differential Analyzer (DDA) Line Drawing Algorithm
// This function generates points to draw a line between two endpoints using the DDA algorithm.

export function ddaLine(x1: number, y1: number, x2: number, y2: number): { x: number; y: number }[] {
  // Check if inputs are valid numbers
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    throw new Error("Input values must be valid numbers.");
  }

  // Array to store the generated points of the line
  const points = [];

  // Calculate the differences in x and y between the two endpoints
  const dx = x2 - x1; // Change in x
  const dy = y2 - y1; // Change in y

  // Determine the number of steps needed based on the larger difference (dx or dy)
  const steps = Math.max(Math.abs(dx), Math.abs(dy));

  // Calculate the increment for each step in both x and y directions
  const xIncrement = dx / steps; // Increment per step along x-axis
  const yIncrement = dy / steps; // Increment per step along y-axis

  // Initialize the starting point
  let x = x1; // Current x-coordinate
  let y = y1; // Current y-coordinate

  // Generate points for the line by iterating for the calculated number of steps
  for (let i = 0; i <= steps; i++) {
    // Push the rounded coordinates to the points array
    points.push({ x: Math.round(x), y: Math.round(y) });

    // Increment x and y for the next point
    x += xIncrement;
    y += yIncrement;
  }

  // Log the number of generated points
  console.log(`Generated ${points.length} points for the line using DDA Algorithm.`);

  // Return the list of points forming the line
  return points;
}
