const promptsByMode = {
  ask: "Example: My landlord wants to keep my deposit after I moved out. What issues should I look at under Hong Kong practice?",
  review: "Example: Please review this employment contract clause and explain any risks in plain English.",
  draft: "Example: Help me draft a polite but firm payment reminder letter for an overdue invoice.",
};

const pills = document.querySelectorAll(".mode-pill");
const textarea = document.querySelector("textarea");

for (const pill of pills) {
  pill.addEventListener("click", () => {
    for (const candidate of pills) {
      candidate.classList.remove("active");
    }

    pill.classList.add("active");
    const mode = pill.dataset.mode;
    textarea.placeholder = promptsByMode[mode] || promptsByMode.ask;
  });
}

for (const suggestion of document.querySelectorAll(".suggestion")) {
  suggestion.addEventListener("click", () => {
    textarea.value = suggestion.textContent + " - what should I do first in Hong Kong?";
    textarea.focus();
  });
}