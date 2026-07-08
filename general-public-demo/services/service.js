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

const publicServicePhotoConfig = {
  "ai-chat": {
    src: "../../assets/screenshots/HK-AI-Chat.jpeg",
    alt: "AI chat in a Hong Kong legal consultation setting",
    caption: "First-contact consultation in plain English",
    focusClass: "focus-consultation",
  },
  "legal-research": {
    src: "../../assets/screenshots/hk-law-library-research.jpeg",
    alt: "Legal research scene in a law library",
    caption: "Clause-by-clause research support",
    focusClass: "focus-library",
  },
  "ai-retrieval": {
    src: "../../assets/screenshots/HK-AI-Retrieval.jpeg",
    alt: "AI retrieval and legal research in Hong Kong",
    caption: "Case and reference retrieval context",
    focusClass: "focus-court-exterior",
  },
  "text-analysis": {
    src: "../../assets/screenshots/HK-Text-Analysis.jpeg",
    alt: "Text analysis and document review in Hong Kong",
    caption: "Document intake and structured analysis",
    focusClass: "focus-advice-scheme",
  },
  "contract-generation": {
    src: "../../assets/screenshots/hk-commercial-negotiation.jpeg",
    alt: "Commercial legal meeting in Hong Kong",
    caption: "Drafting for business and cross-border use",
    focusClass: "focus-commercial",
  },
  "contract-review": {
    src: "../../assets/screenshots/HK-Contract_review.jpeg",
    alt: "Contract review with legal papers and clause analysis",
    caption: "Clause review and risk spotting",
    focusClass: "focus-court-documents",
  },
  "legal-documents": {
    src: "../../assets/screenshots/HK-Legal-documents.jpeg",
    alt: "Legal documents and formal drafting in Hong Kong",
    caption: "Formal document standards and structure",
    focusClass: "focus-court-interior",
  },
};

const publicSceneConfig = {
  "ai-chat": {
    lead: "Helpful legal discussion in plain English",
    support: "Show users a friendly advice-first environment before formal legal consultation.",
    scenes: ["discussion", "meeting"],
  },
  "legal-research": {
    lead: "Research support explained like a conversation",
    support: "Translate legal context into approachable points people can act on.",
    scenes: ["consultation", "document"],
  },
  "ai-retrieval": {
    lead: "Guided case retrieval with human-style framing",
    support: "Present relevant information as understandable pathways instead of raw data dumps.",
    scenes: ["document", "discussion"],
  },
  "text-analysis": {
    lead: "Document review with simple visual explanations",
    support: "Break complex clauses into understandable highlights and practical actions.",
    scenes: ["document", "meeting"],
  },
  "contract-generation": {
    lead: "Collaborative drafting visuals for public and SME users",
    support: "Create confidence with clear layouts, meeting cues, and editable structure.",
    scenes: ["meeting", "consultation"],
  },
  "contract-review": {
    lead: "Risk review presented like advisor guidance",
    support: "Help users see why a clause matters and what to ask next in a meeting.",
    scenes: ["consultation", "discussion"],
  },
  "legal-documents": {
    lead: "Formal document help with approachable visuals",
    support: "Move from intent to letter-ready output with calm, human-friendly direction.",
    scenes: ["document", "meeting"],
  },
};

