export default function CardComp({...props}) {

    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
        <img class="card-img" src=${props.src} alt=${props.alt}/>
        
        <div class="content">
            <h1 class="title">${props.title}</h1>
            <p class="description">${props.description}</p>
            <div class="vote-btn">Upvote (${props.up})</div>
            <div class="vote-btn">Downvote (${props.down})</div>
            <a class="button" href=${props.button.url} target="_blank">${props.button.label}</a>
        </div>
        
    `

    return card
}
