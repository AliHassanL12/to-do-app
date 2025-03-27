class ProjectViewer {
    static openProjectOnUI(arr) {
        console.log(arr)
        console.log(arr.complete)
        const projectView = document.querySelector('.projectView');
        for (let i = 0; i < arr.length; i++) {
            for (const property in arr[i]) {
                console.log(property);
            }
        }
    }
}

export {
    ProjectViewer
}