import tasks from './tasks.js'
import renderAllTasks from './renderAllTasks.js'
import {strToHash} from './helpers.js'
import toggleModal from './modal.js'
import findTaskByBtn from './findTaskByBtn.js'

const taskFormSubmit = event => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    
    // ID
    let id = +formData.get('id')
    // Name 
    const name = formData.get('name')
    // Category
    const category = formData.get('category')
    // Content
    const content = formData.get('content')

    // Dates
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm
    let mDates = content.match(dateRegex)
    if (!mDates) {
        mDates = []
    }
    const dates = Array.from(mDates)

    // Add or edit task
    const taskId = tasks.findIndex(elem => elem.id === id)
    if (taskId !== -1) {
        tasks[taskId] = {
            ...tasks[taskId],
            name,
            category,
            dates,
            content,
        }
    } else {
        const created = new Date().toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric' })
        tasks.push({
            id: strToHash(name),
            created,
            name,
            category,
            dates,
            content,
            archived: false,
        })
    }

    renderAllTasks(tasks)
    
    toggleModal()
    form.reset()
}

// Show edit task form and add content from array by id
const editTaskForm = event => {
    const task = findTaskByBtn(event.target)
    
    toggleModal()

    const form = document.querySelector('.add-task-form')
    form.querySelector('#id').setAttribute('value', task.id)
    form.querySelector('#name').setAttribute('value', task.name)
    const categoryOption = form.querySelector(`#category option[value="${task.category}"]`)
    categoryOption.selected = true
    form.querySelector('#content').setAttribute('value', task.content)
}

const form = document.querySelector('.add-task-form')
form.addEventListener('submit', taskFormSubmit)

export default editTaskForm