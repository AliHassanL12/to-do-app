class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }

    addToProject(toDoList) {
        projectAdder.addToProject.call(this, toDoList);
    }
}

const projectAdder = (function(){
    function addToProject(toDoList) {
        this.projectItems.push(toDoList);
    }
    return {
        addToProject
    }
})()


export {
    Project,
    projectAdder
}