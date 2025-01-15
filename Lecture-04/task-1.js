/*
1. დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს. არ გამოიყენო string.replace() ფუნქცია.
*/

const strReplace = (string, valueToReplace, valueToReplaceWith) => {
    return string.split(valueToReplace).join(valueToReplaceWith)
}

const string = 'This is some text to make replace'
const valueToReplace = 'replace'
const valueToReplaceWith = 'fun!'

console.log(strReplace(string, valueToReplace, valueToReplaceWith))