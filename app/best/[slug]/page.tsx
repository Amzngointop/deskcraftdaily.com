import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';
import { articles } from '@/data/articles';
import { getProductsByArticle } from '@/data/products';
import ErgonomicScoreBar from '@/components/ErgonomicScoreBar';
import AccordionSection from '@/components/AccordionSection';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import ArticleSidebar from '@/components/ArticleSidebar';
import RelatedSidebar from '@/components/RelatedSidebar';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  };
}

const buyingGuideContent: Record<string, { intro: string; sections: { title: string; body: string }[]; faqs: { question: string; answer: string }[] }> = {
  'best-monitor-arms-laptop-stands': {
    intro: 'Choosing the right monitor arm requires understanding your monitor weight, desk thickness, and how often you plan to reposition your screen. The market divides cleanly between gas-spring arms (smooth, one-handed adjustment) and fixed-friction arms (cheaper but require tools to adjust). For home office use, gas-spring is almost always the right choice.',
    sections: [
      { title: 'Gas Spring vs. Fixed Friction', body: 'Gas spring arms use a pressurized cylinder to counterbalance your monitor\'s weight, allowing smooth positioning with one finger. Fixed-friction arms use a tightened bolt and need a hex key every time you adjust. For anyone who changes monitor height between sitting and standing, gas spring is non-negotiable.' },
      { title: 'Weight and Size Compatibility', body: 'Every monitor arm has a weight rating and a VESA size range. Ultrawide monitors (34–40 inches) often weigh 18–22 lbs and need specialized arms—standard arms rated for 17 lbs will drift or sag. Always check your monitor\'s weight in its specs before buying.' },
      { title: 'Desk Clamp vs. Grommet Mount', body: 'Clamp mounts attach to the desk edge and require no modification—ideal for rental setups. Grommet mounts thread through an existing hole and are more stable for very heavy monitors. If your desk has a pre-drilled hole, use it; otherwise, a quality clamp provides excellent stability.' },
      { title: 'When a Monitor Arm Is Not the Answer', body: 'If your monitor is above 40 inches or weighs more than 25 lbs, a VESA wall mount is likely a better solution than a desk arm. Arms at the limits of their rated capacity tend to drift over time as the gas spring weakens.' },
    ],
    faqs: [
      { question: 'Will a monitor arm work with any desk?', answer: 'Most monitor arms include both clamp and grommet mounting options and work with desks from 0.5 to 3.5 inches thick. Very thin glass or hollow-core furniture may not support the clamp safely—check your desk material before purchasing.' },
      { question: 'How do I know what VESA pattern my monitor uses?', answer: 'VESA mount patterns are listed in your monitor\'s specifications as a measurement like 75×75mm or 100×100mm. Most monitors from 2015 onward use the 100×100mm standard. Check the back of your monitor for the four bolt holes arranged in a square.' },
      { question: 'Can I use a monitor arm with an ultrawide monitor?', answer: 'Yes, but you need an arm specifically rated for the weight. Most standard arms max out at 17–20 lbs. Ultrawide monitors typically weigh 18–24 lbs. Check both the arm\'s weight limit and your specific monitor\'s weight before ordering.' },
      { question: 'Do monitor arms work with standing desks?', answer: 'Yes, though you may need to readjust monitor height when transitioning between sitting and standing heights. Some arms designed for standing desks have a wider adjustment range to accommodate both positions without repositioning.' },
      { question: 'Is installation difficult?', answer: 'Most monitor arms install in 15–30 minutes with included tools. The process involves attaching the base to your desk, connecting the arm segments, and mounting your monitor via VESA screws. The most time-consuming part is usually adjusting spring tension to your monitor\'s weight.' },
      { question: 'How much desk space does a monitor arm free up?', answer: 'Replacing a monitor stand with an arm typically frees 6–12 inches of desk depth and eliminates the visual clutter of the stand base entirely. For desks under 30 inches deep, this is a significant ergonomic and organizational improvement.' },
    ],
  },
  'best-ergonomic-chairs': {
    intro: 'The ergonomic chair market spans from $50 to $2,000, and the price roughly correlates with adjustability and build quality—but only up to a point. The critical features are lumbar support depth, seat height range, and arm height adjustment. Everything else is a bonus.',
    sections: [
      { title: 'The Non-Negotiables: Lumbar Support and Seat Height', body: 'Any chair worth calling ergonomic must have adjustable lumbar support and a seat height range that fits your body. If the chair\'s seat height range doesn\'t accommodate your floor-to-knee measurement with shoes on, it cannot provide proper support regardless of other features.' },
      { title: 'Mesh vs. Foam Seats', body: 'Mesh backrests promote airflow and conform to your spine\'s natural curve. Foam seats maintain consistent cushioning but can trap heat. The best chairs use mesh backs with high-density foam seats—though premium options like the Aeron use mesh throughout.' },
      { title: 'Understanding Arm Adjustments', body: 'Entry-level ergonomic chairs offer height-only arm adjustment. Mid-range adds fore/aft adjustment. Premium chairs offer 4D arms: height, width, depth, and angle. For typing, arm width and angle matter most—you want arms that support your forearms without forcing your shoulders inward.' },
      { title: 'Sizing: Why Most Chair Guides Get It Wrong', body: 'Most chair guides ignore sizing. The Herman Miller Aeron comes in three sizes (A/B/C) for a reason—a size B chair on a 5\'0" person provides different lumbar contact than on a 6\'2" person. If you\'re outside the 5\'4"–6\'0" range, pay extra attention to the manufacturer\'s sizing guide.' },
    ],
    faqs: [
      { question: 'How long does an ergonomic chair last?', answer: 'Quality ergonomic chairs from brands like Herman Miller, Steelcase, and Branch come with 10–12 year warranties and are built to last 15+ years. Budget chairs typically last 3–5 years before foam compression and component wear reduce their effectiveness.' },
      { question: 'Is a gaming chair as good as an ergonomic chair?', answer: 'Most gaming chairs are not designed with the same ergonomic rigor as office chairs. The high backrests and fixed lumbar pillows look supportive but often position the lumbar support in the wrong location for most body types. The exception is chairs like the Secretlab Titan, which incorporate genuine ergonomic adjustment.' },
      { question: 'Can a good chair eliminate back pain?', answer: 'A well-fitted ergonomic chair can significantly reduce or eliminate sitting-related back pain for many people. However, chair-related back pain often also involves desk height, monitor position, and movement habits. If pain persists after chair adjustment, consult a physiotherapist.' },
      { question: 'What\'s the correct sitting posture?', answer: 'Feet flat on floor or footrest, thighs parallel to floor, lumbar support contacting lower back, elbows at 90 degrees with shoulders relaxed, monitor at arm\'s length with top of screen at eye level. No single position should be held for more than 45–60 minutes without a break.' },
      { question: 'Should I try a chair before buying?', answer: 'Yes, ideally. Herman Miller, Steelcase, and many mid-range brands have showrooms in major cities. Many brands also offer trial periods (typically 30–100 days) with free returns. If possible, sit in a chair for 2+ hours before committing—20-minute showroom tests don\'t reveal long-session comfort.' },
    ],
  },
  'best-standing-desks': {
    intro: 'Electric standing desks have crossed a price threshold where they are now accessible to any home office worker who wants to alternate between sitting and standing. The key decisions are motor quality, height range, surface size, and whether programmable presets are included.',
    sections: [
      { title: 'Single Motor vs. Dual Motor', body: 'Single-motor standing desks are adequate for light loads — a monitor, keyboard, and a few accessories. Dual-motor desks are significantly more stable under heavier loads and at maximum height. If your desk will carry dual monitors or frequently reaches its maximum height, dual-motor is the right choice.' },
      { title: 'Programmable Height Presets', body: 'Height presets are the feature that determines whether you actually use your standing desk. Without presets, adjusting height requires holding a button and watching the readout. With presets, switching is a single button press. Do not buy a standing desk without programmable presets if daily use is the goal.' },
      { title: 'Height Range for Your Body', body: 'Confirm the desk\'s minimum and maximum height works for your height before purchasing. For users under 5\'4", look for desks with a minimum height under 25 inches. For users over 6\'2", look for desks with a maximum height above 47 inches. Most standard desks cover 24–49 inches.' },
      { title: 'The Anti-Fatigue Mat Requirement', body: 'A standing desk without an anti-fatigue mat leads to standing desk abandonment. Standing on a hard floor for more than 20 minutes creates discomfort that overrides the ergonomic motivation. Budget for a quality mat at the same time as the desk — they are not optional accessories.' },
    ],
    faqs: [
      { question: 'How long should I stand per day?', answer: 'Current ergonomics research suggests 2–4 hours of standing per 8-hour workday, broken into intervals of 20–30 minutes rather than long continuous standing sessions. A timer or wearable reminder set to 30 minutes is the most reliable way to maintain the alternating habit.' },
      { question: 'Will a standing desk reduce back pain?', answer: 'Many users report reduced lower back pain after transitioning to a sit-stand routine. The benefit comes from breaking prolonged sitting, not from standing specifically. If you stand in one position without moving, the improvement is limited — walk around or shift weight during standing intervals.' },
      { question: 'What is the correct standing desk height?', answer: 'Standing desk height is correct when your elbows are at approximately 90 degrees with shoulders relaxed while your hands rest on the keyboard. This is typically at hip height. Program this as your standing preset on first use — most users underestimate the correct height by 1–2 inches.' },
      { question: 'How much weight can an electric standing desk hold?', answer: 'Most consumer electric standing desks are rated for 150–220 lbs. A dual-monitor setup with two 27-inch monitors, arms, keyboard, and accessories rarely exceeds 50–60 lbs. Weight capacity is rarely a limiting factor unless you have exceptionally heavy equipment.' },
      { question: 'Are expensive standing desks worth the cost?', answer: 'Beyond the $300–400 range, additional cost buys smoother motors, wider height ranges, better cable management, and longer warranties. For most home office users, a quality mid-range electric desk performs identically to a premium option for daily use. The premium tier earns its cost at high daily usage, heavy loads, or commercial environments.' },
    ],
  },
  'best-usb-hubs-docking-stations': {
    intro: 'USB hubs and docking stations solve the same fundamental problem — not enough ports — but at very different levels of complexity. A 4-port USB hub costs under $20 and takes 30 seconds to set up. A full docking station costs $80–200 and turns your laptop into a complete workstation with one cable. Knowing which you need starts with understanding your actual port requirements.',
    sections: [
      { title: 'USB Hub vs. Docking Station', body: 'A USB hub adds more USB ports and nothing else. A docking station adds ports, video output, ethernet, and often laptop charging — all through one cable. If you only need more USB-A ports, a hub is the right tool. If you need a monitor connection, ethernet, or single-cable connectivity, you need a docking station.' },
      { title: 'Bus-Powered vs. Externally Powered', body: 'Bus-powered hubs draw power from the laptop port — no separate adapter required. This limits how many high-power devices can operate simultaneously and eliminates fast charging capability. Externally powered docks have their own power supply, eliminating those constraints and providing more stable operation at higher loads.' },
      { title: 'Thunderbolt 4 vs. USB-C Alt Mode', body: 'The most important specification to check before buying a dock is whether your laptop port supports Thunderbolt 4 or only USB-C with DisplayPort Alt Mode. Many docks advertise dual or triple monitor output that requires Thunderbolt 4 — on a USB-C Alt Mode port, the same dock will support fewer displays. Check your laptop specs first.' },
      { title: 'Matching Dock to Use Case', body: 'A content creator who needs an SD card slot, high-speed data transfer, and a single external monitor has different requirements from a developer who needs three monitors, ethernet, and a consistent single-cable desk connection. Map your actual port needs before evaluating products to avoid overpaying for features you won\'t use.' },
    ],
    faqs: [
      { question: 'Will a USB hub work with my laptop?', answer: 'Any USB hub with the correct input connector (USB-A or USB-C) will work with any laptop that has that port. No drivers or software are required. The only constraint is that bus-powered hubs share the power budget of your laptop port — avoid connecting multiple high-power devices simultaneously.' },
      { question: 'Can a docking station charge my laptop?', answer: 'Most docking stations with USB-C Power Delivery can charge laptops at 60–100W — sufficient for most laptops. Check the dock\'s Power Delivery wattage against your laptop\'s charging requirement. Gaming laptops often require 120–180W, which exceeds most docks\' charging capacity.' },
      { question: 'Do USB hubs affect data transfer speed?', answer: 'A USB 3.0 hub connected to a USB 3.0 port provides the full 5 Gbps bandwidth across all ports — but that bandwidth is shared. If you transfer large files from two external drives simultaneously through the same hub, each drive gets roughly half the bandwidth. For single-device transfers, a quality hub does not reduce speed.' },
      { question: 'What is the difference between USB 3.0 and USB-C?', answer: 'USB 3.0 and USB-C describe different things. USB 3.0 is a data speed standard (5 Gbps). USB-C is a connector shape. A USB-C port can support USB 3.0, USB 3.2, Thunderbolt 3, or Thunderbolt 4 depending on the laptop. The connector shape alone does not tell you the speed capability.' },
      { question: 'Can I use multiple monitors through a USB hub?', answer: 'Standard USB hubs do not support video output. To connect monitors through a hub or dock, you need a device with DisplayPort Alt Mode, Thunderbolt, or dedicated video output ports (HDMI, DisplayPort). Check the product specifications for video output explicitly before purchasing.' },
    ],
  },
  'best-noise-cancelling-headphones': {
    intro: 'Noise cancelling headphones have moved from a travel luxury to a home office essential. The ability to create acoustic privacy in a household environment — without requiring a dedicated quiet room — changes how productively you can work from home. The technology ranges from passive isolation (physical blocking) to active noise cancellation (electronic phase-cancelling) at meaningfully different effectiveness levels.',
    sections: [
      { title: 'Active vs. Passive Noise Cancellation', body: 'Passive noise cancellation is simply the physical blocking created by over-ear cups sealing around the ears. Active noise cancellation (ANC) adds microphones that sample ambient sound and produce an inverse signal to cancel it electronically. ANC is significantly more effective against low-frequency constant noise (HVAC, traffic, refrigerators) than passive blocking alone.' },
      { title: 'ANC Effectiveness by Noise Type', body: 'ANC performs best against predictable, continuous low-frequency noise. It is less effective against sudden high-frequency sounds (voices, keyboard clicks, door slams). If your primary noise problem is household conversation or children playing, ANC provides improvement but not silence. If it is HVAC or traffic, ANC is highly effective.' },
      { title: 'Call Quality: Microphone Matters', body: 'Most noise cancelling headphones prioritize listening quality. For remote workers who spend significant time on video calls, the outbound microphone quality matters as much as the listening experience. Mid-range headphones often have competent microphones; premium headphones vary widely. If calls are critical, check dedicated call-quality reviews.' },
      { title: 'Battery Life and Charging', body: 'All wireless headphones lose battery over time. After 1–2 years of daily use, a headphone advertised as 40-hour battery may perform at 28–32 hours. Factor in degradation when evaluating battery claims. Fast-charging features (5 minutes = 3 hours of playback) are particularly valuable for remote workers who forget to charge overnight.' },
    ],
    faqs: [
      { question: 'Are noise cancelling headphones safe to wear all day?', answer: 'Extended headphone use at moderate volumes is generally safe. The risk is volume level, not duration. Keep listening volume below 60% of maximum and remove headphones for at least 30 minutes per day. Some users report mild "ANC pressure" sensation — a slight feeling of ear pressure from the phase-cancelling signal — which resolves when ANC is disabled.' },
      { question: 'Will ANC headphones work in a very loud environment?', answer: 'ANC is not designed for very loud environments like construction sites or machinery. It is designed for office and home noise levels — conversation, HVAC, traffic. For extremely loud environments, purpose-built hearing protection with passive isolation is appropriate. Do not use consumer ANC headphones as hearing protection.' },
      { question: 'What is transparency mode?', answer: 'Transparency mode (also called ambient mode or aware mode) uses the headphone\'s external microphones to pipe in outside audio, allowing you to hear your environment while wearing headphones. It is designed for situations where you need to hear a doorbell, coworker, or announcement without removing headphones.' },
      { question: 'Should I get over-ear or in-ear noise cancelling headphones?', answer: 'Over-ear headphones provide better passive isolation, more comfort for multi-hour sessions, and typically longer battery life. In-ear (like AirPods Pro) are more portable and suited to users who alternate between desk and mobile use throughout the day. For a fixed home office setup, over-ear is usually preferred.' },
      { question: 'Do I need to spend $200+ for good ANC?', answer: 'No. ANC technology has improved significantly at the $50–100 price tier. The Soundcore Q20i and similar options provide genuine ANC effectiveness that was only available in $300+ headphones three years ago. The premium tier (Sony XM5, Bose QC45) offers finer tuning, better microphones, and build quality — not dramatically better ANC.' },
    ],
  },
  'best-wireless-mouse-keyboard-combos': {
    intro: 'Wireless keyboard and mouse combos eliminate cable clutter, allow flexible desk positioning, and are now indistinguishable from wired performance for everyday office tasks. The key decisions are connection technology (USB receiver vs. Bluetooth), ergonomic design, and whether silent keys matter for your household environment.',
    sections: [
      { title: 'USB Receiver vs. Bluetooth', body: 'USB receiver (2.4GHz) combos connect instantly, never need pairing, and maintain consistent low-latency connection. Bluetooth combos require no USB port occupancy, allow multi-device pairing, and suit laptops with limited USB-A ports. For a desktop workstation with available USB-A ports, a receiver is often more reliable. For a laptop, Bluetooth conserves ports.' },
      { title: 'Silent Keys: Who Actually Needs Them', body: 'Silent keyboards reduce typing noise by 40–70% using dampened switch mechanisms. They matter for home offices with shared household space, users who record audio or video, and remote workers whose keyboard is audible on video calls. For solo-room setups, standard membrane keys are fine. If you can hear your own typing on recordings, consider silent keys.' },
      { title: 'Ergonomic Keyboard Designs', body: 'Standard keyboards place hands shoulder-width apart and flat, creating ulnar deviation (wrists bent outward) during sustained typing. Curved wave keyboards reduce this angle without requiring a split keyboard adjustment period. Fully split keyboards provide maximum correction but require 2–4 weeks to re-establish typing speed. Most home office users find a wave keyboard sufficient.' },
      { title: 'Mouse Ergonomics Matter More Than Keyboards', body: 'Typing is a symmetrical bilateral motion. Mousing is asymmetric — one hand, one position, sustained for hours. Mouse shape, weight, and button placement contribute more significantly to RSI risk than keyboard design. An ergonomic mouse with a natural grip angle reduces forearm pronation that accumulates into wrist and elbow symptoms over weeks of use.' },
    ],
    faqs: [
      { question: 'How far can a wireless keyboard and mouse work from the receiver?', answer: 'Most 2.4GHz wireless combos are rated for 10 meters (33 feet) line of sight. In practice, walls, USB 3.0 devices (which cause RF interference), and other wireless devices reduce this range. For a typical home office within 3–5 feet of the computer, any wireless combo performs reliably.' },
      { question: 'How long do batteries last in wireless keyboards and mice?', answer: 'Battery life varies widely by usage and design. Logitech\'s top keyboards claim 24–36 months on two AA batteries. Backlit keyboards drain batteries 3–5 times faster than non-backlit. Mice typically last 6–12 months on AA batteries. USB rechargeable models eliminate battery purchases but require periodic charging.' },
      { question: 'Can I use a wireless keyboard and mouse for gaming?', answer: 'Wireless office keyboards and mice introduce 2–8ms of latency compared to wired — imperceptible for typing and productivity but potentially relevant for competitive gaming where milliseconds matter. For casual gaming, any wireless office combo performs fine. For competitive gaming, a dedicated wired gaming mouse is recommended.' },
      { question: 'Do wireless keyboards work with Mac and Windows?', answer: 'Most wireless combos work with both Mac and Windows out of the box. Mac-specific keys (Command, Option) may appear as Windows keys (Windows/Alt) on cross-platform combos, and some media key functions differ. Mac-specific keyboards remap these correctly but typically cost more and reduce Windows compatibility.' },
      { question: 'What is the difference between Bluetooth 4.0 and 5.0 for keyboards?', answer: 'For typical home office use, Bluetooth 4.0 and 5.0 perform identically. Bluetooth 5.0 offers longer theoretical range and lower power consumption. The practical difference is negligible at desk distances. The more important Bluetooth specification for remote workers is multi-point connection, which allows the keyboard to pair with multiple devices simultaneously.' },
    ],
  },
  'best-desk-organizers': {
    intro: 'Desk organization is not about having less stuff—it is about knowing where everything is and being able to access what you need without interrupting your focus. The best organizers create a system, not just storage.',
    sections: [
      { title: 'The Accessibility Hierarchy', body: 'Organize by frequency of use. Items used multiple times per hour (pen, phone, notepad) should be within arm\'s reach on the desk. Items used once a day should be in a nearby drawer. Items used weekly can be in a filing system. Most desk clutter comes from violating this hierarchy.' },
      { title: 'Vertical Over Horizontal', body: 'Desk space is premium real estate. Vertical organizers (tiered systems, monitor risers with storage) use the air above your desk rather than the surface area. Before buying any organizer, measure how much desk surface you\'re willing to allocate to it.' },
      { title: 'The Inbox Principle', body: 'Every organizer with an inbox section works only if you process it. An empty inbox tray is useless; a perpetually full one creates the same anxiety as a messy desk. Plan to process the inbox daily, or remove it from your system entirely.' },
      { title: 'Material and Aesthetic Match', body: 'The best organizer is one you maintain. If your desk is warm wood and you buy a cold metal organizer, the visual mismatch creates low-level dissatisfaction that makes you less likely to maintain the system. Match materials to your existing desk aesthetic.' },
    ],
    faqs: [
      { question: 'How do I keep my desk organizer from becoming cluttered again?', answer: 'Assign every item a specific location in the organizer and enforce a "return to home" rule after every use. At the end of each workday, spend 90 seconds returning every item to its designated spot. This daily reset prevents the gradual entropy that turns organized desks messy.' },
      { question: 'What should actually be on my desk?', answer: 'Only items used at least once per day deserve desk surface space. For most remote workers: monitor(s), keyboard, mouse, a single pen, a notepad, water bottle, and phone. Everything else should be in drawers or off the desk entirely. The more items on the desk, the harder it is to focus.' },
      { question: 'Are bamboo organizers durable?', answer: 'Bamboo is strong and durable under normal conditions but can warp or crack with sustained moisture exposure. Keep bamboo organizers away from humidifiers, plant watering overspray, or desks near windows with condensation. Clean with a dry cloth rather than wet wipes.' },
      { question: 'Should I buy a monitor riser or a separate organizer?', answer: 'A monitor riser with built-in storage combines ergonomic benefit with organization in one footprint—a good choice if you don\'t use a monitor arm. If you use a monitor arm, a separate organizer at desk level is more flexible and appropriate.' },
      { question: 'How do I organize cables within my organizer?', answer: 'Keep cable accessories (chargers, adapters, extra cables) in a dedicated drawer or pouch rather than loose in open compartments. Nothing defeats a clean desk aesthetic faster than a coiled charging cable draped over a beautiful organizer.' },
    ],
  },
  'best-blue-light-glasses': {
    intro: 'Blue light glasses filter short-wavelength visible light emitted by LED displays, which some research suggests can contribute to eye strain and sleep disruption. The science is evolving, but many computer users report meaningful symptom reduction.',
    sections: [
      { title: 'What the Research Actually Says', body: 'The American Academy of Ophthalmology states that digital eye strain is primarily caused by blinking less frequently during screen use, not by blue light specifically. However, blue light\'s effect on circadian rhythms (melatonin suppression) is better established. Glasses may help most as an evening intervention for sleep quality.' },
      { title: 'Clear Lens vs. Amber Tint', body: 'Amber-tinted lenses block more blue light but distort color perception—problematic for design work, photo editing, or video calls. Clear-lens options like Felix Gray use embedded filters that block less blue light but preserve color accuracy. Choose based on your use case.' },
      { title: 'Filtration Percentage', body: 'Most blue light glasses filter 30–65% of blue light. Higher filtration means more amber tint. For daytime use at a desk, 30–50% filtration with minimal tint is usually the right balance. For evening use, 50–65% filtration (amber) is more appropriate.' },
      { title: 'Prescription vs. Non-Prescription', body: 'If you wear corrective lenses, adding blue light filtering to your prescription is almost always more cost-effective than buying separate computer glasses. Most online prescription eyewear brands offer this as a low-cost add-on. Non-prescription users can start with any over-the-counter option.' },
    ],
    faqs: [
      { question: 'Do blue light glasses actually work?', answer: 'Evidence is mixed. Clinical studies show limited evidence that blue light glasses reduce eye strain compared to other interventions like adjusting display brightness or using the 20-20-20 rule. However, many users report subjective improvement. The sleep quality benefit (wearing them in the evening) has stronger research support.' },
      { question: 'What is the 20-20-20 rule?', answer: 'Every 20 minutes, look at something 20 feet away for 20 seconds. This breaks the fixed-focus posture that causes eye muscle fatigue during screen use—one of the primary drivers of digital eye strain. Practicing this consistently has better evidence support than blue light glasses for eye strain.' },
      { question: 'Can I wear blue light glasses all day?', answer: 'Yes. Clear-lens and lightly tinted blue light glasses are designed for all-day wear. Heavy amber tints are better reserved for evening hours to support sleep quality. If you wear them all day, remove them for the last 30–60 minutes before bed to get the benefit of natural darkness.' },
      { question: 'Are cheap blue light glasses worth it?', answer: 'The optical quality of very cheap glasses (under $10) is often poor enough to introduce headaches or eye strain of their own. Budget options in the $20–40 range from established brands typically provide adequate optical quality and genuine filtration. Below $15, quality becomes unreliable.' },
      { question: 'Should I also adjust my monitor settings?', answer: 'Yes. Reducing display brightness to match ambient light levels, enabling night mode after sunset, and positioning the monitor to avoid glare all address eye strain at the source. Blue light glasses are a complement to these settings, not a replacement for them.' },
    ],
  },
};

