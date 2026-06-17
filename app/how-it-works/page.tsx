import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'How It Works — Ergonomics Guides',
  description:
    'Complete home office ergonomics guides for remote workers. Setup guides, monitor placement, standing desk routines, cable management, and more.',
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <span className="category-label text-[#1B4FD8] dark:text-blue-400">GUIDES</span>
      <h1
        className="font-fraunces font-black text-[#111111] dark:text-white mt-2 mb-4"
        style={{ fontSize: '2.5rem' }}
      >
        How It Works
      </h1>
      <p
        className="text-[#666666] dark:text-gray-400 mb-10 max-w-2xl"
        style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.7' }}
      >
        Step-by-step guides for building and maintaining a healthy home office setup. Each guide is
        grounded in published ergonomics research and written for people who want results, not
        theory.
      </p>

      <div className="space-y-8">
        {guides.map((guide, i) => (
          <div
            key={guide.slug}
            className="flex gap-6 border-b border-dashed border-[#d4d4d4] dark:border-gray-800 pb-8"
          >
            <div
              className="flex-shrink-0 font-fraunces font-black text-[#e5e5e5] dark:text-gray-700"
              style={{ fontSize: '3rem', lineHeight: 1, width: '60px' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <span className="category-label text-[#1B4FD8] dark:text-blue-400">{guide.category}</span>
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mt-1 mb-2"
                style={{ fontSize: '1.25rem' }}
              >
                <Link
                  href={`/guides/${guide.slug}`}
                  className="hover:text-[#1B4FD8] dark:hover:text-blue-400"
                >
                  {guide.title}
                </Link>
              </h2>
              <p
                className="text-[#444444] dark:text-gray-400 mb-3 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.7' }}
              >
                {guide.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span
                  className="text-[#666666] dark:text-gray-500"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                >
                  {guide.readTime} min read
                </span>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-[#1B4FD8] dark:text-blue-400 font-semibold text-sm hover:underline"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
