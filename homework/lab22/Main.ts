import {Pirate} from './Pirate';
import {Troll} from './Troll';
import {AbstractClass} from './AbstractClass';

export class Main {

  public getAction(abstractClass: AbstractClass): void {
    abstractClass.defendAgainstAttack();
  }

  public main(): void {
    this.getAction(new Pirate());
    this.getAction(new Troll());
  }
}
