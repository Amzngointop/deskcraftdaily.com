import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DeskCraftDaily',
  description: 'DeskCraftDaily privacy policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-fraunces font-black text-[#111111] mb-4" style={{ fontSize: '2rem' }}>
        Privacy Policy
      </h1>
      <p className="text-[#666666] mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
        Last updated: January 2026
      </p>
      <div className="space-y-6">
        {[
          { title: 'Information We Collect', text: 'DeskCraftDaily does not collect personal information beyond what you voluntarily provide via our contact form (name and email address). We do not use tracking cookies, analytics platforms, or behavioral advertising tools.' },
          { title: 'Contact Form Data', text: 'If you submit a message via our contact form, we collect your name, email address, and message content solely for the purpose of responding to your inquiry. This information is not shared with third parties and is retained only for the duration necessary to respond.' },
          { title: 'Third-Party Links', text: 'Our site contains links to Amazon.com and other third-party websites. These sites have their own privacy policies, which we do not control. When you click an Amazon affiliate link, Amazon\'s data collection practices apply. Please review Amazon\'s Privacy Notice for details.' },
          { title: 'Cookies', text: 'DeskCraftDaily does not use cookies for tracking, analytics, or advertising purposes. Essential browser storage (required for basic site functionality) may be used but does not contain personal information.' },
          { title: 'Children\'s Privacy', text: 'DeskCraftDaily is intended for adults. We do not knowingly collect information from users under 13 years of age.' },
          { title: 'Contact', text: 'Questions about this privacy policy may be directed to info@deskcraftdaily.com.' },
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
