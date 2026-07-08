const templates = {
  research:
    "Example: Summarise the enforceability risks in this non-compete clause under Hong Kong employment practice, identify missing facts, and propose a client-ready next-steps list.",
  review:
    "Example: Review this distribution agreement and flag clauses that may create exclusivity, termination, or governing-law risks for our client.",
  draft:
    "Example: Draft a first-pass board resolution approving entry into a services agreement with standard authority and signing language.",
  compare:
    "Example: Compare the English and Chinese versions of this clause and highlight any meaning drift that could affect liability or payment terms.",
};

const viewContent = {
  "ask-legal-ai": {
    eyebrow: "Hong Kong legal operations",
    heroTitle: "Structured legal AI for teams that need confidence, not novelty.",
    heroSummary:
      "A professional Hong Kong-facing workspace with stronger jurisdiction framing, cleaner decision paths, and presentation-ready outputs for legal and business teams.",
    panelLabel: "Ask Legal AI",
    panelTitle: "Start with a legal task.",
    status: "Source-aware workflow",
    prompt:
      "Example: Summarise the enforceability risks in this non-compete clause under Hong Kong employment practice, identify missing facts, and propose a client-ready next-steps list.",
    primaryAction: "Run analysis",
    secondaryAction: "Attach matter files",
    tertiaryAction: "Use prompt template",
    tags: ["Employment", "Commercial contracts", "Cross-border matters", "Board and governance"],
    insightLabel: "Why this version",
    insightTitle: "Built to look procurement-safe.",
    insightBody:
      "The layout emphasizes jurisdiction, source expectations, and repeatable workflows over chatbot personality.",
    metrics: [
      { value: "4", label: "Core workflows" },
      { value: "HK", label: "Default jurisdiction" },
      { value: "EN", label: "Primary interface" },
      { value: "Bilingual", label: "Document-ready" },
    ],
    workspaceLabel: "Core workflows",
    workspaceTitle: "Designed around legal jobs, not feature labels.",
    rows: [
      { title: "Research", body: "Issue spotting, case orientation, regulation lookup, and structured summaries." },
      { title: "Review", body: "Clause risk explanation, missing term detection, and negotiation points." },
      { title: "Draft", body: "First-pass contracts, letters, board materials, and internal guidance notes." },
      { title: "Compare", body: "English-Chinese clause alignment and document delta review for cross-border work." },
    ],
    trustLabel: "Trust layer",
    trustTitle: "Signals that matter to legal teams.",
    trustItems: [
      "Jurisdiction pinned at the top of the workflow",
      "Professional disclaimers near the point of action",
      "Support for bilingual source materials",
      "Clear handoff path to a human legal professional",
    ],
  },
  research: {
    eyebrow: "Research workspace",
    heroTitle: "Hong Kong research flows should feel closer to a matter desk than a chatbot.",
    heroSummary:
      "This sample screen shows how legal research can be framed around source types, issue trees, and follow-up tasks for internal or client-facing work.",
    panelLabel: "Research",
    panelTitle: "Move from issue to authority faster.",
    status: "Case law and ordinance mode",
    prompt:
      "Example: Prepare a Hong Kong research note on whether a restrictive covenant is likely enforceable in a senior employee departure scenario, and identify the missing factual assumptions.",
    primaryAction: "Run research",
    secondaryAction: "Attach authorities",
    tertiaryAction: "Open query templates",
    tags: ["Case law", "Ordinances", "Employment", "Internal memo"],
    insightLabel: "Research design",
    insightTitle: "Built for authority-first workflows.",
    insightBody:
      "The interface foregrounds source type, issue framing, and research follow-through so legal teams can turn results into advice notes or matter strategy.",
    metrics: [
      { value: "12", label: "Saved queries" },
      { value: "2", label: "Source lanes" },
      { value: "HK", label: "Pinned jurisdiction" },
      { value: "Memo", label: "Output mode" },
    ],
    workspaceLabel: "Sample modules",
    workspaceTitle: "Example sub-sections under Research.",
    rows: [
      { title: "Case Law Research", body: "Find relevant authorities, identify fact patterns, and extract ratios that can support advice drafting." },
      { title: "Ordinance Tracker", body: "Jump between statutory language, amendment history, and practical implications for the matter." },
      { title: "Issue List", body: "Keep open questions and missing facts visible while research is still developing." },
      { title: "Memo Builder", body: "Convert research output into client-ready or internal-note structure without reformatting from scratch." },
    ],
    trustLabel: "Source controls",
    trustTitle: "What a legal team wants to confirm at a glance.",
    trustItems: [
      "What source types are being searched",
      "Whether the result is summarised or quoted",
      "What issues still need lawyer judgment",
      "Whether the output is suitable for internal or client-facing use",
    ],
  },
  search: {
    eyebrow: "Search workspace",
    heroTitle: "Case and regulation search should show retrieval intent, not just a blank box.",
    heroSummary:
      "This sample state presents deeper menu content for similar cases, regulation search, and issue-based retrieval so users understand what each search mode is for.",
    panelLabel: "Case and Regulation Search",
    panelTitle: "Search by issue, authority, or factual pattern.",
    status: "Retrieval-first interface",
    prompt:
      "Example: Find Hong Kong authorities dealing with supplier termination for material breach where service levels were repeatedly missed.",
    primaryAction: "Search authorities",
    secondaryAction: "Upload source facts",
    tertiaryAction: "View search recipes",
    tags: ["Similar cases", "Regulations", "Disputes", "Fact patterns"],
    insightLabel: "Search design",
    insightTitle: "Different search tasks deserve different entry points.",
    insightBody:
      "A presentation-ready search module should explain whether the user is looking for cases, ordinances, or analogous factual patterns, rather than hiding those choices behind one generic query field.",
    metrics: [
      { value: "2", label: "Primary search modes" },
      { value: "Fast", label: "Issue routing" },
      { value: "HK", label: "Legal scope" },
      { value: "EN/CN", label: "Input-ready" },
    ],
    workspaceLabel: "Search modules",
    workspaceTitle: "Example sub-sections under Search.",
    rows: [
      { title: "Similar Cases", body: "Search from dispute facts, likely causes of action, or an uploaded judgment to locate comparable authorities." },
      { title: "Regulation Search", body: "Switch to ordinance or rule search when the user needs statutory text, regulator guidance, or compliance framing." },
      { title: "Issue Buckets", body: "Predefined issue buckets reduce ambiguity for employment, tenancy, procurement, and governance matters." },
      { title: "Result Triage", body: "Cluster outputs into highly relevant, worth checking, and background context instead of dumping a flat list." },
    ],
    trustLabel: "Search trust",
    trustTitle: "Why search needs stronger UX framing.",
    trustItems: [
      "Users should know what corpus is being searched",
      "Search results should separate direct matches from analogies",
      "Uploaded source documents should influence retrieval visibly",
      "Cross-border inputs should not silently blur Hong Kong scope",
    ],
  },
  "draft-contracts": {
    eyebrow: "Drafting workspace",
    heroTitle: "Drafting should feel like a controlled assembly flow, not open-ended prompting.",
    heroSummary:
      "This sample view shows how deeper menu content can support commercial agreements, board materials, and more guided drafting states for professional users.",
    panelLabel: "Draft Contracts",
    panelTitle: "Build a first draft with clearer structure.",
    status: "Document assembly mode",
    prompt:
      "Example: Draft a Hong Kong law governed mutual NDA for a software procurement discussion, with balanced confidentiality, return-or-destruction, and liability wording.",
    primaryAction: "Generate first draft",
    secondaryAction: "Upload precedent",
    tertiaryAction: "Choose drafting style",
    tags: ["NDA", "SaaS agreements", "Board papers", "Procurement"],
    insightLabel: "Drafting design",
    insightTitle: "Lawyers want repeatability more than novelty.",
    insightBody:
      "A good drafting interface should surface party roles, governing law, clause posture, and precedent handling before the model writes anything substantial.",
    metrics: [
      { value: "3", label: "Draft styles" },
      { value: "HK", label: "Governing law" },
      { value: "1st", label: "Draft stage" },
      { value: "Precedent", label: "Upload mode" },
    ],
    workspaceLabel: "Drafting modules",
    workspaceTitle: "Example sub-sections under Draft Contracts.",
    rows: [
      { title: "Commercial Agreements", body: "Start from common document types such as NDA, supplier agreement, SaaS terms, or service contract." },
      { title: "Board Materials", body: "Support resolutions, cover notes, and approval summaries alongside the contract output." },
      { title: "Clause Posture", body: "Set whether the user wants balanced, buyer-side, or seller-side drafting before generation starts." },
      { title: "Precedent Merge", body: "Blend firm precedent and uploaded language into the draft path without losing structure." },
    ],
    trustLabel: "Drafting trust",
    trustTitle: "Professional drafting needs transparent controls.",
    trustItems: [
      "Precedent use should be explicit",
      "Risk posture should be configurable",
      "Generated language should be easy to revise",
      "Escalation to lawyer review should remain obvious",
    ],
  },
  "review-documents": {
    eyebrow: "Review workspace",
    heroTitle: "Document review works better when risk is organised before the user starts reading paragraphs.",
    heroSummary:
      "This sample state demonstrates deeper menu content for clause redlines and bilingual comparison, both of which are important for Hong Kong commercial practice.",
    panelLabel: "Review Documents",
    panelTitle: "Surface risks, then draft the response.",
    status: "Clause-risk mode",
    prompt:
      "Example: Review this supplier agreement and flag indemnity imbalance, weak termination support, missing service credits, and any wording that should be revised before signature.",
    primaryAction: "Run review",
    secondaryAction: "Upload agreement",
    tertiaryAction: "Open risk matrix",
    tags: ["Clause redlines", "Bilingual compare", "Supplier paper", "Risk matrix"],
    insightLabel: "Review design",
    insightTitle: "The UI should move from issue spotting to response drafting.",
    insightBody:
      "Professional users usually want more than a summary. They want flagged clauses, negotiation notes, and a fast path into proposed wording or client explanation.",
    metrics: [
      { value: "Red", label: "High-risk markers" },
      { value: "2-up", label: "Side-by-side compare" },
      { value: "EN/CN", label: "Clause support" },
      { value: "Client", label: "Response-ready" },
    ],
    workspaceLabel: "Review modules",
    workspaceTitle: "Example sub-sections under Review Documents.",
    rows: [
      { title: "Clause Redlines", body: "Highlight legal risk, commercial imbalance, and suggested language in a single review path." },
      { title: "Bilingual Compare", body: "Compare English and Chinese clauses to catch drift that may affect liability, timing, or payment interpretation." },
      { title: "Negotiation Notes", body: "Turn review findings into concise internal talking points or external markup rationale." },
      { title: "Approval Readiness", body: "Show whether the agreement is ready to sign, needs business input, or needs external counsel review." },
    ],
    trustLabel: "Review trust",
    trustTitle: "What makes review output presentation-ready.",
    trustItems: [
      "Clear ranking of issues by severity",
      "Explanation in legal and business terms",
      "Visibility of bilingual differences where relevant",
      "Suggested response path, not only issue spotting",
    ],
  },
  "matter-workspace": {
    eyebrow: "Matter workspace",
    heroTitle: "A professional legal AI demo should show how the work hangs together across matters.",
    heroSummary:
      "This sample matter view adds depth for live matters, management reporting, and multi-step work so the demo feels closer to a real operating environment.",
    panelLabel: "Matter Workspace",
    panelTitle: "Track work across live files and management views.",
    status: "Matter-linked mode",
    prompt:
      "Example: Prepare a weekly management summary covering contract review volume, red-flag matters, and outstanding escalations for the Hong Kong legal team.",
    primaryAction: "Generate workspace view",
    secondaryAction: "Link matter folder",
    tertiaryAction: "Open reporting template",
    tags: ["Live matters", "Reporting", "Escalations", "Weekly summary"],
    insightLabel: "Matter design",
    insightTitle: "The company demo should suggest operational depth.",
    insightBody:
      "Showing matter continuity makes the product feel more credible to enterprise buyers because it implies history, collaboration, and management oversight rather than one-off chats.",
    metrics: [
      { value: "18", label: "Live matters" },
      { value: "6", label: "Escalations" },
      { value: "3", label: "Reports due" },
      { value: "HK", label: "Team scope" },
    ],
    workspaceLabel: "Matter modules",
    workspaceTitle: "Example sub-sections under Matter Workspace.",
    rows: [
      { title: "Live Matters", body: "Group uploads, research notes, generated drafts, and review outputs around one working file." },
      { title: "Management Reports", body: "Summarise volume, risk mix, bottlenecks, and escalation needs for team leads or management." },
      { title: "Task Routing", body: "Separate AI-assisted preparation from lawyer sign-off and stakeholder review steps." },
      { title: "Audit Trail", body: "Keep prompts, outputs, and revisions attributable for internal governance and review." },
    ],
    trustLabel: "Operational trust",
    trustTitle: "What makes this feel enterprise-ready.",
    trustItems: [
      "Matter context should persist across tasks",
      "Leadership should be able to see status and risk concentration",
      "Outputs should be attributable and reviewable",
      "Lawyer sign-off should remain distinct from AI assistance",
    ],
  },
};

