import '../css/styles.css';
import listIconPath from '../images/list.png';


class UserInterface {
    static currentProject = null;

    static createUserInterface() {
        createUserInterface();
    };

    static openProjectOnUI(arr) {
        ProjectViewer.openProjectOnUI(UserInterface.currentProject.listItems);
    };

    static set project(newProject) {
        UserInterface.currentProject = newProject;
    } 

};

class ProjectViewer {
    static openProjectOnUI(arr) {
        const projectView = document.querySelector('.projectView');
        for (let i = 0; i < arr.length; i++) {
            const container = document.createElement('div');
            container.classList.add('toDoContainer');

            const priorityStripe = document.createElement('div');
            priorityStripe.classList.add('priorityStripe');
            switch(arr[i].priority) {
                case 'high':
                    priorityStripe.classList.add('high');
                    break;
                case 'medium':
                    priorityStripe.classList.add('medium');
                    break;
                case 'low':
                    priorityStripe.classList.add('low');
                    break;
            };

            const title = document.createElement('p');
            title.textContent = `${arr[i].title}`;

            const dueDate = document.createElement('p');
            dueDate.textContent = `${arr[i].dueDate}`;
            dueDate.classList.add('dueDate');

            const detailButton = document.createElement('button');
            detailButton.classList.add('detailButton');
            detailButton.textContent = 'Details';

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = 'Delete';

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', arr[i].getID)
            checkbox.classList.add('checkbox');

            projectView.appendChild(container); 
            container.appendChild(priorityStripe);
            container.appendChild(checkbox);
            container.appendChild(title);
            container.appendChild(dueDate);
            container.appendChild(detailButton);
            container.appendChild(deleteButton);
        };
        attachListeners(arr)
    };
};


function createUserInterface() {
    createAppHeader();
    createApplication();
};

function createApplication() {
    createAppContent();
    createNavigationSidebar();
    createProjectView();
};

function createAppHeader() {
    const appContainer = document.querySelector('.container');
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "TO-DO LIST";
    const listIconImage = document.createElement('img');
    listIconImage.src = listIconPath;
    listIconImage.classList.add('listIcon');
    appContainer.appendChild(header);
    header.appendChild(listIconImage);
};

function createAppContent() {
    const appContainer = document.querySelector('.container');
    const appMainContentContainer = document.createElement('div');
    appMainContentContainer.classList.add('mainContentContainer');
    appContainer.appendChild(appMainContentContainer);
};

function createNavigationSidebar() {
    const appMainContentContainer = document.querySelector('.mainContentContainer');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    appMainContentContainer.appendChild(sidebar);

    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    sidebar.appendChild(homeLink);
};

function createProjectView() {
    const appMainContentContainer = document.querySelector('.mainContentContainer');
    const projectView = document.createElement('div');
    projectView.classList.add('projectView');
    appMainContentContainer.appendChild(projectView);
};

function attachListeners(arr) {
    const projectView = document.querySelector('.projectView');
    projectView.addEventListener('click', event => {
        const targetElement = event.target;
        if (targetElement.className === 'checkbox') arr[targetElement.id].setToDoComplete();
        else if (targetElement.className === 'deleteButton') arr[targetElement.id].deleteToDo();
    }); 
};

export {
    UserInterface
}