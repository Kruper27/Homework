import {StaffList} from './StaffList';
import {SalesMan} from './SalesMan';
import {itMonstr} from './itMonstr';

export class Client {
  public main(): void {
    const staffList = new StaffList();
    staffList.addEmployee(new SalesMan(500));
    staffList.addEmployee(new itMonstr(10000));
    const salesMan = new SalesMan(505);
    salesMan.addToSalary(10);
    staffList.addEmployee(salesMan);
    staffList.salaries.forEach(elem => elem.addToSalary(22));
    console.log(staffList.getTotalSalary());
  }
}
