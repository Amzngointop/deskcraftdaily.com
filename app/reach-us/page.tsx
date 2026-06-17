import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Reach Us — Contact',
  description:
    'Get in touch with the DeskCraftDaily team. Questions about our reviews, affiliate partnerships, or ergonomics guidance.',
};

export default function ReachUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <span className="category-label text-[#1B4FD8] dark:text-blue-400">CONTACT</span>
      <h1
        className="font-fraunces font-black text-[#111111] dark:text-white mt-2 mb-4"
        style={{ fontSize: '2.5rem' }}
      >
        Reach Us
      </h1>
      <p
        className="text-[#666666] dark:text-gray-500 mb-10"
        style={{ fontFamily: 'var(--font-inter)', fontSize: '15px' }}
      >
        Questions, corrections, or partnership inquiries — we read every message.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail size={20} className="text-[#1B4FD8] dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1" style={{ fontSize: '15px' }}>
                Email
              </p>
              <a
                href="mailto:info@deskcraftdaily.com"
                className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
              >
                info@deskcraftdaily.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-[#1B4FD8] dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1" style={{ fontSize: '15px' }}>
                Address
              </p>
              <p
                className="text-[#444444] dark:text-gray-300"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.7' }}
              >
                DeskCraftDaily<br />
                4211 Commerce Drive, Suite 108<br />
                Austin, TX 78704<br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} className="text-[#1B4FD8] dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1" style={{ fontSize: '15px' }}>
                Business Hours
              </p>
              <p
                className="text-[#444444] dark:text-gray-300"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.7' }}
              >
                Monday – Friday: 9:00am – 5:00pm CT<br />
                Saturday – Sunday: Closed
              </p>
              <p
                className="text-[#666666] dark:text-gray-500 mt-1"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
              >
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Mini FAQ */}
          <div
            className="p-5 mt-4 bg-[#fafafa] dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded"
          >
            <p className="category-label text-[#666666] dark:text-gray-500 mb-4">COMMON QUESTIONS</p>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I submit a product for review?',
                  a: 'We evaluate products based on market data and published specifications. We do not accept products in exchange for coverage.',
                },
                {
                  q: 'Do you offer affiliate partnership opportunities?',
                  a: 'We participate exclusively in the Amazon Associates program. We do not accept direct affiliate arrangements with brands.',
                },
                {
                  q: 'I found incorrect information in an article.',
                  a: 'Please email us with the specific article and correction. We review and update guides regularly and appreciate accuracy feedback.',
                },
                {
                  q: 'Can I republish your content?',
                  a: 'No. All DeskCraftDaily content is original and protected by copyright. Brief excerpts with attribution and a link are acceptable; republication is not.',
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-dashed border-[#d4d4d4] dark:border-gray-800 pb-3">
                  <p
                    className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1"
                    style={{ fontSize: '13px' }}
                  >
                    {item.q}
                  </p>
                  <p
                    className="text-[#666666] dark:text-gray-400"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.6' }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
