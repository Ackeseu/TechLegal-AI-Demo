(() => {
  const config = window.TechLegalConfig || {
    apiBaseUrl: "",
    locale: "en-HK",
    region: "asia",
    timeouts: { public: 12000, professional: 14000, upload: 18000 },
  };
  const authClient = window.TechLegalAuthClient;

  class ApiClientError extends Error {
    constructor(message, options = {}) {
      super(message);
      this.name = "ApiClientError";
      this.code = options.code || "api_error";
      this.status = options.status || 0;
      this.details = options.details;
      this.cause = options.cause;
    }
  }

  const buildHeaders = (extraHeaders = {}) => ({
    "Content-Type": "application/json",
    ...(authClient ? authClient.getAuthHeaders() : {}),
    ...extraHeaders,
  });

  const postJson = async (url, payload, timeoutMs, options = {}) => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: buildHeaders(options.headers),
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      let data = null;
      try {
        data = await response.json();
      } catch (_error) {
        data = null;
      }

      if (!response.ok) {
        throw new ApiClientError(`API request failed with ${response.status}`, {
          code: "http_error",
          status: response.status,
          details: data,
        });
      }

      return data;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new ApiClientError("API request timed out", {
          code: "timeout",
          cause: error,
        });
      }

      if (error instanceof ApiClientError) {
        throw error;
      }

      throw new ApiClientError("Unexpected API client error", {
        code: "unexpected",
        cause: error,
      });
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

  const assertProfessionalAccess = () => {
    const requiresAuth = config.auth?.requireProfessionalAuth !== false;
    const requiredRoles = config.requiredRoles?.professional || ["professional", "admin"];

    if (!requiresAuth) {
      return;
    }

    if (!authClient || !authClient.isAuthenticated()) {
      throw new ApiClientError("Professional access requires authentication", {
        code: "auth_required",
        status: 401,
      });
    }

    if (!authClient.hasAnyRole(requiredRoles)) {
      throw new ApiClientError("Professional access requires role authorization", {
        code: "forbidden",
        status: 403,
      });
    }
  };

  window.TechLegalApiClient = {
    config,
    ApiClientError,
    async requestPublicGuidance(payload) {
      const url = withBaseUrl(config.endpoints?.publicGuidance || "/v1/public/guidance");
      if (!url) {
        return null;
      }

      return postJson(
        url,
        {
          ...payload,
          locale: config.locale,
          region: config.region,
          sessionId: authClient?.getSession().sessionId || undefined,
        },
        config.timeouts.public,
      );
    },
    async requestProfessionalAnalysis(payload) {
      assertProfessionalAccess();

      const url = withBaseUrl(config.endpoints?.professionalAnalysis || "/v1/professional/analyze");
      if (!url) {
        return null;
      }

      return postJson(
        url,
        {
          ...payload,
          locale: config.locale,
          region: config.region,
          actor: authClient?.getSession().userId || "",
        },
        config.timeouts.professional,
      );
    },
    async uploadPublicDocument(payload) {
      const url = withBaseUrl(config.endpoints?.publicUpload || "/v1/public/uploads");
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
        config.timeouts.upload,
      );
    },
    async uploadProfessionalMatterFile(payload) {
      assertProfessionalAccess();

      const url = withBaseUrl(config.endpoints?.professionalUpload || "/v1/professional/uploads");
      if (!url) {
        return null;
      }

      return postJson(
        url,
        {
          ...payload,
          locale: config.locale,
          region: config.region,
          actor: authClient?.getSession().userId || "",
        },
        config.timeouts.upload,
      );
    },
  };
})();