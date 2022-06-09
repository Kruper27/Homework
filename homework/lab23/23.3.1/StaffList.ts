import {Employee} from './Employee';

export class StaffList {
  public salaries: Employee[] = [];

  constructor() {
  }

  public addEmployee(employee: Employee): void {
    this.salaries.push(employee);
  }

  public getTotalSalary(): number {
    let res = 0;
    this.salaries.map(elem => {
      res += elem.getSalary();
    });
    return res;
  }
}
