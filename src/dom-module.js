import '../css/styles.css';
import listIconPath from '../images/list.png';
class UserInterface {
    static createUserInterface() {
        createUserInterface();
    }
}

function createUserInterface() {
    createAppHeader();
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


export {
    UserInterface
}