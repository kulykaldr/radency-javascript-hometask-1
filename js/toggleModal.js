const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const closeButton = document.querySelector('.close-button')
const createTaskButton = document.querySelector('.btn-create-task button')

const toggleModal = () => {
    try {
        const form = document.querySelector('.add-task-form')
        modal.classList.toggle('closed')
        modalOverlay.classList.toggle('closed')

        form.querySelector('#id').setAttribute('value', '')
        form.querySelector('#name').setAttribute('value', '')
        form.querySelector('#content').setAttribute('value', '')
    } catch (error) {
        console.error(error)
    }
}

// toggle modal
closeButton.addEventListener('click', toggleModal)
modalOverlay.addEventListener('click', toggleModal)

// add task button
createTaskButton.addEventListener('click', toggleModal)

export default toggleModal