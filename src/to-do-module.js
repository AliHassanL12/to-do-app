import { format } from 'date-fns';

class ToDoList {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description;
        this.dueDate = format(dueDate, 'dd-MM-yyyy'); 
        this.priority = priority;
        this.complete = null;
    }

    id = null; 

    setToDoComplete() {
        setToDoComplete(this);
    }

    changeToDoPriority() {
        changeToDoPriority(this, value);
    }

    get getID() {
        return this.id;
    }

    set setID(value) {
        this.id = value;
    }
 }

function setToDoComplete(instance) {
    if (instance.complete) instance.complete = false;
    else instance.complete = true;
    
}

function changeToDoPriority(instance, value) {
    instance.priority = value;
}

export {
    ToDoList,
}