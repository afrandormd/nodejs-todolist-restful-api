import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
  // Mengembalikkan dalam bentuk JSON
  response.setHeader("Content-Type", "application/json");

  // Ketika request method GET panggil fungsi getTodoList
  if (request.method === "GET") {
    service.getTodoList(request, response);
    // Ketika request method POST panggil fungsi createTodo
  } else if (request.method === "POST") {
    service.createTodo(request, response);
    // Ketika request method PUT panggil fungsi updateTodo
  } else if (request.method === "PUT") {
    service.updateTodo(request, response);
    // Ketika request method DELETE panggil fungsi deleteTodo
  } else if (request.method === "DELETE") {
    service.deleteTodo(request, response);
  }
});

server.listen(3001);
