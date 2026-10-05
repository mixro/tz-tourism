import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

/**
 * Full-width hero used by every page.
 * <PageHero eyebrow="Destinations" title="..." subtitle="..." image={pages.destinations.hero} />
 * Pass `video={videos.home}` to use a video background (poster used as fallback).
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  video,
  height = 'min-h-[60vh]',
  children,
}) {
  return (
    <section className={`relative flex items-end overflow-hidden ${height}`}>
      {video ? (
        <VideoBackground src={video.src} poster={video.poster || image} />
      ) : (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B] via-[#0B241B]/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 text-[#F8F5EE]"
      >
        {eyebrow && (
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C6A15B]">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-[#E7D7B7]">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </motion.div>
    </section>
  );
}
