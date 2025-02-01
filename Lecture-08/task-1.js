/*
1. დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად: ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5).
*/

// function expo(number, power) {
//     if (power === 0) return 1
//     if (power === 1) return number

//     let result = 1
//     let absNumber = Math.abs(power)

//     for (let index = 0; index < absNumber; index++) {
//         result *= number
//     }

//     if (power < 0) {
//         result = 1 / result
//     }

//     return result
// }

function expo(number, power, cb) {
    if (power === 0) return 1
    if (power === 1) return number

    if (power < 0) {
        let result = expo(number, -power, cb)
        return 1 / result
    }

    let result = expo(number, power - 1, cb)

    return cb(result, number)
}


const a = (result, number) => result *= number
console.log(expo(5, 3, a));

// power = 3. პირველი საფეხური რომელზეც ფუნქცია გამოიძახებს რეკურსიას expo(5, 3 - 1, (result, number) => result *= number)
// power = 2. მეორე საფეხური რომელზეც ფუნქცია გამოიძახებს რეკურსიას expo(5, 2 - 1, (result, number) => result *= number)
// power = 1. მესამე საფეხურზე რადგან პირობა if (power === 1) return number დაკმაყოფილდა დაბრუნდება number. number = 5 რომელიც ასევე არის ამ ფუნქციის result-ი.
// ამის შემდეგ იწყება უკუსვლა მესამე საფეხურიდან პირველისკენ
// power = 1 არ იძახებს ქოლბექს და აბრუნებს მხოლოდ 5-ს როგორც result-ს
// power = 2 გამოიძახებს expo(5, 2, cb) სადაც cb-ს პარამეტრები გადაეცემა return cb(result, number)-ის მეშვეობით (power 1-მიღებული result 5 და number 5). შესაბამისად შესრულდება a-ს უკან მდგარი ქოლბექი და result გახდება 25.
// power 3. გამოიძახებს expo(5, 3, cb) სადაც cb-ს პარამეტრები გადაეცემა return cb(result, number)-ის მეშვეობით (power 2-მიღებული result 25 და number 5). შესაბამისად შესრულდება a-ს უკან მდგარი ქოლბექი და result გახდება 125, რომელიც დაბრუნდება საბოლოო შედეგად.






