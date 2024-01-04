const questions = [
  {
    question: 'Which designer is known as "The King of Cling"?',
    options: [
      "Coco Chanel",
      "Azzedine Alaïa",
      "Gianni Versace",
      "Christian Dior",
    ],
    correctAnswer: "Azzedine Alaïa",
  },
  {
    question: 'What does "Haute Couture" mean?',
    options: [
      "High Fashion",
      "Exclusive Tailoring",
      "Ready-to-Wear",
      "Fashion Show",
    ],
    correctAnswer: "Exclusive Tailoring",
  },
  {
    question:
      'Which fashion magazine is often referred to as the "Fashion Bible"?',
    options: ["Vogue", "Elle", "Harper's Bazaar", "Glamour"],
    correctAnswer: "Vogue",
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score-value");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option, index));
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption, selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedOption === correctAnswer) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }

  updateScore();
}

function updateScore() {
  scoreElement.textContent = score;
}

function showFinalResult() {
  questionElement.textContent = "";
  optionsContainer.innerHTML = "";
  resultElement.textContent = `Game Over! Your final score is: ${score}/${questions.length}`;
}

loadQuestion();