const tabs = document.querySelectorAll(".task-tab");
const prompt = document.getElementById("promptInput");
const navItems = document.querySelectorAll(".nav-item");
const navGroups = document.querySelectorAll(".nav-group");
const subnavItems = document.querySelectorAll(".subnav-item");

const eyebrowText = document.getElementById("eyebrowText");
const heroTitle = document.getElementById("heroTitle");
const heroSummary = document.getElementById("heroSummary");
const panelLabel = document.getElementById("panelLabel");
const panelTitle = document.getElementById("panelTitle");
const statusPill = document.getElementById("statusPill");
const primaryAction = document.getElementById("primaryAction");
const secondaryAction = document.getElementById("secondaryAction");
const tertiaryAction = document.getElementById("tertiaryAction");
const promptTags = document.getElementById("promptTags");
const insightLabel = document.getElementById("insightLabel");
const insightTitle = document.getElementById("insightTitle");
const insightBody = document.getElementById("insightBody");
const metricGrid = document.getElementById("metricGrid");
const workspaceLabel = document.getElementById("workspaceLabel");
const workspaceTitle = document.getElementById("workspaceTitle");
const workspaceRows = document.getElementById("workspaceRows");
const trustLabel = document.getElementById("trustLabel");
const trustTitle = document.getElementById("trustTitle");
const trustList = document.getElementById("trustList");
const outputTitle = document.getElementById("outputTitle");
const outputBadge = document.getElementById("outputBadge");
const outputPreviewGrid = document.getElementById("outputPreviewGrid");
const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
const professionalSidebar = document.getElementById("professionalSidebar");

