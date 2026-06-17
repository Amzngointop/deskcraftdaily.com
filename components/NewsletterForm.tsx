'use client';

import { CheckCircle } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <section
      id="newsletter"
      className="rounded-lg p-8 dark:border dark:border-gray-700"
      style={{ background: '#0D1B2A' }}
    >
      <h2
        className="font-fraunces font-bold text-white mb-2"
        style={{ fontSize: '1.75rem' }}
      >
        Stay Sharp
      </h2>
      <p
        className="text-[#7a9ab8] mb-5"
        style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
      >
        Weekly desk setups, new gear reviews, and ergonomics tips.
      </p>
      <ul className="mb-6 space-y-2">
        {[
          'New buying guides every week',
          "Editor's top picks updated monthly",
          'Ergonomics tips & workspace ideas',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-[#1B4FD8] flex-shrink-0" />
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                color: '#c0d0e0',
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2.5 rounded bg-[#1a2d40] text-white border border-[#2a4060] focus:outline-none focus:border-[#1B4FD8] placeholder-[#4a6a88]"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
        />
        <button type="submit" className="btn-3d flex-shrink-0">
          Subscribe
        </button>
      </form>
    </section>
  );
}
