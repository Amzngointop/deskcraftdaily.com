import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Monitor,
  Armchair,
  ArrowUpDown,
  Usb,
  Headphones,
  Keyboard,
  LayoutGrid,
  Eye,
  BookOpen,
  BarChart2,
  Award,
} from 'lucide-react';
import { guides } from '@/data/guides';
import { articles } from '@/data/articles';
import { getHomepageProducts } from '@/data/products';
import { editors, reviewCategories } from '@/data/site';
import ProductCard from '@/components/ProductCard';
import CTAButton from '@/components/CTAButton';
import ErgoCalculator from '@/components/ErgoCalculator';
import HomepageSidebar from '@/components/HomepageSidebar';
import HomepageRightSidebar from '@/components/HomepageRightSidebar';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'DeskCraftDaily — Home Office Desk Setup & Ergonomics Reviews 2026',
  description:
    'Expert home office ergonomics and desk setup reviews. Monitor arms, ergonomic chairs, standing desk converters, and more — curated for remote workers.',
};

const categoryIcons: Record<string, React.ElementType> = {
  'best-monitor-arms-laptop-stands': Monitor,
  'best-ergonomic-chairs': Armchair,
  'best-standing-desks': ArrowUpDown,
  'best-usb-hubs-docking-stations': Usb,
  'best-noise-cancelling-headphones': Headphones,
  'best-wireless-mouse-keyboard-combos': Keyboard,
  'best-desk-organizers': LayoutGrid,
  'best-blue-light-glasses': Eye,
};

const categoryDescriptions: Record<string, string> = {
  'best-monitor-arms-laptop-stands': 'Free up desk space and perfect your eye level.',
  'best-ergonomic-chairs': 'Support your back through the full workday.',
  'best-standing-desks': 'Switch effortlessly between sitting and standing.',
  'best-usb-hubs-docking-stations': 'Connect all peripherals with one cable.',
  'best-noise-cancelling-headphones': 'Block distractions and stay in deep focus.',
  'best-wireless-mouse-keyboard-combos': 'Cut the cables and reduce wrist strain.',
  'best-desk-organizers': 'Keep your workspace clean and accessible.',
  'best-blue-light-glasses': 'Protect your eyes during long screen sessions.',
};

const glossaryTerms = [
  {
    term: 'Lumbar Support',
    definition:
      'The lower-back support built into ergonomic chairs that maintains the natural inward curve of the lumbar spine. Proper lumbar support prevents the pelvis from tilting backward, which is the primary driver of lower-back pain during prolonged sitting.',
  },
  {
    term: 'Monitor Ergonomics',
    definition:
      'The science of positioning a display to minimize eye strain, neck tension, and postural fatigue. The monitor top should sit at or slightly below eye level, at arm\'s length distance, with no reflective glare from windows or overhead lights.',
  },
  {
    term: 'Repetitive Strain Injury (RSI)',
    definition:
      'A category of musculoskeletal conditions caused by repeated movements, sustained postures, or forceful exertions over time. Common desk-related RSIs include carpal tunnel syndrome, tendinitis, and cervical radiculopathy.',
  },
  {
    term: 'Standing Desk Protocol',
    definition:
      'The practice of alternating between sitting and standing at regular intervals rather than standing continuously. Most ergonomics guidelines recommend 20–30 minutes of standing per hour of sitting for optimal benefit.',
  },
  {
    term: 'Blue Light',
    definition:
      'Short-wavelength, high-energy visible light emitted by LED screens, smartphones, and fluorescent lighting. Excessive blue light exposure in the evening can suppress melatonin production and disrupt sleep cycles.',
  },
  {
    term: 'Cable Management',
    definition:
      'The systematic organization of power, data, and peripheral cables to prevent clutter, reduce hazards, and maintain visual clarity. Effective cable management combines under-desk trays, raceways, Velcro ties, and desk grommets.',
  },
];

