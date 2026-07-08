(() => {
  const readMetaContent = (name) => {
    const node = document.querySelector(`meta[name="${name}"]`);
    return node?.content?.trim() || "";
  };

  const normalizeBaseUrl = (value) => value.replace(/\/$/, "");

  const storageValue = window.localStorage.getItem("techlegal_api_base_url") || "";
  const metaValue = readMetaContent("techlegal-api-base-url");
  const apiBaseUrl = normalizeBaseUrl(metaValue || storageValue);

  window.TechLegalConfig = {
    apiBaseUrl,
    region: readMetaContent("techlegal-region") || "asia",
    locale: readMetaContent("techlegal-locale") || "en-HK",
    mode: apiBaseUrl ? "live" : "demo",
    timeouts: {
      public: 12000,
      professional: 14000,
    },
  };
})();