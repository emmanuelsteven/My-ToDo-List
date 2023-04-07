import './style.css';

const toDoList = [
  {
    index: '1',
    description: 'Attend stand-up meeting by 5pm',
    completed: 'false',
  },

  {
    index: '1',
    description: 'see car dealer',
    completed: 'false',
  },

  {
    index: '1',
    description: 'Read Eloquent JavaScript',
    completed: 'false',
  },

  {
    index: '1',
    description: 'Mark text script',
    completed: 'false',
  },

];

const taskList = document.querySelector('.task-container');

taskList.innerHTML = '';

const loadList = () => {
  toDoList.forEach((todolist) => {
    const li = document.createElement('li');
    li.classList.add('new-list');
    li.innerHTML = `
        <input type="checkbox">
        <label>${todolist.description}</label>
        <span class="material-symbols-outlined">more_vert</span>
        `;

    taskList.append(li);
  });
};

window.onload = () => {
  loadList();
};
