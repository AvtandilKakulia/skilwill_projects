/*
4. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), b (მეორე რიცხვი) და operation (+, -, *, /) და დააბრუნებს ახალ მნიშვნელობას რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით. თუ a და b არ არიან რიცხვები, ან თუ operation ცვლადში არის უცნობი, ოპერაცია დააბრუნე - false.
*/

function mathOps(a, b, op) {
    if ([a, b, op].includes(undefined)) return 'შემოიტანე ორი პარამეტრი და მათემატიკური ოპერაცია.'
    if (typeof a !== 'number' || typeof b !== 'number') return 'a და b პარამეტრები უნდა იყოს რიცხვითი.'
    if (op === '/' && b === 0) return '0-ზე გაყოფა არ შეიძლება.'

    const operations = {
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }

    return operations[op] ? operations[op](a, b) : 'არასწორი მათემატიკური ოპერაცია'
}

console.log(mathOps(1, 7, '*'));