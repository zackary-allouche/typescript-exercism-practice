export function decodedResistorValue(colors: string[]): string {
  const firstDigit = COLORS.indexOf(colors[0]);
  const secondDigit = COLORS.indexOf(colors[1]);
  const multiplier = COLORS.indexOf(colors[2]);

  const value = Number(`${firstDigit}${secondDigit}`) * Math.pow(10, multiplier);

  if (value < 1_000) {
    return `${value} ohms`;
  }

  if (value < 1_000_000) {
    return `${value / 1_000} kiloohms`;
  }

  if (value < 1_000_000_000) {
    return `${value / 1_000_000} megaohms`;
  }

  return `${value / 1_000_000_000} gigaohms`;
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];