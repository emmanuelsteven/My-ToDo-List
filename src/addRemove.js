/* The TodoList class creates a list of tasks with a method to add new tasks. */
class TodoList {
  constructor() {
    this.tasks = [];
  }

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

          const checkbox = document.querySelectorAll('.checkbox');

          checkbox.forEach((check) => {
            check.addEventListener('change', () => {
              if (check.checked) {
                check.parentElement.classList.add('complete');
                this.tasks = this.tasks.map((task) => {
                  if (task.id === parseInt(check.parentElement.id, 20)) {
                    task.completed = check.checked;
                  }
                  return task;
                });
                this.setStorage();
              } else {
                check.parentElement.classList.remove('complete');
                this.tasks = this.tasks.map((task) => {
                  if (task.id === parseInt(check.parentElement.id, 20)) {
                    task.completed = false;
                  }
                  return task;
                });
                this.setStorage();
              }
            });
          });

          const textArea = document.querySelectorAll('.text-area');
          textArea.forEach((area) => {
            area.addEventListener('blur', () => {
              const taskIndex = this.tasks.findIndex((task) => task.id === Number(area.id));
              if (taskIndex !== -1) {
                this.tasks[taskIndex].description = area.value;
                this.setStorage();
              }
            });
          });
        }

      resetIndex = () => {
        let initialIndex = 1;
        this.tasks.forEach((task) => {
          task.id = initialIndex;
          initialIndex += 1;
        });
      };

      showCompleted = () => {
        this.tasks.forEach((task) => {
          task.completed = true;
        });
      };

      cleanCompleted = () => {
        this.tasks = this.tasks.filter((task) => task.completed === false);
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
