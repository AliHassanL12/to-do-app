class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }

    addToProject(toDoList) {
       addToProject(this, toDoList);
       console.log(this.projectItems);
    }

    get listItems() {
        return this.projectItems;
    }
}

function addToProject(project, toDoList) {
    project.projectItems.push(toDoList);
}




export {
    Project,
}