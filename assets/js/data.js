/* Shop facts, menu, photos and reviews.
   Facts, reviews and photos are taken from the LOT. coffee boutique listing on
   Google Maps (see README). Prices are indicative — edit them here. */

const SHOP = {
  name: 'LOT. coffee boutique',
  street: 'Voldersgracht 6',
  postcode: '2611 ET',
  city: 'Delft',
  country: 'Netherlands',
  rating: 4.9,
  reviewCount: 361,
  priceRange: '€1–10',
  mapsUrl: 'https://maps.app.goo.gl/',
  mapsPlace:
    'https://www.google.com/maps/place/LOT.+coffee+boutique/@52.0118456,4.3582259,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5b5c43c5a85a9:0xb2373754a8df7b59!8m2!3d52.0118883!4d4.3581667!16s%2Fg%2F11k6ppmjj7',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=LOT.+coffee+boutique%2C+Voldersgracht+6%2C+2611+ET+Delft&destination_place_id=ChIJqYVaPMS1xUcRWXvfqFQ3N7I',
  reviewsUrl:
    'https://www.google.com/maps/place/LOT.+coffee+boutique/@52.0118456,4.3582259,17z/data=!4m8!3m7!1s0x47c5b5c43c5a85a9:0xb2373754a8df7b59!8m2!3d52.0118883!4d4.3581667!9m1!1b1!16s%2Fg%2F11k6ppmjj7',
  mapEmbed:
    'https://www.google.com/maps?q=LOT.+coffee+boutique,+Voldersgracht+6,+2611+ET+Delft&z=17&output=embed',
};

/* Opening hours in minutes from midnight, keyed by JS getDay() (0 = Sunday).
   null = closed. Source: Google Maps listing. */
const HOURS = {
  0: { open: 10 * 60, close: 15 * 60 },
  1: { open: 8 * 60, close: 14 * 60 },
  2: null,
  3: { open: 8 * 60, close: 14 * 60 },
  4: null,
  5: { open: 8 * 60, close: 14 * 60 },
  6: null,
};

const PHOTO_BASE = 'https://lh3.googleusercontent.com/gps-cs-s/';

