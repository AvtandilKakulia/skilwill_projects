/*
1. მოცემულია მასივი [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს.
*/

const arr = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 },
    { name: 'Keti', age: 19 },
]

function isYounger(arr) {
    if (!Array.isArray(arr)) return 'გადმოეცი ობიექტების მასივი არგუმენტად'
    if (arr.length === 0) return 'მოცემულ მასივში არ არის ობიექტები'

    let youngest = arr.reduce((prev, next) => {
        return (prev.age > next.age) ? next : prev
    })

    return youngest.name
}

console.log(isYounger(arr));
