import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
  // Mengembalikkan dalam bentuk JSON
  response.setHeader("Content-Type", "application/json");

  // Ketika request method GET panggil fungsi getTodoList
  if (request.method === "GET") {
    service.getTodoList(request, response);
  }
});

server.listen(3001);
