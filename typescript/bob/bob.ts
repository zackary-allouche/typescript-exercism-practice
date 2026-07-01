export function hey(message: string): string {
  const isQuestion = message.trim().endsWith("?");
  const hasLetters = /[a-zA-Z]/.test(message);
  const isYelling = hasLetters && message === message.toUpperCase();

  if (message.trim() === "") {
    return "Fine. Be that way!";
  }

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }
  if (isQuestion) {
    return "Sure.";
  }
  if (isYelling) {
    return "Whoa, chill out!";
  }
  return "Whatever.";
}
