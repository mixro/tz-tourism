import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import MediaImage from './MediaImage';

/**
 * Responsive photo grid with click-to-zoom lightbox.
 * <Gallery items={destinations.zanzibar.gallery} />
 */
export default function Gallery({ items = [] }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!items.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => setActive(item)}
            className="group block overflow-hidden"
            aria-label={`Open photo: ${item.alt}`}
          >
            <MediaImage
              src={item.src}
              alt={item.alt}
              ratio="4/3"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-6"
          >
            <button
              className="absolute right-6 top-6 text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
