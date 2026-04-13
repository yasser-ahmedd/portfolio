/* Option 1 — Horizontal stat bar */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, BrainCircuit, FolderCode } from 'lucide-react';

const STATS = [
  { value: '3+', label: 'Years Experience', icon: Briefcase },
  { value: '10+', label: 'Hackathons Attended', icon: FolderCode },
  { value: '7+', label: 'AI tools Proficient', icon: BrainCircuit },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-primary-mint/10 blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="mb-6 font-heading text-3xl text-adaptive sm:text-4xl">
            About Me
          </h2>
          <p style={{textAlign: 'justify'}} className="text-body text-lg leading-relaxed mb-10">
          <p><b>Software Engineer</b> focused on building scalable, high-performance systems.
           Keen on Algorithms, complex programming, and problem-solving.
           I pursued my Master's in Computer Science from Northern Illinois University.</p>
           <p>Working for Meridian Technology Solutions developing infrastructure for SaaS products. 
            Prior to my Master's I worked for TCS building microservices for insurance applications.</p>
            <p>When I'm off work, you can find me on a hike or taking a spontaneous road trip.</p>
          </p>

          {/* Horizontal stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="liquid-glass rounded-2xl border-primary/20 shadow-glass"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                const isLast = i === STATS.length - 1;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center justify-center gap-2 px-6 py-6 text-center
                      ${!isLast ? 'border-b sm:border-b-0 sm:border-r border-primary/15' : ''}
                      ${i === 1 ? 'border-r border-primary/15 sm:border-r' : ''}
                    `}
                  >
                    <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
                    <span className="font-heading text-2xl text-primary sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="font-label text-xs text-body leading-tight">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}