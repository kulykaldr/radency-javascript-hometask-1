import renderActiveTasks from './renderActiveTasks.js'
import renderArchivedTasks from './renderArchivedTasks.js'

const renredAllTasks = tasks => {
    renderActiveTasks(tasks)
    renderArchivedTasks(tasks)
}

export default renredAllTasks