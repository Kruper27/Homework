import {BeverageTest} from './Bevarage';
import {TEE} from './TEE';

class BlackTee extends TEE {

  override cost(): number {
    return 7;
  }

  override drink(): void {
  }

  override prepare(): void {
    console.log('Put some tee');
  }

  override  Beverage(sugar: number): void {
    this.sugar = sugar;
  }
}
