/* ============================================================
   TECH INTEL — Production script (v5)
   i18n · Demo · Customizer with dual laptop+phone preview · Form
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919935932705';

  /* ============================================================
     i18n — TRANSLATION DICTIONARY
     ============================================================ */
   var I18N = {
    en: {
      "skip": "Skip to main content",
      "announce.text": "🚀 Launch offer: Our first 10 client websites at <strong>₹499</strong> (regular ₹1,499) — in exchange for a testimonial &amp; portfolio permission.",
      "announce.cta": "Book a slot →",
      "nav.services": "Services",
      "nav.examples": "Examples",
      "nav.process": "Process",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.cta": "Get My Website →",
      "hero.eyebrow": "Web design studio · Serving businesses across India",
      "hero.h1": "Professional websites for small businesses. <span class=\"accent-text\">Live in 3 days, from ₹499.</span>",
      "hero.sub": "We're a new studio building our portfolio. Our first 10 founding clients get professional, mobile-friendly websites at launch pricing — and all other plans are priced 10–20% below typical Indian agency rates. No agency pricing, no technical headaches. You share the content, we deliver.",
      "offer.badge": "🚀 FOUNDING CLIENT",
      "offer.save": "First 10 only",
      "hero.cta1": "Chat on WhatsApp — Free",
      "hero.cta2": "See Live Demo →",
      "hero.point1": "No advance payment",
      "hero.point2": "3-day target delivery",
      "hero.point3": "100% mobile-friendly",
      "hero.point4": "Domain + hosting help",
      "hero.stat1": "Founding client slots",
      "hero.stat2": "Target delivery",
      "hero.stat3": "Mobile-first builds",
      "trust.1": "No advance payment",
      "trust.2": "WhatsApp reply in 2 min",
      "trust.3": "Google-friendly code",
      "trust.4": "Made in India 🇮🇳",
      "services.eyebrow": "What we build",
      "services.h2": "Website development for every type of Indian business.",
      "services.sub": "From a single-page site for your shop to a full multi-page business website — we build it all.",
      "svc.1.title": "Retail & Shop Websites",
      "svc.1.desc": "Kirana, boutique, electronics, garment shops — product list, timings, address, and direct WhatsApp enquiry.",
      "svc.2.title": "Restaurant & Café Websites",
      "svc.2.desc": "Menu, photos, location map, Zomato/Swiggy links, and a table booking WhatsApp button.",
      "svc.3.title": "Service Business Websites",
      "svc.3.desc": "Consultants, lawyers, CAs, real estate agents, contractors — service list, testimonials, contact form.",
      "svc.4.title": "Clinic & Healthcare Websites",
      "svc.4.desc": "Doctors, timings, services, and appointment booking — with a professional healthcare look.",
      "svc.5.title": "Salon & Spa Websites",
      "svc.5.desc": "Services, price list, gallery, and online appointment booking.",
      "svc.6.title": "Gym & Fitness Websites",
      "svc.6.desc": "Membership plans, trainer profiles, class schedule, and trial booking form.",
      "svc.7.title": "Custom Software & Apps",
      "svc.7.desc": "Dashboards, booking systems, inventory & billing tools, WhatsApp automation — built to fit your business. Starting ₹9,999.",
      "why.eyebrow": "Why Tech Intel",
      "why.h2": "Why your business needs a good website — and why us.",
      "why.bad.title": "😩 Your current situation",
      "why.bad.1": "Agency quoted ₹25,000+ and asked for 3 weeks",
      "why.bad.2": "Wix/WordPress feels impossible to figure out",
      "why.bad.3": "Freelancer hasn't replied in 4 days",
      "why.bad.4": "Customers on Instagram keep asking \"Do you have a website?\"",
      "why.bad.5": "Your business doesn't show up on Google",
      "why.good.title": "✅ With Tech Intel",
      "why.good.1": "Flat founding-client pricing at ₹499 — no hidden fees",
      "why.good.2": "We handle everything — from design to deployment",
      "why.good.3": "WhatsApp replies within 2 minutes, direct conversation",
      "why.good.4": "Target live website in 3 days, perfect on mobile",
      "why.good.5": "Google-friendly code — ready to be found in search",
      "examples.eyebrow": "Try it live",
      "examples.h2": "See what your website could look like.",
      "examples.sub": "Fill in your business details and see a live design preview — instantly, on laptop and mobile.",
      "tab.cafe": "☕ Café / Restaurant",
      "tab.salon": "✂️ Salon / Beauty",
      "tab.clinic": "🏥 Clinic / Healthcare",
      "tab.custom": "✨ Try Your Own",
      "examples.cta1": "I Want This Style →",
      "examples.cta2": "Customize It Yourself",
      "process.eyebrow": "Process",
      "process.h2": "4 simple steps. Live in 3 days.",
      "process.sub": "You just share your content. We handle everything else.",
      "process.s1.time": "Day 1 · 10 min",
      "process.s1.title": "Chat on WhatsApp",
      "process.s1.desc": "Tell us about your business and requirements. Free consultation — no advance payment.",
      "process.s2.time": "Day 1 · 15 min",
      "process.s2.title": "Send your content",
      "process.s2.desc": "Logo, photos, business details. If you don't have content, we'll add basic copy and stock images — free.",
      "process.s3.time": "Day 2 · Review",
      "process.s3.title": "Design preview",
      "process.s3.desc": "You'll get a live preview link. Review it and share your changes — we'll adjust before anything goes live.",
      "process.s4.time": "Day 3 · Live ✅",
      "process.s4.title": "Approve, pay, go live",
      "process.s4.desc": "You see the finished site on a preview link first. Approve it, pay via UPI or bank transfer, and we deploy to your domain. No advance, no risk. 7 days of free bug-fix support included.",
      "pricing.eyebrow": "Transparent pricing",
      "pricing.h2": "Simple plans. 10–20% below industry rates.",
      "pricing.sub": "Agencies charge ₹25,000–₹60,000 for the same work. We price 10–20% lower — same quality, no advance, and an optional ₹1,500/year care plan.",
      "pricing.popular": "🚀 Founding Client Price",
      "pricing.old": "Regular ₹1,499",
      "pricing.off": "Launch Price",
      "pricing.offer-note": "For our first 10 clients — in exchange for a testimonial & permission to show your site in our portfolio.",
      "pf.starter.1": "1-page responsive website",
      "pf.starter.2": "WhatsApp contact button",
      "pf.starter.3": "Basic on-page SEO",
      "pf.starter.4": "Social media links",
      "pf.starter.5": "1 revision round",
      "pf.starter.6": "Deployment assistance",
      "pf.starter.7": "3-day target delivery",
      "pricing.cta.starter": "Get Starter — ₹499 →",
      "pf.growth.1": "3–5 page website",
      "pf.growth.2": "Everything in Starter +",
      "pf.growth.3": "Gallery / portfolio section",
      "pf.growth.4": "Google Business Profile setup",
      "pf.growth.5": "WhatsApp Business integration",
      "pf.growth.6": "2 revision rounds",
      "pf.growth.7": "7-day free support",
      "pf.growth.8": "3-day target delivery",
      "pricing.cta.growth": "Get Growth",
      "pf.pro.1": "5–8 page website",
      "pf.pro.2": "Everything in Growth +",
      "pf.pro.3": "Advanced SEO + Analytics",
      "pf.pro.4": "Blog / CMS setup",
      "pf.pro.5": "Payment gateway integration",
      "pf.pro.6": "3 revision rounds",
      "pf.pro.7": "30-day free support",
      "pf.pro.8": "5–7 day target delivery",
      "pricing.cta.pro": "Get Pro",
      "pricing.care.tag": "🛡️ Best Value",
      "pf.soft.1": "We also build custom software & apps",
      "pf.soft.2": "Business dashboards, booking systems",
      "pf.soft.3": "Inventory & billing tools",
      "pf.soft.4": "WhatsApp automation & chatbots",
      "pf.soft.5": "API integrations & admin panels",
      "pf.soft.6": "Quoted after a free scoping call",
      "pf.soft.7": "Milestone-based payment",
      "pricing.cta.software": "Request a Quote",
      "pf.care.1": "Hosting & domain renewal management",
      "pf.care.2": "Monthly website backup",
      "pf.care.3": "Security & plugin updates",
      "pf.care.4": "2 small content edits per month",
      "pf.care.5": "Uptime monitoring & fixes",
      "pf.care.6": "Priority WhatsApp support",
      "pf.care.7": "Cancel anytime — no lock-in",
      "pricing.cta.care": "Add Care Plan — ₹1,500/yr →",
      "pricing.note.title": "What's not included",
      "pricing.note.desc": "Domain (typically ₹700–₹1,500/yr for .in/.com, premium domains extra) and hosting are separate third-party costs — paid directly by you to the registrar/host. The ₹1,500/year Care Plan covers our management, backups, security, and support on top of those costs. We help you set everything up at no extra charge.",
      "compare.eyebrow": "Comparison",
      "compare.h2": "Tech Intel vs Agency vs DIY.",
      "compare.sub": "A side-by-side comparison to help you make the right decision.",
      "cmp.feature": "Feature",
      "cmp.agency": "Agency",
      "cmp.diy": "DIY (Wix)",
      "cmp.price": "Starting price",
      "cmp.diy.free": "Free + your time",
      "cmp.delivery": "Delivery time",
      "cmp.agency.time": "2–4 weeks",
      "cmp.diy.time": "2–8 weeks",
      "cmp.advance": "Advance payment",
      "cmp.no": "No",
      "cmp.yes50": "50% upfront",
      "cmp.mobile": "Mobile-friendly",
      "cmp.manual": "Manually",
      "cmp.wa": "WhatsApp integration",
      "cmp.extra": "Extra cost",
      "cmp.plugin": "Plugin needed",
      "cmp.seo": "Basic SEO",
      "cmp.support": "Support",
      "cmp.email": "Email tickets",
      "cmp.forum": "Forum",
      "reviews.eyebrow": "Our Promise",
      "reviews.h2": "We're a new studio — here's what we commit to.",
      "rev.1": "\"See the finished website on a preview link before paying anything. If you don't like it, you pay nothing — we part as friends. That's our founding-client promise.\"",
      "rev.1.by": "No advance, no risk · Payment only after approval",
      "rev.2": "\"Direct WhatsApp with the person building your website — no ticket systems, no account managers, no waiting for replies.\"",
      "rev.2.by": "Direct communication · Reply within 2 hours on WhatsApp",
      "rev.3": "\"Once the project is complete and paid for, all deliverables are yours. Source files, domain, hosting — everything. No lock-in, no recurring fees to us.\"",
      "rev.3.by": "You own everything · Full ownership on completion",
      "about.eyebrow": "About Tech Intel",
      "about.h2": "A new studio with a big commitment.",
      "about.p1": "Tech Intel is a new web development studio founded in 2025, based in India. We help Indian small businesses and local services get online — without agency pricing. We build clean, fast, mobile-friendly websites that do the basics right: present your business clearly, make it easy for customers to reach you, and work properly on the device your customers actually use — mobile.",
      "about.p2": "We're transparent about being a startup: we're building our portfolio, so our first 10 founding clients get launch pricing in exchange for honest feedback and permission to showcase their websites. Beyond websites, we also build custom software and apps — dashboards, booking systems, and automation tools. And for ongoing care, our optional ₹1,500/year Care Plan covers backups, security, edits, and support at ~40–50% below industry rates. We don't promise guaranteed sales or top rankings — no honest developer does. What we do promise is professional, well-built work delivered efficiently.",
      "about.area": "Service area",
      "about.area.val": "India — remote delivery",
      "about.turnaround": "Turnaround",
      "about.turnaround.val": "3–5 working days (target)",
      "about.email": "Email",
      "about.response": "Response time",
      "about.response.val": "Within 2 hours (WhatsApp)",
      "about.c1.title": "Direct communication",
      "about.c1.desc": "Chat directly on WhatsApp with the person building your website. No ticket systems.",
      "about.c2.title": "You own your website",
      "about.c2.desc": "Once the project is complete and paid for, all deliverables are yours. No lock-in.",
      "about.c3.title": "Fast target delivery",
      "about.c3.desc": "Target live website in 3 days. If your content is ready, we can start the same day.",
      "about.c4.title": "Honest pricing",
      "about.c4.desc": "The price we quote is the final price. No surprise invoices, no hidden add-ons.",
      "enq.eyebrow": "Start your website",
      "enq.h2": "Ready to get your business online?",
      "enq.sub": "Send your details and we'll continue on WhatsApp. Takes less than a minute.",
      "enq.p1": "Share your business name and requirements",
      "enq.p2": "We'll confirm scope, price, and timeline",
      "enq.p3": "No advance — review the website first, then pay",
      "enq.direct": "Or chat with us directly on WhatsApp:",
      "form.name": "Your name",
      "form.business": "Business name",
      "form.phone": "WhatsApp number",
      "form.type": "What do you need?",
      "form.type.choose": "Choose an option",
      "form.type.opt1": "₹499 Starter (one-page) — Founding Client",
      "form.type.opt2": "₹24,999 Growth (3–5 pages)",
      "form.type.opt3": "₹49,999 Pro (5–8 pages, custom)",
      "form.type.opt4": "₹9,999+ Custom Software / App",
      "form.type.opt5": "₹1,500/year Yearly Care Plan",
      "form.type.opt6": "Not sure — need advice",
      "form.notes": "Anything else? (optional)",
      "form.submit": "Continue on WhatsApp →",
      "form.help": "This opens WhatsApp with your details pre-filled. No data is stored on this website.",
      "form.err.name": "Please enter your name.",
      "form.err.business": "Please enter your business name.",
      "form.err.phone": "Please enter a valid phone number.",
      "faq.eyebrow": "FAQ",
      "faq.h2": "Your questions, answered.",
      "faq.q1": "What exactly do I get for ₹499?",
      "faq.a1": "A professionally designed one-page website — with your business name, description, contact details, WhatsApp button, basic on-page SEO, social media links, and 1 revision round. Deployment assistance is included. Domain and hosting are arranged separately.",
      "faq.q2": "Why is the price ₹499?",
      "faq.a2": "We're a new studio building our portfolio. Our first 10 founding clients get launch pricing at ₹499 (regular price ₹1,499) in exchange for honest feedback and permission to show their website in our portfolio. All other plans are priced 10–20% below typical Indian agency rates.",
      "faq.q3": "Are domain and hosting included?",
      "faq.a3": "No. Domain registration is a third-party cost — typically ₹700–₹1,500/year for .in/.com (premium domains may cost more). Hosting is also separate. We recommend the right options and help with deployment — at no extra charge.",
      "faq.q4": "Do I need to pay an advance?",
      "faq.a4": "No. You see the finished website on a preview link first, and pay only when you're satisfied. If you don't like it, you pay nothing — we part as friends. This keeps your risk at zero.",
      "faq.q5": "What if I don't like the design?",
      "faq.a5": "Starter includes 1 revision round, Growth includes 2, and Pro includes 3. If you're still not satisfied, there's no payment — we simply hand over the source files to you.",
      "faq.q6": "Will the website work on mobile?",
      "faq.a6": "Absolutely. Every website is mobile-first. 79% of Indian customers come via mobile, so we prioritise perfect mobile display — tested on phone, tablet, and desktop.",
      "faq.q7": "How does WhatsApp integration work?",
      "faq.a7": "Your website has a WhatsApp button. When a customer clicks it, a chat opens directly on your business number — with a pre-filled message. It's the most effective conversion tool in India.",
      "faq.q8": "How long does delivery take?",
      "faq.a8": "Starter and Growth: 3 working days after we receive your content (target). Pro: 5–7 working days. Complex custom requests may take longer.",
      "faq.q9": "Will my website rank on Google?",
      "faq.a9": "We set up basic on-page SEO (title, meta description, headings, schema) — which helps Google understand your website. But honestly: top ranking requires regular content, backlinks, and time. We don't promise guaranteed #1 rankings — no honest developer does.",
      "faq.q10": "Which cities do you serve?",
      "faq.a10": "All of India — remotely. Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow — any city. Everything is handled over WhatsApp and email.",
      "faq.q11": "How do I make the payment?",
      "faq.a11": "UPI (GPay, PhonePe, Paytm) or bank transfer. Payment is made only after you approve the website — no advance. We provide an invoice.",
      "faq.q12": "Do you build custom software or apps?",
      "faq.a12": "Yes. Beyond websites, we build custom software and apps — business dashboards, booking systems, inventory & billing tools, WhatsApp automation, chatbots, API integrations, and admin panels. Pricing is quoted after a free scoping call, with milestone-based payment. Starting from ₹9,999.",
      "faq.q13": "What is the ₹1,500/year Care Plan?",
      "faq.a13": "An optional yearly plan that covers hosting & domain renewal management, monthly backups, security updates, uptime monitoring, 2 small content edits per month, and priority WhatsApp support. It's priced ~40–50% below industry rates. Cancel anytime — no lock-in. Domain and hosting third-party fees are paid directly by you.",
      "final.h2": "It's time to take your business online.",
      "final.sub": "Message us on WhatsApp — 2-minute reply, free consultation, no commitment.",
      "final.cta": "Message on WhatsApp →",
      "final.cta2": "View Pricing",
      "footer.tagline": "New web development studio building affordable, professional websites for small businesses across India. From ₹499 for our first 10 founding clients.",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.rights": "All rights reserved.",
      "footer.demo": "Sample designs shown are for demonstration purposes. Client work will be added as our founding projects launch.",
      "cz.eyebrow": "Try your own",
      "cz.h2": "Create a quick design preview of your website.",
      "cz.sub": "Fill in as much as you like. The preview updates instantly. This is a design preview — your final website will be custom-built.",
      "cz.business": "Business name",
      "cz.type": "Business type",
      "cz.type.choose": "Choose a type",
      "cz.tagline": "Tagline",
      "cz.desc": "Short description",
      "cz.location": "Location",
      "cz.preview": "Live preview",
      "cz.continue": "Use These Details → Continue",
      "cz.contact": "Contact"
    },
    hi: {
      "skip": "मुख्य सामग्री पर जाएं",
      "announce.text": "🚀 लॉन्च ऑफर: हमारे पहले 10 क्लाइंट्स के लिए वेबसाइट सिर्फ <strong>₹499</strong> में (रेगुलर ₹1,499) — बदले में एक टेस्टिमोनियल और पोर्टफोलियो परमिशन।",
      "announce.cta": "स्लॉट बुक करें →",
      "nav.services": "सेवाएं",
      "nav.examples": "उदाहरण",
      "nav.process": "प्रक्रिया",
      "nav.pricing": "कीमतें",
      "nav.faq": "सवाल-जवाब",
      "nav.cta": "मेरी वेबसाइट लो →",
      "hero.eyebrow": "वेब डिज़ाइन स्टूडियो · पूरे भारत में सेवा",
      "hero.h1": "छोटे बिज़नेस के लिए प्रोफेशनल वेबसाइट। <span class=\"accent-text\">3 दिन में लाइव, सिर्फ ₹499 से।</span>",
      "hero.sub": "हम एक नया स्टूडियो हैं और अपना पोर्टफोलियो बना रहे हैं। हमारे पहले 10 फाउंडिंग क्लाइंट्स को लॉन्च प्राइसिंग पर प्रोफेशनल, मोबाइल-फ्रेंडली वेबसाइट मिलती है — और बाकी सभी प्लान्स टिपिकल भारतीय एजेंसी रेट्स से 10–20% कम हैं।",
      "offer.badge": "🚀 फाउंडिंग क्लाइंट",
      "offer.save": "सिर्फ पहले 10",
      "hero.cta1": "WhatsApp पर बात करो — फ्री",
      "hero.cta2": "लाइव डेमो देखो →",
      "hero.point1": "कोई एडवांस नहीं",
      "hero.point2": "3 दिन में टारगेट डिलीवरी",
      "hero.point3": "100% मोबाइल-फ्रेंडली",
      "hero.point4": "डोमेन + होस्टिंग में मदद",
      "hero.stat1": "फाउंडिंग क्लाइंट स्लॉट्स",
      "hero.stat2": "टारगेट डिलीवरी",
      "hero.stat3": "मोबाइल-फर्स्ट बिल्ड्स",
      "trust.1": "कोई एडवांस नहीं",
      "trust.2": "WhatsApp पर 2 मिनट में जवाब",
      "trust.3": "Google-फ्रेंडली कोड",
      "trust.4": "भारत में बना 🇮🇳",
      "services.eyebrow": "हम क्या बनाते हैं",
      "services.h2": "हर तरह के भारतीय बिज़नेस के लिए वेबसाइट डेवलपमेंट।",
      "services.sub": "आपकी दुकान की एक-पेज साइट से लेकर फुल मल्टी-पेज बिज़नेस वेबसाइट तक — हम सब बना सकते हैं।",
      "svc.1.title": "रिटेल और दुकान की वेबसाइट",
      "svc.1.desc": "किराना, बुटीक, इलेक्ट्रॉनिक्स, कपड़े की दुकान — प्रोडक्ट लिस्ट, टाइमिंग, पता, और direct WhatsApp पूछताछ।",
      "svc.2.title": "रेस्टोरेंट और कैफ़े वेबसाइट",
      "svc.2.desc": "मेन्यू, फोटो, लोकेशन मैप, Zomato/Swiggy लिंक, और टेबल बुकिंग WhatsApp बटन।",
      "svc.3.title": "सर्विस बिज़नेस वेबसाइट",
      "svc.3.desc": "कंसल्टेंट, वकील, CA, रियल एस्टेट, कॉन्ट्रैक्टर — सर्विस लिस्ट, रिव्यू, कॉन्टैक्ट फॉर्म।",
      "svc.4.title": "क्लिनिक और हेल्थकेयर वेबसाइट",
      "svc.4.desc": "डॉक्टर, टाइमिंग, सेवाएं, और अपॉइंटमेंट बुकिंग — प्रोफेशनल हेल्थकेयर लुक।",
      "svc.5.title": "सैलून और स्पा वेबसाइट",
      "svc.5.desc": "सर्विसेज़, प्राइस लिस्ट, गैलरी, और ऑनलाइन अपॉइंटमेंट बुकिंग।",
      "svc.6.title": "जिम और फिटनेस वेबसाइट",
      "svc.6.desc": "मेंबरशिप प्लान, ट्रेनर प्रोफाइल, क्लास शेड्यूल, और ट्रायल बुकिंग फॉर्म।",
      "svc.7.title": "कस्टम सॉफ्टवेयर और ऐप्स",
      "svc.7.desc": "डैशबोर्ड, बुकिंग सिस्टम, इन्वेंटरी और बिलिंग टूल्स, WhatsApp ऑटोमेशन — आपके बिज़नेस के हिसाब से। ₹9,999 से शुरू।",
      "why.eyebrow": "क्यों Tech Intel",
      "why.h2": "क्यों आपको एक अच्छी वेबसाइट चाहिए — और क्यों हम।",
      "why.bad.title": "😩 आपकी मौजूदा स्थिति",
      "why.bad.1": "एजेंसी ने ₹25,000+ कोट किया और 3 हफ्ते का टाइम मांगा",
      "why.bad.2": "Wix/WordPress खुद समझ नहीं आ रहा",
      "why.bad.3": "फ्रीलांसर 4 दिन से रिप्लाई नहीं कर रहा",
      "why.bad.4": "Instagram पर कस्टमर पूछते हैं \"वेबसाइट है?\"",
      "why.bad.5": "Google पर आपका बिज़नेस ही नहीं मिलता",
      "why.good.title": "✅ Tech Intel के साथ",
      "why.good.1": "फ्लैट फाउंडिंग-क्लाइंट प्राइसिंग ₹499 से — कोई हिडन फीस नहीं",
      "why.good.2": "हम सब कुछ हैंडल करते हैं — डिज़ाइन से डिप्लॉयमेंट तक",
      "why.good.3": "WhatsApp पर 2 मिनट में जवाब, डायरेक्ट बात",
      "why.good.4": "3 दिन में टारगेट लाइव वेबसाइट, मोबाइल पर परफेक्ट",
      "why.good.5": "Google-फ्रेंडली कोड — सर्च में दिखने के लिए तैयार",
      "examples.eyebrow": "लाइव ट्राई करो",
      "examples.h2": "देखो, ऐसी वेबसाइट आपको मिल सकती है।",
      "examples.sub": "अपनी बिज़नेस डिटेल्स भरो और लाइव डिज़ाइन प्रीव्यू देखो — लैपटॉप और मोबाइल पर, इंस्टेंट।",
      "tab.cafe": "☕ कैफ़े / रेस्टोरेंट",
      "tab.salon": "✂️ सैलून / ब्यूटी",
      "tab.clinic": "🏥 क्लिनिक / हेल्थकेयर",
      "tab.custom": "✨ खुद ट्राई करो",
      "examples.cta1": "ये स्टाइल मुझे चाहिए →",
      "examples.cta2": "खुद ट्राई करो — कस्टमाइज़",
      "process.eyebrow": "प्रक्रिया",
      "process.h2": "4 आसान स्टेप्स। 3 दिन में लाइव।",
      "process.sub": "आपको सिर्फ अपना कंटेंट देना है। बाकी सब हम हैंडल करते हैं।",
      "process.s1.time": "दिन 1 · 10 मिनट",
      "process.s1.title": "WhatsApp पर बात",
      "process.s1.desc": "आप अपना बिज़नेस और रिक्वायरमेंट बताएं। फ्री कंसल्टेशन — कोई एडवांस नहीं।",
      "process.s2.time": "दिन 1 · 15 मिनट",
      "process.s2.title": "कंटेंट भेजें",
      "process.s2.desc": "लोगो, फोटो, बिज़नेस डिटेल्स। कंटेंट नहीं है तो हम बेसिक कॉपी और स्टॉक इमेज लगा देंगे — फ्री।",
      "process.s3.time": "दिन 2 · रिव्यू",
      "process.s3.title": "डिज़ाइन प्रीव्यू",
      "process.s3.desc": "आपको लाइव प्रीव्यू लिंक मिलेगा। देखकर चेंजेज़ बताएं — कुछ भी लाइव होने से पहले हम एडजस्ट कर देंगे।",
      "process.s4.time": "दिन 3 · लाइव ✅",
      "process.s4.title": "अप्रूव करो, पे करो, लाइव हो जाओ",
      "process.s4.desc": "आप पहले प्रीव्यू लिंक पर फाइनल साइट देखते हैं। अप्रूव करें, UPI या बैंक ट्रांसफर से पे करें, और हम आपके डोमेन पर डिप्लॉय कर देते हैं। कोई एडवांस नहीं, कोई रिस्क नहीं। 7 दिन फ्री बग-फिक्स सपोर्ट।",
      "pricing.eyebrow": "पारदर्शी कीमतें",
      "pricing.h2": "आसान प्लान्स। इंडस्ट्री रेट्स से 10–20% कम।",
      "pricing.sub": "एजेंसी same काम के ₹25,000–₹60,000 लेती है। हम 10–20% कम लेते हैं — same क्वालिटी, कोई एडवांस नहीं, और ऑप्शनल ₹1,500/साल केयर प्लान।",
      "pricing.popular": "🚀 फाउंडिंग क्लाइंट प्राइस",
      "pricing.old": "रेगुलर ₹1,499",
      "pricing.off": "लॉन्च प्राइस",
      "pricing.offer-note": "हमारे पहले 10 क्लाइंट्स के लिए — बदले में टेस्टिमोनियल और पोर्टफोलियो में आपकी साइट दिखाने की परमिशन।",
      "pf.starter.1": "1-पेज रिस्पॉन्सिव वेबसाइट",
      "pf.starter.2": "WhatsApp कॉन्टैक्ट बटन",
      "pf.starter.3": "बेसिक ऑन-पेज SEO",
      "pf.starter.4": "सोशल मीडिया लिंक",
      "pf.starter.5": "1 रिवीज़न राउंड",
      "pf.starter.6": "डिप्लॉयमेंट सहायता",
      "pf.starter.7": "3 दिन टारगेट डिलीवरी",
      "pricing.cta.starter": "Starter लो — ₹499 →",
      "pf.growth.1": "3–5 पेज वेबसाइट",
      "pf.growth.2": "Starter का सब कुछ +",
      "pf.growth.3": "गैलरी / पोर्टफोलियो सेक्शन",
      "pf.growth.4": "Google Business Profile सेटअप",
      "pf.growth.5": "WhatsApp Business इंटीग्रेशन",
      "pf.growth.6": "2 रिवीज़न राउंड्स",
      "pf.growth.7": "7 दिन फ्री सपोर्ट",
      "pf.growth.8": "3 दिन टारगेट डिलीवरी",
      "pricing.cta.growth": "Growth लो",
      "pf.pro.1": "5–8 पेज वेबसाइट",
      "pf.pro.2": "Growth का सब कुछ +",
      "pf.pro.3": "एडवांस SEO + एनालिटिक्स",
      "pf.pro.4": "ब्लॉग / CMS सेटअप",
      "pf.pro.5": "पेमेंट गेटवे इंटीग्रेशन",
      "pf.pro.6": "3 रिवीज़न राउंड्स",
      "pf.pro.7": "30 दिन फ्री सपोर्ट",
      "pf.pro.8": "5–7 दिन टारगेट डिलीवरी",
      "pricing.cta.pro": "Pro लो",
      "pricing.care.tag": "🛡️ बेस्ट वैल्यू",
      "pf.soft.1": "हम कस्टम सॉफ्टवेयर और ऐप्स भी बनाते हैं",
      "pf.soft.2": "बिज़नेस डैशबोर्ड, बुकिंग सिस्टम",
      "pf.soft.3": "इन्वेंटरी और बिलिंग टूल्स",
      "pf.soft.4": "WhatsApp ऑटोमेशन और चैटबॉट",
      "pf.soft.5": "API इंटीग्रेशन और एडमिन पैनल",
      "pf.soft.6": "फ्री स्कोपिंग कॉल के बाद कोट",
      "pf.soft.7": "माइलस्टोन-बेस्ड पेमेंट",
      "pricing.cta.software": "कोट रिक्वेस्ट करो",
      "pf.care.1": "होस्टिंग और डोमेन रिन्यूअल मैनेजमेंट",
      "pf.care.2": "मंथली वेबसाइट बैकअप",
      "pf.care.3": "सिक्योरिटी और प्लगइन अपडेट्स",
      "pf.care.4": "महीने में 2 छोटे कंटेंट एडिट्स",
      "pf.care.5": "अपटाइम मॉनिटरिंग और फिक्सेस",
      "pf.care.6": "प्रायोरिटी WhatsApp सपोर्ट",
      "pf.care.7": "कभी भी कैंसल — कोई लॉक-इन नहीं",
      "pricing.cta.care": "केयर प्लान जोड़ो — ₹1,500/साल →",
      "pricing.note.title": "क्या इन्क्लूडेड नहीं है",
      "pricing.note.desc": "डोमेन (आमतौर पर .in/.com के लिए ₹700–₹1,500/साल, प्रीमियम डोमेन अलग) और होस्टिंग अलग थर्ड-पार्टी कॉस्ट हैं — आप सीधे रजिस्ट्रार/होस्ट को पे करते हैं। ₹1,500/साल केयर प्लान हमारा मैनेजमेंट, बैकअप, सिक्योरिटी, और सपोर्ट कवर करता है। सेटअप में हम फ्री मदद करते हैं।",
      "compare.eyebrow": "तुलना",
      "compare.h2": "Tech Intel vs एजेंसी vs DIY।",
      "compare.sub": "सही डिसीज़न लेने के लिए — साइड-बाय-साइड तुलना।",
      "cmp.feature": "फीचर",
      "cmp.agency": "एजेंसी",
      "cmp.diy": "DIY (Wix)",
      "cmp.price": "शुरुआती कीमत",
      "cmp.diy.free": "फ्री + आपका समय",
      "cmp.delivery": "डिलीवरी टाइम",
      "cmp.agency.time": "2–4 हफ्ते",
      "cmp.diy.time": "2–8 हफ्ते",
      "cmp.advance": "एडवांस पेमेंट",
      "cmp.no": "नहीं",
      "cmp.yes50": "50% एडवांस",
      "cmp.mobile": "मोबाइल-फ्रेंडली",
      "cmp.manual": "मैन्युअली",
      "cmp.wa": "WhatsApp इंटीग्रेशन",
      "cmp.extra": "एक्स्ट्रा चार्ज",
      "cmp.plugin": "प्लगइन चाहिए",
      "cmp.seo": "बेसिक SEO",
      "cmp.support": "सपोर्ट",
      "cmp.email": "ईमेल टिकट",
      "cmp.forum": "फोरम",
      "reviews.eyebrow": "हमारा वादा",
      "reviews.h2": "हम नया स्टूडियो हैं — यह हमारी कमिटमेंट है।",
      "rev.1": "\"पेमेंट से पहले फाइनल वेबसाइट प्रीव्यू लिंक पर देखो। पसंद न आए तो कुछ नहीं देना — हम दोस्तों की तरह अलग हो जाएंगे। यही हमारा फाउंडिंग-क्लाइंट वादा है।\"",
      "rev.1.by": "कोई एडवांस नहीं, कोई रिस्क नहीं · अप्रूवल के बाद ही पेमेंट",
      "rev.2": "\"सीधे उस व्यक्ति से WhatsApp पर बात जो आपकी वेबसाइट बना रहा है — कोई टिकट सिस्टम नहीं, कोई अकाउंट मैनेजर नहीं।\"",
      "rev.2.by": "डायरेक्ट कम्युनिकेशन · WhatsApp पर 2 घंटे में जवाब",
      "rev.3": "\"प्रोजेक्ट पूरा और पेड होने के बाद, सारे डिलीवरेबल्स आपके — सोर्स फाइल्स, डोमेन, होस्टिंग, सब कुछ। कोई लॉक-इन नहीं।\"",
      "rev.3.by": "सब कुछ आपका · पूरा ओनरशिप कम्प्लीशन पर",
      "about.eyebrow": "Tech Intel के बारे में",
      "about.h2": "एक नया स्टूडियो, बड़ी कमिटमेंट।",
      "about.p1": "Tech Intel एक नया वेब डेवलपमेंट स्टूडियो है, 2025 में भारत में स्थापित। हम भारतीय छोटे बिज़नेस और लोकल सर्विसेज़ को ऑनलाइन लाते हैं — बिना एजेंसी प्राइसिंग के। हम क्लीन, फास्ट, मोबाइल-फ्रेंडली वेबसाइट बनाते हैं जो बेसिक चीज़ें सही करती हैं: आपका बिज़नेस साफ़ दिखाना, कस्टमर के लिए कॉन्टैक्ट आसान बनाना, और उस डिवाइस पर सही काम करना जो आपके कस्टमर असल में इस्तेमाल करते हैं — मोबाइल।",
      "about.p2": "हम ट्रांसपेरेंट हैं कि हम स्टार्टअप हैं: हम अपना पोर्टफोलियो बना रहे हैं, इसलिए पहले 10 फाउंडिंग क्लाइंट्स को लॉन्च प्राइसिंग मिलती है — बदले में ईमानदार फीडबैक और उनकी वेबसाइट दिखाने की परमिशन। वेबसाइट के अलावा, हम कस्टम सॉफ्टवेयर और ऐप्स भी बनाते हैं — डैशबोर्ड, बुकिंग सिस्टम, ऑटोमेशन टूल्स। और ऑनगोइंग केयर के लिए, हमारा ₹1,500/साल केयर प्लान बैकअप, सिक्योरिटी, एडिट्स, और सपोर्ट कवर करता है — इंडस्ट्री रेट्स से ~40–50% कम पर। हम गारंटीड सेल्स या टॉप रैंकिंग का वादा नहीं करते — कोई ईमानदार डेवलपर नहीं करता। हम वादा करते हैं एक प्रोफेशनल, अच्छी तरह बनी वेबसाइट, एफिशिएंटली डिलीवर।",
      "about.area": "सर्विस एरिया",
      "about.area.val": "भारत — रिमोट डिलीवरी",
      "about.turnaround": "टर्नअराउंड",
      "about.turnaround.val": "3–5 वर्किंग डेज़ (टारगेट)",
      "about.email": "ईमेल",
      "about.response": "रिस्पॉन्स टाइम",
      "about.response.val": "2 घंटे के अंदर (WhatsApp)",
      "about.c1.title": "डायरेक्ट कम्युनिकेशन",
      "about.c1.desc": "WhatsApp पर सीधे उस व्यक्ति से बात करें जो आपकी वेबसाइट बना रहा है। कोई टिकट सिस्टम नहीं।",
      "about.c2.title": "वेबसाइट आपकी है",
      "about.c2.desc": "प्रोजेक्ट पूरा और पेड होने के बाद, सारे डिलीवरेबल्स आपके। कोई लॉक-इन नहीं।",
      "about.c3.title": "फास्ट टारगेट डिलीवरी",
      "about.c3.desc": "3 दिन में टारगेट लाइव वेबसाइट। कंटेंट रेडी हो तो उसी दिन शुरू कर सकते हैं।",
      "about.c4.title": "ईमानदार प्राइसिंग",
      "about.c4.desc": "जो प्राइस बताया, वही फाइनल। कोई सरप्राइज़ इनवॉइस नहीं, कोई हिडन ऐड-ऑन नहीं।",
      "enq.eyebrow": "अपनी वेबसाइट शुरू करो",
      "enq.h2": "अपने बिज़नेस को ऑनलाइन लाने के लिए तैयार?",
      "enq.sub": "डिटेल्स भेजो, हम WhatsApp पर कंटिन्यू करेंगे। 1 मिनट से कम टाइम लगेगा।",
      "enq.p1": "बिज़नेस नेम और रिक्वायरमेंट बताएं",
      "enq.p2": "हम स्कोप, प्राइस और टाइमलाइन कन्फर्म करेंगे",
      "enq.p3": "कोई एडवांस नहीं — पहले वेबसाइट देखो, फिर पे करो",
      "enq.direct": "या डायरेक्ट WhatsApp पर बात करो:",
      "form.name": "आपका नाम",
      "form.business": "बिज़नेस का नाम",
      "form.phone": "WhatsApp नंबर",
      "form.type": "क्या चाहिए?",
      "form.type.choose": "एक ऑप्शन चुनें",
      "form.type.opt1": "₹499 Starter (वन-पेज) — फाउंडिंग क्लाइंट",
      "form.type.opt2": "₹24,999 Growth (3–5 पेज)",
      "form.type.opt3": "₹49,999 Pro (5–8 पेज, कस्टम)",
      "form.type.opt4": "₹9,999+ कस्टम सॉफ्टवेयर / ऐप",
      "form.type.opt5": "₹1,500/साल केयर प्लान",
      "form.type.opt6": "तय नहीं — सलाह चाहिए",
      "form.notes": "और कुछ? (ऑप्शनल)",
      "form.submit": "WhatsApp पर कंटिन्यू करो →",
      "form.help": "यह WhatsApp खोलेगा, आपकी डिटेल्स pre-filled के साथ। कोई डेटा स्टोर नहीं होता।",
      "form.err.name": "कृपया अपना नाम डालें।",
      "form.err.business": "कृपया बिज़नेस का नाम डालें।",
      "form.err.phone": "कृपया सही फोन नंबर डालें।",
      "faq.eyebrow": "सवाल-जवाब",
      "faq.h2": "आपके सवाल, हमारे जवाब।",
      "faq.q1": "₹499 में एक्सैक्टली क्या मिलता है?",
      "faq.a1": "एक प्रोफेशनली डिज़ाइन की गई वन-पेज वेबसाइट — बिज़नेस नेम, डिस्क्रिप्शन, कॉन्टैक्ट डिटेल्स, WhatsApp बटन, बेसिक ऑन-पेज SEO, सोशल मीडिया लिंक, और 1 रिवीज़न राउंड। डिप्लॉयमेंट सहायता इन्क्लूडेड। डोमेन और होस्टिंग अलग से।",
      "faq.q2": "₹499 की कीमत क्यों है?",
      "faq.a2": "हम नया स्टूडियो हैं और पोर्टफोलियो बना रहे हैं। पहले 10 फाउंडिंग क्लाइंट्स को ₹499 में लॉन्च प्राइसिंग (रेगुलर ₹1,499) — बदले में ईमानदार फीडबैक और वेबसाइट दिखाने की परमिशन। बाकी सभी प्लान्स टिपिकल भारतीय एजेंसी रेट्स से 10–20% कम हैं।",
      "faq.q3": "डोमेन और होस्टिंग इन्क्लूडेड है?",
      "faq.a3": "नहीं। डोमेन रजिस्ट्रेशन थर्ड-पार्टी कॉस्ट है — आमतौर पर .in/.com के लिए ₹700–₹1,500/साल (प्रीमियम डोमेन अधिक)। होस्टिंग भी अलग है। हम सही ऑप्शन रेकमेंड करते हैं और सेटअप में मदद करते हैं — कोई एक्स्ट्रा चार्ज नहीं।",
      "faq.q4": "क्या एडवांस पेमेंट चाहिए?",
      "faq.a4": "नहीं। पहले प्रीव्यू लिंक पर फाइनल वेबसाइट देखो, सैटिस्फाई हो तब पे करो। पसंद न आए तो कुछ नहीं देना — हम दोस्तों की तरह अलग हो जाएंगे।",
      "faq.q5": "अगर डिज़ाइन पसंद न आए तो?",
      "faq.a5": "Starter में 1 रिवीज़न, Growth में 2, और Pro में 3। अगर फिर भी सैटिस्फाई नहीं हो, तो कोई पेमेंट नहीं — सोर्स फाइल्स आपको दे देंगे।",
      "faq.q6": "मोबाइल पर वेबसाइट काम करेगी?",
      "faq.a6": "बिल्कुल। हर वेबसाइट मोबाइल-फर्स्ट होती है। 79% भारतीय कस्टमर मोबाइल से आते हैं, इसलिए मोबाइल पर परफेक्ट डिस्प्ले टॉप प्रायोरिटी है — फोन, टैबलेट, और डेस्कटॉप पर टेस्टेड।",
      "faq.q7": "WhatsApp इंटीग्रेशन कैसे काम करता है?",
      "faq.a7": "वेबसाइट पर एक WhatsApp बटन होता है। कस्टमर क्लिक करता है, और सीधे आपके नंबर पर चैट खुलती है — pre-filled मैसेज के साथ। भारत में सबसे इफेक्टिव कन्वर्ज़न टूल।",
      "faq.q8": "डिलीवरी कितने दिन में होगी?",
      "faq.a8": "Starter और Growth: कंटेंट मिलने के बाद 3 वर्किंग डेज़ (टारगेट)। Pro: 5–7 वर्किंग डेज़। कॉम्प्लेक्स कस्टम रिक्वेस्ट में और टाइम लग सकता है।",
      "faq.q9": "क्या वेबसाइट Google पर रैंक करेगी?",
      "faq.a9": "हम बेसिक ऑन-पेज SEO सेटअप करते हैं (टाइटल, मेटा डिस्क्रिप्शन, हेडिंग्स, स्कीमा) — जो Google को वेबसाइट समझने में मदद करता है। लेकिन ईमानदारी से: टॉप रैंकिंग के लिए रेगुलर कंटेंट, बैकलिंक्स, और टाइम चाहिए। हम गारंटीड #1 रैंकिंग का वादा नहीं करते।",
      "faq.q10": "कौन से शहरों में सर्व करते हो?",
      "faq.a10": "पूरे भारत में — रिमोटली। मुंबई, दिल्ली, बैंगलोर, पुणे, हैदराबाद, चेन्नई, कोलकाता, अहमदाबाद, जयपुर, लखनऊ — किसी भी शहर से। सब WhatsApp और ईमेल पर होता है।",
      "faq.q11": "पेमेंट कैसे करूं?",
      "faq.a11": "UPI (GPay, PhonePe, Paytm) या बैंक ट्रांसफर। पेमेंट वेबसाइट अप्रूव करने के बाद ही — कोई एडवांस नहीं। इनवॉइस प्रोवाइड करते हैं।",
      "faq.q12": "क्या आप कस्टम सॉफ्टवेयर या ऐप्स बनाते हैं?",
      "faq.a12": "हाँ। वेबसाइट के अलावा, हम कस्टम सॉफ्टवेयर और ऐप्स बनाते हैं — बिज़नेस डैशबोर्ड, बुकिंग सिस्टम, इन्वेंटरी और बिलिंग टूल्स, WhatsApp ऑटोमेशन, चैटबॉट, API इंटीग्रेशन, और एडमिन पैनल। फ्री स्कोपिंग कॉल के बाद कोट, माइलस्टोन-बेस्ड पेमेंट। ₹9,999 से शुरू।",
      "faq.q13": "₹1,500/साल केयर प्लान क्या है?",
      "faq.a13": "एक ऑप्शनल सालाना प्लान जो होस्टिंग और डोमेन रिन्यूअल मैनेजमेंट, मंथली बैकअप, सिक्योरिटी अपडेट्स, अपटाइम मॉनिटरिंग, महीने में 2 छोटे कंटेंट एडिट्स, और प्रायोरिटी WhatsApp सपोर्ट कवर करता है। इंडस्ट्री रेट्स से ~40–50% कम। कभी भी कैंसल — कोई लॉक-इन नहीं। डोमेन और होस्टिंग की थर्ड-पार्टी फीस आप सीधे पे करते हैं।",
      "final.h2": "आपके बिज़नेस को ऑनलाइन लाने का टाइम आ गया।",
      "final.sub": "WhatsApp पर मैसेज करो — 2 मिनट में जवाब, फ्री कंसल्टेशन, कोई कमिटमेंट नहीं।",
      "final.cta": "WhatsApp पर मैसेज करो →",
      "final.cta2": "कीमतें देखो",
      "footer.tagline": "नया वेब डेवलपमेंट स्टूडियो — भारत भर के छोटे बिज़नेस के लिए किफायती, प्रोफेशनल वेबसाइट। पहले 10 फाउंडिंग क्लाइंट्स के लिए ₹499 से।",
      "footer.explore": "एक्सप्लोर",
      "footer.contact": "संपर्क",
      "footer.legal": "लीगल",
      "footer.privacy": "प्राइवेसी पॉलिसी",
      "footer.terms": "सर्विस की शर्तें",
      "footer.rights": "सर्वाधिकार सुरक्षित।",
      "footer.demo": "दिखाए गए सैंपल डिज़ाइन डेमो के लिए हैं। क्लाइंट काम जुड़ेगा जैसे हमारे फाउंडिंग प्रोजेक्ट्स लॉन्च होंगे।",
      "cz.eyebrow": "खुद ट्राई करो",
      "cz.h2": "अपनी वेबसाइट का क्विक डिज़ाइन प्रीव्यू बनाओ।",
      "cz.sub": "जितना चाहो भरो। प्रीव्यू इंस्टेंटली अपडेट होगा। यह डिज़ाइन प्रीव्यू है — फाइनल वेबसाइट कस्टम-बिल्ट होगी।",
      "cz.business": "बिज़नेस नेम",
      "cz.type": "बिज़नेस टाइप",
      "cz.type.choose": "एक टाइप चुनें",
      "cz.tagline": "टैगलाइन",
      "cz.desc": "शॉर्ट डिस्क्रिप्शन",
      "cz.location": "लोकेशन",
      "cz.preview": "लाइव प्रीव्यू",
      "cz.continue": "ये डिटेल्स यूज़ करो → कंटिन्यू",
      "cz.contact": "संपर्क करें"
    }
  };

  var STORAGE_KEY = 'ti-lang';

  /* ============================================================
     LANGUAGE
     ============================================================ */
  function getSavedLang() {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'hi') return urlLang;
    } catch (e) {}
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') return saved;
    } catch (e) {}
    var nav = (navigator.language || 'en').toLowerCase();
    return nav.indexOf('hi') === 0 ? 'hi' : 'en';
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi-IN' : 'en-IN');
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = dict[key];
      if (text !== undefined) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var html = dict[key];
      if (html !== undefined) el.innerHTML = html;
    });

    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    var activeTab = document.querySelector('.demo-tab.active');
    if (activeTab && typeof renderDemo === 'function') {
      renderDemo(activeTab.dataset.type);
    }
  }

  document.querySelectorAll('.lang-opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      applyLang(lang);
      try {
        var url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
      } catch (e) {}
    });
  });

  /* ============================================================
     HEADER SCROLL
     ============================================================ */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============================================================
     MOBILE NAV
     ============================================================ */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  function closeMobileNav() {
    if (!navToggle || !mobileNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
  }
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      mobileNav.hidden = open;
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMobileNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* ============================================================
     DEMO SWITCHER
     ============================================================ */
  var DEMOS = {
    cafe: { url: 'beanandbrew.in', theme: 'cafe', disclaimer: 'Demonstration website — Bean & Brew is a fictional café.', logo: 'Bean & Brew', nav: ['Menu','About','Contact'], cta: 'Order Now', kicker: 'Fresh coffee • Good mood', title: 'Bean & Brew', desc: 'A warm local café for coffee, conversations and fresh bites.', heroCta: 'View Menu', features: ['Freshly Brewed','Fresh Bakes','Cozy Space'], phoneKicker: 'Fresh coffee', phoneDesc: 'Warm local café for coffee & fresh bites.' },
    salon: { url: 'aurasalon.in', theme: 'salon', disclaimer: 'Demonstration website — Aura Salon is fictional.', logo: 'Aura Salon', nav: ['Services','Gallery','Contact'], cta: 'Book Now', kicker: 'Style • Beauty • Confidence', title: 'Aura Salon', desc: 'Showcase your services, portfolio, offers and appointment details online.', heroCta: 'Book Appointment', features: ['Expert Stylists','Premium Products','Easy Booking'], phoneKicker: 'Style • Beauty', phoneDesc: 'Salon services, offers & booking.' },
    clinic: { url: 'carepointclinic.in', theme: 'clinic', disclaimer: 'Demonstration website — CarePoint Clinic is fictional.', logo: 'CarePoint Clinic', nav: ['Services','Doctors','Contact'], cta: 'Book Appointment', kicker: 'Care • Trust • Wellness', title: 'CarePoint Clinic', desc: 'A professional healthcare website with services, timings and contact options.', heroCta: 'Book Now', features: ['Expert Doctors','Flexible Timings','Easy Booking'], phoneKicker: 'Care • Trust', phoneDesc: 'Services, timings & booking.' },
    custom: { url: 'yourbusiness.in', theme: 'custom', disclaimer: 'Demonstration website — generic preview.', logo: 'Your Brand', nav: ['Home','About','Contact'], cta: 'Contact Us', kicker: 'Your business • Your style', title: 'Your Brand', desc: 'A custom website designed around your business.', heroCta: 'Get Started', features: ['Professional Design','Mobile Friendly','Easy Contact'], phoneKicker: 'Your business', phoneDesc: 'A website designed for you.' }
  };

  var demoTabs = document.querySelectorAll('.demo-tab');
  var demoSite = document.getElementById('demoSite');
  var demoPhoneSite = document.getElementById('demoPhoneSite');
  var demoDisclaimer = document.getElementById('demoDisclaimer');

  function setText(id, value) { var el = document.getElementById(id); if (el) el.textContent = value; }

  function renderDemo(type) {
    var d = DEMOS[type]; if (!d) return;
    var lang = document.documentElement.getAttribute('data-lang') || 'en';

    var disclaimers = {
      cafe: { en: 'Demonstration website — Bean & Brew is a fictional café.', hi: 'डेमो वेबसाइट — Bean & Brew एक काल्पनिक कैफ़े है।' },
      salon: { en: 'Demonstration website — Aura Salon is fictional.', hi: 'डेमो वेबसाइट — Aura Salon काल्पनिक है।' },
      clinic: { en: 'Demonstration website — CarePoint Clinic is fictional.', hi: 'डेमो वेबसाइट — CarePoint Clinic काल्पनिक है।' },
      custom: { en: 'Demonstration website — generic preview.', hi: 'डेमो वेबसाइट — जेनेरिक प्रीव्यू।' }
    };

    setText('demoUrl', d.url);
    if (demoSite) demoSite.setAttribute('data-theme', d.theme);
    if (demoPhoneSite) demoPhoneSite.setAttribute('data-theme', d.theme);
    setText('demoLogo', d.logo); setText('demoPhoneLogo', d.logo);
    setText('demoNav1', d.nav[0]); setText('demoNav2', d.nav[1]); setText('demoNav3', d.nav[2]);
    setText('demoCta', d.cta); setText('demoKicker', d.kicker); setText('demoTitle', d.title);
    setText('demoDesc', d.desc); setText('demoHeroCta', d.heroCta); setText('demoFooterLogo', d.logo);
    setText('demoPhoneKicker', d.phoneKicker); setText('demoPhoneTitle', d.title);
    setText('demoPhoneDesc', d.phoneDesc); setText('demoPhoneCta', d.heroCta);

    var featuresEl = document.getElementById('demoFeatures');
    if (featuresEl) {
      featuresEl.innerHTML = '';
      d.features.forEach(function (f) {
        var span = document.createElement('span');
        span.textContent = f;
        featuresEl.appendChild(span);
      });
    }
    if (demoDisclaimer && disclaimers[type]) {
      demoDisclaimer.textContent = disclaimers[type][lang] || disclaimers[type].en;
    }
  }

  demoTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      demoTabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      renderDemo(tab.dataset.type);
    });
  });
  renderDemo('cafe');

  /* ============================================================
     CUSTOMIZER MODAL
     ============================================================ */
  var modal = document.getElementById('customizerModal');
  var openBtn = document.getElementById('openCustomizer');
  var openFromEnqBtn = document.getElementById('openCustomizerFromEnq');
  var lastFocused = null;

  function openModal() {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var first = modal.querySelector('input, select, textarea, button');
    if (first) first.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  if (openBtn) openBtn.addEventListener('click', openModal);
  if (openFromEnqBtn) openFromEnqBtn.addEventListener('click', openModal);
  if (modal) modal.querySelectorAll('[data-close-modal]').forEach(function (el) { el.addEventListener('click', closeModal); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
  });

  var cForm = document.getElementById('customizerForm');

  function val(name, fallback) {
    if (!cForm) return fallback;
    var el = cForm.elements[name];
    var v = el && el.value ? el.value.trim() : '';
    return v || fallback;
  }
  function slugify(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'yourbusiness';
  }

  /* ---------- Update preview text (laptop + phone) ---------- */
  function updateCustomPreview() {
    if (!cForm) return;
    var brand = val('business', 'Your Brand');
    var tagline = val('tagline', 'Your business • Your style');
    var desc = val('description', 'A professional website designed around your business.');

    setText('customUrl', slugify(brand) + '.in');

    document.querySelectorAll('#customSiteLaptop [data-bind], #customSitePhone [data-bind]').forEach(function (el) {
      var key = el.getAttribute('data-bind');
      if (key === 'business') el.textContent = brand;
      if (key === 'tagline') el.textContent = tagline;
      if (key === 'description') el.textContent = desc;
    });

    // Legacy single-preview IDs (if they exist)
    setText('customLogo', brand);
    setText('customTitle', brand);
    setText('customKicker', tagline);
    setText('customDesc', desc);
  }

  /* ---------- Update colors on both previews ---------- */
  function updateCustomColors() {
    if (!cForm) return;
    var textColor = val('textColor', '#0E1626');
    var bgColor = val('bgColor', '#FBFAF8');
    var accentColor = val('accentColor', '#0D7C6B');
    var ctaTextColor = val('ctaTextColor', '#FFFFFF');

    ['customSiteLaptop', 'customSitePhone', 'customSite'].forEach(function (id) {
      var site = document.getElementById(id);
      if (!site) return;
      site.style.background = bgColor;
      site.style.color = textColor;
      site.style.setProperty('--accent', accentColor);
      site.style.setProperty('--demo-accent', accentColor);
      site.style.setProperty('--custom-cta-text', ctaTextColor);
    });

    // Title / logo / desc colour sync
    var textNodes = document.querySelectorAll(
      '#customSiteLaptop .mock-logo, #customSiteLaptop .mock-hero h3, #customSiteLaptop .mock-hero p, ' +
      '#customSitePhone .mock-logo, #customSitePhone .mock-hero h3, #customSitePhone .mock-hero p, ' +
      '#customLogo, #customTitle, #customDesc'
    );
    textNodes.forEach(function (el) { el.style.color = textColor; });

    // Accent buttons
    var accentNodes = document.querySelectorAll(
      '#customSiteLaptop .mock-btn, #customSiteLaptop .mock-cta, ' +
      '#customSitePhone .mock-btn, #customSitePhone .mock-cta'
    );
    accentNodes.forEach(function (el) {
      el.style.background = accentColor;
      el.style.color = ctaTextColor;
    });

    // Kicker
    document.querySelectorAll('#customSiteLaptop .mock-kicker, #customSitePhone .mock-kicker').forEach(function (el) {
      el.style.color = accentColor;
    });
  }

  if (cForm) {
    cForm.addEventListener('input', function () { updateCustomPreview(); updateCustomColors(); });
    cForm.addEventListener('change', function () { updateCustomPreview(); updateCustomColors(); });
    updateCustomPreview();
    updateCustomColors();
  }

  /* ---------- Hero image preview ---------- */
  var cHeroImage = document.getElementById('cHeroImage');
  var customVisual = document.getElementById('customVisual');
  if (cHeroImage && customVisual) {
    cHeroImage.addEventListener('change', function () {
      var file = cHeroImage.files && cHeroImage.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      var reader = new FileReader();
      reader.onload = function () {
        customVisual.style.backgroundImage = 'url("' + reader.result + '")';
        customVisual.style.backgroundSize = 'cover';
        customVisual.style.backgroundPosition = 'center';
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---------- Collect customizer data ---------- */
  function collectCustomData() {
    if (!cForm) return null;
    var data = {
      business: val('business', ''),
      type: val('businessType', ''),
      tagline: val('tagline', ''),
      description: val('description', ''),
      location: val('location', ''),
      textColor: val('textColor', '#0E1626'),
      bgColor: val('bgColor', '#FBFAF8'),
      accentColor: val('accentColor', '#0D7C6B'),
      ctaTextColor: val('ctaTextColor', '#FFFFFF'),
      phone: val('phone', ''),
      email: val('email', ''),
      notes: val('notes', '')
    };
    var logoEl = document.getElementById('cLogo');
    if (logoEl && logoEl.files && logoEl.files[0]) data.logo = logoEl.files[0].name;
    var heroEl = document.getElementById('cHeroImage');
    if (heroEl && heroEl.files && heroEl.files[0]) data.heroImage = heroEl.files[0].name;
    return data;
  }

  function buildCustomMessage(data) {
    var lines = [
      'Hi Tech Intel, here are my website details:',
      '',
      'Business name: ' + (data.business || '—'),
      'Business type: ' + (data.type || '—'),
      'Tagline: ' + (data.tagline || '—'),
      'Description: ' + (data.description || '—'),
      'Location: ' + (data.location || '—'),
      '',
      '--- Style preferences ---',
      'Text colour: ' + data.textColor,
      'Background colour: ' + data.bgColor,
      'Button / accent colour: ' + data.accentColor,
      'Button text colour: ' + data.ctaTextColor,
      ''
    ];
    if (data.logo || data.heroImage) {
      if (data.logo) lines.push('Logo attached separately: ' + data.logo);
      if (data.heroImage) lines.push('Hero image attached separately: ' + data.heroImage);
      lines.push('(I will send the image files in the next message)');
      lines.push('');
    }
    if (data.phone) lines.push('My WhatsApp: ' + data.phone);
    if (data.email) lines.push('My email: ' + data.email);
    if (data.notes) lines.push('Special requirements: ' + data.notes);
    lines.push('');
    lines.push('Please share the next steps.');
    return lines.join('\n');
  }

  function validateCustom(data) {
    if (!data.business || !data.business.trim()) {
      var cb = document.getElementById('cBusiness');
      if (cb) {
        cb.focus();
        cb.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cb.style.borderColor = '#B42318';
        setTimeout(function () { cb.style.borderColor = ''; }, 2500);
      }
      return false;
    }
    return true;
  }

  /* ---------- Customizer → WhatsApp ---------- */
  var customSendWA = document.getElementById('customSendWhatsApp');
  if (customSendWA) {
    customSendWA.addEventListener('click', function () {
      var data = collectCustomData();
      if (!data) return;
      if (!validateCustom(data)) return;
      var msg = buildCustomMessage(data);
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  /* ---------- Customizer → Email ---------- */
  var customSendEmail = document.getElementById('customSendEmail');
  if (customSendEmail) {
    customSendEmail.addEventListener('click', function () {
      var data = collectCustomData();
      if (!data) return;
      if (!validateCustom(data)) return;
      var body = buildCustomMessage(data);
      var subject = 'Website Enquiry — ' + data.business;
      var url = 'https://mail.google.com/mail/?view=cm&fs=1'
        + '&to=' + encodeURIComponent('techhintelligence@gmail.com')
        + '&su=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  /* ============================================================
     LEAD FORM → WHATSAPP
     ============================================================ */
  var leadForm = document.getElementById('leadForm');
  var formStatus = document.getElementById('formStatus');

  function setFieldError(id, show) {
    var input = document.getElementById(id);
    var error = document.getElementById(id + 'Error');
    if (!input || !error) return;
    if (show) { input.setAttribute('aria-invalid', 'true'); error.hidden = false; }
    else { input.removeAttribute('aria-invalid'); error.hidden = true; }
  }
  function validateLead() {
    var ok = true;
    var name = document.getElementById('leadName');
    if (!name.value.trim()) { setFieldError('leadName', true); ok = false; } else setFieldError('leadName', false);
    var business = document.getElementById('leadBusiness');
    if (!business.value.trim()) { setFieldError('leadBusiness', true); ok = false; } else setFieldError('leadBusiness', false);
    var phone = document.getElementById('leadPhone');
    var digits = phone.value.replace(/\D/g, '');
    if (digits.length < 10) { setFieldError('leadPhone', true); ok = false; } else setFieldError('leadPhone', false);
    return ok;
  }

  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateLead()) {
        if (formStatus) { formStatus.textContent = 'Please fix the highlighted fields.'; formStatus.classList.add('is-error'); }
        var firstInvalid = leadForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      var name = document.getElementById('leadName').value.trim();
      var business = document.getElementById('leadBusiness').value.trim();
      var phone = document.getElementById('leadPhone').value.trim();
      var type = document.getElementById('leadType').value;
      var notes = document.getElementById('leadNotes').value.trim();
      var lines = ['New website enquiry — Tech Intel','','Name: ' + name,'Business: ' + business,'WhatsApp: ' + phone,'Requirement: ' + (type || 'Not specified'),'Notes: ' + (notes || 'None')];
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      if (formStatus) { formStatus.textContent = 'Opening WhatsApp…'; formStatus.classList.remove('is-error'); }
      var win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win) {
        if (formStatus) { formStatus.textContent = 'Could not open WhatsApp. Message +91 99359 32705 directly.'; formStatus.classList.add('is-error'); }
      } else if (formStatus) {
        formStatus.textContent = 'WhatsApp opened — send the message to continue.';
      }
    });
    leadForm.addEventListener('input', function (e) {
      var id = e.target.id;
      if (id === 'leadName') setFieldError('leadName', false);
      if (id === 'leadBusiness') setFieldError('leadBusiness', false);
      if (id === 'leadPhone') setFieldError('leadPhone', false);
    });
  }

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ============================================================
     SMOOTH SCROLL
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ============================================================
     COPY EMAIL
     ============================================================ */
  var copyBtns = document.querySelectorAll('[data-copy]');
  if (copyBtns.length) {
    var toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
    var toastTimer;
    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-copy');
        var done = function () {
          btn.classList.add('copied');
          toast.textContent = '✓ Email copied: ' + text;
          toast.classList.add('show');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(function () {
            toast.classList.remove('show');
            btn.classList.remove('copied');
          }, 2200);
        };
        var fail = function () {
          toast.textContent = 'Copy failed — please select manually';
          toast.classList.add('show');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(done).catch(fail);
        } else {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy') ? done() : fail();
          } catch (e) { fail(); }
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ============================================================
     INIT LANGUAGE
     ============================================================ */
  applyLang(getSavedLang());

  /* ============================================================
     ANALYTICS HOOKS
     ============================================================ */
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (window.gtag) window.gtag('event', 'whatsapp_click', { location: el.getAttribute('data-track') });
      if (window.plausible) window.plausible('WhatsApp Click', { props: { location: el.getAttribute('data-track') } });
    });
  });
})();