/* Photo ids from the listing. Sizes are appended at render time. */
const PHOTOS = [
  {
    id: 'AHRPTWkxLShsfJk0jI5cWbxXU5_6A5GhBo02Poq5vHPxBMHZJlnWrc-JZWGJ-9YtDKhzztfAlxOAxBXgALCLxcQhYe1qKxXy-wbMlQBo1cA8QCeVFLGR8A45UmsMPKhqLfBCWsF7ZXRWFA',
    alt: { en: 'The LOT. shopfront on Voldersgracht in central Delft', nl: 'De gevel van LOT. aan de Voldersgracht in hartje Delft' },
    tall: true,
  },
  {
    id: 'AHRPTWlQDRkDqmg3pqa2u1hDpy2mUH_KDPUSVRlvqLXg7YyQQy1rKiy16BZkApbjoBfhaU9Ux6tpag04ou9390Plm98qbt08SUg8pa8EMHnyjpo3BWCCaPK2-z8ITq1RUquZwNKkHtFB',
    alt: { en: 'Cappuccino and a pastry on a small plate, seen from above', nl: 'Cappuccino en gebak op een bordje, van bovenaf' },
  },
  {
    id: 'AHRPTWl8_ldLZCpudx9j5or2e13DcAd9Io_Hrr4SYsQ6-H-mRe74pEgOjeBKnnzWJVDRagpxpuWdoKSKtnEj0nC0eEKPZ3zLlq5pU4cL9WIR8hNMVaj1dQ8Ipenbp9uP7GQSOldDaN7j9w',
    alt: { en: 'Iced latte held up in front of the shop window', nl: 'IJskoffie voor de etalage van de zaak' },
    tall: true,
  },
  {
    id: 'AHRPTWke1825CSzH6xpEe3ALYx96GtO86ANwsS0gKIImyd8g5lZVBVw6rSASg5WMhMmAa0Bc81C8sj3QPZQvhdCOF1nAMb9jXvj71iUZokQ3sQRCeRdr4fDfB8hSk9gbDcwh8P9w2xVo',
    alt: { en: 'Two flat whites on a table by the canal', nl: 'Twee flat whites op tafel aan de gracht' },
  },
  {
    id: 'AHRPTWlMzV0DiojwnoYc0QVdaoTUayf8AFFL49RlY0RAffa1jH8jO3Ot_0dC-zfopEIkwHwVGEmNX8Rpd2uE9wWvouRAzJ7y6Mohs1PDVzTTqExnL1Sam43bIs9oFhj1ba4zx2c3evv1c6zsWp3p',
    alt: { en: 'Coffee, water and a cookie on a tray, guests on the terrace', nl: 'Koffie, water en een koekje op een dienblad, gasten op het terras' },
    tall: true,
  },
  {
    id: 'AHRPTWlZekmm1ZBTkbp70BbTl08Zc4Fx7IZZD2tlxzis4G5NfBoZxK_R7n7CYz9rYA-PeCcA3dg6s2qttpJusdcxMufKmgKHsYas25dFCllVhWjXqhcDTNYbtFoaA-fpFiZ3wehvGaOK',
    alt: { en: 'Latte art in a glass cup with a glass of water', nl: 'Latte art in een glazen kopje met een glas water' },
  },
  {
    id: 'AHRPTWmTN1kolYt3kRGcxkRjOB3pCf6c-rZbR7PTt_NnCNBrqxgAqJwb4egJ34qu4poj5J0zrWG_zYARAkG3fvFky5rLDfZzUiGU_kCSy9KXSDeWUNDmcLrbLR3by0gXic4MVx-NI8qA',
    alt: { en: 'Filter coffee in a glass, catching the morning light', nl: 'Filterkoffie in een glas in het ochtendlicht' },
  },
  {
    id: 'AHRPTWlvy9ZQn_hB4g78Xec4Kk35ME_2izEcdwhPumMrU_q-G87xZX2h5ZAmSY808Xn5TSAHgloCJvJHtW51zdApiIoBkvyyp4wbfogbID76zQZ6NXdWjTKsCmLOKhXAg1KIkWTg39Pd',
    alt: { en: 'Inside: white shelves with beans and brewing kit, plants, a long bench', nl: 'Binnen: witte schappen met bonen en brouwspullen, planten, een lange bank' },
    wide: true,
  },
  {
    id: 'AHRPTWm3hRuZTjJi-hBBzBzpqlk1VBRi0r2oWrkanHTG_Ir6UuIuuuU0w72WoKoR2Ra4txuYFtDSfdhjqYMgpG2ot-LXLzHTJb2uFOU3FGEjandEayNsjtYlzIslzjOXirg5SzCGBpI5',
    alt: { en: 'Cappuccino with latte art next to a glass of water', nl: 'Cappuccino met latte art naast een glas water' },
    tall: true,
  },
  {
    id: 'AHRPTWlPa8yOVEEYUtqGj8wbAOKTNhmjaKwDYKP8Rl1YOgJ1cA_1Q_yHvgf_kDKNBn0Ll-psvnCE4svAbcOOXDAPFjwugWCp_G4Vv60duUWboEArfDdB-AsNfqIlSjNmaWkNhjHQFa4',
    alt: { en: 'Cold brew served over ice in a LOT. cup', nl: 'Cold brew op ijs in een LOT.-beker' },
  },
  {
    id: 'AHRPTWmSr7ZbXFfY50QGZ5xz6B4FoqWOqGMBQY5_9er9ALVkNvWXA9xtF12VWawqOcnO8K1I0F9kdjaqEehfBBHF5fs0sNsI9szZu8GvMSegvqLfZz11kABiQa76Tg2P_CTw0J4Q6WYs24AfZIlW',
    alt: { en: 'The counter, with bunting and a vase of flowers', nl: 'De toonbank, met vlaggetjes en een vaas bloemen' },
    wide: true,
  },
];

