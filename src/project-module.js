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

        // this is not a function!! Arr[i] never has a function setID
        instance.listItems[i].setID(i);
        console.log(instance.listItems[i].getID);
    }
}


export {
    Project,
}