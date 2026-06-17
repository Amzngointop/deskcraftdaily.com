import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Desk — Ergonomics Glossary',
  description:
    'Every ergonomics term you need to build a healthier home office workspace. Definitions for lumbar support, RSI, monitor ergonomics, and more.',
};

const terms = [
  {
    term: 'Lumbar Support',
    definition:
      'The lower-back support built into ergonomic chairs designed to maintain the natural inward curve (lordosis) of the lumbar spine. Effective lumbar support prevents the pelvis from tilting backward during sustained sitting, which is the primary biomechanical driver of lower-back pain in office workers. The support should contact the lumbar region—roughly between the top of the pelvis and the bottom of the ribcage—without pushing the body forward out of natural alignment.',
    relatedArticle: { title: 'Best Ergonomic Chairs', href: '/best/best-ergonomic-chairs' },
  },
  {
    term: 'Monitor Ergonomics',
    definition:
      'The science of positioning a display to minimize visual fatigue, neck tension, and postural stress. Key variables include: monitor height (top of screen at or slightly below eye level), distance (typically arm\'s length, 20–28 inches), angle (slight backward tilt of 10–15 degrees), and glare management (perpendicular to windows, away from overhead lights). Incorrect monitor positioning is the leading cause of neck and upper back pain in remote workers.',
    relatedArticle: { title: 'Best Monitor Arms', href: '/best/best-monitor-arms' },
  },
  {
    term: 'Repetitive Strain Injury (RSI)',
    definition:
      'A category of musculoskeletal conditions caused by repeated movements, sustained awkward postures, or forceful exertions over time. Common desk-related RSIs include carpal tunnel syndrome (median nerve compression at the wrist), cubital tunnel syndrome (ulnar nerve compression at the elbow), and cervical radiculopathy (nerve compression in the neck). RSI prevention relies on workstation ergonomics, regular movement breaks, and keyboard/mouse technique.',
    relatedArticle: { title: 'How to Choose the Right Peripherals', href: '/guides/choosing-right-peripherals' },
  },
  {
    term: 'Standing Desk Protocol',
    definition:
      'The structured practice of alternating between sitting and standing at regular intervals throughout the workday. Current evidence-based guidelines recommend standing for 15–30 minutes per hour of sitting, and transitioning at least every 30 minutes. Research from the British Journal of Sports Medicine shows that frequent transitions are more beneficial than long continuous standing periods. The protocol requires an anti-fatigue mat for sustained standing comfort.',
    relatedArticle: { title: 'Standing Desk Routine Guide', href: '/guides/standing-desk-routine' },
  },
  {
    term: 'Blue Light',
    definition:
      'Short-wavelength visible light (approximately 400–500nm) emitted by LED screens, smartphones, and fluorescent lighting. In the visible spectrum, blue light has the highest energy per photon. Its primary ergonomic relevance is the effect on circadian rhythms: blue light exposure inhibits melatonin production, which can delay sleep onset when screens are used in the hours before bedtime. Its role in daytime digital eye strain is less established than commonly marketed.',
    relatedArticle: { title: 'Best Blue Light Glasses', href: '/best/best-blue-light-glasses' },
  },
  {
    term: 'Cable Management',
    definition:
      'The systematic organization of power, data, and peripheral cables to eliminate visual clutter, reduce cable damage risk, and simplify equipment changes. Effective cable management combines several tools: under-desk cable trays (for hardware and power strips), wall raceways (for floor-to-outlet runs), Velcro ties (for bundling parallel runs), and desk grommets (for clean cable exits through desk surfaces). Cable management has a direct impact on mental clarity—visible cable chaos creates low-level cognitive load that affects focus.',
    relatedArticle: { title: 'Best Cable Management Solutions', href: '/best/best-cable-management' },
  },
  {
    term: 'Ergonomic Chair Adjustment',
    definition:
      'The process of calibrating a chair\'s adjustable components to fit a specific person\'s body. Proper adjustment sequence: (1) seat height until feet are flat and thighs parallel to floor, (2) lumbar support depth until it contacts the lower back naturally, (3) backrest angle to approximately 95–110 degrees for desk work, (4) armrest height until forearms rest at 90 degrees with relaxed shoulders, (5) seat pan depth until 2–3 fingers of clearance remain behind the knee. An unadjusted ergonomic chair provides no more benefit than a standard chair.',
    relatedArticle: { title: 'How to Choose the Right Peripherals', href: '/guides/choosing-right-peripherals' },
  },
  {
    term: 'Monitor Arm',
    definition:
      'A desk-mounted articulated arm that holds a monitor, replacing the fixed stand that ships with the display. Monitor arms allow height, tilt, pan, and rotation adjustment that fixed stands cannot provide. Gas-spring arms use a pressurized cylinder to counterbalance the monitor\'s weight for smooth one-handed positioning. The primary benefit is ergonomic precision (screen at exact eye level) combined with the recovery of significant desk surface area previously occupied by the monitor stand.',
    relatedArticle: { title: 'Best Monitor Arms', href: '/best/best-monitor-arms' },
  },
  {
    term: 'Laptop Stand',
    definition:
      'A device that raises a laptop screen to approximately eye level, eliminating the forward head posture required to look down at a laptop placed flat on a desk. Laptop stands require an external keyboard and mouse for comfortable use, since raising the screen also raises the built-in keyboard above ergonomic typing height. Available in portable folding designs for travelers and fixed-height premium designs for permanent desk setups.',
    relatedArticle: { title: 'Best Laptop Stands', href: '/best/best-laptop-stands' },
  },
  {
    term: 'Footrest',
    definition:
      'An under-desk platform that supports the feet for users whose feet do not comfortably reach the floor at their optimal chair and desk height combination. Footrests are most needed by shorter users (typically under 5\'4") at standard-height desks (approximately 28–30 inches). Dynamic footrests with rocking or massaging surfaces encourage subtle leg movement that improves circulation compared to static platforms. A footrest is not a substitute for correct chair height—it compensates for the constraint of a fixed-height desk.',
    relatedArticle: { title: 'Best Footrests', href: '/best/best-footrests' },
  },
  {
    term: 'Eye Strain',
    definition:
      'A group of symptoms caused by extended or intense visual effort, including: tired or burning eyes, blurred vision, headaches (particularly frontal and temporal), difficulty focusing when switching between near and far objects, and increased sensitivity to light. Digital eye strain specifically refers to symptoms caused by screen use. Primary causes include infrequent blinking (which dries the corneal surface), fixed focus distance, and high-contrast lighting conditions. The 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds) is the most evidence-backed intervention.',
    relatedArticle: { title: 'Home Office Lighting Guide', href: '/guides/home-office-lighting-guide' },
  },
  {
    term: 'Sitting Posture',
    definition:
      'The arrangement of the body during seated desk work that minimizes musculoskeletal load across all joints simultaneously. Neutral sitting posture: feet flat on floor or footrest, knees at 90–100 degrees, lumbar support contacting lower back, back at approximately 95–100 degrees from seat (slight recline), forearms at 90 degrees with shoulders relaxed, head balanced directly over the spine with no forward protrusion. No single posture should be maintained continuously—even a perfect ergonomic posture creates fatigue when held for more than 30–45 minutes without movement.',
    relatedArticle: { title: 'How to Set Up an Ergonomic Home Office', href: '/guides/how-to-set-up-ergonomic-home-office' },
  },
];

