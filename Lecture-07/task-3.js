/*
2. დავუშვათ არსებობს სათამაშოების ქარხანა რომელიც ამზადებს სათამაშოს და გარკვეული შანსია რომ ეს სათამაშო იყოს დეფექტური. თუ დეფექტურია მაშინ ვაბრუნებთ ქარხანაში, თუ ვარგისია გაგვაქვს გასაყიდად. ანუ ველოდებით დამზადების რეზულტატს და მერე ამის შემდეგ ვასრულებთ მომდევნო ოპერაციას. გამოიყენეთ პირველ დავალებაში დაწერილი ფუნქცია მიმდინარე დავალების გასავრცობად:

 1. სათამაშოს დამზადებას სჭირდება 3 წამი. დროის მითითება შესაძლებელი უნდა იყოს დინამიურად.
 2. დავამატოთ ახალი ნაბიჯი რომელსაც დავარქმევთ deliverToys, რომლის დაყოვნებაც 2 წამია. (გადაეცემა დინამიურად)
 3. სათამაშოს გაყიდვას სჭირდება 1 წამი. (დინამიურად)

 ყოველი მომდევნო ნაბიჯი უნდა ელოდებოდეს წინა ნაბიჯის რეზულტატს და შესაბამისად წყვეტდეს მოხდება თუ არა მისი შესრულება. გამოიყენეთ then/catch და async/await სინტაქსები.(2 ვარიანტი).
 */

function makeToys(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve('Toy created successfully.')
            } else {
                reject('Toy is defected.')
            }
        }, delay)
    })
}

function deliveryService(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Delivery Completed.')
            } else {
                reject('Toy was not delivered.')
            }
        }, delay)
    })
}

function sellToys(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                resolve('Toy has been sold.')
            } else {
                reject('Toy was not sold.')
            }
        }, delay)
    })
}

async function toyCyrcle() {
    try {
        const makeStatus = await makeToys(3000)
        console.log(makeStatus)

        const deliveryStatus = await deliveryService(2000)
        console.log(deliveryStatus)

        const sellStatus = await sellToys(1000)
        console.log(sellStatus)
    } catch (error) {
        console.log(error)
    }
}

toyCyrcle()