const publicSceneTemplates = {
  discussion: {
    label: "Lawyer discussion",
    title: "Helpful case conversation",
    artClass: "scene-art-discussion",
    art: `
      <svg viewBox="0 0 320 180" role="presentation" focusable="false">
        <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(255,247,236,0.96)" />
        <rect x="40" y="112" width="240" height="32" rx="10" fill="rgba(255,255,255,0.7)" />
        <circle cx="96" cy="84" r="24" fill="rgba(15,118,110,0.34)" />
        <rect x="74" y="108" width="44" height="24" rx="8" fill="rgba(15,118,110,0.56)" />
        <circle cx="224" cy="80" r="24" fill="rgba(245,158,11,0.34)" />
        <rect x="202" y="104" width="44" height="24" rx="8" fill="rgba(245,158,11,0.56)" />
        <rect x="124" y="70" width="72" height="30" rx="10" fill="rgba(255,255,255,0.9)" />
        <path d="M146 100h20l-9 10z" fill="rgba(255,255,255,0.9)" />
        <path d="M136 82h48" stroke="rgba(23,32,44,0.35)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M136 90h30" stroke="rgba(23,32,44,0.28)" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    `,
  },
  meeting: {
    label: "Document meeting",
    title: "Contracts and next-step planning",
    artClass: "scene-art-meeting",
    art: `
      <svg viewBox="0 0 320 180" role="presentation" focusable="false">
        <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(252,248,238,0.96)" />
        <rect x="48" y="56" width="94" height="62" rx="10" fill="rgba(255,255,255,0.86)" stroke="rgba(23,32,44,0.18)" />
        <path d="M62 76h64" stroke="rgba(23,32,44,0.24)" stroke-width="3" stroke-linecap="round" />
        <path d="M62 90h50" stroke="rgba(23,32,44,0.2)" stroke-width="3" stroke-linecap="round" />
        <rect x="154" y="60" width="118" height="74" rx="12" fill="rgba(15,118,110,0.16)" stroke="rgba(15,118,110,0.36)" />
        <circle cx="186" cy="89" r="14" fill="rgba(15,118,110,0.44)" />
        <circle cx="226" cy="89" r="14" fill="rgba(245,158,11,0.46)" />
        <rect x="171" y="108" width="72" height="9" rx="5" fill="rgba(23,32,44,0.24)" />
        <rect x="70" y="124" width="186" height="20" rx="8" fill="rgba(255,255,255,0.72)" />
      </svg>
    `,
  },
  document: {
    label: "Legal documents",
    title: "Contracts, clauses, and review notes",
    artClass: "scene-art-document",
    art: `
      <svg viewBox="0 0 320 180" role="presentation" focusable="false">
        <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(253,247,235,0.96)" />
        <rect x="54" y="40" width="98" height="118" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(23,32,44,0.16)" />
        <path d="M72 66h62" stroke="rgba(23,32,44,0.22)" stroke-width="3" stroke-linecap="round" />
        <path d="M72 80h56" stroke="rgba(23,32,44,0.18)" stroke-width="3" stroke-linecap="round" />
        <path d="M72 94h46" stroke="rgba(23,32,44,0.18)" stroke-width="3" stroke-linecap="round" />
        <rect x="170" y="58" width="100" height="86" rx="12" fill="rgba(15,118,110,0.14)" stroke="rgba(15,118,110,0.3)" />
        <rect x="184" y="74" width="72" height="8" rx="4" fill="rgba(15,118,110,0.5)" />
        <rect x="184" y="90" width="56" height="8" rx="4" fill="rgba(245,158,11,0.5)" />
        <rect x="184" y="106" width="64" height="8" rx="4" fill="rgba(23,32,44,0.24)" />
        <circle cx="248" cy="42" r="16" fill="rgba(245,158,11,0.28)" />
      </svg>
    `,
  },
  consultation: {
    label: "Guided consultation",
    title: "Advisor meeting and action planning",
    artClass: "scene-art-consultation",
    art: `
      <svg viewBox="0 0 320 180" role="presentation" focusable="false">
        <rect x="0" y="0" width="320" height="180" rx="18" fill="rgba(248,251,246,0.96)" />
        <rect x="52" y="116" width="216" height="26" rx="10" fill="rgba(255,255,255,0.8)" />
        <circle cx="94" cy="82" r="22" fill="rgba(15,118,110,0.3)" />
        <rect x="74" y="104" width="40" height="24" rx="8" fill="rgba(15,118,110,0.52)" />
        <circle cx="162" cy="78" r="20" fill="rgba(245,158,11,0.3)" />
        <rect x="144" y="100" width="36" height="22" rx="8" fill="rgba(245,158,11,0.5)" />
        <circle cx="226" cy="82" r="22" fill="rgba(23,32,44,0.18)" />
        <rect x="206" y="104" width="40" height="24" rx="8" fill="rgba(23,32,44,0.3)" />
        <rect x="112" y="54" width="94" height="24" rx="10" fill="rgba(255,255,255,0.92)" />
        <path d="M126 66h66" stroke="rgba(23,32,44,0.26)" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    `,
  },
};

const renderPublicServiceHeroVisual = () => {
  const config = publicVisualConfig[activeService];
  const photoConfig = publicServicePhotoConfig[activeService];
  const metricsNode = document.querySelector(".hero-metrics");

  if (!config || !metricsNode || document.querySelector(".service-hero-visual")) {
    return;
  }

  const visual = document.createElement("div");
  visual.className = "service-hero-visual";
  visual.innerHTML = `
    ${
      photoConfig
        ? `
      <figure class="service-hero-photo-wrap">
        <img
          class="service-hero-photo ${photoConfig.focusClass}"
          src="${photoConfig.src}"
          alt="${photoConfig.alt}"
          loading="lazy"
        />
        <figcaption>${photoConfig.caption}</figcaption>
      </figure>
    `
        : ""
    }
    <div class="service-hero-snapshot">
      <div class="service-glyph">${config.glyph}</div>
      <div class="service-hero-copy">
        <span>Service preview</span>
        <strong>${config.visualTitle}</strong>
        <p>${config.previewLabels.join(" • ")}</p>
      </div>
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

const renderPublicSceneGallery = () => {
  const config = publicSceneConfig[activeService];
  const workflowNode = document.querySelector(".workflow-rail-panel") || document.querySelector(".visual-studio-panel");

  if (!config || !workflowNode || document.querySelector(".scene-gallery-panel")) {
    return;
  }

  const sceneKeys = config.scenes || ["discussion", "meeting"];
  const sceneCards = sceneKeys
    .map((key) => publicSceneTemplates[key])
    .filter(Boolean)
    .map(
      (scene) => `
        <article class="scene-card">
          <span>${scene.label}</span>
          <strong>${scene.title}</strong>
          <div class="scene-art ${scene.artClass}" aria-hidden="true">
            ${scene.art}
          </div>
        </article>
      `,
    )
    .join("");

  const panel = document.createElement("section");
  panel.className = "panel scene-gallery-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>Generated support scenes</h2>
      <span class="pill">Public visual pack</span>
    </div>
    <p class="scene-summary"><strong>${config.lead}</strong> ${config.support}</p>
    <div class="scene-grid">${sceneCards}</div>
  `;

  workflowNode.insertAdjacentElement("afterend", panel);
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
renderPublicSceneGallery();
renderPublicDemoLab();
