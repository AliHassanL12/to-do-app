class ToDoList {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description;
        this.dueDate = dueDate; 
        this.priority = priority;
        this.complete = null;
    }

    setToDoComplete() {
        setToDoComplete(this);
    }
}

function setToDoComplete(instance) {
    instance.complete = true;
}

export {
    ToDoList
}