export function ddaLine(x1: number, y1: number, x2: number, y2: number): { x: number; y: number }[] {
    const points = [];
    const dx = x2 - x1;
    const dy = y2 - y1;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const xIncrement = dx / steps;
    const yIncrement = dy / steps;
  
    let x = x1;
    let y = y1;
    for (let i = 0; i <= steps; i++) {
      points.push({ x: Math.round(x), y: Math.round(y) });
      x += xIncrement;
      y += yIncrement;
    }
    return points;
}
  