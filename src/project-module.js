class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }

    addToProject(toDoList) {
        ProjectAdder.addToProject(toDoList);
        console.log(this.projectItems);
    }
}

class ProjectAdder {
    addToProject(toDoList) {
        this.projectItems += toDoList; 
    }
}

export {
    Project
}