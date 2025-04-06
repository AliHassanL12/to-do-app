class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }

    addToProject(toDoList) {
       addToProject(this, toDoList);
    }

    get listItems() {
        console.log(this.projectItems)
        return this.projectItems;
    }
}

function addToProject(project, toDoList) {
    project.projectItems.push(toDoList);
}


export {
    Project,
}