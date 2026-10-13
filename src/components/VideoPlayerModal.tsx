import React from 'react';
import { X, ExternalLink, Play, Film } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  posterUrl?: string;
}

export function parseVideoUrl(url: string): {
  type: 'youtube' | 'vimeo' | 'direct' | 'unknown';
  embedUrl: string;
} {
  if (!url) return { type: 'unknown', embedUrl: '' };

  const trimmed = url.trim();

  // YouTube formats:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://m.youtube.com/watch?v=VIDEO_ID
  const ytMatch =
    trimmed.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);

  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  // Vimeo formats:
  // - https://vimeo.com/123456789
  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    };
  }

  // Direct video files (MP4, WebM, OGG, MOV, or uploaded Data URLs / Blobs)
  if (
    /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(trimmed) ||
    trimmed.startsWith('data:video/') ||
    trimmed.startsWith('blob:')
  ) {
    return {
      type: 'direct',
      embedUrl: trimmed,
    };
  }

  return {
    type: 'unknown',
    embedUrl: trimmed,
  };
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  subtitle,
  description,
  posterUrl,
}) => {
  if (!isOpen) return null;

  const parsed = parseVideoUrl(videoUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1E4592] flex items-center justify-center shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                {title || 'Digital Information Resources (DIR)'}
              </h3>
              {subtitle && (
                <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="bg-slate-950 relative aspect-16/9 w-full flex items-center justify-center">
          {parsed.type === 'youtube' || parsed.type === 'vimeo' ? (
            <iframe
              src={parsed.embedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : parsed.type === 'direct' ? (
            <video
              src={parsed.embedUrl}
              controls
              autoPlay
              poster={posterUrl}
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video playback.
            </video>
          ) : videoUrl ? (
            // Fallback for custom embedded links or URLs
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-slate-900">
              <div className="w-16 h-16 rounded-full bg-[#1E4592] flex items-center justify-center mb-4 shadow-lg">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h4 className="font-display font-bold text-lg mb-2">{title}</h4>
              <p className="text-xs text-slate-300 max-w-md mb-4">{description}</p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F15A24] hover:bg-[#D94916] text-white text-xs font-bold rounded-full transition-colors"
              >
                <span>Open Video Stream Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="text-slate-400 text-xs p-8 text-center">
              No video URL configured. Update it in the Admin Panel.
            </div>
          )}
        </div>

        {/* Description & Footer Controls */}
        <div className="p-5 sm:p-6 bg-white space-y-3">
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-medium truncate max-w-sm">
              Source: <span className="text-slate-600 font-mono text-[11px]">{videoUrl}</span>
            </span>
            <div className="flex items-center gap-2">
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-[#1E4592] hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
