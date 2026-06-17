import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DeskCraftDaily — Home Office Desk Setup & Ergonomics',
    template: '%s | DeskCraftDaily',
  },
  description:
    'Expert home office desk setup and ergonomics reviews. Monitor arms, ergonomic chairs, standing desks, and more — curated for remote workers.',
  metadataBase: new URL('https://deskcraftdaily.com'),
  openGraph: {
    siteName: 'DeskCraftDaily',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-white dark:bg-gray-950 text-[#111111] dark:text-gray-100 transition-colors">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
