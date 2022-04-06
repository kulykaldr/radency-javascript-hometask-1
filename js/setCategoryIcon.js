const setCategoryIcon = category => {
    const iconCategory = document.createElement('div')
    iconCategory.classList.add('icon-category')
    switch (category) {
        case 'Task':
            iconCategory.classList.add('icon-task')
            break
        case 'Random Thought':
            iconCategory.classList.add('icon-mind')
            break
        case 'Idea':
            iconCategory.classList.add('icon-idea')
            break
        default:
            break
    }
    
    return iconCategory
}

export default setCategoryIcon