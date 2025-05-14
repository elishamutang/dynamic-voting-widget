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

        // Check for localStorage
        const localData = localStorage.getItem('myData')
        console.log(localData)

        data.forEach((item, idx) => {
            const card = CardComp({
                'id' : idx,
                'src' : item.image,
                'title' : item.title,
                'description' : item.description,
                'up' : item.votes.up,
                'down' : item.votes.down,
                'button' : item.button
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