export class Ignition {
  private isOn: boolean = false;

  public turnOn(): void {
    console.log('Turning ignition on');
    this.isOn = true;
  }

  public turnOff(): void {
    console.log('Turning ignition off');
    this.isOn = false;
  }

}