const backendConfig = {
  baseUrl: (window.localStorage.getItem("techlegal_api_base_url") || "").trim(),
  timeoutMs: 14000,
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const postJson = async (url, payload) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), backendConfig.timeoutMs);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API request failed with ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
};

const outputContent = {
  "ask-legal-ai": {
    title: "Example assistant output",
    badge: "Client-ready summary",
    cards: [
      {
        tone: "strong",
        label: "Priority issue",
        title: "Summarise the problem before expanding the advice.",
        body: "Start with the likely legal posture, then explain what facts are still missing before any definitive position is taken.",
      },
      {
        label: "Recommended action",
        list: ["Clarify the timeline", "Confirm governing documents", "Separate urgent risks from background issues"],
      },
      {
        tone: "accent",
        label: "Shareable format",
        body: "The same content should be easy to convert into an internal note, client email, or management summary.",
      },
    ],
  },
  research: {
    title: "Example research output",
    badge: "Internal memo style",
    cards: [
      {
        tone: "strong",
        label: "Research note",
        title: "Restrictive covenant likely turns on role, duration, and legitimate business interest.",
        body: "The output should surface the issue rule, missing facts, and authority direction instead of only providing a plain-language answer.",
      },
      {
        label: "What the note includes",
        list: ["Issue framing", "Authority direction", "Missing assumptions"],
      },
      {
        tone: "accent",
        label: "Handoff",
        body: "Enable direct conversion into a short client update or a fuller internal memo outline.",
      },
    ],
  },
  search: {
    title: "Example search output",
    badge: "Retrieval summary",
    cards: [
      {
        tone: "strong",
        label: "Top cluster",
        title: "Most relevant authorities align with repeated service failure and termination-for-breach analysis.",
        body: "A useful search result groups direct matches, background authorities, and analogous cases instead of one flat list.",
      },
      {
        label: "Output structure",
        list: ["Direct matches", "Worth checking", "Context only"],
      },
      {
        tone: "accent",
        label: "Next move",
        body: "Let the user send promising authorities directly into research or client-note workflows.",
      },
    ],
  },
  "draft-contracts": {
    title: "Example drafting output",
    badge: "First draft view",
    cards: [
      {
        tone: "strong",
        label: "Draft posture",
        title: "Balanced Hong Kong-governed NDA produced with negotiation-ready clause framing.",
        body: "The first draft should already reflect party roles, governing law, and the requested commercial stance.",
      },
      {
        label: "Included modules",
        list: ["Core clauses", "Optional negotiation points", "Board-facing summary"],
      },
      {
        tone: "accent",
        label: "Review path",
        body: "Give the legal team a fast route into redlining or clause-by-clause explanation after generation.",
      },
    ],
  },
  "review-documents": {
    title: "Example review output",
    badge: "Client-ready summary",
    cards: [
      {
        tone: "strong",
        label: "Priority issue",
        title: "Liability allocation needs revision before signature.",
        body: "Supplier-side drafting overexposes the customer on indemnity and weakens the practical recovery path.",
      },
      {
        label: "Recommended action",
        list: ["Revise indemnity scope", "Tighten termination support", "Clarify service credit remedies"],
      },
      {
        tone: "accent",
        label: "Shareable format",
        body: "Present findings as a short internal note, client email, or redline rationale depending on audience.",
      },
    ],
  },
  "matter-workspace": {
    title: "Example management output",
    badge: "Weekly summary",
    cards: [
      {
        tone: "strong",
        label: "Leadership summary",
        title: "Three matters need escalation this week and contract review volume remains concentrated in procurement work.",
        body: "Operational views should help leadership understand workload, risk mix, and unresolved items quickly.",
      },
      {
        label: "Report contents",
        list: ["Open red-risk matters", "Volume by workflow", "Bottlenecks and approvals"],
      },
      {
        tone: "accent",
        label: "Decision support",
        body: "Translate matter activity into staffing, escalation, or commercial decision points for management review.",
      },
    ],
  },
};

