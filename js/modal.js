import categories from './categories.js'

const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const closeButton = document.querySelector('.close-button')
const createTaskButton = document.querySelector('.btn-create-task button')

const form = document.querySelector('.add-task-form')

const catSel = form.querySelector('#category')
Object.values(categories).forEach(elem => {
    const catOpt = document.createElement('option')
    catOpt.setAttribute('value', elem)
    catOpt.appendChild(document.createTextNode(elem))
    catSel.appendChild(catOpt)
})

const toggleModal = () => {
    modal.classList.toggle('closed')
    modalOverlay.classList.toggle('closed')

    form.querySelector('#id').setAttribute('value', '')
    form.querySelector('#name').setAttribute('value', '')
    form.querySelector('#content').setAttribute('value', '')
}

// toggle modal
closeButton.addEventListener('click', toggleModal)
modalOverlay.addEventListener('click', toggleModal)

// add task button
createTaskButton.addEventListener('click', toggleModal)

export default toggleModal