import editTaskForm from './editTaskForm.js'
import setCategoryIcon from './setCategoryIcon.js'
import toggleArchiveTask from './toggleArchiveTask.js'
import deleteTask from './deleteTask.js'

HTMLTableRowElement.prototype.addTextTd = function(text) {
    const td = document.createElement('td')
    td.innerText = text
    this.appendChild(td)
    return this
}

const renderTasksTable = (tbody, tasks) => {
    tasks.forEach(task => {
        const tr = document.createElement('tr')
        tr.id = task.id
    
        const categoryTd = document.createElement('td')
        categoryTd.appendChild(setCategoryIcon(task.category))
        tr.appendChild(categoryTd)

        tr.addTextTd(task.name)
        tr.addTextTd(task.created)
        tr.addTextTd(task.category)
        tr.addTextTd(task.content)
        tr.addTextTd(task.dates.join(', '))
    
        const actionButtons = [
            'edit',
            'archive',
            'trash'
        ]
    
        const tdAction = document.createElement('td')
        actionButtons.forEach(action => {
            const btn = document.createElement('button')
            btn.id = `${action}-${task.id}`
            btn.addEventListener('click', event => {
                switch (action) {
                    case 'edit':
                        editTaskForm(event)
                        break
                    case 'archive':
                        toggleArchiveTask(event)
                        break
                    case 'trash':
                        deleteTask(event)
                        break
                
                    default:
                        break
                }
            })

            btn.classList.add('btn-action', `btn-${action}`)
            tdAction.appendChild(btn)
        })
        tr.appendChild(tdAction)
    
        tbody.appendChild(tr)
    })
}

export default renderTasksTable