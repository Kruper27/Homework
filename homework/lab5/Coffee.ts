import {BeverageTest} from './Bevarage';

export class Coffee implements BeverageTest {
  private sugar!: number;

  cost(): number {
    return 10;
  }

  drink(): void {
  }

  prepare(): void {
    console.log('Put some coffee...');
  }

  public Beverage(sugar: number): void {
    this.sugar = sugar;
  }
}
