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

    deleteProjectItem(item) {
        deleteProjectItem(this, itemIndex);
    }

    work() {
        console.log('work');
    }
}

function addToProject(project, toDoList) {
    project.projectItems.push(toDoList);
}

function deleteProjectItem(instance, itemIndex) {

}

export {
    Project,
}