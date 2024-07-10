import { Request, Response, NextFunction } from "express";
import * as customerRepositoryPrisma from "../repositories/userRepository";

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
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
  const { name, cpf } = req.body;
  const result = await customerRepositoryPrisma.createCustomer(name, cpf);

  if (result) {
    res.status(201).json(result);
  } else {
    res.sendStatus(400);
  }
};

export const patchCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;
  const { name, cpf } = req.body;

  const result = await customerRepositoryPrisma.updateCustomer(
    parseInt(id),
    name,
    cpf,
  );

  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const success = await customerRepositoryPrisma.deleteCustomer(parseInt(id));

  if (success) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};
