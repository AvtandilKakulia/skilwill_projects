/*
2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას.
*/

const makeUpperCase = (string) => {
    return string.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}

const string = 'this is fun to write code'

console.log(makeUpperCase(string))