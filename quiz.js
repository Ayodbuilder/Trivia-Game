const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
        answer: "Blue Whale"
    },
    {
        question: "What color does gold leaf appear if you hold it up to the light?",
        options: ["Gold", "Yellow", "Green", "ROYGBIV"],
        answer: "Green"
    },
    {
        question: "Which instrument is associated with Earl 'Bud' Powell?",
        options: ["Guitar", "Drum set", "Piano", "Saxophone"],
        answer: "Piano"
    },
    {
        question: "What is the most popular drink in the world that isn't alcohol?",
        options: ["Water", "Coffee", "CocaCola", "Fruit Wine"],
        answer: "Coffee"
    },
    {
        question: "Name 2 animals that sleeps with their eyes opened",
        options: ["Bear/Horse", "Porcupine/Jaguar", "Hen/Ostrich", "Fish/Snake"],
        answer: "Fish/Snake"
    },
    {
        question: "What animal is capable of sleeping for up to 3 years?",
        options: ["Cats", "Snails", "Polar Bears", "Blue Whale"],
        answer: "Snails"
    },
    {
        question: "Name the only part of the humsn body that is fully grown from birth",
        options: ["The Hairs", "The Tongue", "The Eyeball", "The Nose"],
        answer: "The Eyeball"
    },
    {
        question: "What does it mean to feel blue?",
        options: ["To be happy", "To be scared", "To be excited", "To be sad"],
        answer: "To be sad"
    },
    {
        question: "What is a female donkey called?",
        options: ["A Jennet", "A Silvia", "A Nanny", "A Nancy"],
        answer: "A Jennet"
    },
    {
        question: "What was the first movie to be rated PG-13?",
        options: ["Apocalypto", "Power Rangers", "Red Dawn", "Daredevil"],
        answer: "Red Dawn"
    },
    {
        question: "If you order “murgh” from the menu at an Indian restaurant, what meat will you get?",
        options: ["Beef", "Pork", "Chicken", "Mutton"],
        answer: "Chicken"
    },
    {
        question: "Among land animals, what species has the largest eyes?",
        options: ["Cats", "Hippopotamus", "Ostrich", "Turkey"],
        answer: "Ostrich"
    },
    {
        question: "So far, which continent has hosted the Olympics the most times?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        answer: "Europe"
    },
    {
        question: " In 1612, who became the first person to observe the planet Neptune?",
        options: ["Neil Armstrong", "Galileo", "Isaac Newton", "Michael Faraday"],
        answer: "Galileo"
    },
    {
        question: "What is the world’s most venomous fish?",
        options: ["Stonefish", "Jelly fish", "Puffer fish", "Titus"],
        answer: "   Stonefish"
    },
    {
        question: "Emetophobia is the fear of?",
        options: ["Death", "Vomit", "Phones", "Sickness"],
        answer: "Vomit"
    },
    {
        question: "What insect has the shortest life span?",
        options: ["Tse-Tse flies", "Mayflies", "Mosquitoes", "Housefly"],
        answer: "Mayfles"
    },
    {
        question: "If Teresa's daughter is my daughter's mother, who am i to Teresa?",
        options: ["Teresa's Father", "Teresa", "Teresa's son in-law", "Teresa's wife"],
        answer: "Teresa's son in-law"
    },
    {
        question: "What grows down when it grows up?",
        options: ["A Butterfly", "A Moth", "A Goose", "An Ant"],
        answer: "A Goose"
    },
    {
        question: "In what place does today come before yesterday?",
        options: ["Paris", "Bible", "Dictionary", "Space"],
        answer: "Dictionary"
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = '';

    current.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("form-check");
        optionElement.innerHTML = `
            <input class="form-check-input" type="radio" name="answer" id="option${index}" value="${option}">
            <label class="form-check-label" for="option${index}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const selectedAnswer = selectedOption.value;
    if (selectedAnswer === questions[currentQuestion].answer) {
        score+=5;
    }

    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Congratulations! You have successfully completed your Quiz!";
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    scoreElement.textContent = score;
}

loadQuestion();

nextButton.addEventListener("click", checkAnswer);