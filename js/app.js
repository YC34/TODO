class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

class TaskManager {
    constructor() {
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

const taskManager = new TaskManager();

document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription) {
        taskManager.addTask(taskDescription);
        taskInput.value = '';
    }
});
