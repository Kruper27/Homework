import {Clutch} from './Clutch';
import {Ignition} from './Ignition';
import {Accelerator} from './Accelerator';
import {GearStick} from './GearStick';
import {Handbrake} from './Handbrake';


export class Facade {

  public main(): void {
    const ignition = new Ignition();
    const clutch = new Clutch();
    const accelerator = new Accelerator();
    const gearStick = new GearStick();
    const handbrake = new Handbrake();

    ignition.turnOn();
    clutch.press();
    gearStick.changeGear(1);
    accelerator.press();
    clutch.lift();
    handbrake.pushDown();
    accelerator.press();
    clutch.press();
  }


}
