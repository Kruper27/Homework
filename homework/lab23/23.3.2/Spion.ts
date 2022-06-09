import {GeneralStaff, MilitaryBase} from './Military';

export abstract class Spy {
  abstract collectData(generalStaff: GeneralStaff): number;
  abstract stealData(generalStaff: GeneralStaff): void;
  abstract destroyData(militaryBase: GeneralStaff | MilitaryBase): void;
  abstract destroyStaff(militaryBase: MilitaryBase): void;
  abstract destroyTanks(militaryBase: MilitaryBase): void;
}

export class SecretAgent implements Spy{
  collectData(generalStaff: GeneralStaff): number {
    return generalStaff.getNumberOfSecretPaper();
  }

  destroyData(generalStaff: GeneralStaff): number {
    return 0;
  }

  destroyStaff(militaryBase: MilitaryBase): void {
    militaryBase.destroySoldiers(4);
  }

  destroyTanks(militaryBase: MilitaryBase): void {
    militaryBase.destroyTanks(10);
  }

  stealData(generalStaff: GeneralStaff | MilitaryBase): void {
    generalStaff.destroyData(5);
  }
}

export class Saboteur implements Spy{
  collectData(generalStaff: GeneralStaff): number {
    return generalStaff.getNumberOfSecretPaper();
  }

  destroyData(generalStaff: GeneralStaff): void {
    generalStaff.destroyData(444);
  }

  destroyStaff(militaryBase: MilitaryBase): void {
    militaryBase.destroySoldiers(4);
  }

  destroyTanks(militaryBase: MilitaryBase): void {
    militaryBase.destroyTanks(44);
  }

  stealData(generalStaff: GeneralStaff | MilitaryBase): void {
    generalStaff.destroyData(444);
  }
}


