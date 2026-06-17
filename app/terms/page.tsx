import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | DeskCraftDaily',
  description: 'DeskCraftDaily terms of use.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-fraunces font-black text-[#111111] mb-4" style={{ fontSize: '2rem' }}>
        Terms of Use
      </h1>
      <p className="text-[#666666] mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
        Last updated: January 2026
      </p>
      <div className="space-y-6">
        {[
          { title: 'Acceptance of Terms', text: 'By accessing and using DeskCraftDaily (deskcraftdaily.com), you accept these terms of use. If you do not agree with any part of these terms, please do not use the site.' },
          { title: 'Content Use', text: 'All content on DeskCraftDaily—including articles, guides, product descriptions, and design—is protected by copyright. Brief excerpts (up to 50 words) with clear attribution and a direct link are permitted. Full republication, scraping, or commercial use of our content is prohibited without written permission.' },
          { title: 'Informational Purpose Only', text: 'Content on DeskCraftDaily is for informational purposes only and does not constitute professional medical, occupational health, or ergonomics advice. If you experience pain, discomfort, or injury related to your workstation, consult a qualified healthcare professional.' },
          { title: 'Affiliate Disclaimer', text: 'DeskCraftDaily participates in the Amazon Associates program. Product links may be affiliate links. Our affiliate relationships do not influence product selections or editorial content.' },
          { title: 'Accuracy and Updates', text: 'We strive to maintain accurate, current information. Product availability, specifications, and market conditions change. We cannot guarantee that all information is current at all times. Always verify specifications on the retailer\'s website before purchasing.' },
          { title: 'Limitation of Liability', text: 'DeskCraftDaily is not liable for any damages arising from use of this site or reliance on its content. Product recommendations are provided in good faith based on available information and are not guarantees of performance or suitability for any specific individual.' },
          { title: 'Governing Law', text: 'These terms are governed by the laws of the State of Texas, United States. Disputes shall be resolved in the courts of Travis County, Texas.' },
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
