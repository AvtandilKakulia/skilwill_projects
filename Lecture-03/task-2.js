/*
2. დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined.
*/

const user = {
    name: 'Joe',
    lastName: 'Black',
    banks: [
        { name: 'BOG', address: { city: 'Tbilisi' } },
        { name: 'TBC', address: { city: 'Batumi' } },
        { name: 'PASHA', address: { city: 'Rustavi' } }
    ]
}

const findCity = (object, position) => {
    return object?.banks?.[position]?.address?.city
}

console.log(findCity(user, 0));


