import {Facade} from './Facade';

export class Car {

  public startEngine(): void {
    new Facade().main();
  }
}
