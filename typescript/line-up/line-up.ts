export function format(name: string, number: number): string {
  let suffix = "th";
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits !== 11 && lastDigit === 1) {
    suffix = "st";
  } else if (lastTwoDigits !== 12 && lastDigit === 2) {
    suffix = "nd";
  } else if (lastTwoDigits !== 13 && lastDigit === 3) {
    suffix = "rd";
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}
