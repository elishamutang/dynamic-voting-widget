export const voteHandler = (e) => {
    const voteBtnsDiv = e.currentTarget.parentElement
    const totalVotesElem = voteBtnsDiv.querySelector('p.total-votes')

    let totalVotes = parseInt(totalVotesElem.textContent)

    console.log(totalVotes);

    const buttonClicked = e.currentTarget

    if (buttonClicked.classList.contains('up')) {
        totalVotes += 1
    } else {
        totalVotes -= 1
    }

    totalVotesElem.textContent = totalVotes.toString()

    const cardElem = voteBtnsDiv.parentElement

    const localData = localStorage.getItem(cardElem.id, )
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
    localStorage.setItem(formId, JSON.stringify(formInputs))

    // Update fields after save.

    dialog.close()
}