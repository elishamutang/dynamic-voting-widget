import { getData } from './loadData.js'
import CardComp from './card.js'

document.addEventListener('DOMContentLoaded', async (e) => {
    console.log('DOM fully parsed')

    // Target body
    const body = document.querySelector('body')

    // Load data
    try {
        // Add loader
        const data = await getData()
        console.log(data)

        data.forEach((item) => {
            const card = CardComp({
                'src' : item.image,
                'title' : item.title,
                'description' : item.description,
                'up' : item.votes.up,
                'down' : item.votes.down,
                'button' : item.button
            })

            body.append(card)
        })
    } catch (error) {
        // Display error page.
        console.error(error.message)
    } finally {
        // Remove loader
    }
})