let activeView = "ask-legal-ai";

const renderOutputPreview = (output) => {
  outputTitle.textContent = output.title;
  outputBadge.textContent = output.badge;
  outputPreviewGrid.innerHTML = output.cards
    .map((card) => {
      const body = card.list
        ? `<ul>${card.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(card.body || "")}</p>`;

      return `<article class="output-preview-card ${escapeHtml(card.tone || "")}" ><span>${escapeHtml(card.label || "")}</span>${card.title ? `<strong>${escapeHtml(card.title)}</strong>` : ""}${body}</article>`;
    })
    .join("");
};

const normalizeBackendOutput = (payload, viewKey) => {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const fallback = outputContent[viewKey] || outputContent["ask-legal-ai"];
  const cards = Array.isArray(payload.cards)
    ? payload.cards.slice(0, 3).map((card, index) => ({
        tone: card.tone || fallback.cards[index]?.tone || "",
        label: card.label || `Block ${index + 1}`,
        title: card.title,
        body: card.body,
        list: Array.isArray(card.list) ? card.list.slice(0, 4) : undefined,
      }))
    : fallback.cards;

  return {
    title: payload.title || fallback.title,
    badge: payload.badge || `${fallback.badge} - Live`,
    cards,
  };
};

const fetchWorkspaceOutput = async (viewKey, promptText) => {
  if (!backendConfig.baseUrl) {
    return null;
  }

  const data = await postJson(`${backendConfig.baseUrl}/v1/professional/analyze`, {
    workflow: viewKey,
    prompt: promptText,
    locale: "en-HK",
    region: "asia",
  });

  return normalizeBackendOutput(data, viewKey);
};

