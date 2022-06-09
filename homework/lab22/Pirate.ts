import {AbstractClass} from './AbstractClass';

export class Pirate extends AbstractClass {
  public pickUpWeapon(): void {
    console.log('Pick up sword');
  }

  public defenseAction(): void {
    console.log('Defend with sword');
  }

  public moveToSafety(): void {
    console.log('Return to the ship');
  }
}
