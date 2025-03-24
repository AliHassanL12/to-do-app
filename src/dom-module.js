class UserInterface {
    static createUserInterface() {
        createUserInterface();
    }
}

function createUserInterface() {
    const appContainer = document.querySelector('.container');
    const header = document.createElement('div');
    header.classList.add('header');
    appContainer.appendChild(header);


    console.log('works');
}


export {
    UserInterface
}