export interface BeverageTest {
  Beverage(sugar: number): void;

  prepare(): void;

  drink(): void;

  cost(): number;

}
