/*
2. დაწერე ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს “ტოლია” თუ a უდრის b-ს, ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს “არ არის ტოლი”. გაითვალისწინე, რომ a და b ყოველთვის ერთი და იგივე ტიპის არ არის.
*/

function isEqual(a, b) {
    if (a === undefined || b === undefined) return 'გადმოეცი ორი პარამეტრი'
    if (a === b) return a + ' (Type: ' + typeof (a) + ')' + ' და ' + b + ' (Type: ' + typeof (b) + ')' + ' ტოლია.'
    return a + ' (Type: ' + typeof (a) + ')' + ' და ' + b + ' (Type: ' + typeof (b) + ')' + ' არ არის ტოლი.'
}

console.log(isEqual('1', 1));