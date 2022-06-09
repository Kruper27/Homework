import {AbstractClass} from './AbstractClass';

export class Troll extends AbstractClass {
  public pickUpWeapon(): void {
    console.log('Pick up club');
  }

  public defenseAction(): void {
    console.log('Defend with club');
  }

  public moveToSafety(): void {
    console.log('Return to the mountain');
  }
}
