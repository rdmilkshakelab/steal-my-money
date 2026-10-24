const puzzles = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is 9 - 4?", options: ["3", "4", "5", "6"], answer: "5" },
  { question: "What is 7 × 3?", options: ["18", "20", "21", "24"], answer: "21" },
  { question: "What is 15 ÷ 3?", options: ["3", "4", "5", "6"], answer: "5" },
  { question: "Which number is even?", options: ["9", "11", "14", "15"], answer: "14" },
  { question: "What comes next: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: "10" },
  { question: "What is 5 + 8?", options: ["11", "12", "13", "14"], answer: "13" },
  { question: "What is 16 - 7?", options: ["8", "9", "10", "11"], answer: "9" },
  { question: "What is 6 × 7?", options: ["36", "40", "42", "48"], answer: "42" },
  { question: "What is 30 ÷ 5?", options: ["4", "5", "6", "7"], answer: "6" },
  { question: "Which number is a prime?", options: ["21", "27", "29", "33"], answer: "29" },
  { question: "Which is the largest?", options: ["19", "91", "109", "190"], answer: "190" },
  { question: "What is 12 + 13?", options: ["23", "24", "25", "26"], answer: "25" },
  { question: "What is 20 - 9?", options: ["10", "11", "12", "13"], answer: "11" },
  { question: "What is 8 × 8?", options: ["56", "64", "72", "81"], answer: "64" },
  { question: "What is 28 ÷ 4?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which number is odd?", options: ["18", "20", "23", "26"], answer: "23" },
  { question: "What comes next: 3, 6, 9, 12, ?", options: ["13", "14", "15", "16"], answer: "15" },
  { question: "What is 11 + 11?", options: ["20", "21", "22", "23"], answer: "22" },
  { question: "What is 18 - 6?", options: ["11", "12", "13", "14"], answer: "12" },
  { question: "What is 9 × 9?", options: ["72", "81", "90", "99"], answer: "81" },
  { question: "What is 45 ÷ 9?", options: ["4", "5", "6", "7"], answer: "5" },
  { question: "Which is not a multiple of 5?", options: ["15", "25", "30", "31"], answer: "31" },
  { question: "What is 17 + 8?", options: ["23", "24", "25", "26"], answer: "25" },
  { question: "What is 27 - 9?", options: ["16", "17", "18", "19"], answer: "18" },
  { question: "What is 12 × 6?", options: ["60", "70", "72", "82"], answer: "72" },
  { question: "What is 81 ÷ 9?", options: ["8", "9", "10", "11"], answer: "9" },
  { question: "Which number is a square?", options: ["13", "18", "25", "31"], answer: "25" },
  { question: "What comes next: 1, 4, 9, 16, ?", options: ["20", "25", "30", "36"], answer: "25" },
  { question: "What is 14 + 9?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "What is 23 - 7?", options: ["14", "15", "16", "17"], answer: "16" },
  { question: "What is 4 × 13?", options: ["42", "48", "50", "52"], answer: "52" },
  { question: "What is 56 ÷ 7?", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "Which is the smallest?", options: ["0.4", "0.04", "0.44", "4.0"], answer: "0.04" },
  { question: "If a triangle has 3 sides, how many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "What is the next number: 5, 10, 20, 40, ?", options: ["50", "60", "80", "100"], answer: "80" },
  { question: "What is 33 + 17?", options: ["40", "45", "48", "50"], answer: "50" },
  { question: "What is 42 - 15?", options: ["24", "25", "26", "27"], answer: "27" },
  { question: "What is 11 × 11?", options: ["111", "121", "131", "141"], answer: "121" },
  { question: "What is 100 ÷ 4?", options: ["20", "22", "25", "30"], answer: "25" },
  { question: "Which of these is not a color?", options: ["Violet", "Cyan", "Breeze", "Amber"], answer: "Breeze" },
  { question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], answer: "I" },
  { question: "Which word is spelled correctly?", options: ["Occured", "Receive", "Seperate", "Acess"], answer: "Receive" },
  { question: "Which number is divisible by 3?", options: ["10", "13", "18", "19"], answer: "18" },
  { question: "What is 7 + 7 + 7?", options: ["14", "21", "28", "35"], answer: "21" },
  { question: "What is 25 - 8?", options: ["15", "16", "17", "18"], answer: "17" },
  { question: "What is 12 × 12?", options: ["144", "124", "132", "154"], answer: "144" },
  { question: "What is 64 ÷ 8?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "Which shape has 4 equal sides?", options: ["Triangle", "Circle", "Square", "Pentagon"], answer: "Square" },
  { question: "What is the capital of France?", options: ["Berlin", "Rome", "Paris", "Madrid"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: "Mars" },
  { question: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which is larger: 1/2 or 1/3?", options: ["1/2", "1/3", "Same", "Neither"], answer: "1/2" },
  { question: "What is 50 + 50?", options: ["90", "100", "110", "120"], answer: "100" },
  { question: "What is 100 - 37?", options: ["53", "63", "73", "83"], answer: "63" },
  { question: "What is 9 × 7?", options: ["54", "56", "63", "72"], answer: "63" },
  { question: "What is 16 ÷ 2?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "Which is the only even prime number?", options: ["2", "4", "6", "8"], answer: "2" },
  { question: "Which number comes next: 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "24"], answer: "21" },
  { question: "What is 27 + 13?", options: ["30", "36", "38", "40"], answer: "40" },
  { question: "What is 52 - 19?", options: ["31", "32", "33", "34"], answer: "33" },
  { question: "What is 13 × 5?", options: ["55", "60", "65", "70"], answer: "65" },
  { question: "What is 90 ÷ 10?", options: ["8", "9", "10", "11"], answer: "9" },
  { question: "Which is the correct spelling?", options: ["Hieght", "Height", "Heigth", "Hieght"], answer: "Height" },
  { question: "What is the next letter: Z, Y, X, W, ?", options: ["V", "U", "T", "S"], answer: "V" },
  { question: "What is 17 + 17?", options: ["24", "30", "34", "38"], answer: "34" },
  { question: "What is 76 - 28?", options: ["38", "40", "48", "52"], answer: "48" },
  { question: "What is 14 × 7?", options: ["88", "92", "96", "98"], answer: "98" },
  { question: "What is 72 ÷ 9?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "Which is a synonym for 'happy'?", options: ["Angry", "Joyful", "Sleepy", "Tired"], answer: "Joyful" },
  { question: "What comes next: 2, 3, 5, 8, 13, ?", options: ["20", "21", "24", "34"], answer: "21" },
  { question: "Complete the pattern: 10, 20, 30, 40, ?", options: ["45", "50", "60", "70"], answer: "50" },
  { question: "What is 18 + 16?", options: ["32", "33", "34", "35"], answer: "34" },
  { question: "What is 44 - 8?", options: ["34", "35", "36", "37"], answer: "36" },
  { question: "What is 15 × 6?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is 84 ÷ 12?", options: ["6", "7", "8", "9"], answer: "7" },
  { question: "Which number is closest to 100?", options: ["96", "97", "98", "99"], answer: "99" },
  { question: "Which is an example of a mammal?", options: ["Shark", "Frog", "Whale", "Lizard"], answer: "Whale" },
  { question: "What is 31 + 29?", options: ["58", "60", "62", "64"], answer: "60" },
  { question: "What is 95 - 47?", options: ["38", "42", "48", "52"], answer: "48" },
  { question: "What is 21 × 4?", options: ["72", "80", "84", "88"], answer: "84" },
  { question: "What is 88 ÷ 11?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "Which word is the odd one out?", options: ["Book", "Pen", "Chair", "Pencil"], answer: "Chair" },
  { question: "What is 6 + 6 + 6 + 6?", options: ["20", "24", "28", "32"], answer: "24" },
  { question: "What is 79 - 19?", options: ["50", "56", "60", "62"], answer: "60" },
  { question: "What is 19 × 3?", options: ["54", "57", "60", "63"], answer: "57" },
  { question: "What is 49 ÷ 7?", options: ["6", "7", "8", "9"], answer: "7" },
  { question: "Which is a form of water?", options: ["Quartz", "Steam", "Sand", "Stone"], answer: "Steam" },
  { question: "Which number is a cube?", options: ["8", "12", "16", "20"], answer: "8" },
  { question: "What comes next: 1, 1, 2, 3, 5, 8, ?", options: ["10", "12", "13", "15"], answer: "13" },
  { question: "What is 58 + 22?", options: ["70", "75", "80", "85"], answer: "80" },
  { question: "What is 120 - 35?", options: ["75", "80", "85", "90"], answer: "85" },
  { question: "What is 17 × 5?", options: ["75", "80", "85", "90"], answer: "85" },
  { question: "What is 99 ÷ 9?", options: ["9", "10", "11", "12"], answer: "11" },
  { question: "Which is the largest animal?", options: ["Elephant", "Blue whale", "Giraffe", "Horse"], answer: "Blue whale" },
  { question: "What is 45 + 55?", options: ["90", "95", "100", "110"], answer: "100" },
  { question: "What is 63 - 27?", options: ["30", "32", "34", "36"], answer: "36" },
  { question: "What is 18 × 5?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "What is 120 ÷ 15?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "Which one does not belong?", options: ["Sun", "Moon", "Earth", "Chair"], answer: "Chair" },
  { question: "What is 11 + 22 + 33?", options: ["56", "66", "76", "86"], answer: "66" },
  { question: "What is 70 - 24?", options: ["42", "44", "46", "48"], answer: "46" },
  { question: "What is 26 × 2?", options: ["48", "50", "52", "54"], answer: "52" },
  { question: "What is 144 ÷ 12?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "Which word means the opposite of 'tiny'?", options: ["Little", "Large", "Short", "Weak"], answer: "Large" },
  { question: "What is the next term: 2, 4, 8, 16, ?", options: ["20", "24", "32", "36"], answer: "32" }
];

const totalPuzzles = puzzles.length;

let currentIndex = 0;
let solved = 0;

const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const questionEl = document.getElementById("puzzle-question");
const answerOptionsEl = document.getElementById("answer-options");
const rewardSection = document.getElementById("reward-section");
const moneyButton = document.getElementById("money-button");
const rewardModal = document.getElementById("reward-modal");
const closeModal = document.getElementById("close-modal");
const confettiLayer = document.getElementById("confetti-layer");
const puzzleBadge = document.getElementById("puzzle-badge");

function updateProgress() {
  const progress = ((currentIndex + 1) / totalPuzzles) * 100;
  const displayIndex = currentIndex + 1;

  progressLabel.textContent = `Puzzle ${displayIndex} of ${totalPuzzles}`;
  progressPercent.textContent = `${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;
}

function createConfetti() {
  confettiLayer.innerHTML = "";
  for (let i = 0; i < 150; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const colors = ["#fbbf24", "#f472b6", "#38bdf8", "#34d399", "#a78bfa", "#f87171"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.background = color;
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    confettiLayer.appendChild(piece);
  }
}

function renderPuzzle() {
  const puzzle = puzzles[currentIndex];
  questionEl.textContent = puzzle.question;
  puzzleBadge.textContent = `Puzzle ${currentIndex + 1}`;
  answerOptionsEl.innerHTML = "";

  puzzle.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;

    button.addEventListener("click", () => {
      const isCorrect = option === puzzle.answer;

      Array.from(answerOptionsEl.children).forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === puzzle.answer) {
          btn.classList.add("correct");
        }
      });

      if (!isCorrect) {
        button.classList.add("incorrect");
      } else {
        solved += 1;
      }

      setTimeout(() => {
        currentIndex += 1;

        if (currentIndex >= totalPuzzles) {
          showReward();
          return;
        }

        updateProgress();
        renderPuzzle();
      }, 650);
    });

    answerOptionsEl.appendChild(button);
  });

  updateProgress();
}

function showReward() {
  rewardSection.classList.remove("hidden");
  createConfetti();
  questionEl.textContent = "You solved all 100 puzzles.";
  answerOptionsEl.innerHTML = "";
  puzzleBadge.textContent = "Final reward";
}

moneyButton.addEventListener("click", () => {
  rewardModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  rewardModal.classList.add("hidden");
});

rewardModal.addEventListener("click", (event) => {
  if (event.target === rewardModal) {
    rewardModal.classList.add("hidden");
  }
});

renderPuzzle();
