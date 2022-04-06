import tasks from './tasks.js'
import findTaskByBtn from './findTaskByBtn.js'
import renderAllTasks from './renderAllTasks.js'

const toggleArchiveTask = event => {
    try {
        const task = findTaskByBtn(event.target)
        const taskIndex = tasks.findIndex(elem => elem.id === task.id)

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            archived: !tasks[taskIndex].archived
        }

        renderAllTasks(tasks)
    } catch (error) {
        console.error(error)
    }
}

export default toggleArchiveTask