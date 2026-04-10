import { useState, useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'education', 'contact'];

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
