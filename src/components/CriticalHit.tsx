import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';



export function CriticalHit() {
  const [stage, setStage] = useState<'normal' | 'emergency' | 'error' | 'scanned'>('normal');
  const [bulletIndex, setBulletIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fixingRef = useRef(false);

  const RESUME = '/yasser_resume.pdf';

  const profileData = [
    "Name: Yasser Ahmed",
    "Company: Meridian Technology Solutions",
    "Experience: 3+ years in Software Development",
    "Certifications: AWS Developer & Azure Administrator",
    "Skills: Python, Java, Go, React, SQL, Kafka",
    "Education: Master's in CS from NIU"
  ];

  

  useEffect(() => {
    if (stage === 'emergency' || stage === 'error' || isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [stage, isLoading]);

  const triggerEmergency = () => {
    fixingRef.current = false;
    setStage('emergency');
    const sections = ['projects', 'certifications', 'experience'];
    let i = 0;
    const interval = setInterval(() => {
      document.getElementById(sections[i])?.scrollIntoView({ behavior: 'smooth' });
      i++;
      if (i >= sections.length) clearInterval(interval);
    }, 800);

    setTimeout(() => {
      // Only advance to error if Fix It hasn't been clicked
      if (!fixingRef.current) {
        setStage('error');
      }
    }, 4000);
  };

  const fixIt = () => {
    // Mark as fixing immediately so the setTimeout in triggerEmergency won't set 'error'
    fixingRef.current = true;

    // Immediately clear both the blinker and the error popup
    setStage('normal');
    setIsLoading(true);
    setProgress(0);
    setBulletIndex(0);

    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

    const duration = 2000;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          setStage('scanned');
          return 100;
        }
        return prev + step;
      });
    }, interval);
  };

  useEffect(() => {
    if (stage === 'scanned' && bulletIndex < profileData.length) {
      const timer = setTimeout(() => setBulletIndex(prev => prev + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [stage, bulletIndex]);

  return (
    <>
      {/* 1. Normal Button */}
{stage === 'normal' && !isLoading && (
  <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">

    {/* Gallery Button */}
    <motion.button
      onClick={() => window.location.href = '/gallery'}
      whileHover={{ scale: 1.02 }}
      className="relative inline-flex items-center overflow-hidden rounded-pill px-3 py-3 font-label text-sm text-body"
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
      <span className="liquid-shimmer-bg pointer-events-none absolute inset-0 opacity-60" />
      <span className="relative text-base">🖼️</span>
    </motion.button>

    {/* Existing CriticalHit Button */}
    <motion.button
      onClick={triggerEmergency}
      whileHover={{ scale: 1.02 }}
      className="relative inline-flex items-center overflow-hidden rounded-pill px-3 py-3 font-label text-sm text-body"
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
      <span className="liquid-shimmer-bg pointer-events-none absolute inset-0 opacity-60" />
      <span className="relative text-base">🧐</span>
    </motion.button>

  </div>
)}

      {/* 2. Emergency Overlay — hidden instantly when isLoading or stage is normal */}
      <AnimatePresence>
        {(stage === 'emergency' || stage === 'error') && !isLoading && (
          <motion.div
            key="emergency-blinker"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            exit={{ opacity: 0, transition: { duration: 0 } }}  
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="fixed inset-0 z-[60] pointer-events-none bg-red-600"
          />
        )}
      </AnimatePresence>

      {/* 3. Red Themed Error Popup */}
      <AnimatePresence>
        {stage === 'error' && !isLoading && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: ["0 0 20px rgba(220,38,38,0.5)", "0 0 40px rgba(220,38,38,0.8)", "0 0 20px rgba(220,38,38,0.5)"]
              }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0 } }}  
              className="bg-red-950/90 border-2 border-red-500 p-8 rounded-soft text-center max-w-sm relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <AlertTriangle className="mx-auto mb-4 text-red-500 animate-pulse" size={48} />
                <h2 className="text-2xl font-heading text-white mb-2 uppercase tracking-tighter">Access Violation</h2>
                <p className="text-red-200 text-[10px] font-label mb-6 uppercase tracking-widest">Unauthorized Profile Access</p>
                <button
                  onClick={fixIt}
                  className="mx-auto block rounded-pill bg-white px-6 py-2 text-xs font-bold uppercase tracking-wider text-red-600 transition-all hover:scale-105 active:scale-95"
                >
                  Override
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Profile Scanned Popup */}
      <AnimatePresence>
        {(isLoading || stage === 'scanned') && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="liquid-glass-strong p-8 rounded-soft w-full max-w-md relative border-primary/20"
            >
              {!isLoading && (
                <button
                  onClick={() => { setStage('normal'); setBulletIndex(0); }}
                  className="absolute top-4 right-4 text-body hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}

              <div className="flex items-center gap-3 mb-6">
                {isLoading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                ) : (
                  <CheckCircle2 className="text-green-400" />
                )}
                <h2 className="text-xl font-heading text-heading">
                  {isLoading ? 'Extracting Information...' : 'Profile Found'}
                </h2>
              </div>

              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] font-label text-primary uppercase tracking-widest text-right">
                    {Math.round(progress)}%
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
  {profileData.slice(0, bulletIndex).map((point, idx) => (
    <motion.li
      key={`${idx}-${stage}`}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-body text-sm flex items-start gap-3 border-l-2 border-primary/30 pl-4 py-1"
    >
      <span className="text-primary font-bold">{idx + 1}.</span>
      {point}
    </motion.li>
  ))}

  {/* Hidden file line — appears only after all bullets are done */}
  {bulletIndex >= profileData.length && (
    <motion.li
      key="hidden-file"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-body text-sm flex items-start gap-3 border-l-2 border-orange-400/50 pl-4 py-1"
    >
      <span className="text-orange-500 font-bold">!!</span>
      <span>
        Hidden file found:{" "}
        
        <a  href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
        >
          fileY.pdf
        </a>
      </span>
    </motion.li>
  )}
</ul>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}