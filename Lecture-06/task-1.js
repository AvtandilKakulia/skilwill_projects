/*
1. შექმენი button, რომელზე დაწკაპების შემდეგაც გაიხსნება მოდალი და მოდალის უკან შავი/გამჭვირვალე background.
*/

const body = document.body
const button = document.querySelector('.btn')

const modal = () => {
    const scriptElement = document.querySelector('script')

    const modal = document.createElement('div')
    modal.classList.add('modal')

    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')

    const modalContainerP = document.createElement('p')
    modalContainerP.innerText = 'This is a modal box. Click X to close it.'

    const outer = document.createElement('div')
    outer.classList.add('outer')

    const inner = document.createElement('div')
    inner.classList.add('inner')

    const label = document.createElement('label')
    label.innerText = 'Close'

    modal.append(modalContainer)
    modalContainer.append(modalContainerP, outer)
    outer.append(inner)
    inner.append(label)

    document.body.insertBefore(modal, scriptElement)

    outer.addEventListener('click', () => modal.remove())

}

button.addEventListener('click', modal)