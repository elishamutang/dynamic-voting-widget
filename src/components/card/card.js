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
                <button type="button" class="vote-btn up"><i class="fa-solid fa-caret-up fa-2xl"></i></button>
                <p class="total-votes">${totalVotes}</p>
                <button type="button" class="vote-btn down"><i class="fa-solid fa-caret-down fa-2xl"></i></button>
            </div>
            <div class="action-btns">
                <a class="button cta" href=${props.button.url} target="_blank">${props.button.label}</a>
                <dialog closedby="closerequest" id="dialog-${props.id}">
                    <form class="edit-content" action="/" id="form-${props.id}">
                        <h2 class="modal-title">Edit Card</h2>
                    
                        <label for="title">Title: </label>
                        <input type="text" name="title" value="${props.title}"/>
                        
                        <label for="description">Description: </label>
                        <input type="text" name="description" value="${props.description}"/>
                        
                        <label for="button-label">Button Label: </label>
                        <input type="text" name="button-label" value="${props.button.label}"/>
                        <div class="form-btns">
                            <button type="submit" class="save-changes">Save</button>
                            <button type="button" class="cancel-changes">Cancel</button>
                        </div>
                    </form>
                    
                </dialog>
                <button type="button" class="open-modal">
                    <i class="fa-solid fa-pen fa-xl"></i>
                </button>
            </div>
        </div>
        
    `

    return card
}
