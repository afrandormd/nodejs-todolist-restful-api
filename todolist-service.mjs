export class TodolistService {
  // Tempat menyimpan data Todolist
  todolist = ["Belajar", "Olahraga", "Masak"];

  // Bentuk response
  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  // Fungsi untuk GET data Todolist
  getTodoList(request, response) {
    response.write(this.getJsonTodolist());
    response.end();
  }

  // Fungsi untuk POST data Todolist
  createTodo(request, response) {
    request.addListener("data", (data) => {
      // Parsing data buffer -> string
      const body = JSON.parse(data.toString());

      // Masukkan data ke array todolist
      this.todolist.push(body.todo);

      // Kembalikan response
      response.write(this.getJsonTodolist());
      response.end();
    });
  }
}
