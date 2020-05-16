import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios
  .get(url)
  .then((response) => {
    const todo = response.data;
    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;
    console.log(`
    ID is ${ID} and title is ${title} and finished is  ${finished}
    `);
  })
  .catch((err) => console.log(err));

//-----------------Using type ------------------------//

//used to define the structure of an obj
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const { id, title, completed } = response.data as Todo;
    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

//type annotation
function logTodo(id: number, title: string, finished: boolean) {
  console.log(`${id} ${title} ${finished}`);
}
