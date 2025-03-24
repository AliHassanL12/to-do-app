import { ToDoList } from "./to-do-module";
import { Project } from "./project-module";
import { UserInterface } from './dom-module.js';
const defaultProject = new Project('default');
const toDo = new ToDoList('Finish Dissertation', 'On optional module', new Date(2025, 6, 21), 'low');
defaultProject.addToProject(toDo);

toDo.setToDoComplete();
UserInterface.createUserInterface();