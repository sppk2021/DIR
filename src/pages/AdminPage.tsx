import React, { useState } from 'react';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  LogOut,
  Save,
  RotateCcw,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon,
  Film,
  Users,
  Share2,
  Phone,
  Settings,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Upload,
  Globe,
  Award,
  Sliders,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  Play
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';
import { PageId } from '../types';
import { parseVideoUrl } from '../components/VideoPlayerModal';
import { SocialIcon3D } from '../components/SocialIcon3D';
import {
  DIR_CONFIRMED_LOGO,
  JOLLY_LOGO_SVG,
  NATGEO_LOGO_SVG,
  BINARY_LOGO_SVG,
  UBS_LOGO_SVG,
  WIN_DIGITAL_LOGO_SVG,
  KBTC_LOGO_SVG,
  ULIGHT_LOGO_SVG,
  EDULIGHT_LOGO_SVG,
  SYNERGY_LOGO_SVG,
  YANGON_BOOK_PLAZA_LOGO,
  LITTLE_EINSTEIN_LOGO,
  MERCURY_BOOKSTORE_LOGO
} from '../data/partnerAssets';
import { ManagedPartner } from '../types/siteConfig';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
}

type AdminTab = 'logo' | 'hero' | 'partners' | 'socials' | 'contact' | 'system';

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const {
    config,
    updateConfig,
    resetConfig,
    isAuthenticated,
    adminUser,
    login,
    logout,
    isSaving,
    lastSavedAt
  } = useSiteConfig();

  // Login form state
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Active admin tab
  const [activeTab, setActiveTab] = useState<AdminTab>('logo');

  // Draft editing state
  const [draftConfig, setDraftConfig] = useState(config);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  // Keep draft updated when config changes externally and not dirty
  React.useEffect(() => {
    if (!hasUnsavedChanges) {
      setDraftConfig(config);
    }
  }, [config, hasUnsavedChanges]);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Login handler
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const res = await login(usernameInput, passwordInput);
      if (res.success) {
        showToast('Welcome back, Admin! Access granted.', 'success');
      } else {
        setLoginError(res.error || 'Authentication failed. Please verify credentials.');
      }
    } catch {
      setLoginError('Unexpected login error occurred.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Save changes handler
  const handleSaveAll = async () => {
    const success = await updateConfig(draftConfig);
    if (success) {
      setHasUnsavedChanges(false);
      showToast('All modifications saved & published successfully!', 'success');
    } else {
      showToast('Failed to save settings. Please try again.', 'error');
    }
  };

  // Reset to factory defaults
  const handleResetDefaults = async () => {
    if (window.confirm('Are you sure you want to restore factory default settings? All custom logos, video links, and partner cards will be restored.')) {
      await resetConfig();
      setHasUnsavedChanges(false);
      showToast('Settings restored to factory defaults.', 'info');
    }
  };

  // File upload helper (for image files: logo, poster, photo) with automatic canvas resizing for optimal performance & zero quota errors
  const handleImageFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onUploaded: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (PNG, JPG, SVG, WebP)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) return;

      // If SVG or small enough, use directly; otherwise compress via canvas to avoid quota/payload limits
      if (file.type === 'image/svg+xml' || file.size < 200 * 1024) {
        onUploaded(result);
        setHasUnsavedChanges(true);
        showToast(`Image "${file.name}" loaded successfully!`, 'success');
        return;
      }

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 800;
        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_DIM) {
          height = Math.round((height * MAX_DIM) / width);
          width = MAX_DIM;
        } else if (height > MAX_DIM) {
          width = Math.round((width * MAX_DIM) / height);
          height = MAX_DIM;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
          onUploaded(optimizedDataUrl);
          setHasUnsavedChanges(true);
          showToast(`Image "${file.name}" optimized & loaded successfully!`, 'success');
        } else {
          onUploaded(result);
          setHasUnsavedChanges(true);
          showToast(`Image "${file.name}" loaded successfully!`, 'success');
        }
      };
      img.onerror = () => {
        onUploaded(result);
        setHasUnsavedChanges(true);
        showToast(`Image "${file.name}" loaded successfully!`, 'success');
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
    // Reset file input target value so the same file can be re-selected if needed
    e.target.value = '';
  };

  // Video file upload helper (for MP4, WebM, MOV, OGG videos)
  const handleVideoFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onUploaded: (videoUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      showToast('Please select a valid video file (MP4, WebM, MOV, OGG)', 'error');
      return;
    }

    // Check size; inform user if larger than 50MB
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > 60) {
      showToast(
        `Video file is ${sizeInMB.toFixed(1)}MB. For files over 60MB, embedding via YouTube or Vimeo URL is recommended for optimal playback speed.`,
        'error'
      );
      return;
    }

    showToast(`Uploading video "${file.name}" (${sizeInMB.toFixed(1)} MB)...`, 'info');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUploaded(result);
        setHasUnsavedChanges(true);
        showToast(`Video "${file.name}" uploaded successfully!`, 'success');
      }
    };
    reader.onerror = () => {
      showToast('Failed to load video file.', 'error');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Preset Logos Palette
  const PRESET_LOGOS = [
    { label: 'DIR Official (Confirmed)', url: DIR_CONFIRMED_LOGO },
    { label: 'DIR Vector SVG', url: '/assets/dir-logo.svg' },
    { label: 'Jolly Phonics', url: JOLLY_LOGO_SVG },
    { label: 'National Geographic', url: NATGEO_LOGO_SVG },
    { label: 'Binary Logic', url: BINARY_LOGO_SVG },
    { label: 'U Book Store', url: UBS_LOGO_SVG },
    { label: 'Win Digital Hub', url: WIN_DIGITAL_LOGO_SVG },
    { label: 'KBTC School', url: KBTC_LOGO_SVG },
    { label: 'ULight School', url: ULIGHT_LOGO_SVG },
    { label: 'Edu-Light School', url: EDULIGHT_LOGO_SVG },
    { label: 'Synergy Academy', url: SYNERGY_LOGO_SVG },
    { label: 'Yangon Book Plaza', url: YANGON_BOOK_PLAZA_LOGO },
    { label: 'Little Einstein', url: LITTLE_EINSTEIN_LOGO },
    { label: 'Mercury Books', url: MERCURY_BOOKSTORE_LOGO }
  ];

  // ----------------------------------------------------
  // VIEW 1: LOGIN PANEL (When !isAuthenticated)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-[#0F2444] to-slate-900 flex flex-col justify-center items-center p-4 sm:p-6 text-slate-800">
        {/* Subtle Background Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-md">
          {/* Logo Card & Branding Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-xl mb-4 border border-slate-100">
              <img
                src={DIR_CONFIRMED_LOGO}
                alt="DIR Official Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/dir-logo.svg';
                }}
              />
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              DIR Admin Control
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Logo, Hero Video & Content Management System
            </p>
          </div>

          {/* Login Form Box */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Lock className="w-4 h-4 text-[#1E4592]" />
                <span>Backend Administrator Login</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#1E4592] border border-blue-100">
                Secure Auth
              </span>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span className="font-medium">{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Username Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter admin username"
                    required
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592] focus:bg-white transition-all text-slate-900"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592] focus:bg-white transition-all text-slate-900 font-mono"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>


              {/* Login Button */}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-linear-to-r from-[#1E4592] to-[#F15A24] hover:opacity-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Access...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Admin Dashboard</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back to Site Button */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer transition-colors inline-flex items-center gap-1.5"
              >
                <span>← Return to Public Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ----------------------------------------------------
  const heroVideoParsed = parseVideoUrl(draftConfig.hero.videoUrl);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border text-xs sm:text-sm font-semibold transition-all animate-in slide-in-from-top-3 ${
            toastMessage.type === 'success'
              ? 'bg-emerald-600 text-white border-emerald-500'
              : toastMessage.type === 'error'
              ? 'bg-rose-600 text-white border-rose-500'
              : 'bg-blue-600 text-white border-blue-500'
          }`}
        >
          {toastMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
          {toastMessage.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0" />}
          {toastMessage.type === 'info' && <Sparkles className="w-4 h-4 shrink-0" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Colorful Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left Brand & Badge */}
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                <img
                  src={draftConfig.branding.headerLogoUrl || DIR_CONFIRMED_LOGO}
                  alt="Admin Logo"
                  className="h-7 w-auto object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = DIR_CONFIRMED_LOGO;
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display font-black text-slate-900 text-sm sm:text-base leading-none">
                    DIR Administration Portal
                  </h1>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  Signed in as <strong className="text-slate-800">{adminUser || 'admin'}</strong>
                  {lastSavedAt && ` · Last saved at ${lastSavedAt}`}
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* View Live Website Button */}
              <button
                onClick={() => onNavigate('home')}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                title="Open public website view"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">View Live Site</span>
              </button>

              {/* Save All Changes Button */}
              <button
                onClick={handleSaveAll}
                disabled={isSaving}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-xs flex items-center gap-2 cursor-pointer ${
                  hasUnsavedChanges
                    ? 'bg-linear-to-r from-[#1E4592] to-[#F15A24] hover:opacity-95 shadow-md animate-pulse'
                    : 'bg-[#1E4592] hover:bg-[#153472]'
                }`}
              >
                {isSaving ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{hasUnsavedChanges ? 'Publish Changes *' : 'Save Changes'}</span>
              </button>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                title="Log out of admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Brand Logo */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Site Brand Logo
              </span>
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E4592] flex items-center justify-center">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-12 bg-slate-50 rounded border border-slate-100 flex items-center justify-center p-0.5 overflow-hidden">
                <img
                  src={draftConfig.branding.headerLogoUrl}
                  alt="Current Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 truncate">
                {draftConfig.branding.brandName}
              </span>
            </div>
          </div>

          {/* Card 2: Hero Video */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Hero Video Stream
              </span>
              <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#F15A24] flex items-center justify-center">
                <Film className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-800 uppercase">
                {heroVideoParsed.type}
              </span>
              <span className="text-xs font-semibold text-slate-700 truncate">
                {draftConfig.hero.videoTitle || 'Story Video'}
              </span>
            </div>
          </div>

          {/* Card 3: Partners Managed */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Active Partners
              </span>
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-slate-900">
                {draftConfig.partners.filter((p) => p.isActive).length}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                of {draftConfig.partners.length} total
              </span>
            </div>
          </div>

          {/* Card 4: 3D Social Icons */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                3D Social Channels
              </span>
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Share2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-slate-900">
                {draftConfig.socialLinks.filter((s) => s.enabled).length}
              </span>
              <span className="text-xs text-slate-500 font-medium">channels connected</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-wrap gap-1">
          {[
            { id: 'logo' as AdminTab, label: 'Logo & Branding', icon: ImageIcon, badge: 'Key' },
            { id: 'hero' as AdminTab, label: 'Hero Video & Section', icon: Film, badge: 'Updated' },
            { id: 'partners' as AdminTab, label: 'Partner Cards & Logos', icon: Users, badge: `${draftConfig.partners.length}` },
            { id: 'socials' as AdminTab, label: '3D Social Icons', icon: Share2 },
            { id: 'contact' as AdminTab, label: 'Banner & Contacts', icon: Phone },
            { id: 'system' as AdminTab, label: 'System & Defaults', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  active
                    ? 'bg-[#1E4592] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT AREAS */}

        {/* ==================================================== */}
        {/* TAB 1: LOGO & BRANDING */}
        {/* ==================================================== */}
        {activeTab === 'logo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <h2 className="font-display font-black text-lg sm:text-xl text-slate-900">
                    Primary Logo & Visual Identity
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Configure the main website logo, confirmed image asset, tagline, and fallback options.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400">Current Header Preview:</span>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <img
                      src={draftConfig.branding.headerLogoUrl}
                      alt="Logo Preview"
                      className="h-8 max-w-[160px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Logo URL Input & File Upload */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Header Logo Image URL or Path
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={draftConfig.branding.headerLogoUrl}
                        onChange={(e) => {
                          setDraftConfig({
                            ...draftConfig,
                            branding: { ...draftConfig.branding, headerLogoUrl: e.target.value }
                          });
                          setHasUnsavedChanges(true);
                        }}
                        placeholder="/assets/DIR-LOGO-Confirm.jpg or https://..."
                        className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:border-[#1E4592] focus:bg-white"
                      />
                      <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 shrink-0">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleImageFileUpload(e, (dataUrl) => {
                              setDraftConfig({
                                ...draftConfig,
                                branding: { ...draftConfig.branding, headerLogoUrl: dataUrl }
                              });
                            })
                          }
                        />
                      </label>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Standard official confirmed asset:{' '}
                      <code className="text-[#1E4592] font-mono">/assets/DIR-LOGO-Confirm.jpg</code> or vector{' '}
                      <code className="text-[#1E4592] font-mono">/assets/dir-logo.svg</code>
                    </p>
                  </div>



                  {/* Brand Typography & Labels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Brand Name
                      </label>
                      <input
                        type="text"
                        value={draftConfig.branding.brandName}
                        onChange={(e) => {
                          setDraftConfig({
                            ...draftConfig,
                            branding: { ...draftConfig.branding, brandName: e.target.value }
                          });
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592] focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Brand Subtitle
                      </label>
                      <input
                        type="text"
                        value={draftConfig.branding.brandSubtitle}
                        onChange={(e) => {
                          setDraftConfig({
                            ...draftConfig,
                            branding: { ...draftConfig.branding, brandSubtitle: e.target.value }
                          });
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Footer Logo & Fallback Logo with URL and Upload */}
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-700">
                          Footer Dark Theme Logo URL or Upload
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setDraftConfig({
                              ...draftConfig,
                              branding: {
                                ...draftConfig.branding,
                                footerLogoUrl: draftConfig.branding.headerLogoUrl
                              }
                            });
                            setHasUnsavedChanges(true);
                            showToast('Copied Header Logo to Footer Logo', 'info');
                          }}
                          className="text-[11px] font-semibold text-[#1E4592] hover:underline cursor-pointer"
                        >
                          Use Same as Header Logo
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={draftConfig.branding.footerLogoUrl || ''}
                          onChange={(e) => {
                            setDraftConfig({
                              ...draftConfig,
                              branding: { ...draftConfig.branding, footerLogoUrl: e.target.value }
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="Optional dark mode logo URL (defaults to header logo)"
                          className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:border-[#1E4592] focus:bg-white"
                        />
                        <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleImageFileUpload(e, (dataUrl) => {
                                setDraftConfig({
                                  ...draftConfig,
                                  branding: { ...draftConfig.branding, footerLogoUrl: dataUrl }
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Partner Card Fallback Logo URL or Upload
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={draftConfig.branding.partnerCardFallbackLogo || ''}
                          onChange={(e) => {
                            setDraftConfig({
                              ...draftConfig,
                              branding: {
                                ...draftConfig.branding,
                                partnerCardFallbackLogo: e.target.value
                              }
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="/assets/DIR-LOGO-Confirm.jpg or image URL"
                          className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:border-[#1E4592] focus:bg-white"
                        />
                        <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 shrink-0">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleImageFileUpload(e, (dataUrl) => {
                                setDraftConfig({
                                  ...draftConfig,
                                  branding: {
                                    ...draftConfig.branding,
                                    partnerCardFallbackLogo: dataUrl
                                  }
                                });
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Subtitle */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="showSubtitleToggle"
                      checked={draftConfig.branding.showSubtitleInHeader}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          branding: {
                            ...draftConfig.branding,
                            showSubtitleInHeader: e.target.checked
                          }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-4 h-4 rounded text-[#1E4592] focus:ring-[#1E4592] cursor-pointer"
                    />
                    <label htmlFor="showSubtitleToggle" className="text-xs font-semibold text-slate-700 cursor-pointer">
                      Display company subtitle in header alongside emblem
                    </label>
                  </div>
                </div>

                {/* Right Side: Live Visual Mockup Preview */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Live Preview (White Navbar)
                    </span>
                    <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center min-h-[90px]">
                      <img
                        src={draftConfig.branding.headerLogoUrl}
                        alt="Preview"
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Live Preview (Dark Footer)
                    </span>
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center min-h-[90px]">
                      <img
                        src={draftConfig.branding.footerLogoUrl || draftConfig.branding.headerLogoUrl}
                        alt="Dark Preview"
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: HERO VIDEO & HERO SECTION */}
        {/* ==================================================== */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <h2 className="font-display font-black text-lg sm:text-xl text-slate-900 flex items-center gap-2">
                    <span>Hero Section & Video Link</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-[#F15A24]">
                      Watch Our Story
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Update the hero video URL (YouTube, Vimeo, or MP4), modal headlines, story description, and CTA buttons.
                  </p>
                </div>
              </div>

              {/* Video Link Input */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-800 flex items-center gap-2">
                      <Film className="w-4 h-4 text-[#F15A24]" />
                      <span>Hero Section Video Link (URL)</span>
                    </label>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#F15A24] border border-orange-200">
                      Detected Format: {heroVideoParsed.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={draftConfig.hero.videoUrl}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: { ...draftConfig.hero, videoUrl: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                      className="flex-1 px-3.5 py-2.5 bg-white border border-orange-300 rounded-xl text-xs sm:text-sm font-mono focus:outline-none focus:border-[#F15A24] text-slate-900"
                    />
                  </div>

                  {/* Preset Sample Video Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
                    <span className="font-bold text-[11px] text-slate-500">Quick Samples:</span>
                    <button
                      type="button"
                      onClick={() => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: {
                            ...draftConfig.hero,
                            videoUrl: 'https://www.youtube.com/watch?v=kYJ3i_g3sYs'
                          }
                        });
                        setHasUnsavedChanges(true);
                        showToast('Updated to YouTube sample video', 'info');
                      }}
                      className="px-2 py-1 bg-white hover:bg-orange-100/70 rounded-lg border border-orange-200 text-[11px] font-medium text-slate-700 cursor-pointer"
                    >
                      Jolly Learning Story (YouTube)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: {
                            ...draftConfig.hero,
                            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                          }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="px-2 py-1 bg-white hover:bg-orange-100/70 rounded-lg border border-orange-200 text-[11px] font-medium text-slate-700 cursor-pointer"
                    >
                      Demo Test Video
                    </button>
                  </div>
                </div>

                {/* Embedded Video Live Test Player Preview */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 text-[#F15A24] fill-current" />
                      <span>Live Video Stream Player Preview</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono truncate max-w-xs">
                      {draftConfig.hero.videoUrl}
                    </span>
                  </div>

                  <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {heroVideoParsed.type === 'youtube' || heroVideoParsed.type === 'vimeo' ? (
                      <iframe
                        src={heroVideoParsed.embedUrl}
                        title="Hero Video Test"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : heroVideoParsed.type === 'direct' ? (
                      <video
                        src={heroVideoParsed.embedUrl}
                        controls
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="p-6 text-center space-y-2">
                        <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
                        <p className="text-xs text-slate-300">
                          Enter a valid YouTube, Vimeo, or video link above to preview player.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal Title, Subtitle & Description */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Video Modal Title
                    </label>
                    <input
                      type="text"
                      value={draftConfig.hero.videoTitle}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: { ...draftConfig.hero, videoTitle: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Video Story Subtitle
                    </label>
                    <input
                      type="text"
                      value={draftConfig.hero.videoSubtitle}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: { ...draftConfig.hero, videoSubtitle: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Video Story Description
                  </label>
                  <textarea
                    rows={2}
                    value={draftConfig.hero.videoDescription}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        hero: { ...draftConfig.hero, videoDescription: e.target.value }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1E4592]"
                  />
                </div>

                {/* Hero Section Copy Text */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h3 className="font-display font-bold text-sm text-slate-800">
                    Hero Section Headlines & CTAs
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Hero Pill Badge Text
                      </label>
                      <input
                        type="text"
                        value={draftConfig.hero.badgeText}
                        onChange={(e) => {
                          setDraftConfig({
                            ...draftConfig,
                            hero: { ...draftConfig.hero, badgeText: e.target.value }
                          });
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Watch Button Label
                      </label>
                      <input
                        type="text"
                        value={draftConfig.hero.videoButtonText}
                        onChange={(e) => {
                          setDraftConfig({
                            ...draftConfig,
                            hero: { ...draftConfig.hero, videoButtonText: e.target.value }
                          });
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Hero Main Headline
                    </label>
                    <input
                      type="text"
                      value={draftConfig.hero.headline}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: { ...draftConfig.hero, headline: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Hero Paragraph Subheadline
                    </label>
                    <textarea
                      rows={2}
                      value={draftConfig.hero.subheadline}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          hero: { ...draftConfig.hero, subheadline: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: PARTNER CARDS & LOGOS MANAGEMENT */}
        {/* ==================================================== */}
        {activeTab === 'partners' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <h2 className="font-display font-black text-lg sm:text-xl text-slate-900">
                    Partner Cards & Logos Management
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Manage the partner cards displayed in the home page slider and Partners page. Edit logos, partner names, and direct links.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newPartner: ManagedPartner = {
                      id: `partner-${Date.now()}`,
                      name: 'New Educational Partner',
                      logoImage: DIR_CONFIRMED_LOGO,
                      websiteUrl: 'https://dir.com.mm',
                      tag: 'Institutional Partner',
                      accreditationBadge: 'Accredited 2026',
                      category: 'school',
                      isActive: true,
                      order: draftConfig.partners.length
                    };
                    setDraftConfig({
                      ...draftConfig,
                      partners: [newPartner, ...draftConfig.partners]
                    });
                    setHasUnsavedChanges(true);
                    showToast('Added new partner card!', 'success');
                  }}
                  className="px-4 py-2 bg-[#1E4592] hover:bg-[#153472] text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Partner</span>
                </button>
              </div>

              {/* Partners List */}
              <div className="space-y-3">
                {draftConfig.partners.map((partner, index) => (
                  <div
                    key={partner.id}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-50/90 border border-slate-200 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  >
                    {/* Left: Logo Preview + Quick Picker */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                        <img
                          src={partner.logoImage}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = DIR_CONFIRMED_LOGO;
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Card #{index + 1} · {partner.category}
                        </span>
                        <input
                          type="text"
                          value={partner.name}
                          onChange={(e) => {
                            const updated = [...draftConfig.partners];
                            updated[index] = { ...partner, name: e.target.value };
                            setDraftConfig({ ...draftConfig, partners: updated });
                            setHasUnsavedChanges(true);
                          }}
                          className="font-display font-black text-sm text-slate-900 bg-transparent border-b border-dashed border-slate-300 focus:border-[#1E4592] focus:bg-white px-1 py-0.5"
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={partner.tag}
                            onChange={(e) => {
                              const updated = [...draftConfig.partners];
                              updated[index] = { ...partner, tag: e.target.value };
                              setDraftConfig({ ...draftConfig, partners: updated });
                              setHasUnsavedChanges(true);
                            }}
                            placeholder="Tagline / Description"
                            className="text-xs text-slate-500 bg-transparent border-b border-slate-200 px-1 py-0.5 w-48"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Middle: Logo URL & Website Link */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500">Logo Image URL or Upload</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={partner.logoImage}
                            onChange={(e) => {
                              const updated = [...draftConfig.partners];
                              updated[index] = { ...partner, logoImage: e.target.value };
                              setDraftConfig({ ...draftConfig, partners: updated });
                              setHasUnsavedChanges(true);
                            }}
                            className="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg font-mono text-[11px] focus:outline-none focus:border-[#1E4592]"
                          />
                          <label className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[10px] font-bold cursor-pointer transition-colors flex items-center gap-1 shrink-0">
                            <Upload className="w-3 h-3" />
                            <span>Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleImageFileUpload(e, (dataUrl) => {
                                  const updated = [...draftConfig.partners];
                                  updated[index] = { ...partner, logoImage: dataUrl };
                                  setDraftConfig({ ...draftConfig, partners: updated });
                                  setHasUnsavedChanges(true);
                                  showToast(`Uploaded logo for ${partner.name}`, 'success');
                                })
                              }
                            />
                          </label>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500">Website Link</label>
                        <input
                          type="text"
                          value={partner.websiteUrl}
                          onChange={(e) => {
                            const updated = [...draftConfig.partners];
                            updated[index] = { ...partner, websiteUrl: e.target.value };
                            setDraftConfig({ ...draftConfig, partners: updated });
                            setHasUnsavedChanges(true);
                          }}
                          className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] focus:outline-none focus:border-[#1E4592]"
                        />
                      </div>
                    </div>

                    {/* Right: Controls & Actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
                      {/* Active Status Toggle */}
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...draftConfig.partners];
                          updated[index] = { ...partner, isActive: !partner.isActive };
                          setDraftConfig({ ...draftConfig, partners: updated });
                          setHasUnsavedChanges(true);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          partner.isActive
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {partner.isActive ? 'Active' : 'Hidden'}
                      </button>

                      {/* Reorder Up */}
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...draftConfig.partners];
                            const temp = updated[index];
                            updated[index] = updated[index - 1];
                            updated[index - 1] = temp;
                            setDraftConfig({ ...draftConfig, partners: updated });
                            setHasUnsavedChanges(true);
                          }}
                          className="p-1.5 text-slate-400 hover:text-slate-700 rounded bg-white border border-slate-200 cursor-pointer"
                          title="Move up"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* Reorder Down */}
                      {index < draftConfig.partners.length - 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...draftConfig.partners];
                            const temp = updated[index];
                            updated[index] = updated[index + 1];
                            updated[index + 1] = temp;
                            setDraftConfig({ ...draftConfig, partners: updated });
                            setHasUnsavedChanges(true);
                          }}
                          className="p-1.5 text-slate-400 hover:text-slate-700 rounded bg-white border border-slate-200 cursor-pointer"
                          title="Move down"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* Delete Partner */}
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Delete partner "${partner.name}"?`)) {
                            const updated = draftConfig.partners.filter((_, i) => i !== index);
                            setDraftConfig({ ...draftConfig, partners: updated });
                            setHasUnsavedChanges(true);
                            showToast(`Deleted ${partner.name}`, 'info');
                          }
                        }}
                        className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded bg-white border border-rose-200 cursor-pointer transition-colors"
                        title="Delete partner card"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 4: 3D SOCIAL ICONS & MEDIA */}
        {/* ==================================================== */}
        {activeTab === 'socials' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <h2 className="font-display font-black text-lg sm:text-xl text-slate-900">
                    3D Social Media Icons & Channels
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Configure official links for 3D animated social buttons rendered across the site.
                  </p>
                </div>
              </div>

              {/* Live 3D Preview Bar */}
              <div className="p-6 rounded-2xl bg-linear-to-r from-slate-900 via-[#0F2444] to-slate-900 text-white space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Live 3D Icons Preview (Hover over them to experience 3D depth):
                </span>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {draftConfig.socialLinks
                    .filter((s) => s.enabled)
                    .map((item) => (
                      <SocialIcon3D
                        key={item.platform}
                        platform={item.platform as any}
                        href={item.url}
                        label={item.label}
                        size="lg"
                      />
                    ))}
                </div>
              </div>

              {/* Editable Social Links List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {draftConfig.socialLinks.map((social, idx) => (
                  <div
                    key={social.platform}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs capitalize text-slate-800 flex items-center gap-2">
                        <SocialIcon3D
                          platform={social.platform as any}
                          size="sm"
                          href="#"
                        />
                        <span>{social.label}</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...draftConfig.socialLinks];
                          updated[idx] = { ...social, enabled: !social.enabled };
                          setDraftConfig({ ...draftConfig, socialLinks: updated });
                          setHasUnsavedChanges(true);
                        }}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                          social.enabled
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {social.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>

                    <input
                      type="url"
                      value={social.url}
                      onChange={(e) => {
                        const updated = [...draftConfig.socialLinks];
                        updated[idx] = { ...social, url: e.target.value };
                        setDraftConfig({ ...draftConfig, socialLinks: updated });
                        setHasUnsavedChanges(true);
                      }}
                      placeholder={`https://${social.platform}.com/...`}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:border-[#1E4592]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 5: BANNER & CONTACTS */}
        {/* ==================================================== */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="pb-5 border-b border-slate-100">
                <h2 className="font-display font-black text-lg sm:text-xl text-slate-900">
                  Announcement Banner & Contact Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Update customer support contact details, phone numbers, and optional top announcement bar.
                </p>
              </div>

              {/* Announcement Banner Box */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    Header Notification Banner
                  </span>
                  <input
                    type="checkbox"
                    checked={draftConfig.announcement.enabled}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        announcement: { ...draftConfig.announcement, enabled: e.target.checked }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-4 h-4 text-[#1E4592] rounded cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">Badge Label</label>
                    <input
                      type="text"
                      value={draftConfig.announcement.badge}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          announcement: { ...draftConfig.announcement, badge: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-2 bg-white border border-blue-200 rounded-xl text-xs"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-slate-600">Banner Notice Message</label>
                    <input
                      type="text"
                      value={draftConfig.announcement.text}
                      onChange={(e) => {
                        setDraftConfig({
                          ...draftConfig,
                          announcement: { ...draftConfig.announcement, text: e.target.value }
                        });
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-2 bg-white border border-blue-200 rounded-xl text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Telephone Lines</label>
                  <input
                    type="text"
                    value={draftConfig.contact.phone}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        contact: { ...draftConfig.contact, phone: e.target.value }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    value={draftConfig.contact.email}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        contact: { ...draftConfig.contact, email: e.target.value }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Physical Address</label>
                  <input
                    type="text"
                    value={draftConfig.contact.address}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        contact: { ...draftConfig.contact, address: e.target.value }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Operating Hours</label>
                  <input
                    type="text"
                    value={draftConfig.contact.hours}
                    onChange={(e) => {
                      setDraftConfig({
                        ...draftConfig,
                        contact: { ...draftConfig.contact, hours: e.target.value }
                      });
                      setHasUnsavedChanges(true);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 6: SYSTEM & DEFAULTS */}
        {/* ==================================================== */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              <div className="pb-5 border-b border-slate-100">
                <h2 className="font-display font-black text-lg sm:text-xl text-slate-900">
                  System Maintenance & Factory Defaults
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Backup data, export configuration, or restore initial factory settings.
                </p>
              </div>

              {/* Actions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Config */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900">Export Site Configuration</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Download complete site configuration (including logo mappings, partner lists, and video URLs) as a JSON backup file.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const blob = new Blob([JSON.stringify(draftConfig, null, 2)], {
                        type: 'application/json'
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `dir-site-config-${new Date().toISOString().slice(0, 10)}.json`;
                      a.click();
                      URL.revokeObjectURL(url);
                      showToast('Configuration exported to JSON file', 'success');
                    }}
                    className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-bold border border-slate-300 cursor-pointer shadow-2xs"
                  >
                    Download JSON Backup
                  </button>
                </div>

                {/* Reset to Defaults */}
                <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                  <h3 className="font-bold text-sm text-rose-900">Restore Factory Defaults</h3>
                  <p className="text-xs text-rose-700/80 leading-relaxed">
                    Restore official confirmed DIR logo (<code className="font-mono text-rose-900">/assets/DIR-LOGO-Confirm.jpg</code>), default story video, and canonical partner cards.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All to Defaults</span>
                  </button>
                </div>
              </div>

              {/* Security Credentials info */}
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Administrative Access Rules</span>
                </div>
                <p>
                  Current backend authentication credentials:{' '}
                  <code className="text-[#1E4592] font-mono font-bold">admin / admin</code>.
                  Access can be invoked directly at <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">/admin</code> or hash <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">#admin</code>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Sticky Save Changes Bar (when unsaved changes exist) */}
      {hasUnsavedChanges && (
        <aside
          aria-label="Unsaved changes bar"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%] bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs sm:text-sm font-bold">
              You have unsaved modifications!
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setDraftConfig(config);
                setHasUnsavedChanges(false);
                showToast('Draft changes discarded', 'info');
              }}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Discard
            </button>
            <button
              onClick={handleSaveAll}
              disabled={isSaving}
              className="px-4 py-1.5 bg-linear-to-r from-[#1E4592] to-[#F15A24] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {isSaving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
              <span>Save & Publish</span>
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};
