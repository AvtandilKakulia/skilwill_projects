/*
3. შექმენი quiz თამაში: დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით, სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი, არასწორი პასუხის შემთხვევაში გააწითლე. გამოიტანე ეკრანზე ქულების რაოდენობა: სწორი პასუხის შემთხვევაში დაამატე 1 ქულა, არასწორის შემთხვევაში ქულები უცვლელი რჩება.
*/

const body = document.body
const questions = [
    {
        question: 'What is the capital of France?',
        answers: {
            'Berlin': false,
            'Paris': true,
            'Rome': false
        }
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: {
            'Earth': false,
            'Jupiter': false,
            'Mars': true
        }
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: {
            'Pacific Ocean': true,
            'Atlantic Ocean': false,
            'Indian Ocean': false
        }
    }
]

const createQuestions = (arr) => {
    let questionCounter = 0

    body.innerHTML = `<h3>COLORFUL QUIZ</h3>`

    arr.forEach((obj) => {
        let answers = ''

        for (const key in obj.answers) {
            answers += `<span class="answer">${key}</span>`
        }

        body.innerHTML +=
            `
            <div class="wrapper">
                <div class="outerBox" question="${++questionCounter}">
                    <p>Question ${questionCounter}: ${obj.question}</p>
                    <div class="answers">
                        ${answers}
                    </div>
                </div>
            </div>
            `
    })

    let userScore = 0
    let userScoreElement = document.createElement('h3')
    userScoreElement.classList.add('userScore')
    userScoreElement.innerText = `Score: ${userScore}`
    body.appendChild(userScoreElement)

    const answerSpans = document.querySelectorAll('.answer')

    answerSpans.forEach((span) => {
        span.addEventListener('click', () => {
            let questionNumber = span.closest('.outerBox').getAttribute('question')
            let questionAnswers = arr[questionNumber - 1].answers
            let spanText = span.textContent

            if (questionAnswers[spanText]) {
                span.style.backgroundColor = 'green'
                span.style.color = 'white'
                span.closest('.outerBox').style.pointerEvents = 'none'
                userScore++
            } else {
                span.style.backgroundColor = 'red'
                span.style.color = 'white'
                span.closest('.outerBox').style.pointerEvents = 'none'
            }

            userScoreElement.innerText = `Score: ${userScore}`
        })
    })

}

createQuestions(questions)





