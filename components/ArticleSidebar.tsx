'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Product } from '@/data/products';

interface ArticleSidebarProps {
  products: Product[];
}

export default function ArticleSidebar({ products }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    products.forEach((p) => {
      const el = document.getElementById(`product-${p.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [products]);

  return (
    <nav className="sticky-sidebar">
      <p className="category-label text-[#666666] dark:text-gray-500 mb-3">JUMP TO</p>
      <ul className="space-y-1">
        {products.map((product) => {
          const isActive = activeId === `product-${product.id}`;
          return (
            <li key={product.id}>
              <Link
                href={`#product-${product.id}`}
                className={`block py-1.5 text-xs leading-snug transition-colors pl-2 border-l-[3px] ${
                  isActive
                    ? 'text-[#1B4FD8] dark:text-blue-400 border-[#1B4FD8] dark:border-blue-400 font-semibold'
                    : 'text-[#444444] dark:text-gray-400 border-transparent font-normal'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {product.rank}. {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
