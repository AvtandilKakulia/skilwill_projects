/*
3. დაწერე პროგრამა, სადაც ორი a და b მომხმარებელი აგორებს კამათელს მანამ, სანამ არ გაგორდება 3. რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული.
*/

function playDice(name1, name2) {
    let randNumber
    let score1 = 0
    let score2 = 0

    do {
        randNumber = Math.floor(Math.random() * 6) + 1
        score1++
    } while (randNumber !== 3)

    do {
        randNumber = Math.floor(Math.random() * 6) + 1
        score2++
    } while (randNumber !== 3)

    if (score1 > score2) {
        return `winner is ${name2} with ${score2} - ${score1}`
    } else if (score1 < score2) {
        return `winner is ${name1} with ${score1} - ${score2}`
    } else {
        return `Draw ${score1} - ${score2}`
    }
}

console.log(playDice('avto', 'dato'));