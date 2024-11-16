export function midpointCircle(xc: number, yc: number, r: number): { x: number; y: number }[] {
    const points = [];
    let x = 0;
    let y = r;
    let p = 1 - r;
  
    while (x <= y) {
      points.push(...symmetricPoints(xc, yc, x, y));
      x++;
      if (p < 0) {
        p += 2 * x + 1;
      } else {
        y--;
        p += 2 * x - 2 * y + 1;
      }
    }
    return points;
  }
  
  function symmetricPoints(xc: number, yc: number, x: number, y: number): { x: number; y: number }[] {
    return [
      { x: xc + x, y: yc + y },
      { x: xc - x, y: yc + y },
      { x: xc + x, y: yc - y },
      { x: xc - x, y: yc - y },
      { x: xc + y, y: yc + x },
      { x: xc - y, y: yc + x },
      { x: xc + y, y: yc - x },
      { x: xc - y, y: yc - x },
    ];
}
  