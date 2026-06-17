'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export default function HomepageSidebar({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky-sidebar">
      <p className="category-label text-[#666666] dark:text-gray-500 mb-3">ON THIS PAGE</p>
      <ul className="space-y-1">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block py-1 text-xs transition-colors pl-2 border-l-[3px] ${
                  isActive
                    ? 'text-[#1B4FD8] dark:text-blue-400 border-[#1B4FD8] dark:border-blue-400 font-semibold'
                    : 'text-[#444444] dark:text-gray-400 border-transparent font-normal'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
