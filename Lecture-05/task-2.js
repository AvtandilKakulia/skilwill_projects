/*
2. შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში:
    <div id="card">
        <h2>Gandalf</h2>
        <a href=”#”>Go to profile</a>
    </div>
*/

const body = document.body
const div = document.createElement('div')
const h2 = document.createElement('h2')
const a = document.createElement('a')

div.setAttribute('id', 'card')
h2.innerText = 'Gandalf'
a.setAttribute('href', '#')

div.append(h2, a)
body.append(div)

