const questions = [
    {
        question: "1. What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "3. What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
        answer: "Blue Whale"
    },
    {
        question: "4. What color does gold leaf appear if you hold it up to the light?",
        options: ["Gold", "Yellow", "Green", "ROYGBIV"],
        answer: "Green"
    },
    {
        question: "5. Which instrument is associated with Earl 'Bud' Powell?",
        options: ["Guitar", "Drum set", "Piano", "Saxophone"],
        answer: "Piano"
    },
    {
        question: "6. What is the most popular drink in the world that isn't alcohol?",
        options: ["Water", "Coffee", "CocaCola", "Fruit Wine"],
        answer: "Coffee"
    },
    {
        question: "7. Name 2 animals that sleeps with their eyes opened",
        options: ["Bear/Horse", "Porcupine/Jaguar", "Hen/Ostrich", "Fish/Snake"],
        answer: "Fish/Snake"
    },
    {
        question: "8. What animal is capable of sleeping for up to 3 years?",
        options: ["Cats", "Snails", "Polar Bears", "Blue Whale"],
        answer: "Snails"
    },
    {
        question: "9. Name the only part of the human body that is fully grown from birth",
        options: ["The Hairs", "The Tongue", "The Eyeball", "The Nose"],
        answer: "The Eyeball"
    },
    {
        question: "10. What does it mean to feel blue?",
        options: ["To be happy", "To be scared", "To be excited", "To be sad"],
        answer: "To be sad"
    },
    {
        question: "11. What is a female donkey called?",
        options: ["A Jennet", "A Silvia", "A Nanny", "A Nancy"],
        answer: "A Jennet"
    },
    {
        question: "12. What was the first movie to be rated PG-13?",
        options: ["Apocalypto", "Power Rangers", "Red Dawn", "Daredevil"],
        answer: "Red Dawn"
    },
    {
        question: "13. If you order “murgh” from the menu at an Indian restaurant, what meat will you get?",
        options: ["Beef", "Pork", "Chicken", "Mutton"],
        answer: "Chicken"
    },
    {
        question: "14. Among land animals, what species has the largest eyes?",
        options: ["Cats", "Hippopotamus", "Ostrich", "Turkey"],
        answer: "Ostrich"
    },
    {
        question: "15. So far, which continent has hosted the Olympics the most times?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        answer: "Europe"
    },
    {
        question: "16. In 1612, who became the first person to observe the planet Neptune?",
        options: ["Neil Armstrong", "Galileo", "Isaac Newton", "Michael Faraday"],
        answer: "Galileo"
    },
    {
        question: "17. What is the world’s most venomous fish?",
        options: ["Stonefish", "Jelly fish", "Puffer fish", "Titus"],
        answer: "   Stonefish"
    },
    {
        question: "18. Emetophobia is the fear of?",
        options: ["Death", "Vomit", "Phones", "Sickness"],
        answer: "Vomit"
    },
    {
        question: "19. What insect has the shortest life span?",
        options: ["Tse-Tse flies", "Mayflies", "Mosquitoes", "Housefly"],
        answer: "Mayfles"
    },
    {
        question: "20. If Teresa's daughter is my daughter's mother, who am i to Teresa?",
        options: ["Teresa's Father", "Teresa", "Teresa's son in-law", "Teresa's wife"],
        answer: "Teresa's son in-law"
    },
    {
        question: "21. What grows down when it grows up?",
        options: ["A Butterfly", "A Moth", "A Goose", "An Ant"],
        answer: "A Goose"
    },
    {
        question: "22. In what place does today come before yesterday?",
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
