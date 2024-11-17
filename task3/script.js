// Quiz Logic
const questions = [
  { question: "Which country is home to the Eiffel Tower?", options: ["France", "Italy", "Germany", "Spain"], answer: 0 },
  { question: "Where can you find the Great Wall?", options: ["China", "India", "Japan", "Korea"], answer: 0 },
  { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: 1 },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
  { question: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], answer: 1 },
  { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Ozone"], answer: 0 },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
  { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Ganges"], answer: 1 },
  { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: 0 }
];

let currentQuestionIndex = 0;
let selectedOptionIndex = null;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const responseMessage = document.getElementById("response-message");

// Load initial question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.disabled = false;
    button.className = 'option'; // Reset classes
  });
  selectedOptionIndex = null;
  nextButton.disabled = true;
  responseMessage.textContent = "";
  responseMessage.style.display = "none";
}

// Handle answer selection
function selectAnswer(index) {
  selectedOptionIndex = index;
  const isCorrect = index === questions[currentQuestionIndex].answer;

  optionButtons.forEach((button, i) => {
    button.disabled = true; // Disable all buttons after selection
    if (i === index) {
      button.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
  });

  // Display animated response message
  responseMessage.textContent = isCorrect ? "Correct!" : "Wrong Answer!";
  responseMessage.className = isCorrect ? "correct" : "incorrect";
  responseMessage.style.display = "block";
  nextButton.disabled = false;
}

// Load the next question or end the quiz
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz Completed! Thanks for playing.";
    document.querySelector(".options").style.display = "none";
    nextButton.style.display = "none";
    responseMessage.textContent = "You've completed the quiz!";
    responseMessage.className = "correct";
  }
}

// Initialize the first question
loadQuestion();


// Load initial questions
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.disabled = false;
    button.style.background = "#1e90ff";
  });
  selectedOptionIndex = null;
  nextButton.disabled = true;
  responseMessage.textContent = "";
}

// Handle answer selection
function selectAnswer(index) {
  selectedOptionIndex = index;
  const isCorrect = index === questions[currentQuestionIndex].answer;

  optionButtons.forEach((button, i) => {
    button.style.background = i === index ? (isCorrect ? "#3cb371" : "#ff6347") : "#1e90ff"; // Green for correct, Red for incorrect
    button.disabled = true; // Disable all buttons after selection
  });

  responseMessage.textContent = isCorrect ? "Correct!" : "Wrong Answer!";
  responseMessage.className = isCorrect ? "correct" : "incorrect";
  nextButton.disabled = false;
}

// Load the next question or end the quiz
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz Completed! Thanks for playing.";
    document.querySelector(".options").style.display = "none";
    nextButton.style.display = "none";
    responseMessage.textContent = "You've completed the quiz!";
    responseMessage.className = "correct";
  }
}

// Initialize the first question
loadQuestion();


// Carousel Logic
const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  images[0].parentElement.style.transform = `translateX(-${currentIndex * width}px)`;
}

document.getElementById("next").addEventListener("click", function() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

document.getElementById("prev").addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Weather Logic
async function getWeather() {
  const country = document.getElementById("country-input").value.trim();
  const weatherReport = document.getElementById("weather-report");

  const weatherData = {
    France: "15°C",
    China: "22°C",
    USA: "10°C",
    India: "28°C"
  };

  const weather = weatherData[country] || "Weather data not found.";
  weatherReport.textContent = `Weather in ${country}: ${weather}`;
}

// Joke Logic
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything! (Just like your travel plans!)",
  "I tried to start a travel blog, but I couldn't find my destination... It was a real journey of self-discovery!",
  "Why did the tourist go to the airport? To catch some flight jokes!",
  "I went on a world tour and all I got was this lousy T-shirt... and some bad souvenirs!",
  "Why do travelers always bring a pencil on trips? Because they want to draw attention!"
];

function generateJoke() {
  const jokeElement = document.getElementById("joke-display");
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.textContent = jokes[randomIndex];
}

loadQuestion();
