export class Handbrake {
  private isUp: boolean = true;

  public pushDown(): void {
    console.log('Pushing down handbrake');
    this.isUp = false;
  }

  public liftUp(): void {
    console.log('Lifting up handbrake');
    this.isUp = true;
  }

}