const renderView = (viewKey) => {
  const content = viewContent[viewKey];

  eyebrowText.textContent = content.eyebrow;
  heroTitle.textContent = content.heroTitle;
  heroSummary.textContent = content.heroSummary;
  panelLabel.textContent = content.panelLabel;
  panelTitle.textContent = content.panelTitle;
  statusPill.textContent = content.status;
  prompt.placeholder = content.prompt;
  primaryAction.textContent = content.primaryAction;
  secondaryAction.textContent = content.secondaryAction;
  tertiaryAction.textContent = content.tertiaryAction;

  promptTags.innerHTML = content.tags.map((tag) => `<span>${tag}</span>`).join("");
  insightLabel.textContent = content.insightLabel;
  insightTitle.textContent = content.insightTitle;
  insightBody.textContent = content.insightBody;
  metricGrid.innerHTML = content.metrics
    .map((metric) => `<div><strong>${metric.value}</strong><span>${metric.label}</span></div>`)
    .join("");
  workspaceLabel.textContent = content.workspaceLabel;
  workspaceTitle.textContent = content.workspaceTitle;
  workspaceRows.innerHTML = content.rows
    .map((row) => `<div class="row"><strong>${row.title}</strong><p>${row.body}</p></div>`)
    .join("");
  trustLabel.textContent = content.trustLabel;
  trustTitle.textContent = content.trustTitle;
  trustList.innerHTML = content.trustItems.map((item) => `<li>${item}</li>`).join("");

  const output = outputContent[viewKey] || outputContent["ask-legal-ai"];
  renderOutputPreview(output);
};

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeView = item.dataset.view;

    navItems.forEach((candidate) => candidate.classList.toggle("active", candidate === item));
    navGroups.forEach((group) => group.classList.toggle("active", group.dataset.view === activeView));

    const matchingSubnav = document.querySelector(`.subnav-item[data-view="${activeView}"]`);
    subnavItems.forEach((candidate) => candidate.classList.toggle("active", candidate === matchingSubnav));

    renderView(activeView);
  });
});

subnavItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeView = item.dataset.view;

    navItems.forEach((candidate) => candidate.classList.toggle("active", candidate.dataset.view === activeView));
    navGroups.forEach((group) => group.classList.toggle("active", group.dataset.view === activeView));
    subnavItems.forEach((candidate) => candidate.classList.toggle("active", candidate === item));

    renderView(activeView);
  });
});

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    for (const candidate of tabs) {
      candidate.classList.remove("active");
    }

    tab.classList.add("active");
    const template = tab.dataset.template;
    prompt.placeholder = templates[template] || templates.research;
  });
}

if (primaryAction && prompt) {
  primaryAction.addEventListener("click", async () => {
    const originalLabel = primaryAction.textContent;
    primaryAction.disabled = true;
    primaryAction.textContent = "Running...";

    try {
      const liveOutput = await fetchWorkspaceOutput(activeView, prompt.value.trim());
      renderOutputPreview(liveOutput || outputContent[activeView] || outputContent["ask-legal-ai"]);
      if (!liveOutput) {
        outputBadge.textContent = `${outputBadge.textContent} - Demo`;
      }
    } catch (_error) {
      renderOutputPreview(outputContent[activeView] || outputContent["ask-legal-ai"]);
      outputBadge.textContent = `${outputBadge.textContent} - Fallback`;
    } finally {
      primaryAction.disabled = false;
      primaryAction.textContent = originalLabel;
    }
  });
}

renderView(activeView);

if (mobileSidebarToggle && professionalSidebar) {
  mobileSidebarToggle.addEventListener("click", () => {
    const nextExpanded = !professionalSidebar.classList.contains("open");
    professionalSidebar.classList.toggle("open", nextExpanded);
    mobileSidebarToggle.setAttribute("aria-expanded", String(nextExpanded));
  });
}