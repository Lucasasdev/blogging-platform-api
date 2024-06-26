import { PrismaClient, Customer } from "@prisma/client";
const prismaClient = new PrismaClient();

export const getCustomer = async (id: number): Promise<Customer | null> => {
  const customer = await prismaClient.customer.findUnique({
    where: {
      id: id,
    },
  });

  return customer;
};

export const getCustomers = async (): Promise<Customer[]> => {
  const customers = await prismaClient.customer.findMany({});

  return customers;
};

export const createCustomer = async (
  name: string,
  cpf: string,
): Promise<Customer> => {
  const customer = await prismaClient.customer.create({
    data: {
      name: name,
      cpf: cpf,
    },
  });

  return customer;
};

export const updateCustomer = async (
  id: number,
  name: string,
  cpf: string,
): Promise<Customer | null> => {
  const result = await prismaClient.customer.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      cpf: cpf,
    },
  });

  return result;
};

export const deleteCustomer = async (id: number): Promise<Customer | null> => {
  const customer = await prismaClient.customer.delete({
    where: {
      id: id,
    },
  });

  return customer;
};
