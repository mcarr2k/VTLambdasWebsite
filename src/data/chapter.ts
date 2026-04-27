export const mission =
  'To guide men on a lifelong discovery of authenticity and personal growth.';

export const vision =
  'A world where Lambda men live authentic, fulfilling lives and contribute through the pursuit of their noble purpose.';

export const coreValues: Array<{ name: string; gloss: string }> = [
  { name: 'Authenticity', gloss: 'Be who you are. Without performance.' },
  { name: 'Courageous Leadership', gloss: 'Lead when it costs you something.' },
  { name: 'Cultural Heritage', gloss: 'Honor where you come from. Build what comes next.' },
  { name: 'Love', gloss: 'For brothers, family, and community — shown in action.' },
  { name: 'Wisdom', gloss: 'Know yourself. Then know what matters.' },
];

export const founding = {
  national: {
    date: 'February 25, 1981',
    place: 'University of California, Los Angeles',
    note: 'The first nationally recognized Asian-American interest fraternity in the United States.',
  },
  chapter: {
    date: 'December 21, 2003',
    place: 'Virginia Polytechnic Institute and State University',
    note: 'Six men founded Beta Zeta with the goal of challenging diversity standards on campus and promoting cultural heritage and academic excellence.',
    founders: ['Jonathan Keam', 'Long Tran', 'Kevin Lieu', 'Allen Chang', 'Samuel Lee', 'Daniel Wai'],
  },
} as const;

export type EBoardMember = {
  name: string;
  position: string;
  linkedin?: string;
  instagram?: string;
};
export const eboard: EBoardMember[] = [
  {
    name: 'Kevin Wang',
    position: 'President',
    linkedin: 'https://www.linkedin.com/in/kevin-wang2/',
    instagram: 'https://www.instagram.com/kevinn.wng/',
  },
  {
    name: 'Jaden Phu',
    position: 'Vice President External',
  },
  {
    name: 'Aayan Chaturvedi',
    position: 'Vice President Internal',
    linkedin: 'https://www.linkedin.com/in/aayan-chaturvedi/',
    instagram: 'https://www.instagram.com/aayan_chaturvedi/',
  },
  {
    name: 'Evan Cardona',
    position: 'Treasurer',
    linkedin: 'https://www.linkedin.com/in/evan-cardona-34007b292/',
    instagram: 'https://www.instagram.com/cardona.evan/',
  },
  {
    name: 'Ethan Melevo',
    position: 'Secretary',
    linkedin: 'https://www.linkedin.com/in/ethan-melevo-24460b328/',
    instagram: 'https://www.instagram.com/ethan.melevo/',
  },
];

export type PledgeClass = { name: string; brothers: string[] };
export const roster: PledgeClass[] = [
  { name: 'Charter', brothers: ['Jonathan Keam', 'Long Tran', 'Kevin Lieu', 'Allen Chang', 'Samuel Lee', 'Daniel Wai'] },
  { name: 'Alpha', brothers: ['Hubert Liu', 'Mark Yong'] },
  { name: 'Beta', brothers: ['Gerald Dykeman'] },
  { name: 'Gamma', brothers: ['Jovian Ho', 'Alexander Kwon'] },
  { name: 'Delta', brothers: ['Yao Chen', 'Andy Wong'] },
  { name: 'Epsilon', brothers: ['Andrew Ton', 'Daniel Vu', 'Joe Zhang'] },
  { name: 'Zeta', brothers: ['Larry Le', 'Daniel Bryant'] },
  { name: 'Eta', brothers: ['Chris Orduno', 'Joe Tran', 'Roberto Ripp'] },
  { name: 'Theta', brothers: ['Scott Cho', 'Johnny Sor', 'Andy Park'] },
  { name: 'Iota', brothers: ['Daniel Kim'] },
  { name: 'Kappa', brothers: ['Eric Estrada', 'Ken Tran'] },
  { name: 'Mu', brothers: ['Kyle To', 'Aziz Yuzupov', 'Lawrence Ho', 'Jae Choi', 'Jameel McMillan', 'David Lee'] },
  { name: 'Nu', brothers: ['Ryan Noble', 'Brandon Kang'] },
  { name: 'Xi', brothers: ['Luis Moran'] },
  { name: 'Omicron', brothers: ['Zachary Lew', 'Conor Doherty'] },
  { name: 'Pi', brothers: ['Babak Senfi'] },
  { name: 'Rho', brothers: ['Andy Jin', 'Kenny Nguyen'] },
  { name: 'Sigma', brothers: ['Drew Fitzgibbon'] },
  { name: 'Tau', brothers: ['Sam Browing', 'Quan Nguyen'] },
  {
    name: 'Upsilon',
    brothers: [
      'Alex Stas',
      'Steven Soupaphanh',
      'Ian Wong',
      'Michael Chin',
      'Alan Varnishung',
      'Hoan Pham',
      'Matthew Ly',
      'An Le',
    ],
  },
  { name: 'Phi', brothers: ['Mitchell Kita', 'Caleb Yu', 'Kevin Yang'] },
  { name: 'Chi', brothers: ['Jason Ho', 'Jeff Kedda', 'Stephen Jin'] },
  { name: 'Psi', brothers: ['Kyle Takeuchi', 'Temuulen Batbold'] },
  {
    name: 'Alpha Alpha',
    brothers: [
      'Thomas Harrison',
      'Brendon Li',
      'Ethan Chung',
      'Abhineesh Khadka',
      "Alex O'Brien",
      'Brian Mowad',
      'Key Xu',
      'Ryan Kwak',
    ],
  },
  {
    name: 'Alpha Beta',
    brothers: ['Arnav Kachroo', 'Andrew Saunders', 'Ryan Pham', 'Tony Phonemany', 'Gustavo Carvalho'],
  },
  {
    name: 'Alpha Gamma',
    brothers: [
      'Andrew Dwiwiyanto',
      'Aayan Chaturvedi',
      'William Bae',
      'Steven Monsanto',
      'Dylan Todas',
      'Kaung Myat Khant',
      'Kevin Wang',
    ],
  },
  { name: 'Alpha Delta', brothers: ['Jin Lu', 'Alan Cai', 'Evan Cardona'] },
  {
    name: 'Alpha Epsilon',
    brothers: [
      'Jack Craddock',
      'Sunny Chadha',
      'Daniel Guo',
      'Hugh Cameron',
      'Sukrit Pandita',
      'Blake Jewell',
      'Elbek Sattarov',
    ],
  },
  { name: 'Alpha Zeta', brothers: ['Raymond Lin'] },
  {
    name: 'Alpha Eta',
    brothers: ['Michael Carrasquillo', 'Ethan Melevo', 'George Ehrsam', 'Arturo Soriano', 'Cedric Li'],
  },
  { name: 'Alpha Theta', brothers: ['Indie Viriyakul', 'Luke Montfort', 'Jaden Phu'] },
  {
    name: 'Alpha Iota',
    brothers: ['Akhil Bandla', 'Ian Lee', 'Christian Truong', 'Renn Blanco', 'James Greear'],
  },
];

export const totalBrothers = roster.reduce((n, c) => n + c.brothers.length, 0);
