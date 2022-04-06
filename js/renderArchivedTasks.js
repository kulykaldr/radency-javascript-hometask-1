import renderTasksTable from './renderTasksTable.js'
import renderCategoryTable from './renderCategoryTable.js'

const renderArchivedTasks = tasks => {
    const tbodyTasks = document.querySelector('.archive-table tbody')
    tbodyTasks.innerHTML = ''

    const archivedTasks = tasks.filter(elem => elem.archived === true)
    renderTasksTable(tbodyTasks, archivedTasks)
    renderCategoryTable(tasks)
}

export default renderArchivedTasks