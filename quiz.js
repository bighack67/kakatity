const questions = [
	{
		question: "Quel est le langage de programmation le plus populaire ?",
		answer: "JavaScript",
		difficulty: "Facile"
	},
	{
		question: "Quel est le langage de balisage utilisé pour structurer le contenu d'un site web ?",
		answer: "HTML",
		difficulty: "Moyen"
	},
	{
		question: "Quel est le nom du système de gestion de base de données le plus populaire ?",
		answer: "MySQL",
		difficulty: "Difficile"
	}
];

let currentQuestion = 0;
let isAnsweredCorrectly = false;

const questionEl = document.getElementById("question");
const answerInputEl = document.getElementById("answer-input");
const submitButtonEl = document.getElementById("submit-button");
const resultEl = document.getElementById("result");
const nextButtonEl = document.getElementById("next-button");
const resultContainerEl = document.getElementById("result-container");

function showQuestion() {
	questionEl.textContent = questions[currentQuestion].question;
	answerInputEl.value = "";
	resultContainerEl.style.display = "none";
	isAnsweredCorrectly = false; // Reset isAnsweredCorrectly for the new question
}

function showResult(isCorrect) {
	if (isCorrect) {
		resultEl.textContent = "Correct!";
		resultEl.style.color = "#4CAF50";
		nextButtonEl.style.display = "block";
        isAnsweredCorrectly = true; // affiche le bouton si la réponse est correcte
	} else {
		resultEl.textContent = "Incorrect!";
		resultEl.style.color = "#F44336";
		nextButtonEl.style.display = "none"; // masque le bouton si la réponse est incorrecte
	}
	resultContainerEl.style.display = "block";
}


function handleAnswerSubmit() {
	const answer = answerInputEl.value.trim().toLowerCase();
	const correctAnswer = questions[currentQuestion].answer.toLowerCase();
	if (answer === correctAnswer) {
		showResult(true);
	} else {
		showResult(false);
	}
}

function handleNextQuestion() {
	if (!isAnsweredCorrectly) { // Check if the current question has been answered correctly before moving to the next question
		return;
	}
	currentQuestion++;
	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		alert("Vous avez terminé le quiz !");
	}
}

showQuestion();

submitButtonEl.addEventListener("click", handleAnswerSubmit);
nextButtonEl.addEventListener("click", handleNextQuestion);
