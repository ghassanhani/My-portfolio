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
    slug: 'kadr', title: 'Kadr', tags: 'Web · Desktop · iOS · Android',
    desc: 'A video editor for everyday creators, with AI tools that run on credits and a full timeline when you need it.',
    platforms: ['web', 'mobile'], web: IMG + 'kd-editor.jpg',
    role: 'Founder · Product design', year: '2026', platform: 'Web, macOS, Windows, iOS & Android',
    tools: ['Claude', 'Claude Code'], tech: ['Kadr design system (tokens and components)', 'Inter, Geist Mono and Readex Pro', 'English, Arabic and Spanish'],
    overview: 'Kadr is a video editor for everyday creators. Projects sync across desktop, web and phone, and AI tools such as auto captions, script to video, translation and background removal sit next to a full multi-track timeline.',
    process: 'Every screen type in a leading mobile editor was mapped and redesigned, then carried to web and desktop with shared components: a top bar, a tool rail, an inspector and the timeline. AI actions always show their credit cost before you run them, and tools that run on the device say so.',
    solution: 'A simple editor for quick edits, an advanced mode with edit, colour, audio and deliver pages for detailed work, and templates people can remix. Arabic is designed right to left, and the waiting list, store pages and app are in English, Arabic and Spanish.',
    screens: [
      { src: IMG + 'kd-projects.jpg', title: 'Projects', desc: 'Quick AI tools with their credit cost, and recent drafts synced across desktop, web and phone.' },
      { src: IMG + 'kd-editor.jpg', title: 'Editor', desc: 'Media, the preview and an inspector for the selected text, above a timeline with text, stickers, captions, video and audio tracks.' },
      { src: IMG + 'kd-captions.jpg', title: 'Auto captions', desc: 'Speech becomes timed captions in 130+ languages. The dialog says what it will cost and what your balance will be before you confirm.' },
      { src: IMG + 'kd-color.jpg', title: 'Advanced · Color', desc: 'Node-based grading with lift, gamma, gain and offset wheels and live scopes, for when a quick filter is not enough.' },
      { src: IMG + 'kd-script.jpg', title: 'Script to video', desc: 'Describe the video, pick a length, voice and look, and edit the scene-by-scene script before anything is generated.' },
      { src: IMG + 'kd-translate.jpg', title: 'Translate video', desc: 'Translate a video\'s speech and captions into another language, with each task\'s progress listed beside it.' },
      { phone: true, src: IMG + 'kd-tools.jpg', title: 'Mobile · All tools', desc: 'Every tool on one screen, from photo editing and auto cut to teleprompter and upscale, with Pro tools marked.' },
      { phone: true, src: IMG + 'kd-caption-style.jpg', title: 'Mobile · Caption style', desc: 'Highlight, karaoke and pop styles, highlight colour, size and position, applied to one caption or all of them.' },
      { phone: true, src: IMG + 'kd-teleprompter.jpg', title: 'Mobile · Teleprompter', desc: 'Your script scrolls as you speak and pauses when you stop, with speed and text size under your thumb.' },
      { phone: true, src: IMG + 'kd-templates.jpg', title: 'Mobile · Template feed', desc: 'Browse templates full screen, see what each uses, and swap in your own clips in one tap.' }
    ]
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
  },
  {
    slug: 'black-night', title: 'Black Night', tags: 'Web · App · Console',
    desc: 'One design language for a specialty coffee storefront, an app and an operations console.',
    platforms: ['web', 'mobile'], web: IMG + 'bn-home.jpg',
    role: 'Product Designer', year: '2026', platform: 'Web, iOS & Android',
    tools: ['Figma', 'Claude'], tech: ['Design system and tokens', 'Hugeicons', 'React prototypes', 'Arabic and English (RTL and LTR)', 'Typeface: BK (Arabic), Inter (English)'],
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
      { src: IMG + 'bn-addresses.jpg', title: 'Addresses', desc: 'Saved addresses across the Gulf with a default, and a plain note when an address is missing something it needs before it can be used.' },
      { src: IMG + 'bnc-overview.jpg', title: 'Console · Overview', desc: 'The operations console opens on the day: sales, orders, customers and average order value against the previous period, what needs attention (new orders, approvals, low stock, reviews) and sales by channel.' },
      { src: IMG + 'bnc-orders.jpg', title: 'Console · Orders', desc: 'Every order with its channel, payment, delivery and status, in eight tabs from new to returned, searchable by order number, customer, mobile or tracking number.' },
      { src: IMG + 'bnc-order.jpg', title: 'Console · Order detail', desc: 'Items with their SKU and weight, what is inside each box, the payment summary, the customer and the order\'s activity, with preparing, duplicating and cancelling one click away.' },
      { src: IMG + 'bnc-products.jpg', title: 'Console · Products', desc: 'The catalogue with type, category, price, stock, status and labels, filtered by origin, availability and approval.' },
      { src: IMG + 'bnc-product.jpg', title: 'Console · Product', desc: 'One coffee\'s record: sales, and every specification (origin, process, region, variety, body, notes, altitude) with whether it shows in the store.' },
      { src: IMG + 'bnc-codes.jpg', title: 'Console · Discount codes', desc: 'Every code with its discount, usage, period and status, including affiliate codes and campaign codes like National Day and Ramadan.' },
      { src: IMG + 'bnc-reports.jpg', title: 'Console · Reports', desc: 'Sales over time grouped by day, week or month, with refunds, discounts, delivery and VAT broken out for each day.' }
    ],
    results: [{ v: '20+', l: 'countries of origin' }, { v: '5,280 m²', l: 'roasting factory in Al Khobar' }, { v: '49', l: 'checkout states designed' }]
  },
  {
    slug: 'reko', title: 'REKO', tags: 'iOS · Android · English & Arabic',
    desc: 'Your words. Your books. Ten minutes a day. A vocabulary app for grown-ups.',
    platforms: ['mobile'], mobile: IMG + 'rk-home.jpg',
    phones: [IMG + 'rk-flashcard.jpg', IMG + 'rk-home.jpg', IMG + 'rk-reader.jpg'],
    role: 'Product Designer', year: '2026', platform: 'iOS & Android',
    tools: ['Claude'], tech: ['FSRS spaced repetition', 'Baloo Bhaijaan 2 and Rubik', 'English and Arabic (RTL)', 'Light and dark themes'],
    overview: 'REKO is a vocabulary app for grown-ups who already speak a language and want the words they actually meet, from their own uploads or from courses built on its database. Kami, the owl, is the one fixed character.',
    process: 'Each language gets its own colour so two never blur together. Lessons favour retrieval over recognition: flashcards with honest next-review dates, typed cloze, reverse cards and writing your own sentence. Streaks forgive a missed day, and there is no score and no shame.',
    solution: 'Add words by typing, pasting a list, importing a CSV, photographing text, uploading a book or pasting a link. Read your own books with new words tinted, tap a word to save it with the sentence it came from, and review in ten minutes a day.',
    screens: [
      { phone: true, src: IMG + 'rk-onboarding.jpg', title: 'Meet Kami', desc: 'Two questions and you start: the language the app speaks, then what you want to learn.' },
      { phone: true, src: IMG + 'rk-home.jpg', title: 'Home', desc: 'Today\'s path through new words, listening and grammar, with reviews due and your streak at the top.' },
      { phone: true, src: IMG + 'rk-flashcard.jpg', title: 'Flashcard', desc: 'The word in the sentence you met it in. Again, hard, good and easy show the real date of the next review.' },
      { phone: true, src: IMG + 'rk-cloze.jpg', title: 'Fill the gap', desc: 'Type the missing word, so you retrieve it rather than recognise it. Small typos count as almost, not wrong.' },
      { phone: true, src: IMG + 'rk-use-it.jpg', title: 'Use it', desc: 'Write your own sentence and get optional feedback that suggests a more natural way to say it.' },
      { phone: true, src: IMG + 'rk-reader.jpg', title: 'Book reader', desc: 'Read your own books with new words tinted, learning words underlined and known words left plain.' },
      { phone: true, src: IMG + 'rk-word-tap.jpg', title: 'Tap a word', desc: 'See what it means here, in English and Arabic, and save it with the sentence it came from.' },
      { phone: true, src: IMG + 'rk-word-card.jpg', title: 'Word card', desc: 'Where you met the word, what it goes with, false friends and when it is next due.' },
      { phone: true, src: IMG + 'rk-progress.jpg', title: 'Progress', desc: 'Words known, retention, time this week, how much of the 3,000 most common words you know, and what is coming up.' },
      { phone: true, src: IMG + 'rk-done.jpg', title: 'Done for today', desc: 'What you reviewed and learned, your recall and streak, and the choice to stop or do five more minutes.' }
    ]
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
      { phone: true, src: IMG + 'mk-splash.jpg', title: 'Splash', desc: 'The Maknoon wordmark in Arabic calligraphy on the app\'s deep teal, with soft arch lines drawn from mosque windows.' },
      { phone: true, src: IMG + 'mk-home.jpg', title: 'Home', desc: 'The next prayer with a countdown and the day\'s five times for your city, the ayah of the day, today\'s wird and the evening adhkar.' },
      { phone: true, src: IMG + 'mk-quran.jpg', title: 'Quran', desc: 'Continue where you stopped with your place in the surah, juz and page, start a khatma plan, open the mushaf or the surah index, and listen.' },
      { phone: true, src: IMG + 'mk-mushaf.jpg', title: 'Mushaf', desc: 'The Madinah mushaf page by page, with a real paper page turn.' },
      { phone: true, src: IMG + 'mk-mushaf-controls.jpg', title: 'Reading controls', desc: 'Tap the page for help, layers, highlighting, focus mode and the index, with voice recitation one tap away.' },
      { phone: true, src: IMG + 'mk-ayah.jpg', title: 'Ayah of the day', desc: 'The ayah with audio and translation, its reviewed tafsir with the source and licence, more tafsir to download, and the meaning in English and French.' },
      { phone: true, src: IMG + 'mk-hadith.jpg', title: 'Hadith', desc: 'The chain of narration, then the text in large type, its reference in Sahih Muslim, the grading, and the source with its licence.' },
      { phone: true, src: IMG + 'mk-library.jpg', title: 'Islamic library', desc: 'Tafsir, hadith, fiqh, creed, seerah, adhkar and Arabic, each shelf with how much of it is in the app.' },
      { phone: true, src: IMG + 'mk-search.jpg', title: 'Search', desc: 'Root-aware search across the Quran, hadith, tafsir and fiqh: one root finds every form of a word without the diacritics, with the ayat that use it.' },
      { phone: true, src: IMG + 'mk-fiqh.jpg', title: 'A fiqh question', desc: 'The four schools side by side with your school first, the evidence and the cause of disagreement, each with its reference.' },
      { phone: true, src: IMG + 'mk-zakat.jpg', title: 'Zakat calculator', desc: 'Nisab by gold or silver, the assets a full year has passed on, and 2.5% worked out in plain, tested code.' }
    ],
    results: [{ v: '6,236', l: 'ayat, verified against the source' }, { v: '0', l: 'accounts, ads or trackers' }, { v: '4', l: 'schools of fiqh, side by side' }]
  }
];