export default function HomePage() {
  const featuredProducts = getHomepageProducts();
  const editorChoice = featuredProducts[0];

  const sections = [
    { id: 'top-rated', label: 'Top-Rated Tools' },
    { id: 'browse-by-category', label: 'Browse by Category' },
    { id: 'latest-guides', label: 'Latest Guides' },
    { id: 'ergo-calculator', label: 'Ergo Calculator' },
    { id: 'the-desk', label: 'The Desk' },
    { id: 'how-we-pick', label: 'How We Pick' },
    { id: 'newsletter', label: 'Newsletter' },
  ];

  return (
    <>
      {/* ZONE A — 3-column layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8">

          {/* LEFT — Editor's Choice (sticky) */}
          <div className="hidden lg:block">
            <div className="sticky top-20">
              <div
                className="p-5 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                style={{ borderRadius: '6px' }}
              >
                <span className="category-label text-[#1B4FD8]">EDITOR&apos;S CHOICE</span>
                <div
                  className="bg-[#f9f9f9] dark:bg-gray-800"
                  style={{ borderRadius: '4px', padding: '12px', margin: '12px 0' }}
                >
                  <img
                    src={editorChoice.imageUrl}
                    alt={editorChoice.name}
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
                <h3
                  className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                  style={{ fontSize: '15px' }}
                >
                  {editorChoice.name}
                </h3>
                <p
                  className="text-[#444444] dark:text-gray-400 mb-3"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                >
                  {editorChoice.summary}
                </p>
                <a
                  href={editorChoice.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-[#1B4FD8] font-semibold text-sm mb-2 hover:underline"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  View on Amazon →
                </a>
                <p
                  className="text-center text-[#999999] dark:text-gray-500 mb-4"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '11px' }}
                >
                  We may earn a commission
                </p>
                <CTAButton href="#top-rated" className="w-full text-center block">
                  See More Top Picks
                </CTAButton>
              </div>
            </div>
          </div>

          {/* CENTER — Guides previews */}
          <div>
            {/* Wide guide card */}
            <div className="mb-6">
              <div
                className="bg-[#f9f9f9] dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                style={{ borderRadius: '6px', overflow: 'hidden' }}
              >
                <img
                  src={guides[0].coverImage}
                  alt={guides[0].title}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                />
                <div className="p-5">
                  <span className="category-label text-[#1B4FD8]">{guides[0].category}</span>
                  <h2
                    className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mt-1 mb-2"
                    style={{ fontSize: '1.25rem' }}
                  >
                    {guides[0].title}
                  </h2>
                  <p
                    className="text-[#444444] dark:text-gray-400 mb-4"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.6' }}
                  >
                    {guides[0].excerpt}
                  </p>
                  <Link
                    href={`/guides/${guides[0].slug}`}
                    className="text-[#1B4FD8] font-semibold text-sm hover:underline"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            </div>

            <hr className="dashed-divider dark:border-gray-800" />

            {/* Two small guide cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {guides.slice(1, 3).map((guide) => (
                <div
                  key={guide.slug}
                  className="bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                  style={{ borderRadius: '6px', overflow: 'hidden' }}
                >
                  <img
                    src={guide.coverImage}
                    alt={guide.title}
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                  <div className="p-4">
                    <span className="category-label text-[#1B4FD8]">{guide.category}</span>
                    <h3
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mt-1 mb-2 leading-snug"
                      style={{ fontSize: '14px' }}
                    >
                      {guide.title}
                    </h3>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-[#1B4FD8] text-xs font-semibold hover:underline"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/how-it-works"
              className="text-[#1B4FD8] font-semibold text-sm hover:underline"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              → Browse All Guides
            </Link>

            {/* Mobile: Editor's Choice (shown only on small screens) */}
            <div className="lg:hidden mt-8">
              <div
                className="p-5 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                style={{ borderRadius: '6px' }}
              >
                <span className="category-label text-[#1B4FD8]">EDITOR&apos;S CHOICE</span>
                <div
                  className="bg-[#f9f9f9] dark:bg-gray-800"
                  style={{ borderRadius: '4px', padding: '12px', margin: '12px 0' }}
                >
                  <img
                    src={editorChoice.imageUrl}
                    alt={editorChoice.name}
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
                <h3
                  className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                  style={{ fontSize: '15px' }}
                >
                  {editorChoice.name}
                </h3>
                <p
                  className="text-[#444444] dark:text-gray-400 mb-3"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                >
                  {editorChoice.summary}
                </p>
                <a
                  href={editorChoice.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-[#1B4FD8] font-semibold text-sm mb-2 hover:underline"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  View on Amazon →
                </a>
                <CTAButton href="#top-rated" className="w-full text-center block">
                  See More Top Picks
                </CTAButton>
              </div>
            </div>
          </div>

          {/* RIGHT — From Our Editors + Latest Review + Quick Stat (sticky) */}
          <div className="hidden lg:block">
            <div className="sticky top-20 space-y-4">
              {/* From Our Editors */}
              <div
                className="bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                style={{ borderRadius: '6px', padding: '20px' }}
              >
                <p className="category-label text-[#666666] dark:text-gray-500 mb-4">FROM OUR EDITORS</p>
                {editors.map((editor, i) => (
                  <div key={editor.name}>
                    <p
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-0.5"
                      style={{ fontSize: '15px' }}
                    >
                      {editor.name}
                    </p>
                    <p className="category-label text-[#666666] dark:text-gray-500 mb-2" style={{ fontSize: '10px' }}>
                      {editor.role}
                    </p>
                    <p
                      className="text-[#444444] dark:text-gray-400 italic"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                    >
                      &ldquo;{editor.quote}&rdquo;
                    </p>
                    {i < editors.length - 1 && <hr className="dashed-divider" />}
                  </div>
                ))}
              </div>

              {/* Latest Review */}
              <div
                className="bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                style={{ borderRadius: '6px', padding: '16px' }}
              >
                <p
                  className="category-label text-[#666666] dark:text-gray-500 mb-3"
                  style={{ letterSpacing: '0.1em' }}
                >
                  LATEST REVIEW
                </p>
                <hr className="dashed-divider" style={{ margin: '0 0 12px' }} />
                <span className="category-label text-[#1B4FD8]" style={{ fontSize: '10px' }}>
                  MONITOR ARMS & LAPTOP STANDS
                </span>
                <h4 className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mt-1 mb-2" style={{ fontSize: '15px' }}>
                  <Link href="/best/best-monitor-arms-laptop-stands" className="hover:text-[#1B4FD8] dark:hover:text-blue-400">
                    Best Monitor Arms &amp; Laptop Stands for Your Home Office (2026)
                  </Link>
                </h4>
                <p
                  className="text-[#444444] dark:text-gray-400 mb-3"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', lineHeight: '1.6' }}
                >
                  Our top picks for monitor arms and laptop stands that bring screens to eye level and free up desk space.
                </p>
                <Link
                  href="/best/best-monitor-arms-laptop-stands"
                  className="text-[#1B4FD8] text-xs font-semibold hover:underline"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Read Review →
                </Link>

                <hr className="dashed-divider" />

                {/* Quick Stat */}
                <p
                  className="category-label text-[#666666] dark:text-gray-500 mb-2"
                  style={{ letterSpacing: '0.1em' }}
                >
                  QUICK STAT
                </p>
                <p
                  className="font-fraunces font-black text-[#1B4FD8] leading-none mb-1"
                  style={{ fontSize: '48px', fontWeight: 900 }}
                >
                  48
                </p>
                <p
                  className="text-[#666666] dark:text-gray-500"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                >
                  products reviewed across 8 categories
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ZONE B — Three column layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex gap-8">
          {/* Left sidebar */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <HomepageSidebar sections={sections} />
          </div>

          {/* Center content */}
          <div className="flex-1 min-w-0">
            {/* Section 1 — Top-Rated */}
            <section id="top-rated" className="mb-14">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                style={{ fontSize: '1.75rem' }}
              >
                Top-Rated Home Office Tools
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            <hr className="dashed-divider" />

            {/* Section 2 — Browse by Category */}
            <section id="browse-by-category" className="mb-14">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-6"
                style={{ fontSize: '1.75rem' }}
              >
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {reviewCategories.map((cat) => {
                  const Icon = categoryIcons[cat.href.replace('/best/', '')];
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block p-4 hover:border-[#1B4FD8] transition-colors bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                      style={{ borderRadius: '6px' }}
                    >
                      {Icon && <Icon size={24} className="text-[#1B4FD8] mb-3" />}
                      <p
                        className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1"
                        style={{ fontSize: '14px' }}
                      >
                        {cat.label}
                      </p>
                      <p
                        className="text-[#666666] dark:text-gray-500"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', lineHeight: '1.5' }}
                      >
                        {categoryDescriptions[cat.href.replace('/best/', '')]}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>

            <hr className="dashed-divider" />

            {/* Section 3 — Latest Guides */}
            <section id="latest-guides" className="mb-14">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-6"
                style={{ fontSize: '1.75rem' }}
              >
                Latest Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guides.map((guide) => (
                  <div
                    key={guide.slug}
                    className="bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                    style={{ borderRadius: '6px', padding: '20px' }}
                  >
                    <span className="category-label text-[#1B4FD8]">{guide.category}</span>
                    <h3
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mt-1 mb-2"
                      style={{ fontSize: '16px' }}
                    >
                      <Link href={`/guides/${guide.slug}`} className="hover:text-[#1B4FD8] dark:hover:text-blue-400">
                        {guide.title}
                      </Link>
                    </h3>
                    <p
                      className="text-[#444444] dark:text-gray-400 mb-3"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                    >
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[#666666] dark:text-gray-500"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
                      >
                        {guide.readTime} min read
                      </span>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="text-[#1B4FD8] font-semibold text-sm hover:underline"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="dashed-divider" />

            {/* Section 4 — Ergo Calculator */}
            <section
              id="ergo-calculator"
              className="mb-14 rounded-lg p-8 dark:border dark:border-gray-700"
              style={{ background: '#0D1B2A' }}
            >
              <h2
                className="font-fraunces font-bold text-white mb-2"
                style={{ fontSize: '1.75rem' }}
              >
                Find Your Perfect Ergonomic Setup
              </h2>
              <p
                className="text-[#7a9ab8] mb-6"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.6' }}
              >
                Enter your height and we&apos;ll calculate the ideal dimensions for your desk,
                monitor, chair, and footrest.
              </p>
              <ErgoCalculator />
            </section>

            <hr className="dashed-divider" />

            {/* Section 5 — The Desk */}
            <section id="the-desk" className="mb-14">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                style={{ fontSize: '1.75rem' }}
              >
                The Desk
              </h2>
              <p
                className="text-[#666666] dark:text-gray-400 mb-6"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                Essential ergonomics and workspace terms explained.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {glossaryTerms.map((item) => (
                  <div
                    key={item.term}
                    className="p-4 dark:bg-gray-900"
                    style={{ borderLeft: '3px solid #1B4FD8', background: '#fafafa' }}
                  >
                    <h3
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                      style={{ fontSize: '15px' }}
                    >
                      {item.term}
                    </h3>
                    <p
                      className="text-[#444444] dark:text-gray-400"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                    >
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
              <CTAButton href="/the-desk">Explore The Full Desk →</CTAButton>
            </section>

            <hr className="dashed-divider" />

            {/* Section 6 — How We Pick */}
            <section id="how-we-pick" className="mb-14">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-6"
                style={{ fontSize: '1.75rem' }}
              >
                How We Pick Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    Icon: BookOpen,
                    title: 'Independent Research',
                    text: 'We analyze product specifications, engineering data, and ergonomic certifications against established guidelines from OSHA, NIH, and Cornell Ergonomics Lab. No manufacturer-provided content.',
                  },
                  {
                    Icon: BarChart2,
                    title: 'Sales & Reviews',
                    text: 'We cross-reference Amazon sales volume with verified purchase review patterns to surface genuinely popular products, filtering out incentivized reviews using pattern-detection methods.',
                  },
                  {
                    Icon: Award,
                    title: 'Editorial Standards',
                    text: 'Every product is evaluated against a consistent rubric: comfort during extended use, build quality and longevity, value for money, and compatibility with standard home office setups.',
                  },
                ].map(({ Icon, title, text }) => (
                  <div
                    key={title}
                    className="p-5 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
                    style={{ borderRadius: '6px' }}
                  >
                    <Icon size={24} className="text-[#1B4FD8] mb-3" />
                    <h3
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                      style={{ fontSize: '16px' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-[#444444] dark:text-gray-400"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.7' }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Process diagram */}
              <div
                className="p-5 mb-6"
                style={{ background: '#fafafa', border: '1px solid #e5e5e5', borderRadius: '6px' }}
              >
                <p className="category-label text-[#666666] mb-4">OUR PROCESS</p>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    'Category Research',
                    'Sales Analysis',
                    'Review Audit',
                    'Ergonomic Check',
                    'Final Pick',
                  ].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span
                        className="px-3 py-1.5 rounded text-white"
                        style={{
                          background: '#1B4FD8',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-[#999999] font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p
                className="text-[#666666] text-sm mb-3"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Our methodology draws on published ergonomics standards from{' '}
                <a
                  href="https://www.osha.gov/ergonomics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B4FD8] hover:underline"
                >
                  OSHA&apos;s ergonomics guidelines
                </a>
                ,{' '}
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591921/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B4FD8] hover:underline"
                >
                  NIH research on musculoskeletal disorders
                </a>
                , and the{' '}
                <a
                  href="https://ergo.human.cornell.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B4FD8] hover:underline"
                >
                  Cornell Ergonomics Lab
                </a>
                .
              </p>

              <p
                className="text-xs text-[#666666] p-3 rounded"
                style={{
                  fontFamily: 'var(--font-inter)',
                  background: '#f8faff',
                  borderLeft: '3px solid #1B4FD8',
                }}
              >
                <strong>Affiliate disclosure:</strong> Links to Amazon products include our
                affiliate tag. This does not affect our editorial selections.
              </p>
            </section>

            <hr className="dashed-divider" />

            {/* Section 7 — Newsletter */}
            <NewsletterForm />
          </div>

          {/* Right sidebar */}
          <div className="hidden xl:block w-56 flex-shrink-0">
            <HomepageRightSidebar articles={articles} />
          </div>
        </div>
      </section>
    </>
  );
}
