// To add a work: copy one entry and change it. Leave out anything you don't have:
// the case study only shows sections that have content.
// platforms: which tabs it appears under ("web", "mobile" or both).
// web: the card cover and case study hero, in a browser frame.
// phones: three app screens side by side, for app-only work (used instead of web).
// role, year, platform, tools, tech: the facts row at the top of the case study.
// overview, problem, process, solution: case study text.
// screens: the walkthrough. Each screen has a src, a title and a desc; phone: true puts it in a phone frame.
// results: up to three figures shown at the end.
var IMG = 'assets/works/';
window.WORKS = [
  {
    slug: 'black-night', title: 'Black Night', tags: 'Web · App · Console',
    desc: 'One design language for a specialty coffee storefront, an app and an operations console.',
    platforms: ['web', 'mobile'], web: IMG + 'bn-home.jpg',
    role: 'Product Designer', year: '2026', platform: 'Web, iOS & Android',
    tools: ['Figma', 'Claude'], tech: ['Design system and tokens', 'Hugeicons', 'React prototypes', 'Arabic and English (RTL and LTR)'],
    overview: 'Black Knight is a Saudi specialty coffee roastery in Al Khobar. It sources coffee from more than 20 countries, roasts it in a 5,280 m² factory, one of the largest specialty coffee factories in Saudi Arabia, and sells single origins, signature blends, drip bags and Saudi Arabic coffee to homes, cafés and retailers. I designed one design language for its online store, app and operations console, Arabic first and in English.',
    process: 'Every flow was mapped state by state before handoff. Checkout alone covers 49 states, from loading an address and a rejected discount code to a declined instalment plan and an expired session, so engineering never has to guess what a screen does. Each flow also has a "case stories" board that walks through its states frame by frame on desktop and phone.',
    solution: 'One design system, built on the brand\'s own typeface, carries the store from the home page to the account. The product page leads with the coffee, the basket and checkout make delivery, payment and points clear before you pay, and the account keeps every order, point and address in one place.',
    screens: [
      { src: IMG + 'bn-home.jpg', title: 'Home', desc: 'A campaign hero, the roastery\'s promises (fresh roasting, quality, 24-hour exchange, fast delivery), categories and best sellers, with 250 g and 500 g sizes one tap apart.' },
      { src: IMG + 'bn-product.jpg', title: 'Product page', desc: 'The coffee comes first: origin and process, rating and sales, the price with VAT, the discount, loyalty points and Tabby instalments, then size and quantity.' },
      { src: IMG + 'bn-basket.jpg', title: 'Basket', desc: 'Each box shows what is inside it. A progress bar shows how much more you need for free delivery, and stock warnings appear before checkout, not after.' },
      { src: IMG + 'bn-checkout.jpg', title: 'Checkout', desc: 'Three steps: address, delivery and payment. mada, card, Apple Pay, Tabby and Tamara sit side by side, and points and discount codes come off the total before you pay.' },
      { src: IMG + 'bn-confirmation.jpg', title: 'Order confirmation', desc: 'The order number, what happens next, and the points this order will earn once it arrives.' },
      { src: IMG + 'bn-order.jpg', title: 'Order details', desc: 'Every item, size and quantity, including what is inside each box, and where the order is going.' },
      { src: IMG + 'bn-orders.jpg', title: 'My orders', desc: 'Each order says what it is waiting for. Unpaid orders and items added later carry a clear amount due and a pay button.' },
      { src: IMG + 'bn-points.jpg', title: 'My points', desc: 'The balance and what it is worth in riyals, then every point earned, pending, redeemed, returned or expired, with the order it came from.' },
      { src: IMG + 'bn-wishlist.jpg', title: 'Wishlist', desc: 'Saved coffees with their rating, price and origin, one tap from the basket.' },
      { src: IMG + 'bn-addresses.jpg', title: 'Addresses', desc: 'Saved addresses across the Gulf with a default, and a plain note when an address is missing something it needs before it can be used.' }
    ],
    results: [{ v: '20+', l: 'countries of origin' }, { v: '5,280 m²', l: 'roasting factory in Al Khobar' }, { v: '49', l: 'checkout states designed' }]
  },
  {
    slug: 'gymco', title: 'Gymco', tags: 'iOS · Android',
    desc: 'Diet and training for lifters: log a meal in seconds, train to a plan, and keep a streak that rewards consistency, not starvation.',
    platforms: ['mobile'], mobile: IMG + 'gy-today.jpg',
    phones: [IMG + 'gy-write.jpg', IMG + 'gy-today.jpg', IMG + 'gy-workout.jpg'],
    role: 'Founder · Product design and development', year: '2026', platform: 'iOS & Android, web',
    tools: ['Figma', 'Claude Code'], tech: ['Flutter (Dart)', 'Riverpod', 'SQLite', 'Supabase', 'Claude Haiku', 'Firebase', 'Cloudflare Pages', 'GitHub Actions'],
    overview: 'Gymco brings food and training into one app for lifters, on iOS and Android, in English, Arabic and Spanish. I designed it and built it, with a trilingual landing page and an admin Control Center beside it.',
    problem: 'Lifters end up juggling two apps: one for food and one for training. Most food trackers make logging slow (search, scroll, guess grams), reward eating less over eating well, and treat Arabic as a mirrored afterthought. Training apps rarely know what you ate, and none of them adjust your targets based on what your body actually did.',
    process: 'Every screen is built from one component kit drawn from the design prototype, so design and code don\'t drift. Arabic is designed in, not mirrored. Going over or under on calories reads neutral, never red: the app coaches and doesn\'t shame. The diary lives on the phone and sign-in is optional, used only for backup.',
    solution: 'You can type or say a meal the way you would describe it, scan a barcode or photograph the plate, and the AI never guesses grams. Training reads as a day, not a spreadsheet, and a weekly check-in adapts your targets from what your body actually did.',
    screens: [
      { phone: true, src: IMG + 'gy-today.jpg', title: 'Today', desc: 'The day on one screen: the week strip, today\'s session, a tip from Iron, calories and macros left, and meals.' },
      { phone: true, src: IMG + 'gy-write.jpg', title: 'Write what you ate', desc: 'Type a meal the way you would say it and it is read into foods with amounts, on the phone and offline.' },
      { phone: true, src: IMG + 'gy-add-food.jpg', title: 'Add food', desc: 'Search, write, voice, photo or barcode, with recent foods and what you usually eat at this time.' },
      { phone: true, src: IMG + 'gy-workout.jpg', title: 'Live workout', desc: 'Set, previous, kg, reps and RIR on a custom keypad, with a rest timer between sets.' },
      { phone: true, src: IMG + 'gy-how-to.jpg', title: 'Exercise how-to', desc: 'Step-by-step instructions and the muscles each exercise works, across a library of 2,000 exercises.' },
      { phone: true, src: IMG + 'gy-iron.jpg', title: 'Iron, the AI coach', desc: 'Everything Iron does in one place: a program, routines, a weekly review, logging a meal and a health profile.' },
      { phone: true, src: IMG + 'gy-program.jpg', title: 'Program from Iron', desc: 'Eating and training built from your own numbers: daily calories and macros, and the split that fits your week.' },
      { phone: true, src: IMG + 'gy-progress.jpg', title: 'Progress', desc: 'Trend weight and rate of change, a 90-day commitment, and weekly hard sets per muscle against a healthy range.' },
      { phone: true, src: IMG + 'gy-awards.jpg', title: 'Awards and streaks', desc: 'A day counts when you log your meals and train or rest as planned. Freezes and challenges, and no award for eating less.' },
      { phone: true, src: IMG + 'gy-ramadan.jpg', title: 'Ramadan mode', desc: 'Suhoor and iftar times for your city, meals renamed for the fast, and reminders before both.' }
    ],
    results: [{ v: '3', l: 'languages, Arabic designed right to left' }, { v: '2,000', l: 'exercises in the library' }, { v: '120 kcal', l: 'most a weekly check-in moves your target' }]
  },
  {
    slug: 'maknoon', title: 'Maknoon', tags: 'iOS · Android · Arabic',
    desc: 'A linked Islamic knowledge base in your pocket: the Quran, tafsir, hadith with their gradings and the classical books, all tied to their sources.',
    platforms: ['mobile'], mobile: IMG + 'mk-home.jpg',
    phones: [IMG + 'mk-quran.jpg', IMG + 'mk-home.jpg', IMG + 'mk-hadith.jpg'],
    role: 'Founder · Product design and development', year: '2026', platform: 'iOS & Android',
    tools: ['Claude', 'Claude Code'], tech: ['Expo (React Native)', 'TypeScript', 'SQLite FTS5', 'Supabase Postgres', 'Adhan', 'On-device Qwen3-4B (llama.rn)', 'Whisper (whisper.rn)'],
    overview: 'Maknoon (المكنون) is an Arabic-first app that links every ayah, hadith, tafsir passage and ruling to its source. It is free, needs no account, shows no ads and runs on the device. I am the founder: I designed it and built it.',
    problem: 'Islamic knowledge apps tend to do one thing: a mushaf, a hadith reader or prayer times. The text is rarely tied to its source, hadith appear without their gradings, and AI answers make up rulings. People who want to understand a verse or a ruling end up jumping between apps and websites.',
    process: 'Sacred text is stored and shown exactly as imported, and every import is checked against its source by count and hash. Every hadith shows its gradings, each attributed to its grader. Links between texts start as suggestions and only a human reviewer can confirm them. Prayer times, qibla and zakat are plain tested code. Every screen is built right to left first.',
    solution: 'The home screen brings the next prayer, the ayah of the day, your wird, adhkar and memorisation review together. The assistant answers with real sources first, and ruling questions are answered from Bidayat al-Mujtahid: each school\'s position, evidence and the cause of disagreement, with your school marked. It never issues a ruling of its own.',
    screens: [
      { phone: true, src: IMG + 'mk-home.jpg', title: 'Home', desc: 'The next prayer with the day\'s times, the ayah of the day, today\'s wird and adhkar, and the passages due for memorisation review.' },
      { phone: true, src: IMG + 'mk-quran.jpg', title: 'Quran', desc: 'Pick up where you stopped, follow your khatma plan, open the mushaf or the surah index, listen, and study selected ayat.' },
      { phone: true, src: IMG + 'mk-mushaf.jpg', title: 'Mushaf', desc: 'The Madinah mushaf page by page, with a real page turn.' },
      { phone: true, src: IMG + 'mk-mushaf-controls.jpg', title: 'Reading controls', desc: 'Tap the page for zoom, page navigation and search by ayah or surah.' },
      { phone: true, src: IMG + 'mk-ayah.jpg', title: 'Ayah of the day', desc: 'The ayah with drawers that link it to its tafsir and to related hadith, each with its source and licence.' },
      { phone: true, src: IMG + 'mk-hadith.jpg', title: 'Hadith', desc: 'The text, then the gradings of the hadith scholars, each attributed to who graded it, then the chain of narration.' },
      { phone: true, src: IMG + 'mk-library.jpg', title: 'Islamic library', desc: 'Tafsir, hadith, fiqh, creed, seerah, adhkar and Arabic, each shelf with how much of it is in the app.' },
      { phone: true, src: IMG + 'mk-search.jpg', title: 'Search', desc: 'Root-aware search across the Quran, hadith and tafsir, so one root finds every form of a word, with the assistant one tap away.' },
      { phone: true, src: IMG + 'mk-fiqh.jpg', title: 'A fiqh question', desc: 'The four schools side by side with your school first, the evidence and the cause of disagreement, each with its reference.' },
      { phone: true, src: IMG + 'mk-zakat.jpg', title: 'Zakat calculator', desc: 'Nisab by gold or silver, the assets a full year has passed on, and 2.5% worked out in plain, tested code.' }
    ],
    results: [{ v: '6,236', l: 'ayat, verified against the source' }, { v: '0', l: 'accounts, ads or trackers' }, { v: '4', l: 'schools of fiqh, side by side' }]
  },
  {
    slug: 'diwan-plus', title: 'Diwan+', tags: 'Web app · English & Arabic',
    desc: 'Redesigning the entire experience of MENA\'s largest UGC platform.',
    platforms: ['web'], web: IMG + 'dw-overview.jpg',
    role: 'Product Designer', year: '2025', platform: 'Web',
    tools: ['Figma'],
    overview: 'Diwan+ is a platform where brands run influencer and UGC campaigns, from the brief to the results. Brands, influencers, reports and payments sit in one place, in English and Arabic. I redesigned the whole experience.',
    solution: 'Each campaign opens on an overview of its performance: GMV, revenue, payout, orders and the influencers behind them, with the brief and its links and codes beside it. From there the team creates campaigns, reviews applications, assigns influencers, talks to them, and follows each submission from script to published content.',
    screens: [
      { src: IMG + 'dw-overview.jpg', title: 'Campaign overview', desc: 'GMV, revenue, payout, validation and orders at the top, GMV over time and influencers by account manager, then the brief and the campaign\'s links and codes.' },
      { src: IMG + 'dw-campaigns.jpg', title: 'Campaigns', desc: 'Every campaign with its brand, type, start date, account managers, influencers and status, filtered by status and campaign type.' },
      { src: IMG + 'dw-new-campaign.jpg', title: 'New campaign', desc: 'A guided setup in three steps: the basics, the content deliverables, and how the product is integrated.' },
      { src: IMG + 'dw-influencers.jpg', title: 'Influencers on a campaign', desc: 'Links, codes, clicks, conversions, redemptions and revenue for each influencer, with applications and assignment one click away.' },
      { src: IMG + 'dw-applications.jpg', title: 'Applications', desc: 'Influencers who want to join, with their reach on Instagram and TikTok, past campaigns, conversions and their offer, ready to accept.' },
      { src: IMG + 'dw-messages.jpg', title: 'Messages', desc: 'A conversation with each influencer beside the campaign, with images and files.' },
      { src: IMG + 'dw-script.jpg', title: 'Script submission', desc: 'The submission process step by step. The influencer submits a script, and the team comments or approves it.' },
      { src: IMG + 'dw-content.jpg', title: 'Content submission', desc: 'The final video arrives in the same place, ready for review and approval.' },
      { src: IMG + 'dw-managers.jpg', title: 'Account managers', desc: 'Every account manager with their brands, campaigns and influencers.' },
      { src: IMG + 'dw-directory.jpg', title: 'Influencer directory', desc: 'Every creator with their country, category and reach, searchable and filterable by category, campaign type and country.' }
    ]
  },
  {
    slug: 'ifynx', title: 'iFynx', tags: 'Website · English & Arabic',
    desc: 'Website for a software, app and AI studio serving the UAE, Saudi Arabia and MENA.',
    platforms: ['web'], web: IMG + 'fx-home.jpg',
    role: 'Product Designer · design and site build', year: '2026', platform: 'Web',
    tools: ['Claude', 'Claude Code', 'WordPress'], tech: ['WordPress theme', 'HTML, CSS and JavaScript', 'Python converter'],
    overview: 'iFynx is a digital product studio of strategists, designers and engineers, based in Gaza, Palestine. It partners with startups and enterprises across MENA and Europe to turn ambitious ideas into products people love. Born to build, built to rise.',
    process: 'Every page was designed on one canvas, then converted by a script into a WordPress theme and a plain HTML version of the same site, so design changes reach the live site without being rebuilt by hand. Phone and tablet layouts are generated for the fixed-width pages.',
    solution: 'The site leads with the studio and its latest project, then explains its services from ideation to growth, shows its work filtered by discipline, and gives every product its own page. An AI solution advisor turns a few questions into a recommended plan and timeline. Everything ships in English and Arabic, right to left.',
    screens: [
      { src: IMG + 'fx-home.jpg', title: 'Home', desc: 'Born to build, built to rise: the studio\'s promise, its social links and its latest project.' },
      { src: IMG + 'fx-services.jpg', title: 'Services', desc: 'One senior team from the first idea to the hundredth release, with the numbers behind it.' },
      { src: IMG + 'fx-design.jpg', title: 'A service page', desc: 'Design, one of six services, each with its own page.' },
      { src: IMG + 'fx-works.jpg', title: 'Selected work', desc: 'Products, platforms and brands, filtered by product design, web, mobile, branding and AI.' },
      { src: IMG + 'fx-fynxdocs.jpg', title: 'A product page', desc: 'FynxDocs turns any PDF, scan or photo into an editable Word file, Arabic first, in 36 languages and on device.' },
      { src: IMG + 'fx-advisor.jpg', title: 'AI solution advisor', desc: 'Pick your industry and goal, and the advisor recommends a plan, its steps and a timeline in 30 seconds.' },
      { src: IMG + 'fx-about.jpg', title: 'About', desc: 'Who the studio is, and its company profile.' },
      { src: IMG + 'fx-blog.jpg', title: 'Blog', desc: 'Articles on design, AI and security for teams in the Gulf and Egypt.' },
      { src: IMG + 'fx-contact.jpg', title: 'Contact', desc: 'One form to start a project, with every way to reach the team.' },
      { src: IMG + 'fx-home-ar.jpg', title: 'Arabic home', desc: 'The whole site in Arabic, designed right to left rather than mirrored.' }
    ],
    results: [{ v: '50+', l: 'products delivered' }, { v: '20+', l: 'industries served' }, { v: '100K+', l: 'users reached' }]
  }
];
