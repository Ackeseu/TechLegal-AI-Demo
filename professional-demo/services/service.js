const serviceNavLinks = document.querySelectorAll(".service-nav a");
const activeService = document.body.dataset.service;

for (const link of serviceNavLinks) {
  if (link.dataset.service === activeService) {
    link.classList.add("active");
  }
}

const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const professionalDemoConfig = {
  "ai-chat": {
    title: "Interactive AI Chat demo",
    description: "Simulate legal triage with jurisdiction-aware follow-up prompts.",
    promptPlaceholder:
      "Example: A supplier in Singapore delayed delivery and the HK customer wants to terminate. What should legal check first?",
    samplePrompt:
      "Supplier delay dispute with HK governing law and APAC delivery chain.",
    actions: ["Map legal issues", "Build question list", "Prepare escalation path"],
  },
  "legal-research": {
    title: "Interactive Research demo",
    description: "Generate a memo-style output from issue framing and assumptions.",
    promptPlaceholder:
      "Example: Assess enforceability of post-termination restrictions for a senior employee in Hong Kong with regional client exposure.",
    samplePrompt: "Enforceability analysis for non-compete scope in HK and Asia-facing role.",
    actions: ["Frame issues", "Identify authority lanes", "Draft memo summary"],
  },
  "ai-retrieval": {
    title: "Interactive Retrieval demo",
    description: "Test similar-case and regulation search output in one workflow.",
    promptPlaceholder:
      "Example: Find comparable cases for service-level breach termination in Hong Kong supplier contracts.",
    samplePrompt: "Find similar authorities for repeated service-level breach and termination rights.",
    actions: ["Route query", "Rank authority relevance", "Export selected results"],
  },
  "text-analysis": {
    title: "Interactive Text Analysis demo",
    description: "Simulate extraction of obligations, deadlines, and risk clusters.",
    promptPlaceholder:
      "Example: Extract payment, liability, and notice obligations from a mixed EN/CN vendor contract.",
    samplePrompt: "Parse obligations and timeline from vendor terms and correspondence thread.",
    actions: ["Extract obligations", "Flag risk language", "Build action checklist"],
  },
  "contract-generation": {
    title: "Interactive Drafting demo",
    description: "Generate a first-pass contract scaffold with negotiation posture.",
    promptPlaceholder:
      "Example: Draft a Hong Kong law governed mutual NDA for a software procurement project.",
    samplePrompt: "Generate balanced NDA with confidentiality, return obligations, and liability caps.",
    actions: ["Collect drafting inputs", "Generate clause scaffold", "Prepare review pack"],
  },
  "contract-review": {
    title: "Interactive Review demo",
    description: "Surface clause risks and propose negotiation positions.",
    promptPlaceholder:
      "Example: Review indemnity, termination, and limitation clauses in this supplier agreement.",
    samplePrompt: "Review supplier paper for indemnity imbalance and weak service remedies.",
    actions: ["Score risk", "Suggest redlines", "Create negotiation summary"],
  },
  "legal-documents": {
    title: "Interactive Legal Documents demo",
    description: "Compose structured legal correspondence and formal notices.",
    promptPlaceholder:
      "Example: Draft a formal demand letter for overdue invoices with escalation language.",
    samplePrompt: "Create a firm but professional demand letter with timeline and response deadline.",
    actions: ["Choose document type", "Compose draft", "Output client-ready format"],
  },
};

const renderProfessionalDemoLab = () => {
  const config = professionalDemoConfig[activeService];
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
        <span>Jurisdiction</span>
        <select id="demoJurisdiction">
          <option>Hong Kong</option>
          <option>Hong Kong + Singapore</option>
          <option>Hong Kong + Greater China</option>
          <option>Hong Kong + ASEAN</option>
        </select>
      </label>
      <label>
        <span>Model behavior</span>
        <select id="demoModelMode">
          <option value="concise">Concise professional</option>
          <option value="balanced" selected>Balanced analysis</option>
          <option value="deep">Deep reasoning</option>
        </select>
      </label>
    </div>
    <label class="demo-prompt-wrap">
      <span>Prompt / task</span>
      <textarea id="demoPromptInput" rows="5" placeholder="${config.promptPlaceholder}"></textarea>
    </label>
    <div class="demo-buttons">
      <button class="demo-btn primary" id="runDemoBtn" type="button">Run simulation</button>
      <button class="demo-btn" id="loadSampleBtn" type="button">Load sample prompt</button>
    </div>
    <section class="demo-result" id="demoResult" aria-live="polite">
      <article class="demo-result-card">
        <span>Status</span>
        <strong>Ready</strong>
        <p>Run a simulation to populate this output.</p>
      </article>
    </section>
  `;

  mainNode.appendChild(lab);

  const promptInput = document.getElementById("demoPromptInput");
  const runBtn = document.getElementById("runDemoBtn");
  const sampleBtn = document.getElementById("loadSampleBtn");
  const resultNode = document.getElementById("demoResult");
  const jurisdictionSelect = document.getElementById("demoJurisdiction");
  const modelModeSelect = document.getElementById("demoModelMode");

  if (!promptInput || !runBtn || !sampleBtn || !resultNode || !jurisdictionSelect || !modelModeSelect) {
    return;
  }

  sampleBtn.addEventListener("click", () => {
    promptInput.value = config.samplePrompt;
    promptInput.focus();
  });

  runBtn.addEventListener("click", () => {
    const prompt = promptInput.value.trim() || config.samplePrompt;
    const modelMode = modelModeSelect.value;
    const jurisdiction = jurisdictionSelect.value;

    const depthMap = {
      concise: "high-level summary",
      balanced: "structured analysis",
      deep: "deeper issue tree and assumptions",
    };

    resultNode.innerHTML = `
      <article class="demo-result-card strong">
        <span>Simulation summary</span>
        <strong>${config.actions[0]} completed</strong>
        <p>Mode: ${depthMap[modelMode]}. Jurisdiction scope: ${jurisdiction}.</p>
      </article>
      <article class="demo-result-card">
        <span>Prompt interpreted</span>
        <p>${prompt}</p>
      </article>
      <article class="demo-result-card">
        <span>Suggested workflow</span>
        <ul>
          <li>${config.actions[0]}</li>
          <li>${config.actions[1]}</li>
          <li>${config.actions[2]}</li>
        </ul>
      </article>
    `;
  });
};

renderProfessionalDemoLab();
