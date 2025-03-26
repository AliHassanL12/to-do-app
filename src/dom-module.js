import '../css/styles.css';
import listIconPath from '../images/list.png';
class UserInterface {
    static createUserInterface() {
        createUserInterface();
    }
}

function createUserInterface() {
    createAppHeader();
    createApplication();
}

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
}

function createApplication() {
    createAppContent();
    createNavigationSidebar();
    createProjectView();
}

function createAppContent() {
    const appContainer = document.querySelector('.container');
    const appMainContentContainer = document.createElement('div');
    appMainContentContainer.classList.add('mainContentContainer');
    appContainer.appendChild(appMainContentContainer);
}

function createNavigationSidebar() {
    const appMainContentContainer = document.querySelector('.mainContentContainer');
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    appMainContentContainer.appendChild(sidebar);

    const homeLink = document.createElement('a')
    homeLink.textContent = 'Home';
    sidebar.appendChild(homeLink);
}


function createProjectView() {
    const appMainContentContainer = document.querySelector('.mainContentContainer');
    const projectView = document.createElement('div');
    projectView.classList.add('projectView');
    appMainContentContainer.appendChild(projectView);
}

export {
    UserInterface
}