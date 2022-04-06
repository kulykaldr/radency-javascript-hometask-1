import tasks from './tasks.js'
import renderActiveTasks from './renderActiveTasks.js'
import renderArchivedTasks from './renderArchivedTasks.js'
import './addTaskForm.js'
import './modal.js'

HTMLTableRowElement.prototype.addTextTd = function(text) {
    const td = document.createElement('td')
    td.innerText = text
    this.appendChild(td)
    return this
}

renderActiveTasks(tasks)
renderArchivedTasks(tasks)