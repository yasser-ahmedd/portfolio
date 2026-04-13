import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Combat Sports Analyzer',
    description: 'Extracts fighter movements using deep learning for actionable performance insights.',
    image: '/boxing.jpg',
    tech: ['Python', 'MediaPipe', 'Neural Networks'],
    link: 'https://github.com/yasser-ahmedd/Combat-Sports-Analyzer',
  },
  {
    title: 'FoundIt App',
    description: 'Location-based lost-and-found app with real-time tracking and smart notifications.',
    image: 'landf.jpg',
    tech: ['React', 'JavaScript', 'Tailwind'],
    link: 'https://github.com/yasser-ahmedd/FindIt-Portal',
  },
  {
    title: 'ATM Threat Detection',
    description: 'Detects suspicious behavior inside ATM booths in real time using computer vision.',
    image: 'atm.jpg',
    tech: ['OpenCV', 'Tensorflow', 'MobileNet'],
    link: 'https://github.com/yasser-ahmedd/ATM-Threat-Detection',
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
  className="font-heading text-adaptive text-3xl sm:text-4xl mb-12 flex flex-wrap items-center gap-4"
>
  Projects
  <span
  className="liquid-shimmer-bg relative overflow-hidden rounded-pill font-label text-sm bg-clip-text"
  style={{
    fontSize: '0.95rem',
    background: 'linear-gradient(110deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.25) 60%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'glass-shimmer 3s ease-in-out infinite',
  }}
>
  ✦ more coming soon ...
</span>
</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group liquid-glass overflow-hidden rounded-soft border-primary/20 shadow-glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="aspect-video overflow-hidden rounded-t-soft">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="font-heading font-heading text-heading text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-body text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-pill bg-background-alt px-3 py-1 text-xs font-label text-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-label text-sm hover:gap-3 transition-all"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
