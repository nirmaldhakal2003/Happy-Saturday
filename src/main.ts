import "dotenv/config";
import express from "express";
import { todoRouter } from "./router/todo.router";

const app = express();

app.use(express.json());

todoRouter(app);

app.listen(4000, () => {
  console.log("listening on @http://localhost:4000");
});
