import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Setup Notes — Our Methodology',
  description:
    'How DeskCraftDaily researches and selects home office ergonomics products. Our mission, research process, and editorial standards.',
};

export default function SetupNotesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <span className="category-label text-[#1B4FD8] dark:text-blue-400">ABOUT</span>
      <h1
        className="font-fraunces font-black text-[#111111] dark:text-white mt-2 mb-4"
        style={{ fontSize: '2.5rem' }}
      >
        Setup Notes
      </h1>
      <p
        className="text-[#666666] dark:text-gray-500 mb-10"
        style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.7' }}
      >
        The thinking behind how we select, evaluate, and write about home office equipment.
      </p>

      <div className="prose-like space-y-10">
        <section>
          <h2
            className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
            style={{ fontSize: '1.5rem' }}
          >
            Our Mission
          </h2>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed mb-3"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            DeskCraftDaily exists because remote work has created a generation of people spending
            8–12 hours a day at improperly set up workstations. The long-term consequences—back
            pain, neck tension, carpal tunnel, eye strain—are preventable with the right
            information and equipment. Most of that information either doesn&apos;t exist in plain
            language, or is buried in academic papers behind paywalls.
          </p>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            Our mission is straightforward: give remote workers the same quality ergonomic guidance
            that occupational health professionals give to on-site employees, in language that
            doesn&apos;t require a kinesiology degree to follow. Every guide, review, and article
            we publish is written toward that goal.
          </p>
        </section>

        <hr className="dashed-divider" />

        <section>
          <h2
            className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
            style={{ fontSize: '1.5rem' }}
          >
            How We Research
          </h2>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed mb-4"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            Our research process for every buying guide and product category follows a consistent
            sequence:
          </p>
          <ol className="space-y-4">
            {[
              {
                step: '01 Category Research',
                text: 'We start with the published ergonomics literature for the category—what OSHA, the Cornell Ergonomics Lab, and peer-reviewed journals say about the relevant body mechanics. This gives us the framework for evaluating whether a product actually does what it claims.',
              },
              {
                step: '02 Market Survey',
                text: 'We identify the full product landscape for the category—every relevant product above a minimum quality threshold. For most categories, this is 20–40 products.',
              },
              {
                step: '03 Sales and Review Analysis',
                text: 'We analyze Amazon sales volume and verified purchase review patterns. We use statistical signals to filter out incentivized or fake reviews, focusing on verified purchase reviews from users who spent 3+ months with the product.',
              },
              {
                step: '04 Editorial Evaluation',
                text: 'Each candidate product is evaluated against our scoring rubric: ergonomic benefit (does it deliver the claimed benefit?), build quality (will it last?), value (is the benefit proportional to the cost?), and compatibility (does it work with standard home office setups?).',
              },
              {
                step: '05 Final Selection',
                text: 'We select the six products that best represent the needs of our audience—one clear best overall pick, one best value, and four picks that address specific use cases or body types.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span
                  className="flex-shrink-0 font-fraunces font-bold text-[#1B4FD8] dark:text-blue-400"
                  style={{ fontSize: '18px', minWidth: '80px' }}
                >
                  {item.step.split(' ')[0]}
                </span>
                <div>
                  <p
                    className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1"
                    style={{ fontSize: '15px' }}
                  >
                    {item.step.split(' ').slice(1).join(' ')}
                  </p>
                  <p
                    className="text-[#444444] dark:text-gray-400"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.7' }}
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <hr className="dashed-divider" />

        <section>
          <h2
            className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
            style={{ fontSize: '1.5rem' }}
          >
            Our Standards
          </h2>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed mb-4"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            Several principles guide every editorial decision we make:
          </p>
          <ul className="space-y-3">
            {[
              'We do not publish prices. Prices change constantly, and a product that looks like great value today may not be next week. We focus on what doesn\'t change: build quality, ergonomic benefit, and relative value.',
              'We do not use star ratings. Aggregated star ratings collapse genuinely different user experiences into a single number that tells you nothing about whether the product suits your specific situation.',
              'We do not make personal testing claims we cannot substantiate. We analyze products based on specifications, verified review data, and published research.',
              'Affiliate relationships do not influence our selections. We earn a commission when you purchase through our Amazon links, but our editorial process runs independently of those relationships.',
              'We update our guides when products change significantly. A recommendation that was accurate in 2024 may not be accurate in 2026—we review all guides annually.',
            ].map((standard, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white mt-0.5"
                  style={{ background: '#1B4FD8', fontSize: '11px', fontWeight: 700 }}
                >
                  ✓
                </span>
                <p
                  className="text-[#444444] dark:text-gray-400"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.7' }}
                >
                  {standard}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="dashed-divider" />

        <section>
          <h2
            className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
            style={{ fontSize: '1.5rem' }}
          >
            Why We Care About Ergonomics
          </h2>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed mb-3"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            Musculoskeletal disorders are the leading cause of workplace disability in the United
            States, affecting over 34 million workers annually according to the Bureau of Labor
            Statistics. Remote work has extended the number of hours people spend at poorly
            configured home desks, without the occupational health resources that large employers
            provide.
          </p>
          <p
            className="text-[#444444] dark:text-gray-400 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.8' }}
          >
            A properly configured workstation is not a luxury—it&apos;s a health investment with
            measurable returns. We believe that good ergonomic information, delivered clearly and
            honestly, helps remote workers make better decisions about their health and their
            workspace. That&apos;s what DeskCraftDaily is for.
          </p>
        </section>
      </div>
    </div>
  );
}
