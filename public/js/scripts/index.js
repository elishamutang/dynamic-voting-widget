import { getData } from './loadData.js'
import CardComp from '../components/card.js'
import LoaderComp from '../components/loader.js'
import ErrorComp from '../components/error.js'
import * as cardController from '../controllers/cardController.js'

document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('DOM fully parsed')

    // Target body
    const main = document.querySelector('main')

    // Load data.
    try {
        // Add loader
        main.append(LoaderComp())

        // Disable sorting while loading
        document.getElementById('sort-option').disabled = true
        document.getElementById('sort').querySelector('button').disabled = true

        const data = await getData()
        console.log(data)

        // Store original API data according to each card respectively.
        const originalData = {}

        data.forEach((item, idx) => {
            originalData[`card-${idx}`] = item

            // Check if existing data exists
            const localData = JSON.parse(localStorage.getItem(`card-${idx}`))

            const card = CardComp(idx,localData ? localData : item)
            main.append(card)

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
        Array.from(document.getElementsByClassName('reset-data')).forEach((elem) => {
            elem.addEventListener('click', (e) => {
                cardController.resetData(e, originalData)
            })
        })

        // Sorting
        document.getElementById('sort').addEventListener('submit', cardController.sortData)


    } catch (error) {
        console.error(error)

        // Display error page.
        const errorView = [ErrorComp()]
        document.querySelector('body').replaceChildren(...errorView)

    } finally {
        // Remove loader and enable form
        if(document.getElementById('loader')) {
            document.getElementById('loader').remove()
            document.getElementById('sort-option').disabled = false
            document.getElementById('sort').querySelector('button').disabled = false
        }

    }
})