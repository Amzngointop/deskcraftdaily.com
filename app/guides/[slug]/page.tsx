import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides';
import { articles } from '@/data/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, type: 'article' },
  };
}

const guideContent: Record<string, {
  sections: { id: string; title: string; body: string[] }[];
  relatedArticles: string[];
}> = {
  'how-to-set-up-ergonomic-home-office': {
    sections: [
      {
        id: 'start-with-the-chair',
        title: 'Start with the Chair',
        body: [
          'The chair is the foundation of an ergonomic home office. Every other measurement—desk height, monitor position, keyboard height—derives from where your chair places your body in space. Set the chair height first, before adjusting anything else.',
          'The correct seat height places your thighs parallel to the floor (or very slightly angled downward) with your feet resting flat on the floor or a footrest. Your back should contact the lumbar support naturally without you pushing yourself backward. Adjust the lumbar support depth until it contacts your lower back across its full width.',
          'According to the Cornell Ergonomics Lab, most people benefit from a seat pan depth that leaves 2–3 fingers of clearance between the edge of the seat and the back of the knee. Adjust the seat slider (if your chair has one) until this is achieved.',
        ],
      },
      {
        id: 'desk-height',
        title: 'Desk Height: The Often-Ignored Variable',
        body: [
          'With your chair set correctly, your desk height should allow your forearms to rest at approximately 90 degrees when your shoulders are relaxed. This is typically between 27 and 31 inches from the floor for most users, though your specific measurement depends on your height and chair setting.',
          'If your existing desk is fixed at the wrong height, you have two options: raise the desk with risers (for a desk that\'s too low) or raise your chair and add a footrest (for a desk that\'s too high). Adjustable-height desks eliminate this problem entirely. Use our Ergonomic Calculator on the homepage to determine your ideal desk height based on your height.',
          'Never tilt your keyboard upward (the raised feet on the back of most keyboards). Typing on a raised keyboard forces the wrists into extension, which significantly increases carpal tunnel and RSI risk. Remove those feet entirely or fold them down.',
        ],
      },
      {
        id: 'monitor-position',
        title: 'Monitor Position: Eye Level and Distance',
        body: [
          'Position your monitor so the top of the screen is at eye level or 1–2 inches below. This prevents the forward head posture that causes upper back and neck pain. At arm\'s length distance, the screen center should require only a slight downward gaze—approximately 10–15 degrees below horizontal.',
          'Monitor distance matters too. Too close and your eyes work harder to focus; too far and you\'ll lean forward. The correct distance is typically one arm\'s length from the screen (about 20–28 inches). If text looks too small at this distance, increase the display zoom level rather than moving the monitor closer.',
          'For dual-monitor setups, position the primary monitor directly in front and the secondary monitor to one side at the same height. If you use both monitors equally, create a slight inward-facing arc and position yourself at the center. Minimize how far your neck must rotate to see either screen.',
        ],
      },
      {
        id: 'keyboard-and-mouse',
        title: 'Keyboard and Mouse Placement',
        body: [
          'Place the keyboard directly in front of you at the correct height (forearms at 90 degrees, shoulders relaxed). The mouse should sit at the same height as the keyboard, as close to the keyboard as possible to minimize shoulder abduction. If you use a standard keyboard with a numpad, consider switching to a tenkeyless model to bring the mouse closer.',
          'OSHA ergonomics guidelines recommend keeping frequently used items within the primary work zone: the area you can reach without extending your arms fully. The keyboard and mouse should both sit within this zone without any forward reach.',
        ],
      },
      {
        id: 'lighting',
        title: 'Lighting: The Setup Detail Most People Skip',
        body: [
          'Poor lighting is a primary cause of eye strain that even the best monitor settings cannot fully compensate for. Position your desk perpendicular to windows (not facing or backing them) to prevent glare and extreme contrast between the bright window and the monitor.',
          'Supplement natural light with a desk lamp that provides consistent, diffuse illumination of your workspace. Avoid overhead lighting that creates glare on your monitor screen—tilt the monitor away from overhead fixtures if glare is visible.',
          'If you work in the evening or in rooms without natural light, ensure your ambient light level roughly matches your monitor brightness. A very bright monitor in a dark room creates the high-contrast conditions associated with accelerated eye fatigue.',
        ],
      },
      {
        id: 'the-30-minute-rule',
        title: 'The 30-Minute Movement Rule',
        body: [
          'The most ergonomically perfect workstation still causes problems if you never move. Research consistently shows that standing up and moving for 2–5 minutes every 30 minutes provides greater musculoskeletal benefit than any equipment upgrade.',
          'Set a recurring 30-minute timer during your workday. When it fires, stand up, walk to another room, stretch, or simply stand at your desk for a few minutes. This habit alone will do more for your long-term health than any single ergonomic product purchase.',
        ],
      },
    ],
    relatedArticles: ['best-ergonomic-chairs', 'best-monitor-arms', 'best-footrests'],
  },
  'monitor-placement-guide': {
    sections: [
      {
        id: 'the-eye-level-rule',
        title: 'The Eye Level Rule (and the Exception)',
        body: [
          'The standard guidance is to position the top of your monitor at eye level. The reasoning: your eyes naturally rest at a slightly downward angle, so placing the screen top at eye level means the center of the screen falls in your natural sightline. This prevents the chin-up posture that strains the neck extensors.',
          'The exception is for users of bifocal or progressive lenses. For these users, the bottom portion of the lens is used for close work. Having to tilt the head back to use the reading zone while looking at a monitor at full eye level is ergonomically counterproductive. Progressives wearers often benefit from a monitor positioned slightly lower than the standard recommendation.',
          'For standing desk users: the monitor height must be recalibrated when you transition from sitting to standing. Many people correctly set monitor height for sitting but never adjust it for standing, defeating the purpose of the height-adjustable setup. A monitor arm makes this recalibration immediate.',
        ],
      },
      {
        id: 'distance-and-angle',
        title: 'Distance, Angle, and the 10-Degree Rule',
        body: [
          'Optimal viewing distance is typically 20–28 inches from your eyes to the screen. This is roughly arm\'s length for most people. If your workspace forces a closer position, increase the display zoom level to compensate rather than compromising the distance.',
          'The monitor should be angled very slightly backward (top tilted away from you by about 10–15 degrees). This prevents the glare from overhead lighting that appears on a perfectly vertical screen surface and positions the screen surface more perpendicular to your line of sight.',
          'For curved monitors, the standard angle guidance doesn\'t directly apply—the curve addresses angle variation across the screen width. Position the center of the curve at the standard viewing height and distance.',
        ],
      },
      {
        id: 'dual-monitor-setups',
        title: 'Dual Monitor Setups',
        body: [
          'The most common mistake with dual monitors is positioning them too far apart. The outside edges of both monitors should be reachable without turning your body—only your head should rotate. For most setups, this means the monitors are nearly touching, with the bezels adjacent.',
          'If one monitor is clearly your primary (you spend 80%+ of time looking at it), position it directly in front of you and angle the secondary monitor toward you at roughly 30 degrees. If usage is equal, create a symmetric arc centered on your normal seated position.',
          'Use a dual monitor arm rather than two separate stands. Arms allow precise independent height and angle adjustment, and free up the desk space previously occupied by two stand bases—often 6–12 inches of depth per stand.',
        ],
      },
      {
        id: 'glare-and-reflections',
        title: 'Eliminating Glare',
        body: [
          'Glare is the most common avoidable cause of eye strain in home offices. There are two types: direct glare (bright light source visible in your peripheral vision) and reflected glare (light reflecting off the monitor surface). Both are addressable.',
          'For reflected glare: position the desk perpendicular to windows, not facing or backing them. If you cannot move the desk, use a window blind or anti-glare screen filter. Tilt the monitor slightly backward to change the reflection angle away from your eyes.',
          'For direct glare: place task lighting behind or beside the monitor, never in front. A lamp positioned behind the monitor (illuminating from the same direction you\'re looking) eliminates the contrast between the bright screen and dark surrounding environment that causes eye fatigue.',
        ],
      },
    ],
    relatedArticles: ['best-monitor-arms', 'best-laptop-stands', 'best-blue-light-glasses'],
  },
  'standing-desk-routine': {
    sections: [
      {
        id: 'why-most-people-fail',
        title: 'Why Most People Stop Using Their Standing Desks',
        body: [
          'The standing desk abandonment rate is high—studies suggest 50–70% of standing desks are rarely used within a year of purchase. The primary reason is not that standing is uncomfortable, but that most people transition too aggressively: going from never standing to standing for hours creates fatigue, foot pain, and varicose vein pressure that makes them give up entirely.',
          'The correct approach is gradual accumulation. In the first week, stand for 10–15 minutes once or twice per day. Add 5 minutes per day over four weeks until you\'re standing 30 minutes per hour comfortably. At that point, the habit is established and the physical adaptation is complete.',
        ],
      },
      {
        id: 'the-optimal-ratio',
        title: 'The Research-Backed Sitting-to-Standing Ratio',
        body: [
          'Research from the British Journal of Sports Medicine and the British Heart Foundation suggests that for every hour of sitting, standing for 15–30 minutes provides measurable benefit. The current evidence-based recommendation is roughly one-third standing to two-thirds sitting throughout the workday—not an equal split.',
          'More important than the ratio is the frequency of transitions. Alternating between sitting and standing every 30 minutes produces better outcomes than sitting for 3 hours and standing for 90 minutes. The movement of transitioning itself is part of the benefit.',
        ],
      },
      {
        id: 'anti-fatigue-essentials',
        title: 'The Anti-Fatigue Mat: Non-Negotiable',
        body: [
          'Standing on a hard floor surface for extended periods creates calf tension and metatarsal pressure that no amount of conditioning fully eliminates. A quality anti-fatigue mat changes the standing experience from an endurance test to a comfortable alternative to sitting.',
          'Look for mats with multiple density layers: a firm base for stability, a softer mid-layer for cushioning, and terrain features (ridges, massage points) that encourage subtle weight shifts. These micro-movements improve circulation and prevent the static fatigue that hard surfaces create.',
        ],
      },
      {
        id: 'posture-while-standing',
        title: 'Correct Posture While Standing',
        body: [
          'Standing at a desk creates its own postural risks if done incorrectly. The most common mistake is shifting weight to one leg—this eventually creates hip and lower back asymmetry. Distribute weight evenly across both feet, hip-width apart.',
          'Keep the monitor at the correct height for standing (not your sitting height—recalibrate when you transition). If your monitor arm doesn\'t have enough range to move from sitting to standing height cleanly, you may need a different arm.',
          'Move while you stand. Rock gently forward and back, shift weight from foot to foot, do subtle calf raises. The goal is not to stand completely still—it is to remove the sustained compression of sitting, which requires movement, not a new static position.',
        ],
      },
    ],
    relatedArticles: ['best-standing-desks', 'best-ergonomic-chairs'],
  },
  'home-office-audio-setup': {
    sections: [
      {
        id: 'the-three-audio-problems',
        title: 'The Three Home Office Audio Problems',
        body: [
          'Most home office audio setups have three separate problems that are often confused for one: what others hear when you speak (outbound audio quality), what you hear when others speak (inbound audio quality), and what you hear when working alone (focus and ambient noise). Solving all three with a single device is rarely possible—understanding which problem matters most for your role guides the right purchase.',
          'For workers on 6+ calls per day, outbound microphone quality is the most impactful investment. Poor microphone audio tires listeners and creates communication friction that better-quality audio eliminates entirely. For workers who do deep focus work in noisy environments, active noise cancellation for inbound audio and ambient focus is the priority.',
        ],
      },
      {
        id: 'headphones-vs-speakers',
        title: 'Headphones vs. Speakers: When to Use Each',
        body: [
          'Speakers are appropriate for solo work sessions and background audio when household privacy is not a concern. They create a more natural listening environment but add audio to the room that others — including your microphone — can hear. Running a call on speakers causes echo feedback and distracts others in the household.',
          'Headphones are appropriate for all calls, focus sessions requiring noise isolation, and any situation where sound should stay with you. Over-ear headphones provide better passive isolation and longer-wear comfort than on-ear or in-ear alternatives for extended desk sessions. According to the National Institute on Deafness and Other Communication Disorders, safe listening levels for headphone use are below 70–85 dB for extended periods.',
        ],
      },
      {
        id: 'microphone-options',
        title: 'Microphone Options for Different Call Volumes',
        body: [
          'Built-in laptop microphones capture room echo and keyboard noise, producing audio that sounds distant and busy. Most headset microphones are significantly better. Dedicated USB microphones (Blue Yeti, Elgato Wave) are better still — particularly for workers who run client-facing calls where audio quality communicates professionalism.',
          'Boom microphones positioned close to the mouth capture voice while rejecting room noise more effectively than any desktop condenser microphone. If you are on calls for more than 4 hours per day, a boom microphone attached to a headset or microphone arm is worth the investment. The improvement in audio quality is immediately noticeable to everyone on the call.',
        ],
      },
      {
        id: 'anc-for-focus',
        title: 'Using ANC for Focus and Productivity',
        body: [
          'Active noise cancellation is most effective against low-frequency continuous noise: HVAC systems, traffic, refrigerator hum, and mechanical ambient sound. It is less effective against sudden high-frequency noise and conversation. Understanding this helps set realistic expectations.',
          'Many remote workers find that ANC headphones combined with ambient focus music (brown noise, lo-fi, or instrumental music) create a more effective focus environment than either alone. The ANC reduces the background floor; the music masks remaining irregular noise like household conversation or occasional sounds.',
        ],
      },
    ],
    relatedArticles: ['best-noise-cancelling-headphones', 'best-wireless-mouse-keyboard-combos'],
  },
  'choosing-right-peripherals': {
    sections: [
      {
        id: 'start-with-the-mouse',
        title: 'Start with the Mouse',
        body: [
          'The mouse accumulates more ergonomic impact than the keyboard because mousing is an asymmetric, sustained, one-handed motion. Keyboard use is bilateral and rhythmically variable. Mouse use is repetitive and one-sided — the conditions that produce repetitive strain injuries.',
          'The critical mouse ergonomics factor is grip angle. Most standard mice force the hand into full pronation (palm flat, parallel to desk). Vertical mice or angled ergonomic mice rotate the hand to a handshake position, reducing forearm muscle tension significantly. According to the Cornell Ergonomics Lab, reducing ulnar deviation and forearm pronation in mouse use is one of the most effective interventions for wrist and forearm pain in desk workers.',
        ],
      },
      {
        id: 'keyboard-selection',
        title: 'Keyboard Selection: Key Factors',
        body: [
          'For most home office workers, keyboard selection should prioritize three things: the key feel that makes long typing sessions comfortable (membrane, low-profile mechanical, or scissor switch), the noise level appropriate for the household, and the layout that fits the desk space.',
          'Tenkeyless (TKL) keyboards omit the number pad, reducing the distance the right hand must travel between keyboard and mouse. This reduction in mouse reach distance is meaningful for users who alternate rapidly between typing and mousing. If you do not use a number pad regularly, TKL layouts reduce reach and improve mousing ergonomics.',
        ],
      },
      {
        id: 'hub-or-dock',
        title: 'Do You Need a Hub or a Dock?',
        body: [
          'If you only need more USB-A ports, a 4-port USB hub is the right and inexpensive solution. If you need a monitor connection, ethernet, or a single-cable connection that brings up your full workstation, a docking station is the right solution.',
          'The common mistake is buying a hub when a dock is needed, or buying a dock when a hub would suffice. Map your actual port requirements before purchasing: count the devices you connect (mouse, keyboard, external drive, audio interface, etc.) and identify whether any require video output or wired ethernet. The answers determine the product tier.',
        ],
      },
      {
        id: 'wireless-vs-wired',
        title: 'Wireless vs. Wired for Peripherals',
        body: [
          'Wired peripherals offer zero latency, never need charging, and cost less than wireless equivalents. Wireless peripherals eliminate cable clutter, allow flexible positioning, and require periodic charging or battery replacement.',
          'For a fixed home office workstation, wireless is almost always preferable: the desk is static, cable clutter is a real daily nuisance, and 2.4GHz wireless latency (typically 1–8ms) is imperceptible for typing and mousing. The exception is users who require the absolute lowest latency for gaming — where wired mouse input remains preferable to even the best wireless alternatives.',
        ],
      },
    ],
    relatedArticles: ['best-wireless-mouse-keyboard-combos', 'best-usb-hubs-docking-stations'],
  },
  'home-office-lighting-guide': {
    sections: [
      {
        id: 'the-three-culprits',
        title: 'The Three Culprits Behind Eye Strain',
        body: [
          'Digital eye strain is most commonly caused by three lighting factors: glare on the monitor surface (reflected glare), a bright light source in your peripheral vision (direct glare), and high contrast between the bright monitor and a dark surrounding environment. Eliminating all three is the goal of a good lighting setup.',
          'Most home office workers address none of them—they have an overhead light directly above the desk (creating both reflected and direct glare) and work with a bright monitor in an otherwise dim room. The good news: all three are solvable without expensive equipment.',
        ],
      },
      {
        id: 'desk-position',
        title: 'Position the Desk Correctly First',
        body: [
          'The single most impactful lighting change is positioning your desk perpendicular to windows rather than facing or backing them. Facing a window creates extreme contrast between the bright exterior and your monitor. Backing a window causes the light to reflect directly off your monitor into your eyes.',
          'With the desk perpendicular, window light falls on your desk surface and keyboard without hitting the monitor directly. If perpendicular placement isn\'t possible due to room layout, blackout or dimming blinds that can be adjusted during the day are the next best solution.',
        ],
      },
      {
        id: 'ambient-light',
        title: 'Ambient Light: Match the Monitor',
        body: [
          'Your monitor emits light. If the rest of your room is significantly darker than the monitor, your pupils must constantly adapt to the contrast every time your gaze moves off-screen. This adaptation process is a primary driver of end-of-day eye fatigue.',
          'The solution is to ensure your room\'s ambient light level roughly matches your monitor brightness. A desk lamp or bias light placed behind the monitor (illuminating the wall the monitor faces) creates background illumination that reduces the contrast without adding glare to the monitor surface.',
          'Bias lighting (an LED strip behind the monitor) is an increasingly popular solution. It illuminates the wall directly behind the screen, reducing the perceived contrast between the bright monitor and the dark background.',
        ],
      },
      {
        id: 'color-temperature',
        title: 'Color Temperature Through the Day',
        body: [
          'Light color temperature is measured in Kelvin. Cooler light (5000–6500K, blue-white) is appropriate for daytime focus work—it mimics daylight and promotes alertness. Warmer light (2700–3000K, amber) is appropriate for evening and reduces melatonin suppression.',
          'If your workspace lighting is fixed at a cool temperature, consider adding a warm bedside lamp or smart bulb for evening work sessions. Many home office workers who complain of poor sleep quality are working under blue-white office lighting until minutes before bed. Switching to warm light after 8pm is one of the most impactful sleep interventions available.',
        ],
      },
      {
        id: 'monitor-settings',
        title: 'Monitor Settings That Work With Your Lighting',
        body: [
          'Enable your monitor\'s automatic brightness adjustment if available, so screen brightness scales with ambient light. In a bright room, a dim monitor forces squinting; in a dark room, a bright monitor causes glare. The goal is a constant perceived brightness relative to the environment.',
          'Enable Night Shift or your operating system\'s equivalent (Windows Night Light, macOS Night Shift) to shift the monitor\'s color temperature warmer after sunset. This, combined with warm ambient lighting, creates the conditions for normal melatonin production and healthy sleep.',
        ],
      },
    ],
    relatedArticles: ['best-blue-light-glasses', 'best-monitor-arms-laptop-stands'],
  },
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== slug);
  const content = guideContent[slug];
  const relatedArticlesList = articles.filter((a) =>
    content?.relatedArticles.includes(a.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex gap-8">
        {/* Left sidebar */}
        <div className="hidden lg:block w-48 flex-shrink-0">
          <div className="sticky-sidebar">
            <p className="category-label text-[#666666] dark:text-gray-500 mb-3">IN THIS GUIDE</p>
            <ul className="space-y-1">
              {content?.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block py-1 text-xs text-[#444444] dark:text-gray-400 hover:text-[#1B4FD8] dark:hover:text-blue-400 leading-snug pl-2 border-l-[3px] border-transparent"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 min-w-0 max-w-3xl">
          {/* Hero image */}
          <img
            src={guide.coverImage}
            alt={guide.title}
            style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block', borderRadius: '6px', marginBottom: '24px' }}
          />

          <span className="category-label text-[#1B4FD8]">{guide.category}</span>
          <h1
            className="font-fraunces font-black text-[#111111] dark:text-gray-100 mt-2 mb-3"
            style={{ fontSize: '2rem', lineHeight: '1.2' }}
          >
            {guide.title}
          </h1>

          <p
            className="text-[#666666] dark:text-gray-500 mb-4"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
          >
            Updated 2026 &middot; {guide.readTime} min read
          </p>

          <p
            className="text-[#444444] dark:text-gray-400 mb-8 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.75' }}
          >
            {guide.excerpt}
          </p>

          {/* Sections */}
          {content?.sections.map((section, i) => (
            <div key={section.id} id={section.id} className="mb-10">
              <h2
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
                style={{ fontSize: '1.35rem' }}
              >
                {section.title}
              </h2>
              {section.body.map((para, j) => (
                <p
                  key={j}
                  className="text-[#444444] dark:text-gray-400 mb-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.8' }}
                >
                  {para}
                </p>
              ))}
              {i === 1 && (
                <div className="callout-box dark:bg-gray-900 dark:border-blue-500">
                  <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                    <strong>Tip:</strong> Refer to{' '}
                    <a
                      href="https://www.osha.gov/ergonomics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    >
                      OSHA&apos;s Computer Workstations e-Tool
                    </a>{' '}
                    for detailed measurement guides tailored to different body types.
                  </p>
                </div>
              )}
              {i === 3 && (
                <div className="callout-box dark:bg-gray-900 dark:border-blue-500">
                  <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                    <strong>Research:</strong>{' '}
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591921/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    >
                      NIH research on musculoskeletal disorders
                    </a>{' '}
                    confirms that combined ergonomic interventions produce significantly better
                    outcomes than equipment changes alone.
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Related articles */}
          {relatedArticlesList.length > 0 && (
            <div
              className="my-8 p-5 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
              style={{ borderRadius: '6px' }}
            >
              <h3
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-3"
                style={{ fontSize: '1.1rem' }}
              >
                Related Buying Guides
              </h3>
              <ul className="space-y-2">
                {relatedArticlesList.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/best/${a.slug}`}
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div className="hidden xl:block w-56 flex-shrink-0">
          <div className="sticky-sidebar">
            <p className="category-label text-[#666666] dark:text-gray-500 mb-3">MORE GUIDES</p>
            <ul className="space-y-3">
              {otherGuides.map((g) => (
                <li
                  key={g.slug}
                  className="border-b border-dashed border-[#d4d4d4] dark:border-gray-800 pb-2.5"
                >
                  <span
                    className="category-label text-[#1B4FD8] block mb-0.5"
                    style={{ fontSize: '10px' }}
                  >
                    {g.category}
                  </span>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="text-xs font-fraunces font-bold text-[#111111] dark:text-gray-300 hover:text-[#1B4FD8] dark:hover:text-blue-400 leading-snug block"
                    style={{ fontSize: '13px' }}
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
