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
    visualTitle: "Matter intake and issue routing",
    visualSummary: "Guide users from first question to the right legal workflow with visible jurisdiction and escalation cues.",
    previewLabels: ["Intake queue", "Escalation threshold", "Answer pack"],
    glyph: "AI",
    workflowRail: ["Intake", "Issue map", "Lawyer handoff"],
    documentPreview: ["Conversation summary", "Escalation note", "Client-ready answer"],
  },
  "legal-research": {
    title: "Interactive Research demo",
    description: "Generate a memo-style output from issue framing and assumptions.",
    promptPlaceholder:
      "Example: Assess enforceability of post-termination restrictions for a senior employee in Hong Kong with regional client exposure.",
    samplePrompt: "Enforceability analysis for non-compete scope in HK and Asia-facing role.",
    actions: ["Frame issues", "Identify authority lanes", "Draft memo summary"],
    visualTitle: "Research lanes and memo assembly",
    visualSummary: "Present authority capture, issue decomposition, and memo-ready output in one clear visual system.",
    previewLabels: ["Authority lane", "Issue tree", "Memo draft"],
    glyph: "RS",
    workflowRail: ["Scope", "Authorities", "Memo build"],
    documentPreview: ["Authority extract", "Issue matrix", "Internal memo"],
  },
  "ai-retrieval": {
    title: "Interactive Retrieval demo",
    description: "Test similar-case and regulation search output in one workflow.",
    promptPlaceholder:
      "Example: Find comparable cases for service-level breach termination in Hong Kong supplier contracts.",
    samplePrompt: "Find similar authorities for repeated service-level breach and termination rights.",
    actions: ["Route query", "Rank authority relevance", "Export selected results"],
    visualTitle: "Retrieval clusters and result triage",
    visualSummary: "Show which matches are direct, analogous, or background so legal users can move faster.",
    previewLabels: ["Direct match", "Analogy cluster", "Export set"],
    glyph: "RT",
    workflowRail: ["Search intent", "Cluster", "Export"],
    documentPreview: ["Result set", "Authority shortlist", "Research handoff"],
  },
  "text-analysis": {
    title: "Interactive Text Analysis demo",
    description: "Simulate extraction of obligations, deadlines, and risk clusters.",
    promptPlaceholder:
      "Example: Extract payment, liability, and notice obligations from a mixed EN/CN vendor contract.",
    samplePrompt: "Parse obligations and timeline from vendor terms and correspondence thread.",
    actions: ["Extract obligations", "Flag risk language", "Build action checklist"],
    visualTitle: "Clause extraction and timeline mapping",
    visualSummary: "Turn dense material into obligations, timing, and high-risk wording with clearer visibility.",
    previewLabels: ["Clause map", "Timeline", "Risk flags"],
    glyph: "TX",
    workflowRail: ["Parse", "Prioritize", "Checklist"],
    documentPreview: ["Clause summary", "Deadline tracker", "Risk digest"],
  },
  "contract-generation": {
    title: "Interactive Drafting demo",
    description: "Generate a first-pass contract scaffold with negotiation posture.",
    promptPlaceholder:
      "Example: Draft a Hong Kong law governed mutual NDA for a software procurement project.",
    samplePrompt: "Generate balanced NDA with confidentiality, return obligations, and liability caps.",
    actions: ["Collect drafting inputs", "Generate clause scaffold", "Prepare review pack"],
    visualTitle: "Draft assembly and review posture",
    visualSummary: "Make generated documents feel controlled, reviewable, and enterprise-safe from the first screen.",
    previewLabels: ["Clause stack", "Fallback options", "Review pack"],
    glyph: "DR",
    workflowRail: ["Inputs", "Draft", "Review pack"],
    documentPreview: ["First draft", "Clause options", "Approval version"],
  },
  "contract-review": {
    title: "Interactive Review demo",
    description: "Surface clause risks and propose negotiation positions.",
    promptPlaceholder:
      "Example: Review indemnity, termination, and limitation clauses in this supplier agreement.",
    samplePrompt: "Review supplier paper for indemnity imbalance and weak service remedies.",
    actions: ["Score risk", "Suggest redlines", "Create negotiation summary"],
    visualTitle: "Risk scoring and negotiation guidance",
    visualSummary: "Surface priority issues, redline posture, and audience-ready explanation without burying the user in paragraphs.",
    previewLabels: ["Risk score", "Redline lane", "Negotiation note"],
    glyph: "RV",
    workflowRail: ["Flag", "Redline", "Negotiate"],
    documentPreview: ["Risk matrix", "Markup note", "Negotiation summary"],
  },
  "legal-documents": {
    title: "Interactive Legal Documents demo",
    description: "Compose structured legal correspondence and formal notices.",
    promptPlaceholder:
      "Example: Draft a formal demand letter for overdue invoices with escalation language.",
    samplePrompt: "Create a firm but professional demand letter with timeline and response deadline.",
    actions: ["Choose document type", "Compose draft", "Output client-ready format"],
    visualTitle: "Document packaging and delivery formats",
    visualSummary: "Let legal professionals see how outputs become formal correspondence, notes, and management-ready summaries.",
    previewLabels: ["Letter draft", "Approval format", "Shareable output"],
    glyph: "LD",
    workflowRail: ["Template", "Compose", "Package"],
    documentPreview: ["Formal letter", "Management note", "Delivery format"],
  },
};

