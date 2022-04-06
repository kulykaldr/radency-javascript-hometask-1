import tasks from './tasks.js'

// find task in arry tasks by btn ID
const findTaskByBtn = btn => {
    const re = /\d+/
    const id = Number.parseInt(btn.id.match(re)[0])
    return tasks.find(elem => elem.id === id)
}

export default findTaskByBtn