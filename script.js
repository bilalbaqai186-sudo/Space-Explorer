/* =====================================
   PLANET DATA
===================================== */
const planets = {
    Mercury: {
        description: "Mercury is the smallest planet and the closest planet to the Sun.",
        distance: "57.9 million km",
        diameter: "4,879 km",
        day: "58.6 Earth days",
        year: "88 Earth days",
        temperature: "About -180°C to 430°C"
    },
    Venus: {
        description: "Venus is a rocky planet with a very thick atmosphere and extreme heat.",
        distance: "108.2 million km",
        diameter: "12,104 km",
        day: "243 Earth days",
        year: "225 Earth days",
        temperature: "About 465°C"
    },
    Earth: {
        description: "Earth is our home planet and the only planet currently known to support life.",
        distance: "149.6 million km",
        diameter: "12,742 km",
        day: "24 hours",
        year: "365.25 days",
        temperature: "Average about 15°C"
    },
    Mars: {
        description: "Mars is known as the Red Planet because of iron minerals in its soil.",
        distance: "227.9 million km",
        diameter: "6,779 km",
        day: "24.6 hours",
        year: "687 Earth days",
        temperature: "Average about -63°C"
    },
    Jupiter: {
        description: "Jupiter is the largest planet in our solar system and is a gas giant.",
        distance: "778.5 million km",
        diameter: "139,820 km",
        day: "About 10 hours",
        year: "About 11.86 Earth years",
        temperature: "Cloud tops about -110°C"
    },
    Saturn: {
        description: "Saturn is a gas giant famous for its spectacular system of rings.",
        distance: "1.43 billion km",
        diameter: "116,460 km",
        day: "About 10.7 hours",
        year: "About 29.5 Earth years",
        temperature: "Cloud tops about -140°C"
    },
    Uranus: {
        description: "Uranus is an ice giant with a blue-green appearance caused by methane in its atmosphere.",
        distance: "2.87 billion km",
        diameter: "50,724 km",
        day: "About 17.2 hours",
        year: "About 84 Earth years",
        temperature: "About -195°C"
    },
    Neptune: {
        description: "Neptune is a distant ice giant known for its powerful winds.",
        distance: "4.50 billion km",
        diameter: "49,244 km",
        day: "About 16 hours",
        year: "About 165 Earth years",
        temperature: "About -200°C"
    },
    Pluto: {
        description: "Pluto is a dwarf planet. It is no longer classified as one of the eight major planets in our solar system.",
        distance: "About 5.9 billion km",
        diameter: "About 2,377 km",
        day: "About 153 hours",
        year: "About 248 Earth years",
        temperature: "About -230°C"
    }
};

/* =====================================
   PLANET MODAL
===================================== */
const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const planetInfo = document.getElementById("planetInfo");
const closeModalButton = document.getElementById("closeModalButton");

function showPlanet(name) {
    const planet = planets[name];
    if (!planet) return;

    modalTitle.textContent = name === "Pluto"
        ? "❄️ Pluto — Dwarf Planet"
        : "🪐 " + name;

    modalDescription.textContent = planet.description;

    planetInfo.innerHTML =
        "<div class='info-box'><strong>Distance from Sun</strong>" + planet.distance + "</div>" +
        "<div class='info-box'><strong>Diameter</strong>" + planet.diameter + "</div>" +
        "<div class='info-box'><strong>Length of Day</strong>" + planet.day + "</div>" +
        "<div class='info-box'><strong>Length of Year</strong>" + planet.year + "</div>" +
        "<div class='info-box'><strong>Temperature</strong>" + planet.temperature + "</div>";

    modal.classList.add("show");
    closeModalButton.focus();
}

function closeModal() {
    modal.classList.remove("show");
}

closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeModal();
});

// Keyboard support for planet cards
document.querySelectorAll(".planet-card").forEach(function (card) {
    card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            card.click();
        }
    });
});

/* =====================================
   PLANET SEARCH
===================================== */
const planetSearch = document.getElementById("planetSearch");
const planetCards = document.querySelectorAll(".planet-card");

planetSearch.addEventListener("input", function () {
    const searchText = planetSearch.value.toLowerCase().trim();

    planetCards.forEach(function (card) {
        const planetName = card.dataset.name.toLowerCase();
        card.style.display = planetName.includes(searchText) ? "" : "none";
    });
});