const HERO_PHOTO = PHOTOS[0];

/* Menu. Prices in euros — indicative, edit freely. */
const MENU = [
  {
    id: 'espresso',
    name: { en: 'Espresso bar', nl: 'Espressobar' },
    note: { en: 'Pulled on our house blend. Oat, soy or whole milk — no charge.', nl: 'Gezet met onze huisblend. Haver-, soja- of volle melk — zonder toeslag.' },
    items: [
      { id: 'espresso', name: { en: 'Espresso', nl: 'Espresso' }, price: 2.8, desc: { en: 'Short, fruity, a small glass of water alongside', nl: 'Kort, fruitig, met een glaasje water erbij' } },
      { id: 'doppio', name: { en: 'Doppio', nl: 'Doppio' }, price: 3.3, desc: { en: 'Double shot for the serious mornings', nl: 'Dubbele shot voor de serieuze ochtenden' } },
      { id: 'macchiato', name: { en: 'Macchiato', nl: 'Macchiato' }, price: 3.0, desc: { en: 'Espresso, a spoon of milk foam', nl: 'Espresso met een lepel melkschuim' } },
      { id: 'cortado', name: { en: 'Cortado', nl: 'Cortado' }, price: 3.4, desc: { en: 'Equal parts espresso and warm milk', nl: 'Gelijke delen espresso en warme melk' } },
      { id: 'flat-white', name: { en: 'Flat white', nl: 'Flat white' }, price: 4.2, desc: { en: 'Silky microfoam, double ristretto', nl: 'Zijdezacht schuim, dubbele ristretto' }, popular: true },
      { id: 'cappuccino', name: { en: 'Cappuccino', nl: 'Cappuccino' }, price: 3.8, desc: { en: 'Smooth and bold, never bitter', nl: 'Rond en vol, nooit bitter' } },
      { id: 'cafe-latte', name: { en: 'Café latte', nl: 'Café latte' }, price: 4.0, desc: { en: 'Long, milky, easy', nl: 'Lang, melkig, makkelijk' }, popular: true },
      { id: 'americano', name: { en: 'Americano', nl: 'Americano' }, price: 3.4, desc: { en: 'Espresso lengthened with hot water', nl: 'Espresso aangelengd met heet water' } },
      { id: 'mocha', name: { en: 'Mocha', nl: 'Mocha' }, price: 4.6, desc: { en: 'Espresso, dark chocolate, steamed milk', nl: 'Espresso, pure chocolade, gestoomde melk' } },
    ],
  },
  {
    id: 'filter',
    name: { en: 'Filter & slow', nl: 'Filter & slow' },
    note: { en: 'Ask what is on the brew bar today — it changes with the roast.', nl: 'Vraag wat er vandaag op de brewbar staat — dat wisselt per branding.' },
    items: [
      { id: 'batch', name: { en: 'Batch brew', nl: 'Batch brew' }, price: 3.2, desc: { en: 'Today’s filter, ready to pour', nl: 'De filterkoffie van vandaag, zo ingeschonken' } },
      { id: 'v60', name: { en: 'Hand brew — V60', nl: 'Handfilter — V60' }, price: 4.8, desc: { en: 'Single origin, brewed to order, about six minutes', nl: 'Single origin, vers gezet, zo’n zes minuten' }, popular: true },
      { id: 'cold-brew', name: { en: 'Cold brew', nl: 'Cold brew' }, price: 4.2, desc: { en: 'Steeped overnight, served over ice', nl: 'Een nacht getrokken, geserveerd op ijs' } },
      { id: 'iced-latte', name: { en: 'Iced latte', nl: 'IJslatte' }, price: 4.5, desc: { en: 'Espresso, cold milk, plenty of ice', nl: 'Espresso, koude melk, veel ijs' }, popular: true },
      { id: 'espresso-tonic', name: { en: 'Espresso tonic', nl: 'Espresso tonic' }, price: 4.8, desc: { en: 'Bright, fizzy, a summer standard', nl: 'Fris, bruisend, een zomerklassieker' } },
    ],
  },
  {
    id: 'other',
    name: { en: 'Not coffee', nl: 'Geen koffie' },
    items: [
      { id: 'matcha', name: { en: 'Matcha latte', nl: 'Matcha latte' }, price: 4.6, desc: { en: 'Ceremonial grade, hot or iced', nl: 'Ceremonial grade, warm of koud' } },
      { id: 'chai', name: { en: 'Chai latte', nl: 'Chai latte' }, price: 4.2, desc: { en: 'Spiced, steamed, comforting', nl: 'Kruidig, gestoomd, troostrijk' } },
      { id: 'hot-choc', name: { en: 'Hot chocolate', nl: 'Warme chocolade' }, price: 3.9, desc: { en: 'Proper dark chocolate, not powder', nl: 'Echte pure chocolade, geen poeder' } },
      { id: 'tea', name: { en: 'Loose leaf tea', nl: 'Losse thee' }, price: 3.2, desc: { en: 'A small pot — ask for today’s selection', nl: 'Een klein potje — vraag naar de keuze van vandaag' } },
      { id: 'orange', name: { en: 'Fresh orange juice', nl: 'Verse jus d’orange' }, price: 4.0, desc: { en: 'Squeezed when you order it', nl: 'Geperst als je hem bestelt' } },
    ],
  },
  {
    id: 'sweet',
    name: { en: 'Sweet things', nl: 'Zoet' },
    note: { en: 'Baked in small batches — when it’s gone, it’s gone.', nl: 'In kleine hoeveelheden gebakken — op is op.' },
    items: [
      { id: 'cinnamon-bun', name: { en: 'Cinnamon bun', nl: 'Kaneelbroodje' }, price: 4.2, desc: { en: 'Warm, cardamom-heavy, the one people come back for', nl: 'Warm, veel kardemom, hét broodje waar men voor terugkomt' }, popular: true },
      { id: 'cookie', name: { en: 'Sea salt chocolate cookie', nl: 'Chocoladekoek met zeezout' }, price: 3.2, desc: { en: 'Dangerously good, in the words of a regular', nl: 'Gevaarlijk lekker, aldus een vaste gast' } },
      { id: 'stroopwafel', name: { en: 'Stroopwafel', nl: 'Stroopwafel' }, price: 1.5, desc: { en: 'Rests on your cup while the coffee warms it', nl: 'Ligt op je kopje tot de koffie hem zacht maakt' } },
      { id: 'banana-bread', name: { en: 'Banana bread', nl: 'Bananenbrood' }, price: 3.8, desc: { en: 'Toasted, with a little butter', nl: 'Geroosterd, met een beetje boter' } },
      { id: 'croissant', name: { en: 'Butter croissant', nl: 'Roomboter croissant' }, price: 2.8, desc: { en: 'From the bakery around the corner', nl: 'Van de bakker om de hoek' } },
      { id: 'carrot-cake', name: { en: 'Carrot cake', nl: 'Worteltaart' }, price: 4.5, desc: { en: 'A thick slice, cream cheese on top', nl: 'Een dikke punt, met roomkaas' } },
    ],
  },
  {
    id: 'shelf',
    name: { en: 'The shelf', nl: 'De schappen' },
    note: { en: 'The boutique half: beans, kit and a few things worth taking home.', nl: 'De boutique-kant: bonen, spullen en wat lekkers voor thuis.' },
    items: [
      { id: 'beans-filter', name: { en: 'Filter beans · 250g', nl: 'Filterbonen · 250g' }, price: 14.5, desc: { en: 'Rotating single origin, roasted for filter', nl: 'Wisselende single origin, gebrand voor filter' } },
      { id: 'beans-espresso', name: { en: 'Espresso beans · 250g', nl: 'Espressobonen · 250g' }, price: 14.0, desc: { en: 'Our house blend, the one in your cup', nl: 'Onze huisblend, dezelfde als in je kopje' } },
      { id: 'filter-papers', name: { en: 'V60 filter papers', nl: 'V60 filterzakjes' }, price: 6.5, desc: { en: 'A box of 100', nl: 'Doos van 100' } },
      { id: 'magazine', name: { en: 'Coffee magazine', nl: 'Koffiemagazine' }, price: 12.0, desc: { en: 'The nerdy ones from the table, to take with you', nl: 'De nerdy exemplaren van tafel, om mee te nemen' } },
    ],
  },
];

