let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

/** Load questions, optionally filtered by category */
function loadQuizQuestions(selectedCategory = null) {
  quizQuestions = [];

  // DEBUG: show available categories in the dataset
  const cats = [...new Set(commands.map(c => c.category))];
  console.log("Available categories:", cats);

  commands.forEach(cmd => {
    if (cmd.questions && cmd.questions.length > 0) {
      // if a category was selected, only include matching category
      if (selectedCategory && cmd.category !== selectedCategory) return;

      cmd.questions.forEach(q => {
        quizQuestions.push({
          cmd: cmd.cmd,
          category: cmd.category,
          question: q.question,
          type: q.type,
          options: q.options || [],
          answer: q.answer
        });
      });
    }
  });

  console.log(`Loaded ${quizQuestions.length} questions for category:`, selectedCategory || "(all)");

  shuffleArray(quizQuestions);
  score = 0;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/** Check answer, show feedback + definition, then enable Next */
function checkAnswer(userAnswer, correctAnswer) {
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  if ((userAnswer || "").toLowerCase() === (correctAnswer || "").toLowerCase()) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `❌ Incorrect. Correct answer: ${correctAnswer}`;
    feedbackEl.style.color = "red";
  }

  // Show definition / switches for the current command
  const q = quizQuestions[currentQuestionIndex];
  const currentCmd = commands.find(c => c.cmd === q.cmd);
  if (currentCmd) {
    const defDiv = document.createElement("div");
    defDiv.style.marginTop = "10px";
    defDiv.style.fontSize = "0.9em";
    defDiv.style.color = "#333";
    defDiv.innerHTML = `
      <strong>${currentCmd.cmd}</strong><br>
      ${currentCmd.shortDef ? `<em>${currentCmd.shortDef}</em><br>` : ""}
      ${currentCmd.def}
    `;
    feedbackEl.appendChild(defDiv);
  }

  nextBtn.style.display = "inline-block";
  nextBtn.disabled = false;
}

/** Render the current question (or finish) */
function showQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  nextBtn.disabled = true;

  // If no questions loaded for the chosen category
  if (quizQuestions.length === 0) {
    questionEl.textContent = "⚠️ No questions available for this category.";
    return;
  }

  // Finished all questions
  if (currentQuestionIndex >= quizQuestions.length) {
    questionEl.textContent = `🎉 Quiz finished! Score: ${score}/${quizQuestions.length}`;
    optionsEl.innerHTML = "";

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.className = "quiz-button";
    restartBtn.onclick = restartQuiz;
    optionsEl.appendChild(restartBtn);

    return;
  }

  // Render the current question
  const q = quizQuestions[currentQuestionIndex];
  questionEl.textContent = q.question;

  if (q.type === "mcq") {
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, q.answer);
      optionsEl.appendChild(btn);
    });
  } else if (q.type === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type your answer...";
    input.id = "userAnswer";

    const btn = document.createElement("button");
    btn.textContent = "Submit";
    btn.onclick = () => {
      const userAnswer = (document.getElementById("userAnswer").value || "").trim();
      checkAnswer(userAnswer, q.answer);
    };

    optionsEl.appendChild(input);
    optionsEl.appendChild(btn);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

/** Restart the quiz with the CURRENTLY SELECTED category */
function restartQuiz() {
  currentQuestionIndex = 0;
  const category = document.getElementById("categorySelect").value || null;
  loadQuizQuestions(category);
  showQuestion();
}

window.onload = () => {
  const categorySelect = document.getElementById("categorySelect");

  function start() {
    const selectedCategory = categorySelect.value || null;
    currentQuestionIndex = 0;
    loadQuizQuestions(selectedCategory);
    showQuestion();
  }

  // Auto-start when the page loads
  start();

  // Restart quiz automatically when category changes
  categorySelect.onchange = start;
};

