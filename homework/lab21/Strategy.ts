export interface IStrategy {
  getStrategy(amount: number): void;
}

export class BankAccount implements IStrategy {
  public getStrategy(amount: number): void {
    console.log(`Payment of $ + ${amount} +  made from bank account.`);
  }
}

export class Paypal implements IStrategy {
  public getStrategy(amount: number): void {
    console.log(`Payment of $ + ${amount} +  made from Paypal.`);
  }
}

