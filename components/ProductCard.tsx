import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="flex flex-col bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
      style={{ borderRadius: '6px', overflow: 'hidden' }}
    >
      <div className="bg-[#f9f9f9] dark:bg-gray-800" style={{ padding: '16px' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: '100%',
            maxHeight: '180px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span
          className="category-label mb-1"
          style={{ color: '#1B4FD8' }}
        >
          {product.badge}
        </span>
        <h3
          className="font-fraunces font-bold mb-2 leading-snug text-[#111111] dark:text-gray-100"
          style={{ fontSize: '15px' }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm text-[#444444] dark:text-gray-400 leading-relaxed flex-1 mb-4"
          style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
        >
          {product.summary}
        </p>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-3d text-center"
          style={{ fontSize: '12px' }}
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
