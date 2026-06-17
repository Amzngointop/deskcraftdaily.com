'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-8">
      <h2
        className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-6"
        style={{ fontSize: '1.5rem' }}
      >
        Frequently Asked Questions
      </h2>
      <div>
        {items.map((item, i) => (
          <div
            key={i}
            className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800"
          >
            <button
              className="w-full flex items-start justify-between py-4 text-left gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100"
                style={{ fontSize: '15px' }}
              >
                {item.question}
              </span>
              {openIndex === i ? (
                <ChevronUp size={18} className="text-[#666666] dark:text-gray-500 mt-0.5 flex-shrink-0" />
              ) : (
                <ChevronDown size={18} className="text-[#666666] dark:text-gray-500 mt-0.5 flex-shrink-0" />
              )}
            </button>
            {openIndex === i && (
              <div
                className="pb-4 text-[#444444] dark:text-gray-300 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
