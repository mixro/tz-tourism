import { useEffect, useState } from 'react';

/**
 * Looping, muted background video.
 * Falls back to the poster image when: no `src`, video fails,
 * or the visitor prefers reduced motion.
 */
export default function VideoBackground({ src, poster, className = '' }) {
  const [useVideo, setUseVideo] = useState(Boolean(src));

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) setUseVideo(false);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {useVideo ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setUseVideo(false)}
        />
      ) : (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      )}
    </div>
  );
}
