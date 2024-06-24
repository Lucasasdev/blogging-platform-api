import { PrismaClient, Prisma } from "@prisma/client";
const prismaClient = new PrismaClient();

interface Body {
  name: string;
  cpf: string;
}

export const getCustomer = async (id: number) => {
  const customer = await prismaClient.customer.findUnique({
    where: {
      id: id,
    },
  });

  return customer;
};

export const getCustomers = async () => {
  const customers = await prismaClient.customer.findMany({});

  return customers;
};

export const createCustomer = async (body: Body) => {
  const { name, cpf } = body;
  const customer = await prismaClient.customer.create({
    data: {
      name: name,
      cpf: cpf,
    },
  });

  return customer;
};

export const updateCustomer = async (id: number, name: string, cpf: string) => {
  const customer = await prismaClient.customer.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      cpf: cpf,
    },
  });

  return customer;
};

export const deleteCustomer = async (id: number) => {
  const customer = await prismaClient.customer.delete({
    where: {
      id: id,
    },
  });

  return customer;
};
