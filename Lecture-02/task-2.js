/*
2. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს.
*/

const person = {
    name: 'Avtandil',
    lastName: 'Kakulia',
    age: 32,
    height: 186,
    city: 'Tbilisi'
}

function objCopy(obj){
    let copyedObj = {...obj}
    return copyedObj
}

console.log(objCopy(person));
