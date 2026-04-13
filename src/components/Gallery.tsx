import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { LiquidBackdrop } from './LiquidBackdrop';
import { useState, useEffect, useCallback } from 'react';

const PHOTOS = [
  { src: '/img1.jpeg',  name: 'Creative Office' },
  { src: '/img2.jpeg',  name: 'Trip back' },
  { src: '/img3.jpeg',  name: 'Windmills' },
  { src: '/img5.jpeg',  name: 'Hollwood Sign' },
  { src: '/img6.jpeg',  name: 'Cadillac Eldorado' },
  { src: '/img7.jpeg',  name: 'Fire Sunset' },
  { src: '/img8.jpeg',  name: 'Chicago' },
  { src: '/img9.jpeg',  name: 'Enroute Utah' },
  { src: '/img10.jpeg',  name: 'Cali Peaks' },
  { src: '/img11.jpeg',  name: 'Big Sur' },
  { src: '/img12.jpeg', name: 'Burlingame Offices' },
  { src: '/img13.jpeg', name: 'Fanshell Beach' },
  { src: '/img14.jpeg', name: 'Madinah' },
  { src: '/img15.jpeg', name: 'NIU Lagoon' },
  { src: '/img16.jpeg', name: 'Altgeld Hall' },   // ✏️ fix: was duplicate /img1.jpeg
];

export function Gallery() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + PHOTOS.length) % PHOTOS.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % PHOTOS.length
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxIndex]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <LiquidBackdrop />
      <div className="absolute inset-0 gradient-mesh opacity-80" />

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-24">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate('/')}
          className="mb-10 inline-flex items-center gap-2 overflow-hidden rounded-pill px-4 py-2.5 font-label text-sm text-body transition-all hover:text-white"
          style={{
            background: 'rgba(10, 10, 60, 0.45)',
            backdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(110%)',
            border: '1px solid rgba(180, 180, 255, 0.18)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 255, 0.08),
              0 2px 8px rgba(0, 0, 0, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1)
            `,
          }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-heading text-heading"
          style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)' }}
        >
          My{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">Gallery</span>
            <span
              className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-primary/25 sm:h-4"
              aria-hidden
            />
          </span>
        </motion.h1>

        {/* Grid — 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {PHOTOS.map((photo, i) => (
    <div key={i} className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.07 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        onClick={() => openLightbox(i)}
        className="group liquid-glass overflow-hidden rounded-soft border-primary/20 shadow-glass transition-all duration-300 hover:shadow-card-hover cursor-pointer"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={photo.src}
            alt={photo.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-label tracking-widest uppercase bg-black/40 px-3 py-1.5 rounded-pill backdrop-blur-sm">
              View
            </span>
          </div>
        </div>
      </motion.div>

      <p className="mt-3 text-center font-label text-sm tracking-wide text-white"
style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
        {photo.name}
      </p>
    </div>
  ))}
</div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal — stop propagation so clicks inside don't close */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[lightboxIndex].src}
                alt={PHOTOS[lightboxIndex].name}
                className="max-w-[90vw] max-h-[78vh] rounded-soft object-contain shadow-2xl"
                draggable={false}
              />

              {/* Caption + counter */}
              <div
                className="mt-4 px-5 py-2 rounded-pill font-label text-sm text-body tracking-wide"
                style={{
                  background: 'rgba(10, 10, 60, 0.55)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(180, 180, 255, 0.18)',
                }}
              >
                {PHOTOS[lightboxIndex].name}
                <span className="ml-3 text-primary/60 text-xs">
                  {lightboxIndex + 1} / {PHOTOS.length}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 flex items-center justify-center w-9 h-9 rounded-full text-body hover:text-white transition-colors"
                style={{
                  background: 'rgba(10, 10, 60, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(180, 180, 255, 0.2)',
                }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </motion.div>

            {/* Prev arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 sm:left-8 flex items-center justify-center w-11 h-11 rounded-full text-body hover:text-white transition-all hover:scale-110"
              style={{
                background: 'rgba(10, 10, 60, 0.55)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(180, 180, 255, 0.18)',
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 sm:right-8 flex items-center justify-center w-11 h-11 rounded-full text-body hover:text-white transition-all hover:scale-110"
              style={{
                background: 'rgba(10, 10, 60, 0.55)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(180, 180, 255, 0.18)',
              }}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}