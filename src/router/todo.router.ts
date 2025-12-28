import { Application } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controller/todo.controller";

export function todoRouter(app: Application) {
  app.post("/todo", createTodo);
  app.get("/todo", getAllTodos);
  app.get("/todo/:id", getTodoById);
  app.put("/todo/:id", updateTodo);
  app.delete("/todo/:id", deleteTodo);
}
