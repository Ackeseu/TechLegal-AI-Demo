(() => {
  const config = window.TechLegalConfig || {};
  const storageKeys = {
    accessToken: config.storageKeys?.accessToken || "techlegal_access_token",
    userRoles: config.storageKeys?.userRoles || "techlegal_user_roles",
    userId: config.storageKeys?.userId || "techlegal_user_id",
    sessionId: config.storageKeys?.sessionId || "techlegal_session_id",
  };

  const readMetaContent = (name) => {
    const node = document.querySelector(`meta[name="${name}"]`);
    return node?.content?.trim() || "";
  };

  const parseRoles = (value) =>
    String(value || "")
      .split(",")
      .map((role) => role.trim())
      .filter(Boolean);

  const loadSession = () => {
    const metaToken = readMetaContent("techlegal-auth-token");
    const metaRoles = readMetaContent("techlegal-user-roles");
    const metaUserId = readMetaContent("techlegal-user-id");
    const metaSessionId = readMetaContent("techlegal-session-id");

    const storedToken = window.localStorage.getItem(storageKeys.accessToken) || "";
    const storedRoles = window.localStorage.getItem(storageKeys.userRoles) || "";
    const storedUserId = window.localStorage.getItem(storageKeys.userId) || "";
    const storedSessionId = window.localStorage.getItem(storageKeys.sessionId) || "";

    return {
      accessToken: metaToken || storedToken,
      roles: parseRoles(metaRoles || storedRoles),
      userId: metaUserId || storedUserId,
      sessionId: metaSessionId || storedSessionId,
    };
  };

  let session = loadSession();

  const persistSession = () => {
    if (!config.auth?.persistSession) {
      return;
    }

    const rolesValue = (session.roles || []).join(",");

    if (session.accessToken) {
      window.localStorage.setItem(storageKeys.accessToken, session.accessToken);
    } else {
      window.localStorage.removeItem(storageKeys.accessToken);
    }

    if (rolesValue) {
      window.localStorage.setItem(storageKeys.userRoles, rolesValue);
    } else {
      window.localStorage.removeItem(storageKeys.userRoles);
    }

    if (session.userId) {
      window.localStorage.setItem(storageKeys.userId, session.userId);
    } else {
      window.localStorage.removeItem(storageKeys.userId);
    }

    if (session.sessionId) {
      window.localStorage.setItem(storageKeys.sessionId, session.sessionId);
    } else {
      window.localStorage.removeItem(storageKeys.sessionId);
    }
  };

  const setSession = (nextSession = {}, options = {}) => {
    session = {
      accessToken: String(nextSession.accessToken || "").trim(),
      roles: parseRoles(nextSession.roles || []),
      userId: String(nextSession.userId || "").trim(),
      sessionId: String(nextSession.sessionId || "").trim(),
    };

    if (options.persist !== false) {
      persistSession();
    }

    return { ...session, roles: [...session.roles] };
  };

  const clearSession = () => {
    session = { accessToken: "", roles: [], userId: "", sessionId: "" };
    window.localStorage.removeItem(storageKeys.accessToken);
    window.localStorage.removeItem(storageKeys.userRoles);
    window.localStorage.removeItem(storageKeys.userId);
    window.localStorage.removeItem(storageKeys.sessionId);
  };

  const getSession = () => ({ ...session, roles: [...session.roles] });
  const isAuthenticated = () => Boolean(session.accessToken);

  const hasRole = (role) => {
    if (!role) {
      return false;
    }

    return session.roles.includes(role);
  };

  const hasAnyRole = (roles = []) => {
    if (!Array.isArray(roles) || roles.length === 0) {
      return true;
    }

    return roles.some((role) => hasRole(role));
  };

  const getAuthHeaders = () => {
    if (!isAuthenticated()) {
      return {};
    }

    const headers = {
      Authorization: `Bearer ${session.accessToken}`,
    };

    if (session.sessionId) {
      headers["X-TechLegal-Session"] = session.sessionId;
    }

    if (session.userId) {
      headers["X-TechLegal-User"] = session.userId;
    }

    return headers;
  };

  window.TechLegalAuthClient = {
    getSession,
    setSession,
    clearSession,
    isAuthenticated,
    hasRole,
    hasAnyRole,
    getAuthHeaders,
  };
})();
