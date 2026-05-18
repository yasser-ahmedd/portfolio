import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const RESUME = '/yasser_resume.pdf';

const profileData = [
  "Name: Yasser Ahmed",
  "Role: Software Engineer",
  "Company: Meridian Technology Solutions",
  "Experience: 3+ years in Software Development",
  "Certifications: AWS Developer & Azure Administrator",
  "Skills: Python, Java, Go, React, SQL, Kafka, AI Tools",
  "Education: Master's in CS from NIU"
];

export function CriticalHit() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <>
      {/* Button */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">

          {/* Gallery Button */}
          <motion.button
            onClick={() => window.location.href = '/gallery'}
            whileHover={{ scale: 1.02 }}
            className="relative inline-flex items-center overflow-hidden rounded-pill px-3 py-3 font-label text-sm text-body"
            style={{
              background: 'rgba(55, 55, 80, 0.6)',
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
            <span className="liquid-shimmer-bg pointer-events-none absolute inset-0 opacity-60" />
            <span className="relative text-base">🖼️</span>
          </motion.button>

          {/* Profile Button */}
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.02 }}
            className="relative inline-flex items-center overflow-hidden rounded-pill px-3 py-3 font-label text-sm text-body"
            style={{
              background: 'rgba(55, 55, 80, 0.6)',
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
            <span className="liquid-shimmer-bg pointer-events-none absolute inset-0 opacity-60" />
            <span className="relative text-base">🧐</span>
          </motion.button>
        </div>
      )}

      {/* Profile Card */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="liquid-glass-strong p-8 rounded-soft w-full max-w-md relative border-primary/20"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-body hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-green-400" />
                <h2 className="text-xl font-heading text-heading">Profile Summary</h2>
              </div>

              <ul className="space-y-4">
                {profileData.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                    className="text-body text-sm flex items-start gap-3 border-l-2 border-primary/30 pl-4 py-1"
                  >
                    <span className="text-primary font-bold">{idx + 1}.</span>
                    {point}
                  </motion.li>
                ))}

                {/* Resume link */}
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: profileData.length * 0.08 }}
                  className="text-body text-sm flex items-start gap-3 border-l-2 border-orange-400/50 pl-4 py-1"
                >
                  <span className="text-orange-500 font-bold">!!</span>
                  <span>
                    Hidden file found:{" "}
                    
                      <a href={RESUME}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                    >
                      fileY.pdf
                    </a>
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}