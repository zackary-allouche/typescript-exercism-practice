export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  private static rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  public static generateAbilityScore(): number {
    const rolls = [
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
      DnDCharacter.rollDice(),
    ];

    rolls.sort((a, b) => a - b);
    return rolls[1] + rolls[2] + rolls[3];
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
