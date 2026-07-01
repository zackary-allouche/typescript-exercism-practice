export function score(x: number, y: number): number {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Coordinates must be numbers");
  }

  const distance = Math.sqrt(x * x + y * y);

  if (distance <= 1) {
    return 10;
  }
  if (distance <= 5) {
    return 5;
  }
  if (distance <= 10) {
    return 1;
  }
  return 0;
}
