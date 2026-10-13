import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SiteConfig } from '../types/siteConfig';
import { DEFAULT_SITE_CONFIG } from '../data/defaultConfig';

const LOCAL_STORAGE_KEY = 'dir_site_config_v2';
const AUTH_TOKEN_KEY = 'dir_admin_auth_token';
const AUTH_USER_KEY = 'dir_admin_auth_user';

interface SiteConfigContextValue {
  config: SiteConfig;
  updateConfig: (updater: Partial<SiteConfig> | ((prev: SiteConfig) => SiteConfig)) => Promise<boolean>;
  resetConfig: () => Promise<void>;
  isAuthenticated: boolean;
  adminUser: string | null;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isSaving: boolean;
  isLoading: boolean;
  lastSavedAt: string | null;
}

const SiteConfigContext = createContext<SiteConfigContextValue | null>(null);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_SITE_CONFIG,
          ...parsed,
          branding: { ...DEFAULT_SITE_CONFIG.branding, ...(parsed.branding || {}) },
          hero: { ...DEFAULT_SITE_CONFIG.hero, ...(parsed.hero || {}) },
          contact: { ...DEFAULT_SITE_CONFIG.contact, ...(parsed.contact || {}) },
          announcement: { ...DEFAULT_SITE_CONFIG.announcement, ...(parsed.announcement || {}) },
          partners: Array.isArray(parsed.partners) && parsed.partners.length > 0 ? parsed.partners : DEFAULT_SITE_CONFIG.partners,
          socialLinks: Array.isArray(parsed.socialLinks) && parsed.socialLinks.length > 0 ? parsed.socialLinks : DEFAULT_SITE_CONFIG.socialLinks,
        };
      }
    } catch {
      // ignore
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return Boolean(localStorage.getItem(AUTH_TOKEN_KEY) || sessionStorage.getItem(AUTH_TOKEN_KEY));
  });

  const [adminUser, setAdminUser] = useState<string | null>(() => {
    return localStorage.getItem(AUTH_USER_KEY) || sessionStorage.getItem(AUTH_USER_KEY) || null;
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);

  // Sync from backend API on mount if available
  useEffect(() => {
    let isMounted = true;
    async function fetchServerSettings() {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data && isMounted) {
            setConfig((prev) => ({
              ...prev,
              ...data,
              branding: { ...prev.branding, ...(data.branding || {}) },
              hero: { ...prev.hero, ...(data.hero || {}) },
              contact: { ...prev.contact, ...(data.contact || {}) },
              announcement: { ...prev.announcement, ...(data.announcement || {}) },
              partners: Array.isArray(data.partners) && data.partners.length > 0 ? data.partners : prev.partners,
              socialLinks: Array.isArray(data.socialLinks) && data.socialLinks.length > 0 ? data.socialLinks : prev.socialLinks,
            }));
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          }
        }
      } catch {
        // Fallback to local storage (works seamlessly offline or in Vite-only mode)
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchServerSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  const updateConfig = useCallback(
    async (updater: Partial<SiteConfig> | ((prev: SiteConfig) => SiteConfig)) => {
      setIsSaving(true);
      try {
        const newConfig = typeof updater === 'function' ? updater(config) : { ...config, ...updater };
        newConfig.lastUpdated = new Date().toISOString();
        newConfig.updatedBy = adminUser || 'Admin';

        setConfig(newConfig);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newConfig));

        // Attempt server sync
        try {
          await fetch('/api/settings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY) || ''}`,
            },
            body: JSON.stringify(newConfig),
          });
        } catch {
          // Local storage handles persistence
        }

        setLastSavedAt(new Date().toLocaleTimeString());
        return true;
      } catch (err) {
        console.error('Failed to update site configuration:', err);
        return false;
      } finally {
        setIsSaving(false);
      }
    },
    [config, adminUser]
  );

  const resetConfig = useCallback(async () => {
    setIsSaving(true);
    try {
      setConfig(DEFAULT_SITE_CONFIG);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_SITE_CONFIG));
      try {
        await fetch('/api/settings/reset', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY) || ''}`,
          },
        });
      } catch {
        // ignore
      }
      setLastSavedAt(new Date().toLocaleTimeString());
    } finally {
      setIsSaving(false);
    }
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const trimmedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim();

    // Check credentials (admin/admin as requested)
    let valid = false;

    // 1. Try server API login first
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: trimmedUser, password: trimmedPass }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.token) {
          valid = true;
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          localStorage.setItem(AUTH_USER_KEY, data.username || 'admin');
        }
      }
    } catch {
      // fallback to local credentials check
    }

    // 2. Direct client verification fallback for admin/admin
    if (!valid && trimmedUser === 'admin' && trimmedPass === 'admin') {
      valid = true;
      const fakeToken = `dir_jwt_${Date.now()}`;
      localStorage.setItem(AUTH_TOKEN_KEY, fakeToken);
      localStorage.setItem(AUTH_USER_KEY, 'admin');
    }

    if (valid) {
      setIsAuthenticated(true);
      setAdminUser('admin');
      return { success: true };
    }

    return { success: false, error: 'Invalid username or password. Use admin / admin' };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    setIsAuthenticated(false);
    setAdminUser(null);
  }, []);

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isAuthenticated,
        adminUser,
        login,
        logout,
        isSaving,
        isLoading,
        lastSavedAt,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return ctx;
};
