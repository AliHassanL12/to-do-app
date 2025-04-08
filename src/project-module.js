import { ToDoList } from "./to-do-module";
class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }

    addToProject(toDoList) {
       addToProject(this, toDoList);
    }

    get listItems() {
        return this.projectItems;
    }

    resetID() {
        resetID(this);
    }
}

function addToProject(project, toDoList) {
    project.projectItems.push(toDoList);
}

function resetID(instance) {
    for (let i = 0; i < instance.listItems.length; i++) {
        const arr = instance.listItems;
        instance.listItems[i].setID = i;
    };
}


export {
    Project,
}