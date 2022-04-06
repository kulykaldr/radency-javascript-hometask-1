import findTaskByBtn from './findTaskByBtn.js'
import toggleModal from './toggleModal.js'

// Show edit task form and add content from array by id
const editTaskForm = event => {
    try {
        toggleModal()

        const task = findTaskByBtn(event.target)
        const form = document.querySelector('.add-task-form')
        form.querySelector('#id').setAttribute('value', task.id)
        form.querySelector('#name').setAttribute('value', task.name)
        const categoryOption = form.querySelector(`#category option[value="${task.category}"]`)
        categoryOption.selected = true
        form.querySelector('#content').setAttribute('value', task.content)
    } catch (error) {
        console.error(error)
    }
}

export default editTaskForm