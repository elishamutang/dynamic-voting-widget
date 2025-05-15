import { getData } from './loadData.js'
import CardComp from '../components/card/card.js'
import * as cardController from '../controllers/card/cardController.js'

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

            // Check if existing data exists
            const localData = JSON.parse(localStorage.getItem(`card-${idx}`))

            const card = CardComp(idx,localData ? localData : item)
            body.append(card)

            // Save data in local storage
            if(!localData) {
                localStorage.setItem(`card-${idx}`, JSON.stringify(item))
            }
        })

        // Attach event listeners
        // Voting
        Array.from(document.getElementsByClassName('vote-btn')).forEach((elem) => {
            elem.addEventListener('click', cardController.voteHandler)
        })

        // Open modal for editing.
        Array.from(document.getElementsByClassName('open-modal')).forEach((elem) => {
            elem.addEventListener('click', cardController.showModal)
        })

        // Close modal.
        Array.from(document.getElementsByClassName('cancel-changes')).forEach((elem) => {
            elem.addEventListener('click', cardController.closeModal)
        })

        // Detect form submission and save in localStorage (data persistence)
        Array.from(document.getElementsByClassName('edit-content')).forEach((elem) => {
            elem.addEventListener('submit', cardController.submitHandler)
        })

        // Reset to original API data.


    } catch (error) {
        // Display error page.
        console.error(error.message)
    } finally {
        // Remove loader
    }
})