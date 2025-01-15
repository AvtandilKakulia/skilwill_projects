/*
3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით. მაგალითად, ჩავთვალოთ, რომ გვაქვს [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}]. ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]. შეგიძლია გამოიყენო sort() ფუნქცია.
*/

const arr = [
    { name: 'Lasha', age: 30 },
    { name: 'Temo', age: 10 },
    { name: 'Saba', age: 20 }
]

const a = (arr) => {
    return arr.sort((a, b) => a.age - b.age)
}

console.log(a(arr))