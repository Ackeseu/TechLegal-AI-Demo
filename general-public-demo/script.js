const promptsByMode = {
  ask: "Example: My landlord wants to keep my deposit after I moved out. What issues should I look at under Hong Kong practice?",
  review: "Example: Please review this employment contract clause and explain any risks in plain English.",
  draft: "Example: Help me draft a polite but firm payment reminder letter for an overdue invoice.",
};

const resultContent = {
  ask: {
    title: "Recommended next steps",
    badge: "Ask mode",
    cards: [
      {
        tone: "warm",
        label: "What this means",
        body: "Explain the legal issue in plain English first so the user understands what kind of problem they are dealing with.",
      },
      {
        tone: "minty",
        label: "Do this first",
        list: ["Write down the timeline", "Keep screenshots and messages", "List the outcome you want"],
      },
      {
        tone: "sky",
        label: "Escalate if needed",
        body: "If the matter involves money, deadlines, or disputed facts, suggest a lawyer or formal channel early.",
      },
    ],
  },
  review: {
    title: "Document review preview",
    badge: "Review mode",
    cards: [
      {
        tone: "minty",
        label: "Plain-English summary",
        body: "Start with a short summary of what the document is trying to do before showing any legal risk labels.",
      },
      {
        tone: "warm",
        label: "Watch for",
        list: ["Payment terms", "Notice deadlines", "Termination rights"],
      },
      {
        tone: "sky",
        label: "Ask a lawyer when",
        body: "Flag unclear wording, one-sided liability, or anything the user may sign without understanding fully.",
      },
    ],
  },
  draft: {
    title: "Drafting preview",
    badge: "Draft mode",
    cards: [
      {
        tone: "sky",
        label: "Draft style",
        body: "Use a polite, usable first draft with simple language that the user can send or review quickly.",
      },
      {
        tone: "warm",
        label: "Include",
        list: ["Names and dates", "The request or complaint", "A clear deadline for reply"],
      },
      {
        tone: "minty",
        label: "Next step",
        body: "Offer a shorter and firmer alternative version for users who need escalation after no response.",
      },
    ],
  },
};

const pills = document.querySelectorAll(".mode-pill");
const textarea = document.querySelector("textarea");
const resultTitle = document.getElementById("resultTitle");
const resultBadge = document.getElementById("resultBadge");
const resultGrid = document.getElementById("resultGrid");
const generateGuidanceBtn = document.getElementById("generateGuidanceBtn");

let activeMode = "ask";

const backendConfig = {
  baseUrl: (window.localStorage.getItem("techlegal_api_base_url") || "").trim(),
  timeoutMs: 12000,
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

const normalizeBackendContent = (payload) => {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const fallback = resultContent[activeMode] || resultContent.ask;
  const cards = Array.isArray(payload.cards)
    ? payload.cards.slice(0, 3).map((card, index) => ({
        tone: card.tone || fallback.cards[index]?.tone || "warm",
        label: card.label || `Step ${index + 1}`,
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

const fetchGuidanceContent = async (mode, promptText) => {
  if (!backendConfig.baseUrl) {
    return null;
  }

  const data = await postJson(`${backendConfig.baseUrl}/v1/public/guidance`, {
    mode,
    prompt: promptText,
    locale: "en-HK",
    region: "asia",
  });

  return normalizeBackendContent(data);
};

const renderResultPreview = (overrideContent = null) => {
  const content = overrideContent || resultContent[activeMode] || resultContent.ask;

  resultTitle.textContent = content.title;
  resultBadge.textContent = content.badge;
  resultGrid.innerHTML = content.cards
    .map((card) => {
      const body = card.list
        ? `<ul>${card.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : `<p>${escapeHtml(card.body || "")}</p>`;

      return `<article class="result-card ${escapeHtml(card.tone || "warm")}"><span>${escapeHtml(card.label || "")}</span>${body}</article>`;
    })
    .join("");
};

for (const pill of pills) {
  pill.addEventListener("click", () => {
    for (const candidate of pills) {
      candidate.classList.remove("active");
    }

    pill.classList.add("active");
    const mode = pill.dataset.mode;
    activeMode = mode;
    textarea.placeholder = promptsByMode[mode] || promptsByMode.ask;
    renderResultPreview();
  });
}

for (const suggestion of document.querySelectorAll(".suggestion")) {
  suggestion.addEventListener("click", () => {
    textarea.value = suggestion.textContent + " - what should I do first in Hong Kong?";
    textarea.focus();
  });
}

generateGuidanceBtn.addEventListener("click", async () => {
  const originalLabel = generateGuidanceBtn.textContent;
  generateGuidanceBtn.disabled = true;
  generateGuidanceBtn.textContent = "Generating...";

  try {
    const liveContent = await fetchGuidanceContent(activeMode, textarea.value.trim());
    renderResultPreview(liveContent);
  } catch (_error) {
    renderResultPreview();
    resultBadge.textContent = `${resultBadge.textContent} - Fallback`;
  } finally {
    generateGuidanceBtn.disabled = false;
    generateGuidanceBtn.textContent = originalLabel;
  }
});

renderResultPreview();