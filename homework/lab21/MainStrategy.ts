import {Customer} from './Customer';
import {BankAccount} from './Strategy';

export class MainStrategy {
  public main() {
    const customer = new Customer();
    customer.setStrategy(new BankAccount());
    customer.executeStrategy(22);
  }
}
