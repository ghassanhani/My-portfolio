// To add a work: copy one entry and change it. Leave out anything you don't have:
// the case study only shows sections that have content.
// platforms: which tabs it appears under ("web", "mobile" or both).
// web / mobile: screenshots shown in a browser frame and a phone frame.
// phones: three app screens shown side by side on the card and case study hero, for app-only work.
// The card shows the web screenshot in a browser frame, or the mobile one in a phone frame
// when there is no web screenshot or coverFrame is 'phone'.
// webScreens / mobileScreens: more screens inside the case study ({ src, caption }).
// mobileGroups: rows of three phone screens, each with a caption.
// tags: the label above the case study title.
// role, timeline, team, overview, problem, process, solution, outcome, results: case study text.
var IMG = 'assets/works/';
window.WORKS = [
  {
    slug: 'black-night', title: 'Black Night', tags: 'Web · App · Console',
    desc: 'One design language for a storefront, an app and an operations console.',
    platforms: ['web', 'mobile'], web: IMG + 'black-night-basket.jpg',
    role: 'Product Designer', timeline: '2026', tools: 'Figma',
    overview: 'Black Knight is a Saudi specialty coffee roastery. I designed the shopping experience across its storefront, app and operations console, in Arabic first and in English.',
    process: 'Every flow was mapped state by state before handoff. Checkout alone covers 49 states, from loading an address and a rejected discount code to a declined instalment plan and an expired session, so engineering never has to guess what a screen does.',
    solution: 'The basket shows what is inside each box and how far you are from free delivery. Checkout runs in three steps, with mada, card, Apple Pay, Tabby and Tamara, and lets you spend loyalty points before you pay. In the account, each order shows its status and what is still due, and the wishlist sends saved coffees straight to the basket.',
    webScreens: [
      { src: IMG + 'black-night-checkout.jpg', caption: 'Checkout, step 3: payment methods, discount code and loyalty points.' },
      { src: IMG + 'black-night-orders.jpg', caption: 'My orders: what each order is waiting for, and what is still due.' },
      { src: IMG + 'black-night-wishlist.jpg', caption: 'The wishlist, one tap from the basket.' }
    ]
  },
  {
    slug: 'gymco', title: 'Gymco', tags: 'iOS · Android',
    desc: 'Diet and training for lifters: log a meal in seconds, train to a plan, and keep a streak that rewards consistency, not starvation.',
    platforms: ['mobile'], mobile: IMG + 'gymco-today.jpg',
    phones: [IMG + 'gymco-write.jpg', IMG + 'gymco-today.jpg', IMG + 'gymco-workout.jpg'],
    overview: 'Gymco brings food and training into one app for lifters, on iOS and Android, in English, Arabic and Spanish.',
    problem: 'Lifters end up juggling two apps: one for food and one for training. Most food trackers make logging slow (search, scroll, guess grams), reward eating less over eating well, and treat Arabic as a mirrored afterthought. Training apps rarely know what you ate, and none of them adjust your targets based on what your body actually did.',
    process: 'Every screen is built from one component kit drawn from the design prototype, so design and code don\'t drift. Arabic is designed in, not mirrored: IBM Plex Sans Arabic sits alongside Urbanist, and the serif accent word becomes bold lime sans. Going over or under on calories reads neutral, never red: the app coaches and doesn\'t shame. Losing too fast and genuine stalls each get their own screens with real options.',
    solution: 'You can type or say a meal the way you would describe it, scan a barcode or photograph the plate, and the AI never guesses grams. Training reads as a day, not a spreadsheet: a week strip walks your plan and the live workout runs on a custom keypad. A weekly check-in adapts your targets from what your body actually did, and streaks count logging and training as planned, never eating less.',
    mobileGroups: [
      { screens: [IMG + 'gymco-iron.jpg', IMG + 'gymco-iron-tip.jpg', IMG + 'gymco-iron-program.jpg'], caption: 'Iron, the AI coach: what it can do, a daily tip and a program built from your numbers.' },
      { screens: [IMG + 'gymco-progress.jpg', IMG + 'gymco-measure.jpg', IMG + 'gymco-strength.jpg'], caption: 'Progress: trend weight, body measurements and strength over time.' },
      { screens: [IMG + 'gymco-awards.jpg', IMG + 'gymco-fasting.jpg', IMG + 'gymco-ramadan.jpg'], caption: 'Awards for consistency, the fasting timer and Ramadan mode.' }
    ],
    results: [{ v: '3', l: 'languages, Arabic designed right to left' }, { v: '2,000', l: 'exercises in the library' }, { v: '120 kcal', l: 'most a weekly check-in moves your target' }]
  },
  {
    slug: 'diwan-plus', title: 'Diwan+', tags: 'Web app · English & Arabic',
    desc: 'Redesigning the entire experience of the platform.',
    platforms: ['web'], web: IMG + 'diwan-web.jpg',
    overview: 'Diwan+ is a platform where brands run influencer campaigns, from the brief to the results. Brands, influencers, reports and payments sit in one place, in English and Arabic.',
    solution: 'Each campaign opens on an overview of its performance: GMV, revenue, payout, orders and the influencers behind them, with the brief and its links and codes beside it. From there the team reviews applications, assigns influencers and follows each submission from script to published content.',
    webScreens: [
      { src: IMG + 'diwan-campaigns.jpg', caption: 'All campaigns, filtered by status and campaign type.' },
      { src: IMG + 'diwan-influencers.jpg', caption: 'The influencers on a campaign, with links, codes, clicks, conversions and revenue.' },
      { src: IMG + 'diwan-applications.jpg', caption: 'Reviewing applications from influencers who want to join a campaign.' },
      { src: IMG + 'diwan-submission.jpg', caption: 'Following a submission from script to content.' }
    ]
  },
  {
    slug: 'ifynx', title: 'iFynx', tags: 'Website · English & Arabic',
    desc: 'Website for a digital product studio across MENA and Europe.',
    platforms: ['web'], web: IMG + 'ifynx-web.jpg',
    overview: 'iFynx is a digital product studio that designs and engineers products, platforms and brands for startups and enterprises across MENA and Europe. Its website explains the studio\'s services and industries, shows its work through case studies, and runs a blog and an AI solution advisor.',
    solution: 'I designed all 39 pages on one design canvas, in English and Arabic, then turned them into a linked WordPress theme and a plain HTML version of the same site.',
    webScreens: [
      { src: IMG + 'ifynx-web-4.jpg', caption: 'Selected work, filtered by discipline.' },
      { src: IMG + 'ifynx-web-2.jpg', caption: 'A case study page: Sary, one design system for a B2B marketplace.' },
      { src: IMG + 'ifynx-web-3.jpg', caption: 'The Arabic home page, right to left.' }
    ],
    results: [{ v: '39', l: 'pages, all linked' }, { v: '2', l: 'languages, English and Arabic' }, { v: '2', l: 'builds: WordPress theme and static HTML' }]
  },
  {
    slug: 'seera', title: 'Seera', tags: 'Website · Waitlist',
    desc: 'From Gaza. Built in Barcelona. Waitlist site for Chapter 01.',
    platforms: ['web', 'mobile'], web: IMG + 'seera-web.jpg', mobile: IMG + 'seera-mobile.jpg',
    overview: 'Seera (سيرة) is a clothing label: from Gaza, built in Barcelona. Chapter 01 is built in exile and worn with memory. The site is a single page where people join the waitlist for the first drop.',
    solution: 'One page with a header, a Chapter 01 hero and a sign-up form that turns into a success panel, designed for desktop and phone. Type is Inter Tight and Instrument Serif with IBM Plex Sans Arabic for the wordmark and Arabic text. The form never loses an email silently: it shows a clear error when sign-ups can\'t be saved, and treats someone already on the list like a new sign-up.'
  }
];
