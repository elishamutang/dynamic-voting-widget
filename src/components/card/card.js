export default function CardComp(id, data) {

    const card = document.createElement('div')
    card.className = 'card'
    card.id = `card-${id}`

    const totalVotes = data.votes.up - data.votes.down

    card.innerHTML = `
        <img class="card-img" src=${data.image} alt="qr-code"/>
        
        <div class="content">
            <h1 class="title">${data.title}</h1>
            <p class="description">${data.description}</p>
            <div class="voteBtns">
                <button type="button" class="vote-btn up"><i class="fa-solid fa-caret-up fa-2xl"></i></button>
                <p class="total-votes">${totalVotes}</p>
                <button type="button" class="vote-btn down"><i class="fa-solid fa-caret-down fa-2xl"></i></button>
            </div>
            <div class="action-btns">
                <a class="button cta" href=${data.button.url} target="_blank">${data.button.label}</a>
                <dialog closedby="closerequest" id="dialog-${id}">
                    <form class="edit-content" action="/" id="form-${id}">
                        <h2 class="modal-title">Edit Card</h2>
                    
                        <label for="title">Title: </label>
                        <input type="text" name="title" value="${data.title}" required maxlength="20"/>
                        
                        <label for="description">Description: </label>
                        <input type="text" name="description" value="${data.description}" required/>
                        
                        <label for="button-label">Button Label: </label>
                        <input type="text" name="buttonLabel" value="${data.button.label}" required maxlength="20"/>
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
