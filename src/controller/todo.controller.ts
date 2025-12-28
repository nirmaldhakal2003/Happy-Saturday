import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
export const createTodo = async (req: Request, res: Response) => {
  const body = req.body;
  const todo = await prisma.todo.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  res.status(200).json({
    message: "Todo created successfully",
    data: todo,
  });
};
export const getAllTodos = async (req: Request, res: Response) => {
  const todo = await prisma.todo.findMany();
  res.status(200).json({
    message: "fetched all todo",
    data: todo,
  });
};
export const getTodoById = async (req: Request, res: Response) => {
  const params = req.params.id;
  const id = Number(params);

  if (!id) {
    res.status(404).json({
      message: "please send the valid id",
    });
  }
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "todo fetched successfully!",
    date: todo,
  });
};

export const updateTodo = async (req: Request, res: Response) => {
  const params = req.params.id;
  const id = Number(params);
  const body = req.body;

  if (!id) {
    res.status(404).json({
      message: "Id not found",
    });
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  res.status(200).json({
    message: "todo updated successfully!",
    data: updatedTodo,
  });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const params = req.params.id;
  const id = Number(params);

  if (!id) {
    res.status(404).json({
      message: "Id not found!!!",
    });
  }

  const todo = await prisma.todo.delete({
    where: {
      id,
    },
  });
  res.status(200).json({
    message: "Todo deleted successfully!",
  });
};
