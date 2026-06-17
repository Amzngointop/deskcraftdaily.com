'use client';

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label
          className="block mb-1 category-label text-[#666666] dark:text-gray-500"
          style={{ fontSize: '11px' }}
        >
          YOUR NAME
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-[#e5e5e5] dark:border-gray-700 rounded focus:outline-none focus:border-[#1B4FD8] text-[#111111] dark:text-gray-100 bg-white dark:bg-gray-900 placeholder-[#aaaaaa] dark:placeholder-gray-600"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label
          className="block mb-1 category-label text-[#666666] dark:text-gray-500"
          style={{ fontSize: '11px' }}
        >
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 border border-[#e5e5e5] dark:border-gray-700 rounded focus:outline-none focus:border-[#1B4FD8] text-[#111111] dark:text-gray-100 bg-white dark:bg-gray-900 placeholder-[#aaaaaa] dark:placeholder-gray-600"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label
          className="block mb-1 category-label text-[#666666] dark:text-gray-500"
          style={{ fontSize: '11px' }}
        >
          MESSAGE
        </label>
        <textarea
          rows={6}
          className="w-full px-4 py-3 border border-[#e5e5e5] dark:border-gray-700 rounded focus:outline-none focus:border-[#1B4FD8] text-[#111111] dark:text-gray-100 bg-white dark:bg-gray-900 placeholder-[#aaaaaa] dark:placeholder-gray-600 resize-y"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
          placeholder="What's on your mind?"
        />
      </div>
      <button type="submit" className="btn-3d">
        Send Message
      </button>
    </form>
  );
}
