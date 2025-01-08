/*
1. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი.
*/

const someOps = (num1, num2, ...args) => {
    if (args.length < 1) return 'გადმოეცი მინიმუმ 3 არგუმენტი'
    let sum = num1 + num2
    let mult = args.reduce((acumulator, current) => {
        return acumulator * current
    })
    return [sum, mult]
}

console.log(someOps(1, 2, 3, 4, 5));