let index = 0;
const card = document.getElementById("card");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const categorySelect = document.getElementById("flashcardCategory");

let flashcardCommands = [];

// === NEW: Get unique categories dynamically ===
const categories = [...new Set(commands.map(c => c.category))];

// Populate dropdown
categorySelect.innerHTML = `<option value="">All Categories</option>`;
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

// Load flashcards based on selected category
function loadFlashcards(selectedCategory = null) {
  flashcardCommands = commands.filter(c => {
    if (!c.flashcard) return false;
    if (selectedCategory && c.category !== selectedCategory) return false;
    return true;
  });

  if (flashcardCommands.length === 0) {
    cardFront.textContent = "No flashcards found";
    cardBack.textContent = "";
    return;
  }

  index = 0;
  showCard(index);
}

// Normal show card (no animation reset)
function showCard(i) {
  cardFront.textContent = flashcardCommands[i].cmd;
  cardBack.textContent = flashcardCommands[i].shortDef;
}

// Reset to front first, then show next card smoothly
function resetAndShowCard(i) {
  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped"); // flip back

    // Wait for CSS transition before updating content
    setTimeout(() => {
      showCard(i);
    }, 600); // match your CSS transition duration
  } else {
    showCard(i);
  }
}

function nextCard() {
  index = (index + 1) % flashcardCommands.length;
  resetAndShowCard(index);
}

function prevCard() {
  index = (index - 1 + flashcardCommands.length) % flashcardCommands.length;
  resetAndShowCard(index);
}

function randomCard() {
  index = Math.floor(Math.random() * flashcardCommands.length);
  resetAndShowCard(index);
}


card.addEventListener("click", () => card.classList.toggle("flipped"));

// === NEW: Reload when category changes ===
categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value || null;
  loadFlashcards(selectedCategory);
});

// Initialize with all categories
loadFlashcards();
