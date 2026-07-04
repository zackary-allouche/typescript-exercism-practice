export class Robot {
  private _name: string;
  private static usedNames = new Set<string>();

  constructor() {
    this._name = this.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private generateLetter(): string {
    const randomCode = 65 + Math.floor(Math.random() * 26);
    return String.fromCharCode(randomCode);
  }

  private generateNumber(): number {
    return Math.floor(Math.random() * 10);
  }

  private generateName(): string {
    return (
      this.generateLetter() +
      this.generateLetter() +
      this.generateNumber() +
      this.generateNumber() +
      this.generateNumber()
    );
  }

  private generateUniqueName(): string {
    let newName = this.generateName();
    while (Robot.usedNames.has(newName)) {
      newName = this.generateName();
    }
    Robot.usedNames.add(newName);
    return newName;
  }
}
