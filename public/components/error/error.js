export default function ErrorComp() {
    const error = document.createElement('div')
    error.id = 'error'

    error.innerHTML = `
        <h1>Sorry, an error was encountered :/</h1>
    `

    return error
}
