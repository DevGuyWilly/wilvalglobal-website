/**
 * Single source of truth for business details.
 * Anything wrapped in [brackets] is a placeholder WilVal still needs to confirm.
 */

export const company = {
  name: 'WilVal Global Resources Ltd',
  slogan: 'Keeping the environment safe from nylon waste.',
  ceo: 'Ngo Sarah Pam Dagah',
  address: { line1: 'Kuru Jantar, Jos', line2: 'Plateau State, Nigeria' },
  phones: ['0805 110 4995', '0809 685 7948'],
  phonesIntl: ['+234 805 110 4995', '+234 809 685 7948'],
  whatsappIntl: '2348051104995',
  email: 'info@wilvalglobal.com',
  domain: 'www.wilvalglobal.com',
  facebook: 'https://www.facebook.com/wilvalglobal',
  rcNumber: null as string | null, // CAC/RC registration number: add when available
  timezone: 'WAT (UTC+1)',
  yardHours: '[Mon–Sat, 8am–5pm]',
  pickupMinimumKg: '[100]',
  partnerReplyDays: '[2]',
  mapsUrl: 'https://maps.google.com/?q=Kuru+Jantar+Jos+Plateau+State',
} as const;

/** Ngo Sarah Pam Dagah's own words, from her public Facebook posts. */
export const ceoQuotes = {
  mission: 'This is what I do: the 3Rs of reduce, reuse, recycle, as I solve the menace of nylon waste on our environment and landfills.',
  fiveDs: 'At WilVal Global Resources I am dedicated, disciplined, diligent and determined, having made the decision to succeed. Those are my 5Ds of success.',
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${company.whatsappIntl}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, '').replace(/^0/, '+234')}`;

/** Rates in naira per kilogram. Set `confirmed: true` once WilVal publishes real prices. */
export const rates = {
  confirmed: false,
  sachet: 100,
  nylon: 80,
} as const;

export type Material = 'sachet' | 'nylon';

export const materials: { id: Material; short: string; label: string }[] = [
  { id: 'sachet', short: 'Sachets', label: 'Pure-water sachets' },
  { id: 'nylon', short: 'Nylon & polythene', label: 'Nylon & polythene' },
];

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/#what', label: 'What we do' },
  { to: '/polythene', label: 'Polythene' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export const bagTypes = [
  { name: 'Shopping bags', use: 'Carrier bags for shops, supermarkets and markets.' },
  { name: 'Money bags', use: 'Strong bags for banks and cash handling.' },
  { name: 'Dustbin bags', use: 'Bin liners for homes, offices and estates.' },
  { name: 'Cosmetic bags', use: 'Small bags for beauty and pharmacy shops.' },
  { name: 'Souvenir bags', use: 'Bags for weddings, parties and events.' },
  { name: 'Plantation bags', use: 'Nursery bags for seedlings and farms.' },
];

export const partnerTypes = [
  {
    key: 'brand',
    short: 'A brand or producer',
    shortDetail: 'meeting plastic take-back goals in Nigeria',
    eyebrow: 'Brands and producers',
    title: 'Recover the packaging you put on the market',
    body: 'Work with us on take-back and recovery of sachet and film packaging in Nigeria.',
    option: 'Brand or producer: packaging recovery',
  },
  {
    key: 'ngo',
    short: 'A development partner or NGO',
    shortDetail: 'funding waste and livelihood work',
    eyebrow: 'Development partners and NGOs',
    title: 'Fund waste and livelihood programmes',
    body: "Grow our women's group, youth and school programmes, with reporting on what your funding achieves.",
    option: 'Development partner or NGO',
  },
  {
    key: 'investor',
    short: 'An investor or equipment partner',
    shortDetail: 'helping us scale processing',
    eyebrow: 'Investors and equipment partners',
    title: 'Scale our processing',
    body: 'Help us add capacity in Jos and take the model to new locations.',
    option: 'Investor or equipment partner',
  },
  {
    key: 'buyer',
    short: 'A bulk polythene buyer',
    shortDetail: 'sourcing bags made from recovered material',
    eyebrow: 'Bulk polythene buyers',
    title: 'Source bags from Wilval Polythene',
    body: 'Plain or printed bags in volume, for retail, agriculture and events.',
    option: 'Bulk polythene buyer',
  },
] as const;

/**
 * Impact figures.
 * Measured: over 10 tonnes of low- and high-density nylon recycled from 1 to 24 August 2019.
 * Estimates (agreed with WilVal, Oct 2026): ~2,650 days of operation since late July 2019. At the August 2019
 * pace that would be ~1,100 t; we publish half of that (500+ t) to stay conservative.
 * Money paid uses ₦5,000 per 50 kg (₦100/kg): 500,000 kg × ₦100 = ₦50m.
 */
export const impact = [
  { value: '2019', label: 'Recycling in Jos since' },
  { value: '500+ t', label: 'Nylon recycled (est.)' },
  { value: '₦50m+', label: 'Paid to collectors (est.)' },
  { value: '300+', label: 'Collectors paid (est.)' },
];

/** The one measured figure, quoted from WilVal's own post. */
export const milestoneFact = 'Over 10 tonnes of low- and high-density nylon recycled in 24 days, 1 to 24 August 2019.';

/** Community estimates for a city the size of Jos (agreed with WilVal as estimates). */
export const communityStats = {
  womensGroups: '20+',
  visits: '30+',
  youthCollectors: '100+',
};
