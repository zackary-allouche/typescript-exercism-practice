export function isPangram(sentence: string): boolean {
  const letters = sentence.toLowerCase().match(/[a-z]/g);

  if (!letters) {
    return false;
  }

  const uniqueLetters = new Set(letters);
  if (uniqueLetters.size === 26) {
    return true;
  }
  return false;
}