/* =====================================
   SPACE FACTS
===================================== */
const facts = [
    "A day on Venus is longer than a year on Venus.",
    "Jupiter is the largest planet in our solar system.",
    "Mars has two small moons named Phobos and Deimos.",
    "Saturn's rings are made mostly of ice and rocky particles.",
    "Neptune has some of the fastest winds in the solar system.",
    "Earth is the only planet currently known to support life.",
    "Mercury is the smallest planet in our solar system.",
    "Uranus rotates on its side compared with most other planets.",
    "The Moon is Earth's natural satellite.",
    "The Sun is the star at the center of our solar system.",
    "Pluto is classified as a dwarf planet.",
    "One million Earths could fit inside the Sun.",
    "There are more stars in the universe than grains of sand on all the beaches on Earth.",
    "A year on Neptune lasts about 165 Earth years.",
    "Jupiter has more than 90 known moons."
];

const factButton = document.getElementById("factButton");
const factText = document.getElementById("factText");

factButton.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * facts.length);
    factText.textContent = "🌟 " + facts[randomNumber];
});

/* =====================================
   QUIZ DATA
===================================== */
const quizRounds = [
    // Round 1
    [
        { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Neptune"], answer: "Mars" },
        { question: "Which is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
        { question: "Which planet is famous for its rings?", options: ["Mars", "Saturn", "Mercury", "Venus"], answer: "Saturn" },
        { question: "Which planet is farthest from the Sun?", options: ["Uranus", "Jupiter", "Neptune", "Saturn"], answer: "Neptune" }
    ],
    // Round 2
    [
        { question: "What is Earth's natural satellite?", options: ["The Moon", "Mars", "The Sun", "Venus"], answer: "The Moon" },
        { question: "Which planet is the hottest in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
        { question: "How many planets are officially recognized in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
        { question: "What is the name of our galaxy?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: "Milky Way" },
        { question: "Which planet rotates almost completely on its side?", options: ["Mars", "Earth", "Uranus", "Neptune"], answer: "Uranus" }
    ],
    // Round 3
    [
        { question: "Which planet has the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
        { question: "Which planet has the shortest year?", options: ["Mercury", "Earth", "Mars", "Venus"], answer: "Mercury" },
        { question: "What is the Sun?", options: ["A planet", "A moon", "A star", "An asteroid"], answer: "A star" },
        { question: "What is Pluto classified as?", options: ["A planet", "A star", "A dwarf planet", "An asteroid"], answer: "A dwarf planet" },
        { question: "Which planet do humans call home?", options: ["Venus", "Earth", "Mars", "Jupiter"], answer: "Earth" }
    ]
];

/* =====================================
   QUIZ VARIABLES & ELEMENTS
===================================== */
let currentRound = 0;
let totalScore = 0;
let roundSubmitted = false;

const roundTitle = document.getElementById("roundTitle");
const roundSubtitle = document.getElementById("roundSubtitle");
const roundScore = document.getElementById("roundScore");
const questionsContainer = document.getElementById("questionsContainer");
const quizMessage = document.getElementById("quizMessage");
const submitRoundButton = document.getElementById("submitRoundButton");
const nextRoundButton = document.getElementById("nextRoundButton");
const restartQuizButton = document.getElementById("restartQuizButton");
const roundComplete = document.getElementById("roundComplete");
const roundCompleteTitle = document.getElementById("roundCompleteTitle");
const roundCompleteText = document.getElementById("roundCompleteText");
const finalResult = document.getElementById("finalResult");
const finalScoreText = document.getElementById("finalScoreText");
const progressDots = document.querySelectorAll(".progress-dot");

/* =====================================
   LOAD ROUND
===================================== */
function updateProgressDots() {
    progressDots.forEach(function (dot, index) {
        dot.classList.remove("active", "completed");
        if (index < currentRound) {
            dot.classList.add("completed");
        } else if (index === currentRound) {
            dot.classList.add("active");
        }
    });
}

function loadRound() {
    const questions = quizRounds[currentRound];
    roundSubmitted = false;

    roundTitle.textContent = "🚀 Round " + (currentRound + 1) + " of 3";

    if (currentRound === 0) {
        roundSubtitle.textContent = "Your first space mission begins now!";
    } else if (currentRound === 1) {
        roundSubtitle.textContent = "🌌 Round 2 unlocked! New questions await!";
    } else {
        roundSubtitle.textContent = "🪐 Final round! Can you become a Space Expert?";
    }

    roundScore.textContent = "Answer all 5 questions.";
    quizMessage.textContent = "";
    roundComplete.style.display = "none";
    submitRoundButton.style.display = "inline-block";
    nextRoundButton.style.display = "none";
    restartQuizButton.style.display = "none";
    finalResult.style.display = "none";

    updateProgressDots();
    questionsContainer.innerHTML = "";

    questions.forEach(function (item, index) {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = (index + 1) + ". " + item.question;
        questionDiv.appendChild(questionTitle);

        item.options.forEach(function (option) {
            const label = document.createElement("label");
            label.className = "option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "question-" + currentRound + "-" + index;
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(" " + option));
            questionDiv.appendChild(label);
        });

        questionsContainer.appendChild(questionDiv);
    });
}

/* =====================================
   CHECK ROUND (with visual feedback)
===================================== */
submitRoundButton.addEventListener("click", function () {
    if (roundSubmitted) return;

    const questions = quizRounds[currentRound];
    let roundScoreValue = 0;
    let unanswered = false;

    questions.forEach(function (item, index) {
        const selected = document.querySelector(
            'input[name="question-' + currentRound + '-' + index + '"]:checked'
        );

        if (!selected) {
            unanswered = true;
        } else if (selected.value === item.answer) {
            roundScoreValue++;
        }
    });

    if (unanswered) {
        quizMessage.textContent = "⚠️ Please answer all 5 questions first.";
        return;
    }

    // Show correct / wrong feedback
    questions.forEach(function (item, index) {
        const options = document.querySelectorAll(
            'input[name="question-' + currentRound + '-' + index + '"]'
        );

        options.forEach(function (input) {
            const label = input.parentElement;
            label.classList.add("disabled");
            input.disabled = true;

            if (input.value === item.answer) {
                label.classList.add("correct");
            } else if (input.checked) {
                label.classList.add("wrong");
            }
        });
    });

    totalScore += roundScoreValue;
    roundSubmitted = true;

    roundScore.textContent = "You scored " + roundScoreValue + " out of 5 in this round.";

    if (roundScoreValue === 5) {
        quizMessage.textContent = "🏆 Perfect score! Amazing!";
    } else if (roundScoreValue >= 3) {
        quizMessage.textContent = "🚀 Great job! Keep exploring!";
    } else {
        quizMessage.textContent = "🌟 Good effort! Keep learning!";
    }

    roundComplete.style.display = "block";
    roundCompleteTitle.textContent = "🎉 Round " + (currentRound + 1) + " Complete!";
    roundCompleteText.textContent = "You earned " + roundScoreValue + " / 5 points.";

    submitRoundButton.style.display = "none";

    if (currentRound < 2) {
        nextRoundButton.style.display = "inline-block";
    } else {
        // Mark last dot completed
        progressDots[2].classList.remove("active");
        progressDots[2].classList.add("completed");
        showFinalResult();
    }
});

/* =====================================
   NEXT ROUND
===================================== */
nextRoundButton.addEventListener("click", function () {
    if (!roundSubmitted) return;
    currentRound++;
    loadRound();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

/* =====================================
   FINAL RESULT
===================================== */
function showFinalResult() {
    finalResult.style.display = "block";

    const percentage = Math.round((totalScore / 15) * 100);
    let message;

    if (totalScore === 15) {
        message = "🌟 Incredible! You are a true Space Expert!";
    } else if (totalScore >= 12) {
        message = "🚀 Excellent work! You know a lot about space!";
    } else if (totalScore >= 9) {
        message = "🪐 Great job! Keep exploring the universe!";
    } else {
        message = "🌌 Good effort! Keep learning and try again!";
    }

    finalScoreText.innerHTML =
        "Your final score is <strong>" + totalScore + " / 15</strong> (" + percentage + "%)." +
        "<br><br>" + message;

    restartQuizButton.style.display = "inline-block";
}

/* =====================================
   RESTART QUIZ
===================================== */
restartQuizButton.addEventListener("click", function () {
    currentRound = 0;
    totalScore = 0;
    roundSubmitted = false;
    loadRound();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

/* =====================================
   START QUIZ
===================================== */
loadRound();
