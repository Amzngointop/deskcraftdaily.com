'use client';

import { useEffect, useRef, useState } from 'react';

interface ScoreBarProps {
  comfortScore: number;
  buildScore: number;
  valueScore: number;
}

function SingleBar({ label, score, delay }: { label: string; score: number; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="flex items-center gap-3 mb-2">
      <span
        className="w-28 flex-shrink-0 text-[#666666] dark:text-gray-400"
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 500,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        {label}
      </span>
      <div
        className="flex-1 rounded-sm overflow-hidden bg-[#e5e5e5] dark:bg-gray-700"
        style={{ height: '4px', borderRadius: '2px' }}
      >
        <div
          style={{
            height: '100%',
            width: animated ? `${score}%` : '0%',
            background: '#1B4FD8',
            borderRadius: '2px',
            transition: `width 600ms ease-out`,
          }}
        />
      </div>
      <span
        className="text-[#111111] dark:text-gray-200"
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          fontSize: '12px',
          width: '28px',
          textAlign: 'right',
        }}
      >
        {score}
      </span>
    </div>
  );
}

export default function ErgonomicScoreBar({ comfortScore, buildScore, valueScore }: ScoreBarProps) {
  return (
    <div
      className="my-4 py-3 px-4 bg-[#fafafa] dark:bg-gray-900"
      style={{ borderRadius: '4px' }}
    >
      <SingleBar label="Comfort" score={comfortScore} delay={0} />
      <SingleBar label="Build Quality" score={buildScore} delay={150} />
      <SingleBar label="Value" score={valueScore} delay={300} />
    </div>
  );
}
