// To add a work: copy one entry and change it. Leave out anything you don't have:
// the case study only shows sections that have content.
// platforms: which tabs it appears under ("web", "mobile" or both).
// web / mobile: screenshots shown in a browser frame and a phone frame.
// The card shows the web screenshot in a browser frame, or the mobile one in a phone frame
// when there is no web screenshot or coverFrame is 'phone'.
// webScreens / mobileScreens: more screens inside the case study ({ src, caption }).
// tags: the label above the case study title.
// role, timeline, team, overview, problem, process, solution, outcome, results: case study text.
var IMG = 'assets/works/';
window.WORKS = [
  {
    slug: 'black-night', title: 'Black Night', tags: 'Web · App · Console',
    desc: 'One design language for a storefront, an app and an operations console.',
    platforms: ['web', 'mobile'], web: IMG + 'black-night-web.jpg',
    role: 'Product Designer', timeline: '2026', tools: 'Figma'
  },
  {
    slug: 'gymco', title: 'Gymco', tags: 'iOS · Android · Web',
    desc: 'Diet and training for lifters. App, website and Control Center.',
    platforms: ['web', 'mobile'],
    web: IMG + 'gymco-web.jpg', mobile: IMG + 'gymco-today.jpg',
    overview: 'Gymco is a diet and training app for lifters: log food in seconds, train with a plan and keep a streak worth protecting. It is one Flutter codebase for iOS and Android, in English, Arabic (fully right to left) and Spanish, with a website and a Control Center beside it.',
    solution: 'Every screen is drawn from one component kit: the same icons, cards, chips, sheets, keypad, week strip and tab bar, with the same sizes, radii and colours. Food can be logged six ways, including typing a meal the way you would say it or photographing the plate and confirming each food it finds. An optional account backs up the whole diary, and the app never shows ads or sells data.',
    webScreens: [{ src: IMG + 'gymco-web-2.jpg', caption: 'The Gymco website: six ways to log food, 870+ exercises and three languages.' }],
    mobileScreens: [IMG + 'gymco-l1.jpg', IMG + 'gymco-r1.jpg', IMG + 'gymco-l2.jpg'],
    mobileCaption: 'Logging food, the training plan and a workout in progress.',
    results: [{ v: '6', l: 'ways to log food' }, { v: '870+', l: 'exercises with how-tos' }, { v: '3', l: 'languages, Arabic fully right to left' }]
  },
  {
    slug: 'diwan-plus', title: 'Diwan+', tags: 'Website',
    desc: 'Redesigning the entire experience of the platform.',
    platforms: ['web'], web: IMG + 'diwan-web.jpg'
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
