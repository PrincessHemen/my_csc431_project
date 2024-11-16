// Bresenham's Line Drawing Algorithm
// This function generates points to draw a line between two endpoints using Bresenham's algorithm.

export function bresenhamLine(x1: number, y1: number, x2: number, y2: number): { x: number; y: number }[] {
  // Array to store the generated points of the line
  const points = [];

  // Calculate the absolute differences in x and y between the two endpoints
  let dx = Math.abs(x2 - x1); // Change in x
  let dy = Math.abs(y2 - y1); // Change in y

  // Determine the direction to increment x and y
  let sx = x1 < x2 ? 1 : -1; // Step in x direction (1 for right, -1 for left)
  let sy = y1 < y2 ? 1 : -1; // Step in y direction (1 for up, -1 for down)

  // Initialize the error term
  let err = dx - dy; // Difference between dx and dy determines the slope

  // Loop to generate points until the current point matches the end point
  while (true) {
    // Add the current point to the list
    points.push({ x: x1, y: y1 });

    // Break the loop if the line reaches the end point
    if (x1 === x2 && y1 === y2) break;

    // Double the error term for comparison
    const e2 = 2 * err;

    // Adjust x and error term if moving in the x direction
    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }

    // Adjust y and error term if moving in the y direction
    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
  }

  // Return the list of points forming the line
  return points;
}
