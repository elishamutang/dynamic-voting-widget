import quickSort from '../../scripts/quicksort.js'

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
    const dialog = e.target.form.parentElement
    const form = e.target.form
    const formData = new FormData(form)

    const cardId = form.id.split('-')[1]
    const localData = JSON.parse(localStorage.getItem(`card-${cardId}`))

    for(const [name, val] of formData.entries()) {
        if(!val) {
            if(name === 'buttonLabel') {
                form.querySelector(`input[name=${name}]`).value = localData.button.label
            } else if(name === 'buttonUrl') {
                form.querySelector(`input[name=${name}]`).value = localData.button.url
            } else {
                form.querySelector(`input[name=${name}]`).value = localData[name]
            }
        }
    }

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

export const resetData = (e, originalData) => {
    const id = e.target.form.id.split('-')[1]
    const cardId = `card-${id}`
    const contentDiv = document.getElementById(cardId).querySelector('.content')

    const originalCardData = originalData[cardId]

    // Reset content
    for(const [key, val] of Object.entries(originalCardData)) {
        if(key !== 'image') {
            if(key === 'votes') {
                contentDiv.querySelector('.total-votes').textContent = val.up - val.down
            } else if(key === 'button') {
                const ctaBtn = contentDiv.querySelector('.cta')
                ctaBtn.textContent = val.label
                ctaBtn.href = val.url
            } else {
                contentDiv.querySelector(`.${key}`).textContent = val
            }
        }
    }

    // Overwrite localStorage for particular card.
    localStorage.setItem(cardId, JSON.stringify(originalData[cardId]))

    // Close dialog
    const dialog = document.getElementById(`dialog-${id}`)
    dialog.close()
}

export const sortData = (e) => {
    e.preventDefault()

    const cards = Array.from(document.getElementsByClassName('card'))

    // Store total votes for each card in 'order' array.
    const order = cards.map((card, idx) => {
        return {
            'id' : parseInt(card.id.split('-')[1]),
            'votes' : parseInt(card.querySelector('.total-votes').textContent)
        }
    })

    const formDataInput = new FormData(e.target).get('sort-option')

    const sortedArr = formDataInput === 'ascending' ? quickSort(order) : quickSort(order, true)

    const newOrder = sortedArr.map((item) => {
        return document.getElementById(`card-${item.id}`)
    })

    // Update cards
    document.querySelector('main').replaceChildren(...newOrder)

}