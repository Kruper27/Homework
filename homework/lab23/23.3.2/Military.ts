import {Spy} from './Spion';

export interface IMilitaryObject {
  getNumberOfStaff(): number;

  getNumberOfSecretPaper(): number;

  getNumberOfTanks(): number;

  acceptVisitor(spy: Spy): void;

  destroyData(destroy: number): void;
}

export class GeneralStaff implements IMilitaryObject {
  private generals!: number;
  private secretPapers!: number;

  constructor(generals: number, secretPapers: number) {
    this.generals = generals;
    this.secretPapers = secretPapers;
  }

  getNumberOfSecretPaper(): number {
    return this.secretPapers;
  }

  getNumberOfStaff(): number {
    return this.generals;
  }

  getNumberOfTanks(): number {
    return 0;
  }

  acceptVisitor(spy: Spy): void {
    spy.collectData(this);
    spy.stealData(this);
  }

  public destroyData(destroy: number): void {
    this.secretPapers -= destroy;
  }

}

export class MilitaryBase implements IMilitaryObject {
  private generals!: number;
  private secretPapers!: number;
  private soldiers!: number;
  private tanks!: number;

  constructor(generals: number,
              secretPapers: number,
              soldiers: number,
              tanks: number) {
    this.generals = generals;
    this.secretPapers = secretPapers;
    this.soldiers = soldiers;
    this.tanks = tanks;
  }

  getNumberOfSecretPaper(): number {
    return this.secretPapers;
  }

  getNumberOfStaff(): number {
    return this.generals + this.soldiers;
  }

  getNumberOfTanks(): number {
    return this.tanks;
  }

  acceptVisitor(spy: Spy): void {
    spy.destroyData(this);
    spy.destroyStaff(this);
    spy.destroyTanks(this);
  }

  destroySoldiers(tmp: number) {
    this.soldiers -= tmp;
  }

  destroyData(destroy: number): void {
    this.secretPapers -= destroy;
  }

  destroyTanks(destroy: number): void {
    this.tanks -= destroy;
  }

}
