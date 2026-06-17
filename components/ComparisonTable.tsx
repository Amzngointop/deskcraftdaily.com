import { Product } from '@/data/products';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr className="border-b-2 border-[#111111] dark:border-gray-600">
            <th className="text-left py-3 pr-4 category-label dark:text-gray-400">Product</th>
            <th className="text-left py-3 pr-4 category-label dark:text-gray-400">Best For</th>
            <th className="text-left py-3 pr-4 category-label dark:text-gray-400 hidden md:table-cell">Key Feature</th>
            <th className="text-left py-3 pr-4 category-label dark:text-gray-400 hidden md:table-cell">Top Con</th>
            <th className="text-left py-3 category-label dark:text-gray-400">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              className={`border-b border-dashed border-[#d4d4d4] dark:border-gray-800 ${i % 2 !== 0 ? 'bg-[#fafafa] dark:bg-gray-900' : 'dark:bg-gray-950'}`}
            >
              <td className="py-3 pr-4">
                <div>
                  <span className="category-label text-[#1B4FD8] block mb-0.5" style={{ fontSize: '10px' }}>
                    {product.badge}
                  </span>
                  <span
                    className="font-fraunces font-bold text-[#111111] dark:text-gray-200"
                    style={{ fontSize: '13px' }}
                  >
                    {product.name}
                  </span>
                </div>
              </td>
              <td
                className="py-3 pr-4 text-[#444444] dark:text-gray-400"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
              >
                {product.bestFor}
              </td>
              <td
                className="py-3 pr-4 text-[#444444] dark:text-gray-400 hidden md:table-cell"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
              >
                {product.pros[0]}
              </td>
              <td
                className="py-3 pr-4 text-[#444444] dark:text-gray-400 hidden md:table-cell"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
              >
                {product.cons[0]}
              </td>
              <td className="py-3">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                  }}
                >
                  Amazon →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