const professionalSceneConfig = {
  "ai-chat": {
    lead: "Court-side intake and legal desk triage",
    support: "From initial narrative to structured matter handling for Hong Kong-focused legal teams.",
  },
  "legal-research": {
    lead: "Authority review with courtroom and library context",
    support: "Blend case-building discipline with practical memo production for regional work.",
  },
  "ai-retrieval": {
    lead: "Case retrieval lanes with operational legal context",
    support: "Visualize search, ranking, and handoff as a desk-to-court continuum.",
  },
  "text-analysis": {
    lead: "Document parsing in a formal legal workspace",
    support: "Turn dense contractual language into decision-ready legal outputs.",
  },
  "contract-generation": {
    lead: "Drafting room workflows for enterprise contracting",
    support: "Generate first drafts with clear review posture and courtroom-safe structure.",
  },
  "contract-review": {
    lead: "Risk review with judicial and desk-level framing",
    support: "Highlight redline priorities while preserving legal team clarity.",
  },
  "legal-documents": {
    lead: "Formal document packaging with court-aware presentation",
    support: "Prepare letters, notices, and management summaries with production polish.",
  },
};

const renderServiceHeroVisual = () => {
  const config = professionalDemoConfig[activeService];
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

const renderProfessionalVisualStudio = () => {
  const config = professionalDemoConfig[activeService];
  const navNode = document.querySelector(".service-nav");

  if (!config || !navNode || document.querySelector(".visual-studio-panel")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel visual-studio-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>${config.visualTitle}</h2>
      <span class="pill">Workflow Studio</span>
    </div>
    <p class="studio-summary">${config.visualSummary}</p>
    <div class="studio-grid">
      <article class="studio-card studio-card-primary">
        <span>Workflow map</span>
        <strong>${config.actions[0]}</strong>
        <div class="studio-lane">
          <i></i><i></i><i></i>
        </div>
        <p>Operational framing for Hong Kong and Asia matters, with cleaner pathing from intake to output.</p>
      </article>
      <article class="studio-card studio-artifact-card">
        <span>Preview artifacts</span>
        <div class="artifact-stack">
          <div class="artifact-item artifact-item-a"><b>${config.previewLabels[0]}</b></div>
          <div class="artifact-item artifact-item-b"><b>${config.previewLabels[1]}</b></div>
          <div class="artifact-item artifact-item-c"><b>${config.previewLabels[2]}</b></div>
        </div>
      </article>
      <article class="studio-card studio-card-secondary">
        <span>Designed for use</span>
        <ul>
          <li>Faster visual scanning for legal professionals</li>
          <li>Clearer handoff between AI prep and lawyer judgment</li>
          <li>Presentation-ready structure for internal stakeholders</li>
        </ul>
      </article>
    </div>
  `;

  navNode.insertAdjacentElement("afterend", panel);
};

const renderWorkflowRail = () => {
  const config = professionalDemoConfig[activeService];
  const studioNode = document.querySelector(".visual-studio-panel");

  if (!config || !studioNode || document.querySelector(".workflow-rail-panel")) {
    return;
  }

  const rail = document.createElement("section");
  rail.className = "panel workflow-rail-panel";
  rail.innerHTML = `
    <div class="panel-head">
      <h2>Workflow rail</h2>
      <span class="pill">Operational flow</span>
    </div>
    <div class="workflow-rail-grid">
      ${config.workflowRail
        .map(
          (step, index) => `
            <article class="workflow-step">
              <span>Step ${index + 1}</span>
              <strong>${step}</strong>
              <p>${config.actions[index] || config.actions[config.actions.length - 1]}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  studioNode.insertAdjacentElement("afterend", rail);
};

const renderDocumentPreviewPanel = () => {
  const config = professionalDemoConfig[activeService];
  const deliverPanel = document.querySelector("main .panel");

  if (!config || !deliverPanel || document.querySelector(".document-preview-panel")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel document-preview-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>Document preview</h2>
      <span class="pill">Upload and output</span>
    </div>
    <div class="document-preview-grid">
      <div class="upload-zone">
        <span>Upload lane</span>
        <strong>Drop document or precedent pack</strong>
        <p>Simulate an intake area for contracts, notes, authorities, or bilingual source materials.</p>
        <button class="demo-btn" type="button">Attach sample file</button>
      </div>
      <div class="document-stack">
        ${config.documentPreview
          .map(
            (item, index) => `
              <article class="document-sheet document-sheet-${index + 1}">
                <span>Artifact ${index + 1}</span>
                <strong>${item}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
  `;

  deliverPanel.insertAdjacentElement("beforebegin", panel);
};

const renderProfessionalSceneGallery = () => {
  const config = professionalSceneConfig[activeService];
  const workflowNode = document.querySelector(".workflow-rail-panel") || document.querySelector(".visual-studio-panel");

  if (!config || !workflowNode || document.querySelector(".scene-gallery-panel")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "panel scene-gallery-panel";
  panel.innerHTML = `
    <div class="panel-head">
      <h2>Generated legal scenes</h2>
      <span class="pill">Professional visual pack</span>
    </div>
    <p class="scene-summary"><strong>${config.lead}</strong> ${config.support}</p>
    <div class="scene-grid">
      <article class="scene-card">
        <span>Hong Kong court context</span>
        <strong>Court building and case framing</strong>
        <div class="scene-art scene-art-court" aria-hidden="true">
          <svg viewBox="0 0 320 180" role="presentation" focusable="false">
            <rect x="0" y="0" width="320" height="180" rx="18" fill="url(#courtBg)" />
            <rect x="34" y="88" width="252" height="68" rx="8" fill="rgba(10,21,34,0.72)" stroke="rgba(255,255,255,0.18)" />
            <rect x="56" y="58" width="208" height="14" rx="4" fill="rgba(79,216,199,0.38)" />
            <rect x="64" y="72" width="16" height="72" rx="4" fill="rgba(255,255,255,0.65)" />
            <rect x="104" y="72" width="16" height="72" rx="4" fill="rgba(255,255,255,0.65)" />
            <rect x="144" y="72" width="16" height="72" rx="4" fill="rgba(255,255,255,0.65)" />
            <rect x="184" y="72" width="16" height="72" rx="4" fill="rgba(255,255,255,0.65)" />
            <rect x="224" y="72" width="16" height="72" rx="4" fill="rgba(255,255,255,0.65)" />
            <path d="M34 88 160 24 286 88" fill="rgba(240,194,107,0.26)" stroke="rgba(240,194,107,0.52)" stroke-width="2" />
            <circle cx="270" cy="38" r="18" fill="rgba(79,216,199,0.26)" />
            <defs>
              <linearGradient id="courtBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="rgba(16,39,58,0.95)" />
                <stop offset="100%" stop-color="rgba(9,23,37,0.9)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </article>
      <article class="scene-card">
        <span>Legal desk workflow</span>
        <strong>Books, case files, and strategy board</strong>
        <div class="scene-art scene-art-desk" aria-hidden="true">
          <svg viewBox="0 0 320 180" role="presentation" focusable="false">
            <rect x="0" y="0" width="320" height="180" rx="18" fill="url(#deskBg)" />
            <rect x="30" y="120" width="260" height="28" rx="8" fill="rgba(16,30,47,0.78)" />
            <rect x="42" y="78" width="56" height="42" rx="6" fill="rgba(79,216,199,0.26)" stroke="rgba(79,216,199,0.6)" />
            <rect x="102" y="72" width="22" height="48" rx="4" fill="rgba(255,255,255,0.74)" />
            <rect x="126" y="66" width="22" height="54" rx="4" fill="rgba(240,194,107,0.62)" />
            <rect x="150" y="70" width="22" height="50" rx="4" fill="rgba(255,255,255,0.66)" />
            <rect x="178" y="88" width="92" height="24" rx="6" fill="rgba(18,42,64,0.82)" stroke="rgba(255,255,255,0.2)" />
            <path d="M200 66h42v22h-42z" fill="rgba(240,194,107,0.34)" stroke="rgba(240,194,107,0.6)" />
            <path d="M212 78h18" stroke="rgba(255,255,255,0.76)" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="274" cy="48" r="14" fill="rgba(255,255,255,0.12)" />
            <defs>
              <linearGradient id="deskBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="rgba(11,29,44,0.96)" />
                <stop offset="100%" stop-color="rgba(22,34,51,0.9)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </article>
    </div>
  `;

  workflowNode.insertAdjacentElement("afterend", panel);
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

renderServiceHeroVisual();
renderProfessionalVisualStudio();
renderWorkflowRail();
renderProfessionalSceneGallery();
renderDocumentPreviewPanel();
renderProfessionalDemoLab();
