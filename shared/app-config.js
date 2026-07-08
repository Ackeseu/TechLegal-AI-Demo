(() => {
  const readMetaContent = (name) => {
    const node = document.querySelector(`meta[name="${name}"]`);
    return node?.content?.trim() || "";
  };

  const normalizeBaseUrl = (value) => value.replace(/\/$/, "");
  const parseCsv = (value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const storageValue = window.localStorage.getItem("techlegal_api_base_url") || "";
  const metaValue = readMetaContent("techlegal-api-base-url");
  const apiBaseUrl = normalizeBaseUrl(metaValue || storageValue);
  const professionalRolesMeta = readMetaContent("techlegal-professional-roles");
  const professionalRoles = professionalRolesMeta ? parseCsv(professionalRolesMeta) : ["professional", "admin"];

  window.TechLegalConfig = {
    apiBaseUrl,
    region: readMetaContent("techlegal-region") || "asia",
    locale: readMetaContent("techlegal-locale") || "en-HK",
    mode: apiBaseUrl ? "live" : "demo",
    endpoints: {
      publicGuidance: "/v1/public/guidance",
      professionalAnalysis: "/v1/professional/analyze",
      publicUpload: "/v1/public/uploads",
      professionalUpload: "/v1/professional/uploads",
    },
    auth: {
      requireProfessionalAuth: true,
      persistSession: true,
    },
    requiredRoles: {
      professional: professionalRoles,
    },
    storageKeys: {
      apiBaseUrl: "techlegal_api_base_url",
      accessToken: "techlegal_access_token",
      userRoles: "techlegal_user_roles",
      userId: "techlegal_user_id",
      sessionId: "techlegal_session_id",
    },
    timeouts: {
      public: 12000,
      professional: 14000,
      upload: 18000,
    },
  };
})();