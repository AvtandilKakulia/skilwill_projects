/*
3. შექმენი input, სადაც მომხმარებელს შესაძლებლობა ექნება შეიტანოს “:”- ით ერთმანეთისგან გამოყოფილი რიცხვები, average ღილაკზე დაწკაპების შემდეგ დაითვალე ამ რიცხვების საშუალო და გამოუტანე ეკრანზე. მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს.
*/

const container = document.querySelector('.container')
const input = container.querySelector('input')
const button = container.querySelector('button')
const avgText = document.querySelector('#avg')

const countAverage = () => {
    const inputArr = input.value.split(':').map(item => item.replace(',', '.'))
    const numberArr = inputArr.map(e => Number(e.trim()))

    if (numberArr.some(isNaN)) {
        avgText.innerText = 'შემოიყვანე მხოლოდ ":" -ით გამოყოფილი რიცხვები'
        return
    }

    const sum = numberArr.reduce((a, b) => a + b)
    const avg = sum / numberArr.length

    return avgText.innerText = avg
}

button.addEventListener('click', countAverage)
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        countAverage()
    }
})