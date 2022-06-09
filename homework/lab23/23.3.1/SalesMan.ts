import {Employee} from './Employee';

export class SalesMan implements Employee {
  salary!: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  addToSalary(interest: number): void {
    this.salary *= 1 + interest;
  }

  getSalary(): number {
    return this.salary;
  }

  reduceSalary(fine: number): void {
    this.salary -= fine;
  }

}
