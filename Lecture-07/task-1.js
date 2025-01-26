/*
1. დაწერე ფუნქცია რომელიც მიიღებს დაყოვნებას, შექმნის ფრომისს და დააბრუნებს რეზულტატს ფრომისის სახით. ამ ფუნქციაზე შესაძლებელი უნდა იყოს დაჩეინება. მაგ: setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დაფუძნებული ალტერნატივა. მაგ: mySetTimeout(delay).then(...).
*/

function makePromise(delay) {
    return new Promise((result, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                result('greater than 0.2')
            } else {
                reject('less than 0.2')
            }
        }, delay)
    })
}

makePromise(1000)
    .then(result => console.log(result))
    .catch(err => console.log(err))

