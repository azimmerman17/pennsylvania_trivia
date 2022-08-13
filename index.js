let userName = window.prompt('Please enter your name:')
window.alert('Please answer all questions with uppercase characters')

let userScore = 0
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if (userAnswer == question.correctAnswer) {
        userScore = userScore +10
        window.alert('Correct\nScore: ' + userScore)
        
    }
    else {
        window.alert('Incorrect\nCorrect Answer: ' + question.correctAnswer+'\nScore: ' + userScore)
    }
}

window.alert('Thank you for playing, '+ userName + '.\nYour score is ' + userScore)