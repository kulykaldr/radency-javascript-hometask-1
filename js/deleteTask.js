import tasks from './tasks.js'
import findTaskByBtn from './findTaskByBtn.js'
import renderActiveTasks from './renderActiveTasks.js'
import renderArchivedTasks from './renderArchivedTasks.js'

const deleteTask = event => {
    try {
        const task = findTaskByBtn(event.target)
        const taskIndex = tasks.findIndex(elem => elem.id === task.id)

        tasks.splice(taskIndex, 1)

        renderActiveTasks(tasks)
        renderArchivedTasks(tasks)
    } catch (error) {
        console.error(error)
    }
}

export default deleteTask