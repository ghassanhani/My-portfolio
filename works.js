// To add a work: copy one entry and change it.
// platforms: which tabs it appears under ("web", "mobile" or both).
// cover:   one image used for the card on every tab, so all covers look the same.
// web / mobile: screenshots for the case study hero ("" shows an empty frame).
// webScreens / mobileScreens: extra screens shown inside the case study.
// tags: the label above the case study title.
// role, timeline, team, overview, problem, process, solution, outcome, results: case study text.
window.WORKS = [
  { slug: 'black-night', title: 'Black Night', tags: 'Web · App · Console', desc: 'One design language for a storefront, an app and an operations console.', platforms: ['web', 'mobile'], cover: '', web: '', mobile: '', role: 'Product Designer', timeline: '2026' },
  { slug: 'gymco', title: 'Gymco', tags: 'iOS · Android · Web', desc: 'Diet and training for lifters. App, website and Control Center.', platforms: ['web', 'mobile'], cover: '', web: '', mobile: '',
    overview: 'Gymco is a diet and training app for lifters, built as one Flutter codebase for iOS and Android in English, Arabic (right to left) and Spanish, alongside a website and a Control Center.',
    solution: 'Every screen comes from one component kit, with the same icons, cards, chips, sheets, keypad, week strip and tab bar. Meals can be logged by typing them the way you would say them, or by photographing the plate and confirming the foods it finds. An optional account backs up the whole diary.' },
  { slug: 'diwan-plus', title: 'Diwan+', tags: 'Website', desc: 'Redesigning the entire experience of the platform.', platforms: ['web'], cover: '', web: '', mobile: '' },
  { slug: 'rageh', title: 'RAGeh', tags: 'Web app · Console', desc: 'Retrieval-augmented answers for one of the largest Islamic Q&A archives.', platforms: ['web'], cover: '', web: '', mobile: '' },
  { slug: 'ifynx', title: 'iFynx', tags: 'Website', desc: 'Website for a digital product studio. Born to build, built to rise.', platforms: ['web'], cover: '', web: '', mobile: '',
    overview: 'iFynx is a digital product studio. I designed its website, covering industries, services, works, case studies, a blog and an AI solution advisor, in English and Arabic.',
    solution: 'The design canvas was turned into a 39-page WordPress theme with every page linked, plus a plain HTML version of the same site.' },
  { slug: 'seera', title: 'Seera', tags: 'Website', desc: 'Waitlist site for Seera. From Gaza, built in Barcelona.', platforms: ['web', 'mobile'], cover: '', web: '', mobile: '',
    overview: 'A one-page waitlist for Seera, designed for desktop and mobile in English and Arabic.',
    solution: 'Built with Next.js from the design canvas, with self-hosted Inter Tight, Instrument Serif and IBM Plex Sans Arabic, and a waitlist that handles new, repeat and failed sign-ups clearly.' },
  { slug: 'bitesize', title: 'Bitesize', tags: 'App · Design system', desc: 'Track what you eat, one bite at a time. Simple, friendly and fun to use.', platforms: ['mobile'], cover: '', web: '', mobile: '' },
  { slug: 'thiqal-icons', title: 'Thiqal Icons', tags: 'Icon library', desc: 'A shared icon library for Thiqal products, from Figma to code.', platforms: ['web'], cover: '', web: '', mobile: '',
    overview: 'A shared library of icons used across Thiqal applications, so every product speaks the same visual language.',
    solution: 'Icons are drawn in Figma and generated into a typed package that apps install directly, documented in Storybook.' }
];
