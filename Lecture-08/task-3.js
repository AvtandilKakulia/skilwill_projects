/*
3. დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს. ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი. წარმატების შემთხვევაში, გამოიძახოს resolve კოპირებული ობიექტით.
*/

const person = {
    name: 'James',
    address: {
        tbilisi: {
            district: {
                street: function () { console.log('hi') }
            }
        }
    },
    friends: [
        { closefriend: { name: 'Jack' } },
        { closefriend: { name: 'Nick' } }
    ]
}

async function deepCopy(obj) {
    if (obj == null) throw new Error('Provide an Object')
    if (typeof obj !== 'object') return obj
    if (Array.isArray(obj)) obj.map(e => deepCopy(e))

    const copy = {}

    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            copy[key] = obj[key]
        } else {
            copy[key] = await deepCopy(obj[key]);
        }
    }

    return copy
}

async function copyResult(object) {
    try {
        let result = await deepCopy(object)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

copyResult(person)



