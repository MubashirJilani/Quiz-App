const questions = [{

    question: "1. What is your name",
    options: ["Rohan", "Noman", "Mubashir", "Anus"],
    correctAnswer: "Rohan"
},
{

    question: "2. Which number comes next in the series?1, 4, 9, 16, 25, ?",
    options: ["36", "30", "28", "32"],
    correctAnswer: "36"
},
{

    question: "3. What comes next in the sequence?A, C, E, G, ?",
    options: ["H", "I", "J", "L"],
    correctAnswer: "I"
},
{

    question: "4. What is the missing number?5, 10, 20, 40, ?",
    options: ["45", "60", "80", "100"],
    correctAnswer: "80"
},
{
    question: "5. Which one is the smallest in value?",
    options: ["1/2", "0.3", "0.25", "3/4"],
    correctAnswer: "0.25"
}
]
let currentQuestion = 0
let score = 0


function showQuestions() {
let questionElement = document.getElementById("question");
questionElement.innerHTML = questions[currentQuestion].question

let optionsElement = document.getElementById("options")


optionsElement.innerHTML = ''
 

questions[currentQuestion].options

for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    optionsElement.innerHTML += `<div id="option" onClick="saveAnswer(event)" class="option">${questions[currentQuestion].options[i]}</div>`
    // optionsElement.innerHTML += `<div onClick="saveAnswer(event)" class="option">${questions[currentQuestion].options[i]}</div>`
}
}

showQuestions()
let scoreElement = document.getElementById("score")
let userAnswer = null
let nextQuestionButton = document.getElementById("nextBtn")
let finishQuizButton = document.getElementById("finishQuiz")
let quizContainer = document.getElementById("quiz-container")
let restartQuizButton = document.getElementById("restartQuiz")
let resultContainer = document.getElementById("result-container")

function saveAnswer(event) {
console.log(event.target)

nextQuestionButton.disabled = false
event.target.classList.add("active")
event.target.classList.remove("option")

let options = document.querySelectorAll(".option");
options.forEach((element) => {
    if (event.target !== element) {
        element.classList.remove("active")
    }
})



console.log(options)


userAnswer = event.target.innerHTML
}

function incrementQuestion() {
let nextQuestionButton = document.getElementById("nextBtn")

console.log(userAnswer)
if (userAnswer == questions[currentQuestion].correctAnswer) {
    score = score + 10
}
currentQuestion++
if (currentQuestion === questions.length - 1) {
    nextQuestionButton.disabled = true
    nextQuestionButton.style.display = "none"
    finishQuizButton.style.display = "block"
}
scoreElement.textContent = score
showQuestions()
nextQuestionButton.disabled = true
}


function finishQuiz() {
if (userAnswer == questions[currentQuestion].correctAnswer) {
    score = score + 10
}
scoreElement.textContent = score
quizContainer.style.display = 'none'
restartQuizButton.style.display = "block"
resultContainer.style.display = "block"
}

function restartQuiz() {
quizContainer.style.display = 'block'
currentQuestion = 0
showQuestions()
score = 0
scoreElement.textContent = score
nextQuestionButton.style.display = "block"
nextQuestionButton.disabled = true
restartQuizButton.style.display = "none"
finishQuizButton.style.display = "none"

}