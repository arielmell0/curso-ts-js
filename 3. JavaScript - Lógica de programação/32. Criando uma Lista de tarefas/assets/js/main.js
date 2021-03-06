const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

function createLi() {
    const li = document.createElement('li')
    return li
}

function cleanInput() {
    inputTask.value = ''
    inputTask.focus()
}

function createDeleteBtn(li) {
    const deleteBtn = document.createElement('button')

    li.innerText += ' '
    deleteBtn.innerText = 'Apagar'
    deleteBtn.setAttribute('class', 'delete-btn')
    li.appendChild(deleteBtn)
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li')
    const listTasks = []

    for(let task of liTasks) {
        let taskText = task.innerText
        taskText = taskText.replace('Apagar', '').trim()
        listTasks.push(taskText)
    }

    const jsonListTasks = JSON.stringify(listTasks)
    localStorage.setItem('tasks', jsonListTasks)
}

function createTask(input) {
    const li = createLi()

    li.innerText = input
    tasks.appendChild(li)
    
    cleanInput()
    createDeleteBtn(li)
    saveTasks()
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const listTasks = JSON.parse(tasks)

    for(let task of listTasks) {
        createTask(task)
    }
}

btnTask.addEventListener('click', function(event) {
    if(!inputTask.value) return 

    createTask(inputTask.value)
})

document.addEventListener('click', (event) => {
    const clickedElement = event.target

    if(clickedElement.classList.contains('delete-btn')) {
        clickedElement.parentElement.remove()
        saveTasks()
    }
})

addSavedTasks()