type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

export function age(planet: Planet, seconds: number): number {
  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  const EARTH_YEAR_SECONDS = 60 * 60 * 24 * 365.25;
  const planetYearSeconds = EARTH_YEAR_SECONDS * orbitalPeriods[planet];
  return Number((seconds / planetYearSeconds).toFixed(2));
}
