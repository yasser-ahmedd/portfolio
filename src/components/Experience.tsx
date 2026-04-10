import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'Meridian Technology Solutions',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    bullets: [
      'Built a resilient, multi-tenant SaaS platform with scalable APIs for enterprise clients.',
    ],
  },
  {
    company: 'Northern Illinois University',
    role: 'Software Engineer',
    period: 'Feb 2025 - May 2025',
    bullets: [
      'Developed the Azure cloud infrastructure for Chicago Early Childhood Integrated Data System (CECIDS).',
    ],
  },
  {
    company: 'Northern Illinois University, Library',
    role: 'Software Engineer',
    period: 'Mar 2024 – Dec 2024',
    bullets: [
      'Revamped NIU’s legacy library portal with a modern tech stack, achieving 35% faster UI responsiveness.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Software Engineer',
    period: 'Jul 2022 – Aug 2023',
    bullets: [
      'Delivered a customer-focused insurance solution that enhanced usability and streamlined self-service workflows.',
    ],
  },
  {
    company: 'The Sparks Foundation',
    role: 'Software Engineer Intern',
    period: 'Aug 2021 – Oct 2021',
    bullets: [
      'Built a secure, user-focused banking platform with enhanced payment workflows and protected sessions.',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading font-heading text-heading text-3xl sm:text-4xl mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute bottom-2 left-[18px] top-2 w-2 overflow-hidden rounded-full bg-gradient-to-b from-primary/25 via-primary/15 to-primary-mint/30 sm:left-[22px]" />
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-1 top-3 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-background bg-gradient-to-br from-primary to-primary-dark shadow-md sm:left-2 sm:top-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-heading shadow-inner ring-1 ring-primary/40" />
                </div>
                <div className="liquid-glass rounded-soft border-primary/20 bg-gradient-to-br from-background-alt to-background-tint p-7 shadow-card transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-heading font-heading text-heading text-lg">
                      {exp.role}
                    </span>
                    <span className="text-primary font-label text-sm">@ {exp.company}</span>
                  </div>
                  <p className="text-body text-sm mb-4">{exp.period}</p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
