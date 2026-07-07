const links = document.querySelectorAll(".service-nav a");
const activeService = document.body.dataset.service;

for (const link of links) {
  if (link.dataset.service === activeService) {
    link.classList.add("active");
  }
}

const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const publicDemoConfig = {
  "ai-chat": {
    title: "Try the AI Chat demo",
    description: "See how everyday questions are translated into practical legal steps.",
    placeholder:
      "Example: My landlord says my deposit will be kept. What should I check first in Hong Kong?",
    sample: "Landlord keeps deposit after move-out and disputes cleaning deductions.",
    steps: ["Explain key issue", "List documents to prepare", "Suggest next action"],
  },
  "legal-research": {
    title: "Try the Legal Research demo",
    description: "Get simple context summaries before speaking with a lawyer.",
    placeholder:
      "Example: What should an employee in Hong Kong check before signing a non-compete clause?",
    sample: "Summarize what makes a non-compete clause more or less enforceable.",
    steps: ["Summarize context", "Show what matters most", "Prepare questions for advisor"],
  },
  "ai-retrieval": {
    title: "Try the AI Retrieval demo",
    description: "Search by your situation and preview relevant information paths.",
    placeholder:
      "Example: Find references related to delayed supplier delivery and contract termination.",
    sample: "Search similar issues for delayed delivery disputes in commercial contracts.",
    steps: ["Route search intent", "Show relevant matches", "Highlight next path"],
  },
  "text-analysis": {
    title: "Try the Text Analysis demo",
    description: "Break long documents into understandable highlights.",
    placeholder:
      "Example: Extract obligations and deadlines from this employment agreement.",
    sample: "Identify payment terms, notice periods, and penalty language.",
    steps: ["Extract key points", "Flag risky language", "Generate checklist"],
  },
  "contract-generation": {
    title: "Try the Contract Generation demo",
    description: "Create a practical first draft from basic inputs.",
    placeholder:
      "Example: Draft a simple services agreement for a freelance design project.",
    sample: "Generate first draft with scope, payment, timeline, and termination sections.",
    steps: ["Collect essentials", "Build first draft", "Prepare review notes"],
  },
  "contract-review": {
    title: "Try the Contract Review demo",
    description: "Preview risks before signing agreements.",
    placeholder:
      "Example: Highlight unclear clauses in this vendor agreement before signature.",
    sample: "Review indemnity and termination terms for one-sided risk.",
    steps: ["Spot risk terms", "Explain why", "Suggest what to ask next"],
  },
  "legal-documents": {
    title: "Try the Legal Documents demo",
    description: "Draft formal letters and notices with clearer structure.",
    placeholder:
      "Example: Draft a payment reminder letter with a clear deadline.",
    sample: "Create a firm but polite overdue invoice reminder letter.",
    steps: ["Select document type", "Draft structured content", "Refine tone and detail"],
  },
};

const renderPublicDemoLab = () => {
  const config = publicDemoConfig[activeService];
  const mainNode = document.querySelector("main");

  if (!config || !mainNode) {
    return;
  }

  const lab = document.createElement("section");
  lab.className = "panel demo-lab";
  lab.innerHTML = `
    <div class="panel-head">
      <h2>${config.title}</h2>
      <span class="pill">Working Demo</span>
    </div>
    <p class="demo-intro">${config.description}</p>
    <div class="demo-controls">
      <label>
        <span>Audience</span>
        <select id="publicAudience">
          <option>Individual</option>
          <option>Family</option>
          <option>SME owner</option>
          <option>Freelancer</option>
        </select>
      </label>
      <label>
        <span>Response style</span>
        <select id="publicStyle">
          <option value="simple" selected>Simple</option>
          <option value="detailed">More detailed</option>
          <option value="formal">Formal</option>
        </select>
      </label>
    </div>
    <label class="demo-prompt-wrap">
      <span>Your situation</span>
      <textarea id="publicPromptInput" rows="5" placeholder="${config.placeholder}"></textarea>
    </label>
    <div class="demo-buttons">
      <button class="demo-btn primary" id="runPublicDemoBtn" type="button">Get demo guidance</button>
      <button class="demo-btn" id="samplePublicDemoBtn" type="button">Use sample</button>
    </div>
    <section class="demo-result" id="publicDemoResult" aria-live="polite">
      <article class="demo-result-card">
        <span>Status</span>
        <strong>Ready</strong>
        <p>Run this demo to generate a sample response.</p>
      </article>
    </section>
  `;

  mainNode.appendChild(lab);

  const promptInput = document.getElementById("publicPromptInput");
  const runBtn = document.getElementById("runPublicDemoBtn");
  const sampleBtn = document.getElementById("samplePublicDemoBtn");
  const resultNode = document.getElementById("publicDemoResult");
  const audienceSelect = document.getElementById("publicAudience");
  const styleSelect = document.getElementById("publicStyle");

  if (!promptInput || !runBtn || !sampleBtn || !resultNode || !audienceSelect || !styleSelect) {
    return;
  }

  sampleBtn.addEventListener("click", () => {
    promptInput.value = config.sample;
    promptInput.focus();
  });

  runBtn.addEventListener("click", () => {
    const prompt = promptInput.value.trim() || config.sample;
    const audience = audienceSelect.value;
    const style = styleSelect.value;

    const styleMap = {
      simple: "Easy language",
      detailed: "More detail",
      formal: "Formal tone",
    };

    resultNode.innerHTML = `
      <article class="demo-result-card strong">
        <span>Guidance summary</span>
        <strong>${config.steps[0]}</strong>
        <p>Audience: ${audience}. Response style: ${styleMap[style]}.</p>
      </article>
      <article class="demo-result-card">
        <span>Your input</span>
        <p>${prompt}</p>
      </article>
      <article class="demo-result-card">
        <span>Suggested next steps</span>
        <ul>
          <li>${config.steps[0]}</li>
          <li>${config.steps[1]}</li>
          <li>${config.steps[2]}</li>
        </ul>
      </article>
    `;
  });
};

renderPublicDemoLab();
