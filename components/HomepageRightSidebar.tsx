import Link from 'next/link';
import { ArticleConfig } from '@/data/articles';

export default function HomepageRightSidebar({ articles }: { articles: ArticleConfig[] }) {
  return (
    <div className="sticky-sidebar">
      <p className="category-label text-[#666666] dark:text-gray-500 mb-3">BUYING GUIDES</p>
      <ul className="space-y-3">
        {articles.map((article) => (
          <li
            key={article.slug}
            className="border-b border-dashed border-[#d4d4d4] dark:border-gray-800 pb-2.5"
          >
            <span
              className="category-label text-[#1B4FD8] block mb-0.5"
              style={{ fontSize: '10px' }}
            >
              {article.category}
            </span>
            <Link
              href={`/best/${article.slug}`}
              className="text-xs font-fraunces font-bold text-[#111111] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 leading-snug block"
              style={{ fontSize: '13px' }}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/best/best-monitor-arms-laptop-stands"
        className="mt-4 inline-block category-label text-[#1B4FD8] dark:text-blue-400 hover:underline"
        style={{ fontSize: '11px' }}
      >
        ALL REVIEWS →
      </Link>
    </div>
  );
}
