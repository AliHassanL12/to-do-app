import { ToDoList } from "./to-do-module";
import { Project } from "./project-module";
import { UserInterface } from './dom-module.js';

const defaultProject = new Project('default');
const toDo = new ToDoList('Finish Dissertation', 'On optional module', new Date(2025, 6, 21), 'low');
defaultProject.addToProject(toDo);
const toDo2 = new ToDoList('Cry yourself to sleep', 'On stresses of life', new Date(2024, 3, 12), 'high');
defaultProject.addToProject(toDo2);

UserInterface.project = defaultProject;
UserInterface.createUserInterface();
UserInterface.openProjectOnUI();