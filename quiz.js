const questions = [
	{
		question: "Quel est le plus grand lac du monde en termes de volume d'eau ?",
		answer: "Le plus grand lac du monde en termes de volume d'eau est la mer Caspienne."
	},
	{
		question: "Qui a découvert la structure en double hélice de l'ADN ?",
		answer: "La structure en double hélice de l'ADN a été découverte par James Watson et Francis Crick."
	},
	{
		question: "Quel pays est le plus grand producteur de café au monde ?",
		answer: "Le Brésil est le plus grand producteur de café au monde."
	},
	
	{
		question: "Quel est le plus petit pays d'Afrique par sa superficie ?",
		answer: "Le plus petit pays d'Afrique par sa superficie est Seychelles."
	},
	{
		question: "Quel est le plus haut sommet d'Afrique ?",
		answer: "Le plus haut sommet d'Afrique est le Kilimandjaro en Tanzanie."
	},
	{
		question: "Quelle est la ville la plus peuplée de Chine ?",
		answer: "La ville la plus peuplée de Chine est Shanghai."
	},
	{
		question: "Quel est le plus grand océan du monde en termes de superficie ?",
		answer: "Le plus grand océan du monde en termes de superficie est l'océan Pacifique."
	},
	{
		question: "Quelle est la capitale de l'Islande ?",
		answer: "La capitale de l'Islande est Reykjavik."
	},
	
	{
		question: "Quel est le seul État américain qui commence par la lettre p ?",
		answer: "Le seul État américain qui commence par la lettre p est le Pennsylvania."
	},
	{
		question: "Dans quelle ville italienne se trouve le Colisée ?",
		answer: "Le Colisée est situé dans la ville de Rome en Italie."
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
