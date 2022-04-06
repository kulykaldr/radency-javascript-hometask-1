import tasks from './tasks.js'

// find task in arry tasks by btn ID
const findTaskByBtn = btn => {
    try {
        const re = /\d+/
        const id = Number.parseInt(btn.id.match(re)[0])
        return tasks.find(elem => elem.id === id)
    } catch (error) {
        console.error(error)
    }
}

export default findTaskByBtn