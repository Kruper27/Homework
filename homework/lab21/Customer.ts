import {IStrategy} from './Strategy';

export class Customer {
  private strategy!: IStrategy;

  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(amount: number) {
    return this.strategy.getStrategy(amount);
  }
}
