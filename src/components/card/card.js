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
                    <form class="edit-content" action="/" id="form-${id}" method="dialog">
                        <div class="form-header">
                            <h2 class="modal-title">Edit Card</h2>
                            <button type="button" class="reset-data">Reset</button>
                        </div>
                        
                        <label for="title-${id}">Title: </label>
                        <input type="text" name="title" id="title-${id}" value="${data.title}" required maxlength="20"/>
                        
                        <label for="description-${id}">Description: </label>
                        <input type="text" name="description" id="description-${id}" value="${data.description}" required/>
                        
                        <label for="button-label-${id}">Button Label: </label>
                        <input type="text" name="buttonLabel" id="button-label-${id}" value="${data.button.label}" required maxlength="30"/>
                        
                        <label for="button-link-${id}">Button Link: </label>
                        <input type="url" name="buttonUrl" id="button-link-${id}" value="${data.button.url}" required/>
                        
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
