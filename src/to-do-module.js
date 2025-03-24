import { format } from 'date-fns';

class ToDoList {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description;
        this.dueDate = format(dueDate, 'dd-MM-yyyy'); 
        this.priority = priority;
        this.complete = null;
    }

    setToDoComplete() {
        setToDoComplete(this);
    }

    changeToDoPriority() {
        changeToDoPriority(this, value);
    }
}

function setToDoComplete(instance) {
    instance.complete = true;
}

function changeToDoPriority(instance) {
    instance.priority = value;
}

export {
    ToDoList
}