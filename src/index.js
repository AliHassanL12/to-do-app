import { ToDoList } from "./to-do-module";
import { Project, projectAdder } from "./project-module";

const defaultProject = new Project('default');
const toDo = new ToDoList('harry');
defaultProject.addToProject(toDo);
