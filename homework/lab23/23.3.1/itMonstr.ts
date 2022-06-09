import {Employee} from './Employee';

export class itMonstr implements Employee {
  salary!: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  addToSalary(interest: number): void {
    this.salary *= 1 + interest + 1;
  }

  getSalary(): number {
    return this.salary;
  }

  reduceSalary(fine: number): void {
    this.salary -= fine;
  }

}
