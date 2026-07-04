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

  private generateName(): string {
    const randomCode = 65 + Math.floor(Math.random() * 26);
    const randomLetter = String.fromCharCode(randomCode);
    const randomNumber = Math.floor(Math.random() * 10);

    return randomLetter + randomLetter + randomNumber + randomNumber + randomNumber;
  }
}