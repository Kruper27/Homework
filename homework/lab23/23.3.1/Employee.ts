export interface Employee {
  salary: number;

  getSalary(): number;

  addToSalary(interest: number): void;

  reduceSalary(fine: number): void;
}
