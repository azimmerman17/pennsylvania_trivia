let userName = window.prompt('Please enter your name:')
window.alert('Please answer all questions with uppercase charactors')

let userScore = 0
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer) {
        window.alert('Correct')
        userScore = userScore +10
    }
    else {
        window.alert('Incorrect\n' + question.correctAnswer)
    }
}

window.alert('Thank you for playing, '+ userName + '.\nYour score is ' + userScore)