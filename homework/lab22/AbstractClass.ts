export abstract class AbstractClass {

  public defendAgainstAttack(): void {
    this.pickUpWeapon();
    this.defenseAction();
    this.moveToSafety();
  }

  protected abstract pickUpWeapon(): void;

  protected abstract defenseAction(): void;

  protected abstract moveToSafety(): void;

}
