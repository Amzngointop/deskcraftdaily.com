'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#e5e5e5] dark:border-gray-800">
      <button
        className="w-full flex items-center justify-between py-3 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-[#111111] dark:text-gray-200"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-[#666666] dark:text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[#666666] dark:text-gray-500 flex-shrink-0" />
        )}
      </button>
      {open && <div className="pb-4 dark:text-gray-300">{children}</div>}
    </div>
  );
}
