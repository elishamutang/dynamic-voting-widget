import { getData } from './loadData.js'
import CardComp from '../components/card/card.js'
import { voteHandler, showModal, closeModal } from '../controllers/card/cardController.js'

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

        // Open and close modal for editing.
        Array.from(document.getElementsByClassName('open-modal')).forEach((elem) => {
            elem.addEventListener('click', showModal)
        })

        Array.from(document.getElementsByClassName('cancel-changes')).forEach((elem) => {
            elem.addEventListener('click', closeModal)
        })

    } catch (error) {
        // Display error page.
        console.error(error.message)
    } finally {
        // Remove loader
    }
})