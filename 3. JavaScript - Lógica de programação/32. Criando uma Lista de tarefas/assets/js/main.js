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

function createTask(input) {
    const li = createLi()

    li.innerText = input
    tasks.appendChild(li)
    
    cleanInput()
}

btnTask.addEventListener('click', function(event) {
    if(!inputTask.value) return 

    createTask(inputTask.value)
})