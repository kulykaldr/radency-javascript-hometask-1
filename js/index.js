import tasks from './tasks.js'
import renderActiveTasks from './renderActiveTasks.js'
import renderArchivedTasks from './renderArchivedTasks.js'
import renderCategoryOptions from './renderCategoryOptions.js'
import taskFormSubmit from './taskFormSubmit.js'

const form = document.querySelector('.add-task-form')
form.addEventListener('submit', taskFormSubmit)

renderCategoryOptions()

renderActiveTasks(tasks)
renderArchivedTasks(tasks)