import {Task} from "../js/task.js";

export class TaskManager {
    constructor() {
        console.log('taskManger call');
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task.description;
            listItem.style.textDecoration = task.completed ? 'line-through' : 'none';

            listItem.addEventListener('click', () => {
                task.toggle();
                this.renderTasks();
            });

            taskList.appendChild(listItem);
        });
    }
}