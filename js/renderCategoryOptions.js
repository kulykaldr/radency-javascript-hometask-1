import categories from './categories.js'

const renderCategoryOptions = () => {
    const form = document.querySelector('.add-task-form')
    const catSel = form.querySelector('#category')
    
    Object.values(categories).forEach(elem => {
        const catOpt = document.createElement('option')
        catOpt.setAttribute('value', elem)
        catOpt.appendChild(document.createTextNode(elem))
        catSel.appendChild(catOpt)
    })
}

export default renderCategoryOptions