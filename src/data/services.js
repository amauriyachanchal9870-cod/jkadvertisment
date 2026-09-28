/**
 * Detailed service catalog for JK Advertisment Agency.
 * Extracted and structured from verified agency credentials and business references.
 */

export const SERVICES = [
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    tagline: "Engage, grow, and convert your target audience on top social platforms.",
    icon: "Share2",
    accentColor: "#0B6B35",
    description: "Build an active, trustworthy brand presence on social media. We handle everything from strategic monthly content planning and daily graphic posts to targeted audience engagement and continuous performance monitoring.",
    features: [
      "Facebook page management & optimization",
      "Facebook post creation and regular publishing",
      "Facebook page post boosting & engagement",
      "Facebook personal profile / ID post boosting",
      "Strategic social media monthly content planning",
      "Instagram account management and profile aesthetic",
      "End-to-end targeted social media campaigns"
    ],
    deliverables: [
      "Dedicated monthly content calendar",
      "High-resolution branded post graphics & captions",
      "Audience demographic research & hashtag strategy",
      "Boost campaign configuration & tracking",
      "Monthly performance insights & audience growth review"
    ],
    workflow: [
      { step: "01", title: "Audience & Competitor Audit", desc: "We evaluate your current social channels, target demographics, and local competitors." },
      { step: "02", title: "Content Calendar Creation", desc: "Develop a structured monthly plan covering educational, promotional, and festival themes." },
      { step: "03", title: "Creative Production & Posting", desc: "Design attractive graphics, write compelling copy, and publish at peak engagement times." },
      { step: "04", title: "Paid Boosting & Monitoring", desc: "Boost top-performing posts to expand local reach and track incoming customer enquiries." }
    ],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "Our primary focus is on Facebook and Instagram, which provide the highest commercial return for local businesses, retail shops, and service providers."
      },
      {
        q: "Do I need to provide all the photos and text?",
        a: "You can provide raw photos or product lists, but our creative team crafts professional captions, marketing slogans, and graphic layouts."
      },
      {
        q: "How soon can we see social media growth?",
        a: "Consistent publishing and targeted boosting typically start showing noticeable improvements in reach and customer enquiries within the first 2 to 3 weeks."
      }
    ],
    related: ["facebook-advertising", "graphic-design", "video-editing"]
  },
  {
    id: "facebook-advertising",
    slug: "facebook-advertising",
    title: "Facebook Advertising & Page Services",
    shortTitle: "Facebook Ads",
    tagline: "Generate direct customer leads with targeted Facebook advertising campaigns.",
    icon: "Megaphone",
    accentColor: "#16A34A",
    description: "Maximize your business visibility with targeted Meta ad solutions. From precise local geo-targeting in Firozabad and UP to boost campaigns and Meta verification guidance, we ensure your ad budget drives real business enquiries.",
    features: [
      "Facebook business page setup, verification & hygiene",
      "Targeted Facebook post promotion & sponsored ads",
      "Facebook ID post promotion for personal brand accounts",
      "Facebook page post boost campaigns tailored for local reach",
      "Audience demographic, age, and interest targeting",
      "Account security & business asset maintenance",
      "Facebook Blue Tick / verification-related guidance"
    ],
    disclaimer: "Meta controls all verification eligibility and approval policies. JK Advertisment Agency provides setup assistance and documentation readiness; we do not promise guaranteed verification or claim official Meta affiliation.",
    deliverables: [
      "Meta Business Suite setup & pixel/event tracking guidance",
      "Custom ad creatives & conversion-optimized copy",
      "Geo-targeted audience targeting (City / Pincode / Radius)",
      "Daily ad spend management & A/B testing",
      "Transparent reach, impressions, and cost-per-lead reporting"
    ],
    workflow: [
      { step: "01", title: "Campaign Objective Selection", desc: "Determine your goal: WhatsApp enquiries, phone calls, brand awareness, or website clicks." },
      { step: "02", title: "Target Audience Definition", desc: "Define location, age bracket, shopping interests, and customer behaviors." },
      { step: "03", title: "Ad Creative & Copy Design", desc: "Build thumb-stopping visuals and high-converting action triggers." },
      { step: "04", title: "Live Ad Optimization", desc: "Continuously adjust bids, audiences, and creatives to minimize cost-per-result." }
    ],
    faqs: [
      {
        q: "How much ad budget should I spend on Facebook?",
        a: "You can begin with as low as ₹200 to ₹500 per day. As we analyze which ads generate the best customer enquiries, you can scale the budget accordingly."
      },
      {
        q: "Can you target customers in specific localities of Firozabad and nearby districts?",
        a: "Yes! Facebook allows precise radius-based and pincode-based targeting around your shop or business location."
      },
      {
        q: "Can you guarantee a Blue Tick badge on Facebook?",
        a: "No agency can guarantee verification, as Meta alone decides eligibility based on strict public guidelines. We assist with proper profile setup, public record readiness, and the official application process."
      }
    ],
    related: ["social-media-marketing", "graphic-design", "video-editing"]
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & Creative Services",
    shortTitle: "Graphic Design",
    tagline: "Eye-catching visual designs that make your business instantly recognizable.",
    icon: "Palette",
    accentColor: "#F4C542",
    description: "Every business deserves professional, striking visual communication. Our designers create vibrant promotional posters, digital creatives, brand banners, and festive greetings tailored to your business identity.",
    features: [
      "Social media post & story creative design",
      "Business poster, flex & outdoor banner design",
      "Promotional offer flyers and product brochures",
      "Festival, occasion, and seasonal greeting creatives",
      "Corporate branding assets, logos, and identity packs",
      "Print-ready high-resolution vector artwork"
    ],
    deliverables: [
      "High-resolution PNG, JPG, and print-ready PDF files",
      "Multiple aspect ratios (1:1 Square, 9:16 Story, 16:9 Banner)",
      "Full commercial usage rights for all generated designs",
      "Source files provided on requirement"
    ],
    workflow: [
      { step: "01", title: "Design Brief & Content", desc: "We collect your offer details, product images, brand colors, and headline." },
      { step: "02", title: "Concept Layout", desc: "Our graphic designers create a visually balanced layout emphasizing key customer benefits." },
      { step: "03", title: "Review & Refinement", desc: "We incorporate your feedback, fine-tuning typography and visual hierarchy." },
      { step: "04", title: "Delivery in Multiple Formats", desc: "You receive optimized assets for WhatsApp, Instagram, Facebook, and print." }
    ],
    faqs: [
      {
        q: "How fast do you deliver graphic designs?",
        a: "Standard social media posts and banners are typically delivered within 24 to 48 hours. Urgent festival creatives can also be expedited."
      },
      {
        q: "Can you provide designs in Hindi and English?",
        a: "Yes! We specialize in bilingual creatives (Hindi, English, or Hinglish) suited for regional customers in North India."
      }
    ],
    related: ["social-media-marketing", "photography-printing", "video-editing"]
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Video Editing & Reels",
    shortTitle: "Video Editing",
    tagline: "Dynamic short-form reels and commercial videos that captivate audiences.",
    icon: "Video",
    accentColor: "#0B6B35",
    description: "Video content drives the highest engagement across modern platforms. We produce dynamic Instagram Reels, Facebook video ads, product demonstrations, and business promotional clips with trending audio, smooth transitions, and subtitles.",
    features: [
      "Promotional business video editing & color correction",
      "High-retention social media reels & TikTok/Shorts format",
      "Facebook and Instagram video ad creatives",
      "Motion graphics, text animations, and captions",
      "Commercial voiceover synchronization & audio mixing",
      "Event and shop opening highlight reels"
    ],
    deliverables: [
      "Full HD (1080p / 4K) vertical & landscape video files",
      "Trending royalty-free music and custom sound effects",
      "Engaging on-screen captions & subtitles in Hindi/English",
      "Custom branded intro & outro animations"
    ],
    workflow: [
      { step: "01", title: "Footage & Script Submission", desc: "Share your smartphone/camera footage and basic talking points." },
      { step: "02", title: "Pacing & Storyboarding", desc: "We cut dead space, select upbeat music, and establish hook points within the first 3 seconds." },
      { step: "03", title: "Motion Effects & Subtitles", desc: "Add animated captions, brand watermarks, and smooth transitions." },
      { step: "04", title: "Final Render & Platform Prep", desc: "Deliver optimized files ready to publish on Instagram Reels and Facebook Ads." }
    ],
    faqs: [
      {
        q: "Can you edit raw smartphone videos shot by our staff?",
        a: "Absolutely! Most of the highest-performing Instagram Reels are edited from clear mobile phone videos. We enhance colors, lighting, sound, and pace."
      },
      {
        q: "Do you include background music?",
        a: "Yes, we integrate trending, commercial-safe royalty-free music or guide you on selecting current trending audio on Instagram."
      }
    ],
    related: ["social-media-marketing", "facebook-advertising", "graphic-design"]
  },
  {
    id: "bulk-sms",
    slug: "bulk-sms",
    title: "Bulk SMS Marketing",
    shortTitle: "Bulk SMS",
    tagline: "Instant high-volume promotional & transactional messaging with 98% open rates.",
    icon: "MessageSquare",
    accentColor: "#16A34A",
    description: "Reach thousands of customers in seconds. Whether announcing a seasonal sale, festive discount, festival opening, or service notification, our Bulk SMS services deliver your message directly into customer inboxes.",
    features: [
      "Promotional Bulk SMS campaigns with high deliverability",
      "Transactional alerts and customer service notifications",
      "DLT registration and template approval assistance",
      "Dynamic Sender ID configuration",
      "Detailed delivery reports and campaign logs",
      "Compliant messaging adhering to telecom regulations"
    ],
    deliverables: [
      "High-speed SMS routing gateways",
      "DLT header and content template support",
      "Real-time live delivery statistics",
      "Campaign scheduling and contact list segmenting"
    ],
    workflow: [
      { step: "01", title: "Audience Segmentation", desc: "Organize customer phone databases according to location and customer category." },
      { step: "02", title: "DLT Template Drafting", desc: "Draft message copy according to regulatory guidelines for fast DLT approval." },
      { step: "03", title: "Scheduling & Dispatch", desc: "Schedule broadcasts during peak daytime response windows." },
      { step: "04", title: "Delivery Verification", desc: "Review real-time delivery logs, failures, and click-through metrics." }
    ],
    faqs: [
      {
        q: "What is DLT registration and is it required for SMS in India?",
        a: "Yes, per TRAI regulations in India, all commercial SMS senders must be registered on DLT portals. We guide you step-by-step through the verification and template approval."
      },
      {
        q: "How fast do bulk SMS messages get delivered?",
        a: "Our enterprise telecom gateways deliver thousands of messages within a few seconds."
      }
    ],
    related: ["whatsapp-marketing", "voice-call", "toll-free-services"]
  },
  {
    id: "whatsapp-marketing",
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing Solutions",
    shortTitle: "WhatsApp Marketing",
    tagline: "Connect directly with customers on India's favorite messaging application.",
    icon: "PhoneCall",
    accentColor: "#0B6B35",
    description: "Turn conversations into sales. We help businesses leverage WhatsApp for promotional broadcasts, interactive product catalogues, rich media offers with PDF brochures, and fast customer responses.",
    features: [
      "WhatsApp Business API and verified messaging guidance",
      "Rich media promotional campaigns with images, buttons & PDFs",
      "Product catalogue sharing and instant enquiry triggers",
      "Automated greeting and quick-reply workflow design",
      "Customer contact segmentation and opt-in messaging",
      "Customer support and direct enquiry routing"
    ],
    deliverables: [
      "Custom WhatsApp promotional templates",
      "Click-to-WhatsApp ad configuration",
      "Interactive enquiry flow setup",
      "Safe sending guidelines to protect business phone numbers"
    ],
    workflow: [
      { step: "01", title: "Campaign Strategy", desc: "Define your offer message, CTA buttons, and interactive response triggers." },
      { step: "02", title: "Template & Media Prep", desc: "Design attractive WhatsApp flyer cards and format WhatsApp-friendly text." },
      { step: "03", title: "Broadcast Execution", desc: "Deliver personalized messages directly to verified customer contacts." },
      { step: "04", title: "Enquiry Handover", desc: "Route interested replies directly to your sales team's WhatsApp chat." }
    ],
    faqs: [
      {
        q: "Can we include photos, PDF catalogs, and clickable buttons?",
        a: "Yes! WhatsApp campaigns support rich graphics, digital brochures, and action buttons like 'Call Now' or 'Visit Website'."
      },
      {
        q: "How does Click-to-WhatsApp work with Facebook Ads?",
        a: "We create Facebook and Instagram ads where tapping 'Send Message' directly opens a WhatsApp chat with your business with a prefilled message."
      }
    ],
    related: ["bulk-sms", "facebook-advertising", "voice-call"]
  },
  {
    id: "voice-call",
    slug: "voice-call",
    title: "Voice Call & Audio Broadcast Services",
    shortTitle: "Voice Calls",
    tagline: "Deliver personalized voice announcements directly to thousands of mobile phones.",
    icon: "Radio",
    accentColor: "#F4C542",
    description: "Voice calls break the literacy barrier and command immediate attention. Broadcast high-quality pre-recorded voice announcements, political or community campaigns, shop openings, and special offers.",
    features: [
      "Automated outbound voice call broadcasts",
      "High-clarity studio or digital voice recording in Hindi/English",
      "Keypress interactive response (IVR prompt: Press 1 to speak)",
      "Retry mechanisms for unanswered or busy calls",
      "Comprehensive call answered duration analytics",
      "High-capacity simultaneous dialing channels"
    ],
    deliverables: [
      "Professional voiceover recording & background audio mixing",
      "Outbound dialing scheduling & time-of-day configuration",
      "Real-time dashboard displaying connected vs. dropped calls",
      "Detailed call logs with duration listened"
    ],
    workflow: [
      { step: "01", title: "Script Crafting", desc: "Write a concise 20 to 30 second engaging voice script." },
      { step: "02", title: "Voice Recording", desc: "Record with professional Hindi/English voice talent or studio audio." },
      { step: "03", title: "Dialing Configuration", desc: "Set calling windows, repeat attempts, and caller ID." },
      { step: "04", title: "Broadcast & Reporting", desc: "Launch the broadcast and download call pickup rate reports." }
    ],
    faqs: [
      {
        q: "How long should a promotional voice call be?",
        a: "We recommend 20 to 30 seconds so listeners receive the full message before hanging up."
      },
      {
        q: "What happens if a customer doesn't pick up?",
        a: "The automated system can be configured to retry busy or unreachable numbers after a specified time interval."
      }
    ],
    related: ["bulk-sms", "toll-free-services", "whatsapp-marketing"]
  },
  {
    id: "toll-free-services",
    slug: "toll-free-services",
    title: "Toll-Free & Business Hotline Services",
    shortTitle: "Toll-Free (1800)",
    tagline: "Build enterprise credibility with 1800 numbers and smart IVR routing.",
    icon: "Headphones",
    accentColor: "#0B6B35",
    description: "Give your business an authoritative enterprise look. Customers can call your 1800 toll-free number for free, routed seamlessly to your office staff or mobile numbers with professional IVR voice greetings.",
    features: [
      "1800 Toll-Free number consultation and setup assistance",
      "Smart multi-level IVR greeting ('Press 1 for Sales, 2 for Support')",
      "Simultaneous call forwarding to multiple staff mobile phones",
      "Call recording and quality monitoring features",
      "After-hours voicemail and miss-call alert alerts",
      "Detailed caller analytics, location, and call duration logs"
    ],
    deliverables: [
      "Configured virtual business reception number",
      "Custom branded welcome message audio",
      "Web portal access to view incoming call records",
      "Call routing rules for daytime and holidays"
    ],
    workflow: [
      { step: "01", title: "Number Selection", desc: "Choose a memorable 1800 vanity or standard number." },
      { step: "02", title: "IVR Script & Recording", desc: "Record your company welcome message and department routing options." },
      { step: "03", title: "Forwarding Setup", desc: "Map team phone numbers with hunting/round-robin logic." },
      { step: "04", title: "Testing & Go-Live", desc: "Perform end-to-end call tests and publish your toll-free number on ads." }
    ],
    faqs: [
      {
        q: "Do I need special hardware or landline phones?",
        a: "No! All incoming toll-free calls are automatically routed to your existing mobile phones or office staff smartphones."
      },
      {
        q: "Why is a Toll-Free number beneficial for my business?",
        a: "It signals trust, permanence, and professional scale. Customers are significantly more willing to call when the call is completely free for them."
      }
    ],
    related: ["voice-call", "bulk-sms", "whatsapp-marketing"]
  },
  {
    id: "photography-printing",
    slug: "photography-printing",
    title: "Photography & Print Services",
    shortTitle: "Photo & Print",
    tagline: "Tangible marketing materials and crisp photography that showcase quality.",
    icon: "Camera",
    accentColor: "#16A34A",
    description: "Bridging the gap between digital marketing and real-world physical branding. We provide commercial business photography, product shoots, and high-quality printed promotional materials including banners, brochures, and visiting cards.",
    features: [
      "Commercial & promotional business photography",
      "On-site showroom, retail shop & industrial photography",
      "Advertising & e-commerce product shoots",
      "Outdoor marketing banners, flex & vinyl prints",
      "High-grade business visiting cards & letterheads",
      "Promotional pamphlets, handbills, and product catalogues"
    ],
    deliverables: [
      "Color-corrected high-resolution digital image archives",
      "Print-ready CMYK files with bleed guidelines",
      "Physical printed marketing collaterals delivered to your doorstep",
      "Various paper finishes (Matte, Gloss, Velvet, Textured)"
    ],
    workflow: [
      { step: "01", title: "Shoot / Print Scope", desc: "Identify whether photography, printing, or combined creative production is required." },
      { step: "02", title: "Creative Execution", desc: "Conduct on-location photoshoot or finalize print layout with exact dimensions." },
      { step: "03", title: "Proofing & Color Check", desc: "Digital proofing to ensure accurate brand colors and crisp sharpness." },
      { step: "04", title: "Print Production & Handover", desc: "Dispatch finished prints and deliver digital assets via cloud download." }
    ],
    faqs: [
      {
        q: "Can you photograph products at our factory or store in Firozabad?",
        a: "Yes, our team can visit your showroom, manufacturing facility, or office with portable studio lighting equipment."
      },
      {
        q: "Do you print small batches or only bulk quantities?",
        a: "We accommodate both small initial test batches and large bulk print runs for pamphlets, banners, and brochures."
      }
    ],
    related: ["graphic-design", "social-media-marketing", "video-editing"]
  }
];

export const getServiceBySlug = (slug) => {
  return SERVICES.find(s => s.slug === slug || s.id === slug);
};
