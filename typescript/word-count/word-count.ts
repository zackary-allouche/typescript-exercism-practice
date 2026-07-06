export function count(phrase: string): Map<string, number> {
  const wordCounts = new Map<string, number>();

  const words = phrase.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];

  for (const word of words) {
    const currentCount = wordCounts.get(word) ?? 0;
    wordCounts.set(word, currentCount + 1);
  }

  return wordCounts;
}
