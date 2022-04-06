import categories from './categories.js'
import setCategoryIcon from './setCategoryIcon.js'

const getTasksCategories = tasks => {
    const tasksCategories = []

    Object.values(categories).forEach(category => {
        const categoryTasks = tasks.filter(task => task.category === category)
        const archivedTasks = categoryTasks.filter(task => task.archived)

        const taskCategory = {
            category,
            active: categoryTasks.length - archivedTasks.length,
            archived: archivedTasks.length,
        }

        tasksCategories.push(taskCategory)
    })

    return tasksCategories
}

const renderCategoryTable = tasks => {
    const tbody = document.querySelector('.category-table tbody')
    tbody.innerHTML = ''
    
    const tasksCategories = getTasksCategories(tasks)

    tasksCategories.forEach(taskCategory => {
        const tr = document.createElement('tr')

        const categoryTd = document.createElement('td')
        categoryTd.appendChild(setCategoryIcon(taskCategory.category))
        tr.appendChild(categoryTd)

        tr.addTextTd(taskCategory.category)
        tr.addTextTd(taskCategory.active)
        tr.addTextTd(taskCategory.archived)

        tbody.appendChild(tr)
    })
}

export default renderCategoryTable