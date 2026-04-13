import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Database,
  Layers,
  Workflow,
  PanelTop,
  Bot,
} from 'lucide-react';
import { cn } from '../lib/utils';

const SKILL_CATEGORIES = [
  {
    label: 'Programming Languages',
    icon: Code,
    bg: 'bg-primary/10',
    items: ['Python', 'Java', 'Golang', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frontend',
    icon: PanelTop,
    bg: 'bg-primary-mint/15',
    items: ['React', 'Next.js', 'Vue.js', 'Angular'],
  },
  {
    label: 'Backend',
    icon: Layers,
    bg: 'bg-teal-50',
    items: ['Node.js','FastAPI', 'Spring Boot', 'Laravel', 'Kafka'],
  },
  {
    label: 'Databases',
    icon: Database,
    bg: 'bg-emerald-50',
    items: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    icon: Workflow,
    bg: 'bg-green-50',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform','CI/CD'],
  },
  {
    label: 'AI Tools',
    icon: Bot,
    bg: 'bg-lime-50',
    items: ['Claude Code', 'Cursor', 'Lovable', 'GitHub Copilot', 'n8n'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading font-heading text-adaptive text-3xl sm:text-4xl mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={cn(
                  'liquid-glass rounded-soft border-primary/20 p-7 shadow-glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover',
                  category.bg
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/15 p-3 shadow-sm ring-1 ring-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-heading text-heading text-lg">
                    {category.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-pill bg-primary/10 px-3.5 py-1.5 text-sm font-label text-body shadow-sm ring-1 ring-primary/15"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
