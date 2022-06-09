export class Employee {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class EmployeeStorage {
  storage: Employee[] = [];

  constructor() {
  }

  addEmployee(emp: Employee): void {
    this.storage.push(emp);
  }

  getEmployee(index: number): Employee {
    return this.storage[index];
  }

  getLength(): number {
    return this.storage.length;
  }

  iterator(): EmployeeStorageIterator {
    return new EmployeeStorageIterator(this.storage);
  }
}

class EmployeeStorageIterator {

  private currentPosition!: number;
  private cache!: Employee[];

  constructor(storage: Employee[]) {
    this.cache = storage;
    this.currentPosition = -1;
  }

  getNext(): Employee {
    if (this.hasMore())
      this.currentPosition++;
    return this.cache[this.currentPosition];
  }

  hasMore(): boolean {
    return this.currentPosition < this.cache.length;
  }
}
