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

const publicVisualConfig = {
  "ai-chat": {
    glyph: "AI",
    visualTitle: "Question routing and calm-first guidance",
    visualSummary:
      "Turn first-contact questions into clearer legal pathways, document checklists, and escalation cues.",
    previewLabels: ["Issue summary", "Document list", "Escalation cue"],
    flowRail: ["Understand", "Prepare", "Escalate"],
  },
  "legal-research": {
    glyph: "RS",
    visualTitle: "Research snapshots for non-lawyers",
    visualSummary:
      "Convert legal context into practical takeaways users can understand before professional consultation.",
    previewLabels: ["Context summary", "What matters", "Questions to ask"],
    flowRail: ["Frame", "Summarize", "Ask better"],
  },
  "ai-retrieval": {
    glyph: "RT",
    visualTitle: "Situation-based reference paths",
    visualSummary:
      "Guide users through similar scenarios and references without overwhelming detail.",
    previewLabels: ["Match lane", "Relevance", "Next path"],
    flowRail: ["Search", "Narrow", "Action"],
  },
  "text-analysis": {
    glyph: "TX",
    visualTitle: "Plain-language document breakdown",
    visualSummary:
      "Highlight obligations, deadlines, and risky wording in a format users can scan quickly.",
    previewLabels: ["Key clauses", "Timeline", "Risk wording"],
    flowRail: ["Extract", "Simplify", "Checklist"],
  },
  "contract-generation": {
    glyph: "DR",
    visualTitle: "Drafting flow for everyday business use",
    visualSummary:
      "Build first drafts that are practical, readable, and ready for legal review.",
    previewLabels: ["Input pack", "Draft layout", "Review notes"],
    flowRail: ["Collect", "Draft", "Refine"],
  },
  "contract-review": {
    glyph: "RV",
    visualTitle: "Risk-first review guidance",
    visualSummary:
      "Surface one-sided terms and help users prepare cleaner questions for advisors.",
    previewLabels: ["Risk flags", "Why it matters", "What to ask"],
    flowRail: ["Spot", "Explain", "Respond"],
  },
  "legal-documents": {
    glyph: "LD",
    visualTitle: "Structured letters and formal wording",
    visualSummary:
      "Guide users from intent to formal output with tone and structure guardrails.",
    previewLabels: ["Document type", "Tone", "Delivery format"],
    flowRail: ["Choose", "Compose", "Finalize"],
  },
};

const renderPublicServiceHeroVisual = () => {
  const config = publicVisualConfig[activeService];
  const metricsNode = document.querySelector(".hero-metrics");

  if (!config || !metricsNode || document.querySelector(".service-hero-visual")) {
    return;
  }

  const visual = document.createElement("div");
  visual.className = "service-hero-visual";
  visual.innerHTML = `
    <div class="service-glyph">${config.glyph}</div>
    <div class="service-hero-copy">
      <span>Service preview</span>
      <strong>${config.visualTitle}</strong>
      <p>${config.previewLabels.join(" • ")}</p>
    </div>
  `;

  metricsNode.prepend(visual);
};

const renderPublicVisualStudio = () => {
  const config = publicVisualConfig[activeService];
  const navNode = document.querySelector(".service-nav");

  if (!config || !navNode || document.querySelector(".visual-studio-panel")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel visual-studio-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>${config.visualTitle}</h2>
      <span class="pill">Guidance Studio</span>
    </div>
    <p class="studio-summary">${config.visualSummary}</p>
    <div class="studio-grid">
      <article class="studio-card studio-card-primary">
        <span>Guidance map</span>
        <strong>${config.flowRail[0]} to ${config.flowRail[2]}</strong>
        <div class="studio-lane">
          <i></i><i></i><i></i>
        </div>
        <p>Built for people who need clear next steps before legal language gets technical.</p>
      </article>
      <article class="studio-card studio-artifact-card">
        <span>Generated visuals</span>
        <div class="artifact-stack">
          <div class="artifact-item artifact-item-a"><b>${config.previewLabels[0]}</b></div>
          <div class="artifact-item artifact-item-b"><b>${config.previewLabels[1]}</b></div>
          <div class="artifact-item artifact-item-c"><b>${config.previewLabels[2]}</b></div>
        </div>
      </article>
      <article class="studio-card studio-card-secondary">
        <span>Designed for trust</span>
        <ul>
          <li>Plain-English framing first</li>
          <li>Clear preparation checklist</li>
          <li>Visible human escalation path</li>
        </ul>
      </article>
    </div>
  `;

  navNode.insertAdjacentElement("afterend", panel);
};

const renderPublicWorkflowRail = () => {
  const config = publicVisualConfig[activeService];
  const studioNode = document.querySelector(".visual-studio-panel");

  if (!config || !studioNode || document.querySelector(".workflow-rail-panel")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel workflow-rail-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>Guidance flow</h2>
      <span class="pill">Public-ready route</span>
    </div>
    <div class="workflow-rail-grid">
      ${config.flowRail
        .map(
          (step, index) => `
            <article class="workflow-step">
              <span>Step ${index + 1}</span>
              <strong>${step}</strong>
              <p>${publicDemoConfig[activeService].steps[index] || publicDemoConfig[activeService].steps[publicDemoConfig[activeService].steps.length - 1]}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  studioNode.insertAdjacentElement("afterend", panel);
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

renderPublicServiceHeroVisual();
renderPublicVisualStudio();
renderPublicWorkflowRail();
renderPublicDemoLab();
