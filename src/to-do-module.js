import { format } from 'date-fns';

class ToDoList {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description;
        this.dueDate = format(dueDate, 'dd-MM-yyyy'); 
        this.priority = priority;
        this.complete = null;
        this.id = ToDoList.count++;
    }

    static count = 0; 

    setToDoComplete() {
        console.log(this.complete);
        if (this.complete === null || this.complete === false) setToDoComplete(this);
        console.log(this.complete)
    }

    changeToDoPriority() {
        changeToDoPriority(this, value);
    }

    get getID() {
        return this.id;
    }
}

function setToDoComplete(instance) {
    instance.complete = true;
}

function changeToDoPriority(instance, value) {
    instance.priority = value;
}

export {
    ToDoList,
}