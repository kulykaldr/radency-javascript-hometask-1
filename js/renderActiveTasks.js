import renderTasksTable from './renderTasksTable.js'
import renderCategoryTable from './renderCategoryTable.js'

const renderActiveTasks = tasks => {
    const tbodyTasks = document.querySelector('.tasks-table tbody')
    tbodyTasks.innerHTML = ''

    const activeTasks = tasks.filter(elem => elem.archived === false)
    renderTasksTable(tbodyTasks, activeTasks)
    renderCategoryTable(tasks)
}

export default renderActiveTasks