export default function TheDeskPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <span className="category-label text-[#1B4FD8] dark:text-blue-400">GLOSSARY</span>
      <h1
        className="font-fraunces font-black text-[#111111] dark:text-white mt-2 mb-3"
        style={{ fontSize: '2.5rem' }}
      >
        The Desk
      </h1>
      <p
        className="text-[#666666] dark:text-gray-500 mb-10 max-w-2xl"
        style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.7' }}
      >
        Every ergonomics term you need to build a healthier workspace. Definitions sourced from
        published ergonomics research and industry standards.
      </p>

      <div className="space-y-8">
        {terms.map((item) => (
          <div
            key={item.term}
            className="pb-8 border-b border-dashed border-[#d4d4d4] dark:border-gray-800"
          >
            <div
              className="pl-4 border-l-[3px] border-[#1B4FD8] dark:border-blue-500"
            >
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                style={{ fontSize: '1.25rem' }}
              >
                {item.term}
              </h2>
              <p
                className="text-[#444444] dark:text-gray-400 mb-3 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.8' }}
              >
                {item.definition}
              </p>
              <Link
                href={item.relatedArticle.href}
                className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 600 }}
              >
                {item.relatedArticle.title} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded bg-[#f8faff] dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800">
        <p
          className="text-[#444444] dark:text-gray-400"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
        >
          Our glossary definitions are informed by published research from the{' '}
          <a
            href="https://ergo.human.cornell.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
          >
            Cornell Ergonomics Lab
          </a>
          ,{' '}
          <a
            href="https://www.osha.gov/ergonomics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
          >
            OSHA ergonomics standards
          </a>
          , and{' '}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591921/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
          >
            NIH musculoskeletal disorder research
          </a>
          .
        </p>
      </div>
    </div>
  );
}
