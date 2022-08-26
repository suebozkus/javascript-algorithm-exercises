const todos = require("./todos.json");


const result = todos
  .filter((todo) => todo.userId === 8 && todo.completed === false)
  .map((todo) => {
    todo.title = todo.title.toUpperCase();
    return todo;
  })
  .reduce((accumulator, todo) => (accumulator += todo.title), "");
console.log(result);
