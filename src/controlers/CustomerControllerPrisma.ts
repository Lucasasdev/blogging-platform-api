import { Request, Response, NextFunction } from "express";
import * as customerRepositoryPrisma from "../repositories/customerRepositoryPrisma";
import { Prisma } from "@prisma/client";

interface Body {
  name: string;
  cpf: string;
}

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const customer = await customerRepositoryPrisma.getCustomer(parseInt(id));

  if (customer) {
    res.send(customer);
  } else {
    res.sendStatus(404);
  }
};

export const getCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const customers = await customerRepositoryPrisma.getCustomers();

  if (customers) {
    res.send(customers);
  } else {
    res.sendStatus(404);
  }
};

export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const body = req.body as Body;

  const result = await customerRepositoryPrisma.createCustomer(body);

  if (result) {
    res.sendStatus(201).send(result);
  } else {
    res.sendStatus(400);
  }
};
