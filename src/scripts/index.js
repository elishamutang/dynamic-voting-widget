import { getData } from './loadData.js'
import CardComp from '../components/card/card.js'
import { voteHandler, showModal, closeModal, submitHandler } from '../controllers/card/cardController.js'

document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('DOM fully parsed')

    // Target body
    const body = document.querySelector('body')

    // Load data.
    try {
        // Add loader
        const data = await getData()
        console.log(data)

        data.forEach((item, idx) => {

            // Set existing data in localStorage.
            localStorage.setItem(`card-${idx}`, JSON.stringify(item))

            const localData = JSON.parse(localStorage.getItem(`card-${idx}`))
            console.log(localData)

            const card = CardComp({
                'id' : idx,
                'src' : localData.image,
                'title' : localData.title,
                'description' : localData.description,
                'up' : localData.votes.up,
                'down' : localData.votes.down,
                'button' : {
                    'label' : localData.button.label,
                    'url' : localData.button.url
                }
            })

            body.append(card)
        })

        // Attach event listeners
        // Voting
        Array.from(document.getElementsByClassName('vote-btn')).forEach((elem) => {
            elem.addEventListener('click', voteHandler)
        })

        // Open modal for editing.
        Array.from(document.getElementsByClassName('open-modal')).forEach((elem) => {
            elem.addEventListener('click', showModal)
        })

        // Close modal.
        Array.from(document.getElementsByClassName('cancel-changes')).forEach((elem) => {
            elem.addEventListener('click', closeModal)
        })

        // Detect form submission and save in localStorage (data persistence)
        Array.from(document.getElementsByClassName('edit-content')).forEach((elem) => {
            elem.addEventListener('submit', submitHandler)
        })


    } catch (error) {
        // Display error page.
        console.error(error.message)
    } finally {
        // Remove loader
    }
})