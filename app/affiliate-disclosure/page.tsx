import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | DeskCraftDaily',
  description: 'DeskCraftDaily affiliate disclosure and Amazon Associates participation statement.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-fraunces font-black text-[#111111] mb-4" style={{ fontSize: '2rem' }}>
        Affiliate Disclosure
      </h1>
      <p className="text-[#666666] mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
        Last updated: January 2026
      </p>
      <div className="space-y-6">
        {[
          { title: 'Amazon Associates', text: 'DeskCraftDaily is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click on a product link and make a qualifying purchase, we may earn a small commission at no additional cost to you.' },
          { title: 'Editorial Independence', text: 'Our participation in the Amazon Associates program does not influence our editorial selections, rankings, or content. Products are selected based on research, sales data, and editorial evaluation. We do not accept payment, free products, or any other compensation in exchange for positive coverage.' },
          { title: 'How Affiliate Links Work', text: 'Links that include "deskcraftdail-20" in the URL are affiliate links to Amazon.com. When you follow one of these links and make a purchase, Amazon pays us a small commission (typically 1–4% depending on the product category). The price you pay is identical whether you use our link or navigate to Amazon directly.' },
          { title: 'FTC Compliance', text: 'This disclosure is provided in compliance with the Federal Trade Commission\'s 16 CFR Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising." We are committed to transparency about our monetization methods.' },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="font-fraunces font-bold text-[#111111] mb-2" style={{ fontSize: '1.1rem' }}>{section.title}</h2>
            <p className="text-[#444444] leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.8' }}>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
