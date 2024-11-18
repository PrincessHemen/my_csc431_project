// Midpoint Circle Drawing Algorithm
// This function calculates the points needed to draw a circle using the Midpoint Circle Algorithm.

export function midpointCircle(xc: number, yc: number, r: number): { x: number; y: number }[] {
  // Check if inputs are valid numbers
  if (isNaN(xc) || isNaN(yc) || isNaN(r) || r < 0) {
    throw new Error("Input values must be valid numbers, and the radius must be a non-negative number.");
  }

  // Array to store the generated points
  const points = [];

  // Initialize variables
  let x = 0; // Starting point on the x-axis
  let y = r; // Starting point on the y-axis (radius)
  let p = 1 - r; // Decision parameter to determine the next point

  // Loop until x crosses y (only process one-eighth of the circle and mirror the points)
  while (x <= y) {
    // Add the symmetric points for the current (x, y)
    points.push(...symmetricPoints(xc, yc, x, y));

    // Increment x to move to the next pixel along the x-axis
    x++;

    // Update the decision parameter to choose the next pixel
    if (p < 0) {
      // Midpoint is inside the circle; choose the pixel directly above
      p += 2 * x + 1;
    } else {
      // Midpoint is outside or on the circle; move diagonally
      y--; // Decrease y to move inward
      p += 2 * x - 2 * y + 1;
    }
  }

  // Log the number of generated points
  console.log(`Generated ${points.length} points for the circle using Midpoint Circle Algorithm.`);

  // Return the list of points forming the circle
  return points;
}

// Function to calculate all symmetric points of a circle for a given (x, y)
function symmetricPoints(xc: number, yc: number, x: number, y: number): { x: number; y: number }[] {
  // Return all 8 symmetric points based on the circle's symmetry properties
  return [
    { x: xc + x, y: yc + y }, // Point in the first octant
    { x: xc - x, y: yc + y }, // Point in the second octant
    { x: xc + x, y: yc - y }, // Point in the eighth octant
    { x: xc - x, y: yc - y }, // Point in the seventh octant
    { x: xc + y, y: yc + x }, // Point in the fourth octant
    { x: xc - y, y: yc + x }, // Point in the third octant
    { x: xc + y, y: yc - x }, // Point in the fifth octant
    { x: xc - y, y: yc - x }, // Point in the sixth octant
  ];
}
