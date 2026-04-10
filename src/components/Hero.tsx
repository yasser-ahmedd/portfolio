import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, BrainCircuit, Cloud, Server, Database, Code } from 'lucide-react';
import { LiquidBackdrop } from './LiquidBackdrop';


const PROFILE_SRC = '/mepp.png';

const HERO_STACK = [
  { icon: Code, label: 'Full Stack', color: 'rgba(122, 205, 220, 0.5)' },
  { icon: Database, label: 'DB', color: 'rgba(159, 71, 71, 0.5)' },
  { icon: Server, label: 'Distributed System', color: 'rgba(211, 200, 126, 0.5)' },
  { icon: Cloud, label: 'Cloud', color: 'rgba(20, 186, 98, 0.5)' },
  { icon: BrainCircuit, label: 'AI', color: 'rgba(151, 108, 79, 0.5)' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-transparent pb-10 pt-20 sm:pb-14"
    >
      <LiquidBackdrop />
      <div className="absolute inset-0 gradient-mesh opacity-80" />

      <div className="relative mx-auto flex w-full max-w-content flex-col items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">

        {/* Left — text content */}
        <div className="flex-1 text-center lg:max-w-[640px] lg:text-left">

          {/* Software Engineer badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative mb-5 inline-flex items-center gap-2 overflow-hidden rounded-pill px-5 py-2.5"
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
            
            <Laptop className="relative h-4 w-4 text-primary" />
            <span className="font-label text-sm uppercase tracking-wider text-body">
              Software Engineer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-5 font-heading font-hero leading-[1.06] text-heading"
            style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)' }}
          >
            Yasser{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Ahmed</span>
              <span
                className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-primary/25 sm:h-4"
                aria-hidden
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3 font-label text-sm uppercase tracking-[0.3em] text-body/80 lg:justify-start sm:text-base md:text-lg"
          >
            <span className="hover:text-primary transition-colors duration-300">Code</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <span className="hover:text-primary transition-colors duration-300">Deploy</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <span className="hover:text-primary transition-colors duration-300">Scale</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            <span className="hover:text-primary transition-colors duration-300">Repeat</span>
          </motion.div>

          {/* Stack tiles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:justify-start"
          >
            {HERO_STACK.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, scale: 1.02 }}
                className="relative flex shrink-0 items-center gap-2 rounded-pill px-3 py-2"
                style={{
                  background: 'rgba(10, 10, 60, 0.3)',
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  border: `1px solid ${color}`,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={{ color: color.replace('0.5', '1') }}
                  strokeWidth={2.5}
                />
                <span className="font-label whitespace-nowrap text-[11px] font-medium text-body sm:text-xs lg:text-sm">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              to="#contact"
              className="inline-flex items-center gap-2 rounded-pill bg-primary px-4 py-3.5 font-label text-sm text-background shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Right — circular profile picture */}
        {/*<motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 80 }}
          className="flex w-full max-w-[280px] flex-shrink-0 justify-center lg:max-w-[320px] lg:justify-end"
        >
          <div className="relative">
            
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/20 blur-3xl" />

            
            <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px]">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6666ff, #ffffff, #4444cc, #aaaaff, #6666ff, #6666ff)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              
              <div className="absolute inset-[5px] overflow-hidden rounded-full ring-2 ring-primary/40">
                <img
                  src={PROFILE_SRC}
                  alt="Yasser Ahmed"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.div>*/}
        {/*<div
  className="relative overflow-hidden"
  style={{
    width: 'clamp(280px, 30vw, 420px)',
    height: 'clamp(280px, 30vw, 420px)',
    
    // 1. CHANGED: Normal blend mode keeps your original colors
    mixBlendMode: 'normal', 
    
    // 2. CHANGED: Pushed the solid center out to 60% for more "color" area
    maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 90%)',
    WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 90%)',
  }}
>
  <img
    src={PROFILE_SRC}
    alt="Yasser Ahmed"
    // 3. REMOVED: Deleted grayscale to keep the green shirt and skin tones vibrant
    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
    loading="eager"
    decoding="async"
    style={{
      // 4. ADJUSTED: Lower brightness if it feels "washed out"
      filter: 'brightness(100%) contrast(110%)', 
    }}
  />
</div>*/}

{/*nnew*/}
{/* Right — Smaller Blended Profile Picture */}
{/*<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="flex w-full max-w-[240px] flex-shrink-0 justify-center lg:max-w-[300px] lg:justify-end"
>
  <div className="relative">
    
    
    <motion.div
      className="absolute inset-0 -z-10 scale-105 rounded-full bg-primary/15 blur-2xl"
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />


    <div
      className="relative overflow-hidden"
      style={{
        // DECREASED DIMENSIONS: 
        // Min: 200px, Preferred: 22vw, Max: 300px
        width: 'clamp(200px, 22vw, 300px)',
        height: 'clamp(200px, 22vw, 300px)',
        
        mixBlendMode: 'normal', 
        
        // Edge fade
        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 90%)',
        WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 90%)',
      }}
    >
      <img
        src={PROFILE_SRC}
        alt="Yasser Ahmed"
        className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.05]"
        loading="eager"
        decoding="async"
        style={{
          filter: 'brightness(105%) contrast(105%)',
        }}
      />
    </div>
  </div>
</motion.div>*/}

{/* The Circle Image Container */}
<div className="flex flex-col items-center lg:items-end">
<div
      className="relative overflow-hidden"
      style={{
        // Dimensions remain the same
        width: 'clamp(200px, 22vw, 300px)',
        height: 'clamp(200px, 22vw, 300px)',
        
        // ADDED: Crucial line to make the container a perfect circle
        borderRadius: '999px',
        
        mixBlendMode: 'normal', 
        
        // Edge fade styles remain the same
        maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%)',
        WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%)',
      }}
    >
      <img
        src={PROFILE_SRC}
        alt="Yasser Ahmed"
        // Dimensions remain the same
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
        loading="eager"
        decoding="async"
        draggable="false"
        style={{
          // Filter remains the same
          filter: 'brightness(105%) contrast(105%)',
          transform: ' translateY(0.1%) translateX(-0.1%)',
          
        }}
      />
    </div>
    
    </div>
    

      </div>
    </section>
  );
}