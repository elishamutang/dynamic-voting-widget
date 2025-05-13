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
}

export const showModal = (e) => {
    const dialog = e.currentTarget.parentElement.querySelector('dialog')
    dialog.show();
}

export const closeModal = (e) => {
    const dialog = e.currentTarget.parentElement.parentElement.parentElement
    dialog.close();
}