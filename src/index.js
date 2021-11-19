import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList()
todoList.todos.forEach(todo => crearTodoHtml(todo));

 
// const newTodo = new Todo('aprender javascript');
// todoList.nuevoTodo(newTodo);
// newTodo.imprimirClase();
// todoList.todos[0].imprimirClase();
 console.log('todos', todoList.todos);

// const tarea = new Todo('aprender java script');
// console.log(tarea);

// todoList.nuevoTodo(tarea);
// console.log(todoList);
// // tarea.completado = true;

// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'abc123');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);
