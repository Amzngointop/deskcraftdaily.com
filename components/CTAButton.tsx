import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function CTAButton({ href, children, external = false, className = '' }: CTAButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`btn-3d ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`btn-3d ${className}`}>
      {children}
    </Link>
  );
}
