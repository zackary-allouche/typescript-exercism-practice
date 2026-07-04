export class Robot {
  private _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
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
      this.generateNumber() +
      this.generateNumber() +
      this.generateNumber() + 
      this.generateNumber()
    )
  }
}