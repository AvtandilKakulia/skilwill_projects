/*
1. შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id. <div> - ში ჩაწერე პატარა random ტექსტი. ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი.
*/

const body = document.body
const div = document.createElement('div')
const btn = document.createElement('button')

div.setAttribute('id','test')
div.innerText = 'This is some random text. '
btn.innerHTML = 'Click'

div.appendChild(btn)
body.appendChild(div)

btn.addEventListener('click', () =>{
    div.style.display = 'none'
})