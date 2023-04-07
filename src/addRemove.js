/* The TodoList class creates a list of tasks with a method to add new tasks. */
class TodoList {
  constructor() {
    this.tasks = [];
  }

  /* The `addTask` method is a function of the `TodoList` class that takes a `description`
      parameter as input. It creates a new task object with properties `id`, `description`, and
      `completed`, where `id` is set to the length of the `tasks` array plus 1, `description` is set
      to the `description` parameter passed to the method, and `completed` is set to `false`. The
      new task object is then added to the `tasks` array using the `push()` method. This method
      essentially adds a new task to the list of tasks in the `TodoList` object. */
        addTask = (description) => {
          const completed = false;
          const id = this.tasks.length + 1;
          const task = {
            id,
            description,
            completed,
          };
          this.tasks.push(task);
        };

        /* The `removeList` method is a function of the `TodoList` class that takes an `id` parameter as
      input. It iterates through the `tasks` array and finds the task with the same `id` as the
      input parameter. Once it finds the task, it removes it from the `tasks` array using the
      `splice()` method. This method essentially removes a task from the list of tasks in the
      `TodoList` object. */
        removeList = (id) => {
          this.tasks.forEach((task) => {
            if (task.id === id) {
              this.tasks.splice(this.tasks.indexOf(task), 1);
            }
          });
        };

        displayToDo = (list) => {
          list.innerHTML = '';
          this.tasks.forEach((task) => {
            const li = `<li id="${task.id}" class="new-list">
            <input
              type="checkbox"
              id="${task.id}"
              name="task"
              value="task"
              ${task.completed ? 'checked' : ''}
              class="checkbox"
            />
            <input
              type="text" id="${task.id}" class="text-area" name="task" value="${task.description}" />
              
              <span class="material-symbols-outlined delete"> delete </span>
              
          </li>`;
            list.innerHTML += li;
          });

          /* This code is selecting all the HTML elements with class name "text-area" and adding a click
        event listener to each of them. When a user clicks on a text area, the function inside the
        event listener is executed. It filters the tasks array to find the task with the same id as
        the clicked text area, updates the description of that task with the new value of the text
        area, and then calls the setStorage() method to update the local storage with the new task
        description. */
          const textArea = document.querySelectorAll('.text-area');
          textArea.forEach((area) => {
            area.addEventListener('click', () => {
              const result = this.tasks.filter((task) => task.id === Number(area.id));
              this.tasks[result[0].id - 1].description = area.value;
              this.setStorage();
            });
          });
        }

        /* The `resetIndex` method is a function that iterates through the `tasks` array and resets the
    `id` property of each task to a new index starting from 1. This is useful when tasks have been
    deleted or rearranged, as it ensures that the `id` property of each task is always sequential
    and starts from 1. */
      resetIndex = () => {
        let initialIndex = 1;
        this.tasks.forEach((task) => {
          task.id = initialIndex;
          initialIndex += 1;
        });
      };

      /* The `showCompleted` method is a function of the `TodoList` class that sets the `completed`
      property of all tasks in the `tasks` array to `true`. This method can be used to mark all
      tasks as completed at once. */
      showCompleted = () => {
        this.tasks.forEach((task) => {
          task.completed = true;
        });
      };

      /* These are two methods of the `TodoList` class that are used to store and retrieve the tasks data
   from the local storage of the browser. */
      setStorage = () => {
        const formData = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', formData);
      };

      getStorage = () => {
        if (localStorage.getItem('tasks')) {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
      };
}
export default TodoList;
