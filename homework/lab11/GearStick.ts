export class GearStick {
  private gear: number = 0;

  public changeGear(gear: number): void {
    console.log('Changing gear to ' + gear);
    this.gear = gear;
  }

}
