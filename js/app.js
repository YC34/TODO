import {TaskManager} from "../js/taskmanger.js";

const taskManager = new TaskManager();

document.getElementById('addTaskButton').addEventListener('click', () => {
            const taskInput = document.getElementById('taskInput');
            const taskDescription = taskInput.value.trim();

            if (taskDescription) {
                taskManager.addTask(taskDescription);
                taskInput.value = '';
    }
});
