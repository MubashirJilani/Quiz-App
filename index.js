const questions = [
  {
    question: "1. What is the sum of 12 + 91 ?",
    options: [101, 102, 103, 104],
    correctAnswer: 103
  },
  {
    question: "2. Who is the second Prime Minister of Pakistan?",
    options: ["Khawaja Nazimuddin", "Liaqat Ali Khan", "Mian Muhammad Ali", "Zulfiqar Ali Bhutto"],
    correctAnswer: "Khawaja Nazimuddin"
  },
  {
    question: "3. Which PAF Pilot shot down five enemy jets in less than a minute?",
    options: ["Yunus Hussain", "Cecil Chaudhry", "Sarfaraz Rafiqui", "MM Alam"],
    correctAnswer: "MM Alam"
  },
  {
    question: "4. First Pakistani captain who won the world cup?",
    options: ["Sarfaraz Ahmed", "Imran Khan", "Wasim Akram", "Younis Khan"],
    correctAnswer: "Imran Khan"
  },
  {
    question: "5. Who is the Father of Chemistry?",
    options: ["Charles Darwin", "Albert Einstein", "Jabir Bin Hayyan", "Isaac Newton"],
    correctAnswer: "Jabir Bin Hayyan"
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswer = null;

const scoreElement = document.getElementById("score");
const nextQuestionButton = document.getElementById("nextBtn");
const finishQuizButton = document.getElementById("finishQuiz");
const quizContainer = document.getElementById("quiz-container");
const restartQuizButton = document.getElementById("restartQuiz");
const resultContainer = document.getElementById("result-container");

function showQuestions() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.innerHTML = questions[currentQuestion].question;
  optionsElement.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.textContent = option;
    optionDiv.classList.add("option");
    optionDiv.addEventListener("click", saveAnswer);
    optionsElement.appendChild(optionDiv);
  });
}

function saveAnswer(event) {
  nextQuestionButton.disabled = false;
  userAnswer = event.target.textContent;

  document.querySelectorAll(".option").forEach(el => {
    el.classList.remove("active");
  });
  event.target.classList.add("active");
}

function incrementQuestion() {
  if (userAnswer == questions[currentQuestion].correctAnswer) {
    score += 10;
  }

  currentQuestion++;
  userAnswer = null;

  if (currentQuestion === questions.length - 1) {
    nextQuestionButton.style.display = "none";
    finishQuizButton.style.display = "block";
  }

  scoreElement.textContent = score;
  showQuestions();
  nextQuestionButton.disabled = true;
}

function finishQuiz() {
  if (userAnswer == questions[currentQuestion].correctAnswer) {
    score += 10;
  }

  scoreElement.textContent = score;
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  restartQuizButton.style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswer = null;
  scoreElement.textContent = score;

  quizContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  finishQuizButton.style.display = "none";
  nextQuestionButton.style.display = "block";
  nextQuestionButton.disabled = true;

  showQuestions();
}

showQuestions();

































// const questions = [
//     {
//       question: "Which language is mostly used for frontend web development?",
//       options: ["Python", "Java", "HTML", "C++"],
//       correctAnswer: "HTML"
//     },
//     {
//       question: "What does CSS stand for?",
//       options: [
//         "Computer Style Sheet",
//         "Creative Style Sheet",
//         "Cascading Style Sheets",
//         "Colorful Style Sheet"
//       ],
//       correctAnswer: "Cascading Style Sheets"
//     },
//     {
//       question: "Who is the founder of Microsoft?",
//       options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
//       correctAnswer: "Bill Gates"
//     },
//     {
//       question: "Which tag is used to link CSS in HTML?",
//       options: ["<css>", "<style>", "<link>", "<script>"],
//       correctAnswer: "<link>"
//     },
//     {
//       question: "What does DOM stand for in JavaScript?",
//       options: [
//         "Document Object Model",
//         "Data Object Management",
//         "Digital Output Mode",
//         "Developer Open Module"
//       ],
//       correctAnswer: "Document Object Model"
//     }
//   ];
  
//   let currentQuestion = 0;
//   let score = 0;
  
//   const startBtn = document.getElementById("start-btn");
//   const quizContainer = document.getElementById("quiz-container");
//   const startScreen = document.getElementById("start-screen");
//   const resultScreen = document.getElementById("result-screen");
//   const questionText = document.getElementById("question-text");
//   const optionsBox = document.getElementById("options");
//   const nextBtn = document.getElementById("next-btn");
//   const scoreText = document.getElementById("score-text");
  
//   startBtn.addEventListener("click", () => {
//     startScreen.classList.add("hide");
//     quizContainer.classList.remove("hide");
//     showQuestion();
//   });
  
//   nextBtn.addEventListener("click", () => {
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
//   });
  
//   function showQuestion() {
//     resetState();
//     const question = questions[currentQuestion];
//     questionText.textContent = question.question;
  
//     question.options.forEach((option) => {
//       const btn = document.createElement("button");
//       btn.textContent = option;
//       btn.classList.add("option-btn");
//       btn.addEventListener("click", () => selectAnswer(btn, option, question.correctAnswer));
//       optionsBox.appendChild(btn);
//     });
//   }
  
//   function resetState() {
//     nextBtn.style.display = "none";
//     optionsBox.innerHTML = "";
//   }
  
//   function selectAnswer(btn, selected, correct) {
//     const allBtns = document.querySelectorAll(".option-btn");
//     allBtns.forEach((b) => b.disabled = true);
  
//     if (selected === correct) {
//       btn.classList.add("correct");
//       score++;
//     } else {
//       btn.classList.add("wrong");
//       allBtns.forEach((b) => {
//         if (b.textContent === correct) {
//           b.classList.add("correct");
//         }
//       });
//     }
  
//     nextBtn.style.display = "block";
//   }
  
//   function showResult() {
//     quizContainer.classList.add("hide");
//     resultScreen.classList.remove("hide");
//     scoreText.textContent = `You scored ${score} out of ${questions.length}`;
//   }
