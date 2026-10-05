import { useState } from 'react';

// Branded fallback shown if an online image fails to load.
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#173B2D"/><stop offset="1" stop-color="#0B241B"/>
      </linearGradient></defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="400" cy="300" r="60" fill="none" stroke="#C6A15B" stroke-width="4"/>
    </svg>`
  );

/**
 * Lazy-loaded image with fixed aspect ratio, fade-in and error fallback.
 * <MediaImage src={...} alt="..." ratio="4/3" />
 */
export default function MediaImage({
  src,
  alt = '',
  ratio = '4/3',
  priority = false,
  className = '',
  imgClassName = '',
  children,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#0B241B] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={failed ? FALLBACK : src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          setLoaded(true);
        }}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
      {children}
    </div>
  );
}
