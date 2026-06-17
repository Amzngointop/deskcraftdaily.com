export interface GuideConfig {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: number;
  coverImage: string;
}

export const guides: GuideConfig[] = [
  {
    slug: 'how-to-set-up-ergonomic-home-office',
    title: 'How to Set Up an Ergonomic Home Office from Scratch',
    category: 'FOUNDATIONS',
    excerpt:
      'A complete step-by-step walkthrough for building a home office that supports your posture, protects your joints, and keeps you productive all day.',
    readTime: 8,
    coverImage:
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1170&auto=format&fit=crop',
  },
  {
    slug: 'monitor-placement-guide',
    title: 'The Complete Guide to Monitor Placement & Eye Level',
    category: 'MONITORS',
    excerpt:
      'Where you place your monitor determines how your neck, shoulders, and eyes feel after eight hours. Here is how to get it right.',
    readTime: 6,
    coverImage:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1170&auto=format&fit=crop',
  },
  {
    slug: 'standing-desk-routine',
    title: 'How to Build a Standing Desk Routine That Actually Sticks',
    category: 'STANDING DESKS',
    excerpt:
      'Most people who buy a standing desk stop using it within a month. This guide explains the habits and schedules that make standing desks work long-term.',
    readTime: 7,
    coverImage:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1170&auto=format&fit=crop',
  },
  {
    slug: 'home-office-audio-setup',
    title: 'Home Office Audio Setup: Headphones, Mics, and Speakers Explained',
    category: 'AUDIO',
    excerpt:
      'Your audio setup determines how you sound on every call and how well you can focus between them. Here is how to build the right combination for your work style.',
    readTime: 7,
    coverImage:
      'https://images.unsplash.com/photo-1674505921901-e54fe119f0a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'choosing-right-peripherals',
    title: 'How to Choose the Right Keyboard, Mouse, and Hub for Your Setup',
    category: 'PERIPHERALS',
    excerpt:
      'The peripherals between you and your computer shape how every hour of work feels. This guide explains what matters, what doesn\'t, and how to choose without overpaying.',
    readTime: 6,
    coverImage:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1170&auto=format&fit=crop',
  },
  {
    slug: 'home-office-lighting-guide',
    title: 'Home Office Lighting: How to Reduce Eye Strain All Day',
    category: 'LIGHTING',
    excerpt:
      'Glare, contrast, and color temperature are the three invisible culprits behind afternoon headaches. Here is how to fix all three with your current space.',
    readTime: 6,
    coverImage:
      'https://images.unsplash.com/photo-1622128082634-1f9742839291?q=80&w=1676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
