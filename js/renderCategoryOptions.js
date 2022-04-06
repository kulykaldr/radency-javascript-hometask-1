import categories from './categories.js'

const renderCategoryOptions = () => {
    try {
        const form = document.querySelector('.add-task-form')
        const catSel = form.querySelector('#category')

        Object.values(categories).forEach(elem => {
            const catOpt = document.createElement('option')
            catOpt.setAttribute('value', elem)
            catOpt.appendChild(document.createTextNode(elem))
            catSel.appendChild(catOpt)
        })
    } catch (error) {
        console.error(error)
    }
}

export default renderCategoryOptions