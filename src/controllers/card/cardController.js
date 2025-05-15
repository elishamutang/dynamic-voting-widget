export const voteHandler = (e) => {
    const voteBtnsDiv = e.currentTarget.parentElement
    const totalVotesElem = voteBtnsDiv.querySelector('p.total-votes')

    const cardElem = voteBtnsDiv.parentElement.parentElement
    const localData = JSON.parse(localStorage.getItem(cardElem.id))

    const buttonClicked = e.currentTarget

    if (buttonClicked.classList.contains('up')) {
        localData.votes.up += 1
    } else {
        localData.votes.down += 1
    }

    const totalVotes = localData.votes.up - localData.votes.down

    // Store new values
    localStorage.setItem(cardElem.id, JSON.stringify(localData))

    // Update display
    totalVotesElem.textContent = `${totalVotes}`.toString()
}

export const showModal = (e) => {
    const dialog = e.currentTarget.parentElement.querySelector('dialog')
    dialog.show();
}

export const closeModal = (e) => {
    const dialog = e.currentTarget.parentElement.parentElement.parentElement
    dialog.close();
}

export const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const dialog = e.target.parentElement

    const formInputs = {}
    for(const [name, val] of formData.entries()) {
        formInputs[name] = val
    }

    console.log(formInputs)

    const formId = e.target.id
    const cardElemId = `card-${formId.split('-')[1]}`

    // Update display
    const cardElem = document.getElementById(cardElemId)
    cardElem.querySelector('.title').textContent = formInputs.title
    cardElem.querySelector('.description').textContent = formInputs.description
    cardElem.querySelector('.cta').textContent = formInputs.buttonLabel

    // Overwrite form fields and save to localStorage.
    const localData = JSON.parse(localStorage.getItem(cardElemId))
    localData.title = formInputs.title
    localData.description = formInputs.description
    localData.button.label = formInputs.buttonLabel

    localStorage.setItem(cardElemId, JSON.stringify(localData))
    dialog.close()
}