import { Request, Response } from "express";
import * as userRepository from "../repositories/userRepository";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userRepository.getUser(parseInt(id));

  if (user) {
    res.send(user).sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await userRepository.getUsers();

  if (users) {
    res.send(users).sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const input = req.body;
  const result = await userRepository.createUser(input);

  if (result) {
    res.status(201).json(result);
  } else {
    res.sendStatus(400);
  }
};

export const patchUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { posts } = req.body;
  const result = await userRepository.updateUser(parseInt(id), posts);

  if (result) {
    res.sendStatus(200).json(result);
  } else {
    res.sendStatus(404);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await userRepository.deleteUser(parseInt(id));

  if (success) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};
