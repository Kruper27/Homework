import {BeverageTest} from './Bevarage';

export class TEE implements BeverageTest {
  protected sugar!: number;

  cost(): number {
    return 7;
  }

  drink(): void {
  }

  prepare(): void {
    console.log('Put some tee');
  }

  public Beverage(sugar: number): void {
    this.sugar = sugar;
  }
}
