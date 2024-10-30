export class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
        console.log('task call');
    }

    toggle() {
        this.completed = !this.completed;
    }
}


