import Link from 'next/link';
import { siteConfig, reviewCategories } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-[#e5e5e5] dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-fraunces font-black text-[#111111] dark:text-gray-100 mb-3"
              style={{ fontSize: '1.2rem', letterSpacing: '0.08em' }}
            >
              DESKCRAFTDAILY
            </p>
            <p className="text-sm text-[#666666] dark:text-gray-400 leading-relaxed">
              Expert home office ergonomics and desk setup guides for remote workers.
            </p>
          </div>

          {/* Best Gear */}
          <div>
            <p className="category-label text-[#111111] dark:text-gray-300 mb-3">BEST GEAR</p>
            <ul className="space-y-2">
              {reviewCategories.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <p className="category-label text-[#111111] dark:text-gray-300 mb-3">GUIDES</p>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                  The Guides
                </Link>
              </li>
              <li>
                <Link href="/the-desk" className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/setup-notes" className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="category-label text-[#111111] dark:text-gray-300 mb-3">LEGAL</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/reach-us" className="text-sm text-[#666666] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="dashed-divider mt-10 mb-6 dark:border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#666666] dark:text-gray-500">{siteConfig.copyright}. All rights reserved.</p>
          <p className="text-xs text-[#666666] dark:text-gray-500 max-w-lg">
            DeskCraftDaily is a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites to earn advertising
            fees by advertising and linking to Amazon.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