export default async function BestPickArticle({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const products = getProductsByArticle(slug);
  const otherArticles = articles.filter((a) => a.slug !== slug);
  const content = buyingGuideContent[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content?.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol
            className="flex items-center gap-2 text-[#666666] dark:text-gray-500"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '12px' }}
          >
            <li>
              <Link href="/" className="hover:text-[#1B4FD8]">Home</Link>
            </li>
            <li>/</li>
            <li>Reviews</li>
            <li>/</li>
            <li className="text-[#111111] dark:text-gray-300">{article.title}</li>
          </ol>
        </nav>

        <div className="flex gap-8">
          {/* Left sidebar */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <ArticleSidebar products={products} />
          </div>

          {/* Center */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <span className="category-label text-[#1B4FD8]">{article.category}</span>
            <h1
              className="font-fraunces font-black text-[#111111] dark:text-gray-100 mt-2 mb-3"
              style={{ fontSize: '2rem', lineHeight: '1.2' }}
            >
              {article.title}
            </h1>
            <p
              className="text-[#666666] dark:text-gray-500 mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
            >
              Updated 2026 &middot; {article.readTime} min read &middot; 6 products reviewed
            </p>

            {/* Affiliate disclosure */}
            <div className="callout-box dark:bg-gray-900 dark:border-blue-500 mb-6">
              <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                <strong>Affiliate disclosure:</strong> DeskCraftDaily earns a commission from
                qualifying Amazon purchases. Our product selections are editorially independent.
              </p>
            </div>

            {/* Intro */}
            <p
              className="text-[#444444] dark:text-gray-400 mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', lineHeight: '1.75' }}
            >
              {article.description} We evaluated dozens of options and narrowed the field to the six
              that deliver the best combination of ergonomic benefit, build quality, and long-term
              reliability for home office workers. Below you will find our top picks, a detailed
              comparison, and a buying guide that covers everything you need to know before deciding.
            </p>

            {/* Comparison Table */}
            <h2
              className="font-fraunces font-bold text-[#111111] mb-3"
              style={{ fontSize: '1.25rem' }}
            >
              Quick Comparison
            </h2>
            <ComparisonTable products={products} />

            <hr className="dashed-divider" />

            {/* Product sections */}
            {products.map((product) => (
              <div key={product.id} id={`product-${product.id}`} className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-fraunces font-black text-[#111111] dark:text-gray-100"
                    style={{ fontSize: '1.5rem' }}
                  >
                    {product.rank}.
                  </span>
                  <span
                    className="px-2 py-0.5 text-white rounded"
                    style={{
                      background: '#1B4FD8',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 600,
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="dark:bg-gray-800"
                  style={{
                    width: '100%',
                    maxHeight: '280px',
                    objectFit: 'contain',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    padding: '12px',
                  }}
                />

                <h3
                  className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-1"
                  style={{ fontSize: '1.25rem' }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-[#444444] dark:text-gray-400 mb-3 italic"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                >
                  {product.summary}
                </p>

                <ErgonomicScoreBar
                  comfortScore={product.comfortScore}
                  buildScore={product.buildScore}
                  valueScore={product.valueScore}
                />

                {/* Cons — visible by default */}
                <div className="mb-4">
                  <p
                    className="category-label text-[#666666] dark:text-gray-500 mb-2"
                    style={{ fontSize: '10px' }}
                  >
                    CONSIDERATIONS
                  </p>
                  {product.cons.map((con) => (
                    <div key={con} className="flex items-start gap-2 mb-1.5">
                      <XCircle size={14} className="text-[#999999] dark:text-gray-600 mt-0.5 flex-shrink-0" />
                      <span
                        className="text-[#666666] dark:text-gray-400"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                      >
                        {con}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Accordions */}
                <AccordionSection title="Why We Picked It" defaultOpen={product.rank === 1}>
                  {product.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2 mb-2">
                      <CheckCircle size={14} className="text-[#1B4FD8] mt-0.5 flex-shrink-0" />
                      <span
                        className="text-[#444444] dark:text-gray-300"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}
                      >
                        {pro}
                      </span>
                    </div>
                  ))}
                </AccordionSection>

                <AccordionSection title="Who It&apos;s For">
                  <p
                    className="text-[#444444]"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.7' }}
                  >
                    {product.whoItIsFor}
                  </p>
                </AccordionSection>

                <AccordionSection title="How to Use It">
                  <p
                    className="text-[#444444]"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', lineHeight: '1.7' }}
                  >
                    {product.howToUse}
                  </p>
                </AccordionSection>

                <div className="mt-4">
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#1B4FD8] font-semibold hover:underline"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                  >
                    View on Amazon →
                  </a>
                </div>

                <hr className="dashed-divider mt-8" />
              </div>
            ))}

            {/* Buying Guide */}
            {content && (
              <div className="mb-12">
                <h2
                  className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-4"
                  style={{ fontSize: '1.5rem' }}
                >
                  Buying Guide
                </h2>
                <p
                  className="text-[#444444] dark:text-gray-400 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.75' }}
                >
                  {content.intro}
                </p>

                {content.sections.map((section, i) => (
                  <div key={i} className="mb-6">
                    <h3
                      className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-2"
                      style={{ fontSize: '1.1rem' }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className="text-[#444444] dark:text-gray-400 leading-relaxed"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', lineHeight: '1.75' }}
                    >
                      {section.body}
                    </p>
                  </div>
                ))}

                {/* Callout */}
                <div className="callout-box dark:bg-gray-900 dark:border-blue-500">
                  <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                    <strong>Tip:</strong> According to{' '}
                    <a
                      href="https://www.osha.gov/ergonomics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    >
                      OSHA ergonomics guidelines
                    </a>
                    , proper workstation setup can reduce musculoskeletal disorders by up to 60%.
                    The{' '}
                    <a
                      href="https://ergo.human.cornell.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    >
                      Cornell Ergonomics Lab
                    </a>{' '}
                    provides free guidelines for home office setup.
                  </p>
                </div>

                <div className="callout-box mt-4 dark:bg-gray-900 dark:border-blue-500">
                  <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                    <strong>Research note:</strong> A{' '}
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4591921/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    >
                      NIH review of musculoskeletal disorders
                    </a>{' '}
                    found that combined ergonomic interventions (equipment + training + behavior
                    change) produce the most significant outcomes for remote workers.
                  </p>
                </div>
              </div>
            )}

            {/* FAQ */}
            {content && <FAQ items={content.faqs} />}

            {/* Further Reading */}
            <div
              className="my-8 p-5 bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800"
              style={{ borderRadius: '6px' }}
            >
              <h3
                className="font-fraunces font-bold text-[#111111] dark:text-gray-100 mb-3"
                style={{ fontSize: '1.1rem' }}
              >
                Further Reading
              </h3>
              <ul className="space-y-2">
                {otherArticles.slice(0, 3).map((a) => (
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
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-[#1B4FD8] dark:text-blue-400 hover:underline"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '14px' }}
                  >
                    Browse All Guides →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Affiliate disclosure */}
            <div className="callout-box dark:bg-gray-900 dark:border-blue-500">
              <p className="text-[#444444] dark:text-gray-300" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px' }}>
                <strong>Affiliate disclosure:</strong> DeskCraftDaily earns a commission from
                qualifying Amazon purchases at no extra cost to you.
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="hidden xl:block w-56 flex-shrink-0">
            <RelatedSidebar articles={articles} currentSlug={slug} />
          </div>
        </div>
      </div>
    </>
  );
}
