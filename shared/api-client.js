(() => {
  const config = window.TechLegalConfig || {
    apiBaseUrl: "",
    locale: "en-HK",
    region: "asia",
    timeouts: { public: 12000, professional: 14000 },
  };

  const postJson = async (url, payload, timeoutMs) => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

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
      window.clearTimeout(timeoutId);
    }
  };

  const withBaseUrl = (path) => {
    if (!config.apiBaseUrl) {
      return null;
    }

    return `${config.apiBaseUrl}${path}`;
  };

  window.TechLegalApiClient = {
    config,
    async requestPublicGuidance(payload) {
      const url = withBaseUrl("/v1/public/guidance");
      if (!url) {
        return null;
      }

      return postJson(
        url,
        {
          ...payload,
          locale: config.locale,
          region: config.region,
        },
        config.timeouts.public,
      );
    },
    async requestProfessionalAnalysis(payload) {
      const url = withBaseUrl("/v1/professional/analyze");
      if (!url) {
        return null;
      }

      return postJson(
        url,
        {
          ...payload,
          locale: config.locale,
          region: config.region,
        },
        config.timeouts.professional,
      );
    },
  };
})();