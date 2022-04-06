import tasks from './tasks.js'
import renderAllTasks from './renderAllTasks.js'
import strToHash from './strToHash.js'
import toggleModal from './toggleModal.js'

const taskFormSubmit = event => {
    try {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        const id = +formData.get('id')
        const name = formData.get('name')
        const category = formData.get('category')
        const content = formData.get('content')

        // Dates
        const dateRegex = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm
        const mDates = content.match(dateRegex)
        const dates = mDates ? Array.from(mDates) : []

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
    } catch (error) {
        console.error(error)
    }
}

export default taskFormSubmit