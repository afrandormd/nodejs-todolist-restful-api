export class TodolistService {
  // Tempat menyimpan data Todolist
  todolist = ["Belajar", "Olahraga", "Masak"];

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
}
