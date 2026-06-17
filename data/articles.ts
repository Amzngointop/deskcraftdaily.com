export interface ArticleConfig {
  slug: string;
  title: string;
  category: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  readTime: number;
}

export const articles: ArticleConfig[] = [
  {
    slug: 'best-monitor-arms-laptop-stands',
    title: 'Best Monitor Arms & Laptop Stands for Your Home Office (2026)',
    category: 'MONITOR ARMS & LAPTOP STANDS',
    description:
      'Our top picks for monitor arms and laptop stands that bring screens to eye level, eliminate neck strain, and free up valuable desk space.',
    metaTitle: 'Best Monitor Arms & Laptop Stands for Home Office (2026) | DeskCraftDaily',
    metaDescription:
      'We compared the top monitor arms and laptop stands for ergonomic home office setups. Find the best adjustable mounts for your screens.',
    readTime: 9,
  },
  {
    slug: 'best-ergonomic-chairs',
    title: 'Best Ergonomic Office Chairs for Long Work Days (2026)',
    category: 'ERGONOMIC CHAIRS',
    description:
      'The best ergonomic chairs for remote workers who spend 6–10 hours a day at their desk—ranked by lumbar support, adjustability, and durability.',
    readTime: 11,
  },
  {
    slug: 'best-standing-desks',
    title: 'Best Electric Standing Desks for Home Office (2026)',
    category: 'STANDING DESKS',
    description:
      'Top electric standing desks that make sit-stand working effortless — reviewed for motor quality, height range, stability, and surface size.',
    readTime: 10,
  },
  {
    slug: 'best-usb-hubs-docking-stations',
    title: 'Best USB Hubs & Docking Stations for Home Office (2026)',
    category: 'USB HUBS & DOCKING STATIONS',
    description:
      'The top USB hubs and docking stations for home office use — from compact 4-port USB-A hubs to full 14-in-1 triple-display docking stations.',
    metaTitle: 'Best USB Hubs & Docking Stations for Home Office (2026) | DeskCraftDaily',
    metaDescription:
      'We compared the top USB hubs and docking stations for home office use. Find the best multi-port hub or dual-monitor dock for your setup.',
    readTime: 8,
  },
  {
    slug: 'best-noise-cancelling-headphones',
    title: 'Best Noise Cancelling Headphones for Home Office (2026)',
    category: 'HEADPHONES',
    description:
      'The best noise cancelling headphones for working from home — reviewed for ANC performance, call quality, comfort during long sessions, and battery life.',
    metaTitle: 'Best Noise Cancelling Headphones for Home Office (2026) | DeskCraftDaily',
    metaDescription:
      'We reviewed the top noise cancelling headphones for working from home. Find the best over-ear wireless headphones for focus and calls.',
    readTime: 9,
  },
  {
    slug: 'best-wireless-mouse-keyboard-combos',
    title: 'Best Wireless Mouse & Keyboard Combos for Home Office (2026)',
    category: 'MOUSE & KEYBOARD',
    description:
      'The top wireless keyboard and mouse combos for home office — compared for typing feel, mouse precision, battery life, and ergonomic design.',
    metaTitle: 'Best Wireless Mouse & Keyboard Combos for Home Office (2026) | DeskCraftDaily',
    metaDescription:
      'We tested the top wireless keyboard and mouse combos for home office. Find the best ergonomic, quiet, and reliable combos for your desk.',
    readTime: 8,
  },
  {
    slug: 'best-desk-organizers',
    title: 'Best Desk Organizers & Accessories for Home Office (2026)',
    category: 'DESK ORGANIZERS',
    description:
      'Our picks for the desk organizers that create a clean, focused workspace without sacrificing accessibility.',
    readTime: 8,
  },
  {
    slug: 'best-blue-light-glasses',
    title: 'Best Blue Light Blocking Glasses for Computer Use (2026)',
    category: 'BLUE LIGHT GLASSES',
    description:
      'The best blue light glasses for reducing digital eye strain during long computer sessions.',
    readTime: 7,
  },
];
