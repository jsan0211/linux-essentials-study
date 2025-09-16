const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("refCategory");
const resultsEl = document.getElementById("referenceResults");

// Populate category dropdown dynamically
const categories = [...new Set(commands.map(c => c.category))];
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

function renderReference() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  resultsEl.innerHTML = "";

  const filtered = commands.filter(cmd => {
    if (selectedCategory && cmd.category !== selectedCategory) return false;
    if (searchTerm && !cmd.cmd.toLowerCase().includes(searchTerm) && !cmd.def.toLowerCase().includes(searchTerm)) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    resultsEl.innerHTML = "<p>No matching commands found.</p>";
    return;
  }

  filtered.forEach(cmd => {
    const card = document.createElement("div");
    card.className = "ref-card";

    card.innerHTML = `
      <h3>${cmd.cmd}</h3>
      <p><strong>Category:</strong> ${cmd.category}</p>
      <p><strong>Definition:</strong> ${cmd.def}</p>
      <p><strong>Short:</strong> ${cmd.shortDef}</p>
    `;

    resultsEl.appendChild(card);
  });
}

// Event listeners for search + category
searchInput.addEventListener("input", renderReference);
categorySelect.addEventListener("change", renderReference);

// Initial load
renderReference();
