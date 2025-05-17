export default function LoaderComp() {
    const loader = document.createElement('div')
    loader.id = 'loader'

    loader.innerHTML = `
        <div class="spinner"></div>
    `

    return loader
}