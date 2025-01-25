/*
2. შექმენი input და button-ი. input-ში მომხმარებელი ჩაწერს ფერს და button ღილაკზე დაწკაპების შემდეგ body-ს background შეიცვლება ჩაწერილ ფერად (ფერები რომლის ჩაწერაც შეუძლია: red, blue, green, black, white). თუ სხვა ფერი ჩაწერა, გამოუტანე შეტყობინება alert-ის საშუალებით.
*/

const body = document.body
const container = document.querySelector('.container')
const input = container.querySelector('input')
const button = container.querySelector('button')

const checkColor = () => {
    const color = input.value.toLowerCase();

    switch (color) {
        case 'red':
        case 'blue':
        case 'green':
        case 'white':
            body.style.backgroundColor = color;
            input.value = '';
            break;
        default:
            alert('Please enter a valid color: red, blue, green, or white.');
            input.value = '';
            break;
    }
}


button.addEventListener('click', checkColor)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkColor()
    }
})