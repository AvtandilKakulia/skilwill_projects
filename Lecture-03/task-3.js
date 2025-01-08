/*
3. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს. გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას. გამოიყენეთ (...) ოპერატორი.
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

const copyObj = (obj) => {
    const copiedObj = {
        ...obj,
        banks: obj.banks.map((bank) => ({...bank, address: {...bank.address}}))
    }

    return copiedObj
}


console.log(copyObj(user))
user.banks[1].address.city = 'kutaisi'
console.log(user)