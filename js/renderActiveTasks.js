import renderTasksTable from './renderTasksTable.js'
import renderCategoryTable from './renderCategoryTable.js'

const renderActiveTasks = tasks => {
    try {
        const tbodyTasks = document.querySelector('.tasks-table tbody')
        tbodyTasks.innerHTML = ''

        const activeTasks = tasks.filter(elem => elem.archived === false)
        renderTasksTable(tbodyTasks, activeTasks)
        renderCategoryTable(tasks)
    } catch (error) {
        console.error(error)
    }
}

export default renderActiveTasks