const MILKS = [
  { id: 'whole', name: { en: 'Whole milk', nl: 'Volle melk' } },
  { id: 'oat', name: { en: 'Oat', nl: 'Haver' } },
  { id: 'soy', name: { en: 'Soy', nl: 'Soja' } },
  { id: 'none', name: { en: 'No milk', nl: 'Zonder melk' } },
];

/* Five-star reviews as published on Google Maps. */
const REVIEWS = [
  {
    author: 'Guido Hoogslag',
    meta: 'Local Guide · 59 reviews',
    when: { en: 'edited 3 months ago', nl: '3 maanden geleden bewerkt' },
    text: 'Nice little sanctuary in the middle of historic Delft. Great specialty coffee, very friendly and hardworking owner (who gives great coffee advice too). Keep in mind that it can get very busy.',
  },
  {
    author: 'Nicolas Karayannis',
    meta: 'Local Guide · 50 reviews',
    when: { en: 'a year ago', nl: 'een jaar geleden' },
    text: 'Lot nails the essentials: the cappuccino is consistently excellent, smooth and bold without being bitter. Their oat milk is top quality and not watery. And don’t leave without trying the chocolate cookies with sea salt.',
  },
  {
    author: 'Varun Choudary',
    meta: 'Local Guide · 60 reviews',
    when: { en: '4 months ago', nl: '4 maanden geleden' },
    text: 'The best filter coffee I had in ages. One of the very few places to enjoy coffee with peace. The cookies were a really good addition too 😁',
  },
  {
    author: 'Richard Outhwaite Kentish-Beard',
    meta: 'Local Guide · 82 reviews',
    when: { en: '7 months ago', nl: '7 maanden geleden' },
    text: 'Espresso with a Stroopwafel — what is not to like. Very nicely made and fruity espresso. Super cute and vibes place filled with nerdy coffee magazines on the table.',
  },
  {
    author: 'Nadia Lutvina',
    meta: 'Local Guide · 17 reviews',
    when: { en: '4 months ago', nl: '4 maanden geleden' },
    text: 'The best coffee shop in Delft, the service is so warm, people are polite, their pastry is amazing.',
  },
  {
    author: 'Adam',
    meta: '136 reviews',
    when: { en: '2 months ago', nl: '2 maanden geleden' },
    text: 'Stopped by on a cold morning in April. Really solid coffee and a complimentary mini stroopwafel sealed the deal!',
  },
  {
    author: 'David Sargsyan',
    meta: 'Local Guide · 17 reviews',
    when: { en: '2 months ago', nl: '2 maanden geleden' },
    text: 'Great service, great espresso, great cinnamon, great atmosphere ❤️',
  },
  {
    author: 'ona tuinylaite',
    meta: 'Local Guide · 19 reviews',
    when: { en: 'a month ago', nl: 'een maand geleden' },
    text: 'Tasty coffee. Midday gets busy, but everything is still good quality.',
  },
];

/* What reviewers mention most, per Google's own review tags. */
const REVIEW_TAGS = [
  { label: { en: 'filter coffee', nl: 'filterkoffie' }, count: 17 },
  { label: { en: 'espresso', nl: 'espresso' }, count: 12 },
  { label: { en: 'specialty coffee', nl: 'specialty coffee' }, count: 12 },
  { label: { en: 'cinnamon bun', nl: 'kaneelbroodje' }, count: 6 },
];
