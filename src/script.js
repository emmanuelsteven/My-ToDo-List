import './style.css';
import TodoList from './addRemove.js';
// import editedTask from './src/editTask.js';

const taskList = document.querySelector('.task-container');
const addTodo = document.querySelector('form');
const description = document.querySelector('#add-task');
// const clearAll = document.querySelector('.completed');

const todoList = new TodoList();
addTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  if (description.value.trim()) {
    todoList.addTask(description.value);
    todoList.setStorage();
    todoList.resetIndex();
    todoList.displayToDo(taskList);
    addTodo.reset();
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('delete')) {
    const id = parseInt(e.target.parentElement.id, 10);
    todoList.removeList(id);
    todoList.resetIndex();
    todoList.setStorage();
    todoList.displayToDo(taskList);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  todoList.getStorage();
  todoList.displayToDo(taskList);
});
