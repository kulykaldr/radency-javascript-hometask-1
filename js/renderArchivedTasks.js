import renderTasksTable from './renderTasksTable.js'
import renderCategoryTable from './renderCategoryTable.js'

const renderArchivedTasks = tasks => {
    try {
        const tbodyTasks = document.querySelector('.archive-table tbody')
        tbodyTasks.innerHTML = ''

        const archivedTasks = tasks.filter(elem => elem.archived === true)
        renderTasksTable(tbodyTasks, archivedTasks)
        renderCategoryTable(tasks)
    } catch (error) {
        console.error(error)
    }
}

export default renderArchivedTasks