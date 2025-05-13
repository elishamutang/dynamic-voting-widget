export default function CardComp({...props}) {

    const card = document.createElement('div')
    card.className = 'card'

    const totalVotes = props.up - props.down

    card.innerHTML = `
        <img class="card-img" src=${props.src} alt="qr-code"/>
        
        <div class="content">
            <h1 class="title">${props.title}</h1>
            <p class="description">${props.description}</p>
            <div class="voteBtns">
                <button type="button" class="vote-btn"><i class="fa-solid fa-caret-up fa-2xl"></i></button>
                <p class="total-votes">${totalVotes}</p>
                <button type="button" class="vote-btn"><i class="fa-solid fa-caret-down fa-2xl"></i></button>
            </div>
            <a class="button cta" href=${props.button.url} target="_blank">${props.button.label}</a>
        </div>
        
    `

    return card
}
