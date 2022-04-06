import renderActiveTasks from './renderActiveTasks.js'
import renderArchivedTasks from './renderArchivedTasks.js'

const renredAllTasks = tasks => {
    try {
        renderActiveTasks(tasks)
        renderArchivedTasks(tasks)
    } catch (error) {
        console.error(error)
    }
}

export default renredAllTasks