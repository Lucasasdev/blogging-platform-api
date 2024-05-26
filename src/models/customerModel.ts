export class Customer {
  id: number;
  name: string;
  cpf: string;

  private static nextId: number = 1;

  constructor(name: string, cpf: string) {
    this.id = Customer.nextId++;
    this.name = name;
    this.cpf = cpf;
  }
}
