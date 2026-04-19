// ─── Leash Your Dog — Design Tokens ───
// Edit this file to retheme the entire site.

const LYD = {
  // ── Colors ──────────────────────────────
  cream:       '#FFF4E6',
  creamDeep:   '#FFE8C9',
  orange:      '#FF5B1F',
  orangeDark:  '#E84A10',
  ink:         '#1A1A1A',
  blue:        '#2E6BE6',
  pink:        '#FFB8A0',
  lime:        '#E3F27A',

  // ── Border radii ─────────────────────────
  r: { sm: 8, md: 14, lg: 22, pill: 999 },

  // ── Motion curves ────────────────────────
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  ease:   'cubic-bezier(0.2, 0.8, 0.2, 1)',

  // ── Shadows (chunky offset, zine feel) ───
  chunk: (c = '#1A1A1A', x = 4, y = 4) => `${x}px ${y}px 0 0 ${c}`,
  softShadow: '0 8px 24px rgba(26,26,26,0.12), 0 2px 4px rgba(26,26,26,0.06)',
};

// ── Typography pairings ─────────────────────────────────────────────────────
// Active pairing is 'grotesque'. Change the key below to switch globally.
const ACTIVE_FONT = 'grotesque';

const FONT_STACKS = {
  grotesque: {
    name:             'Chunky grotesque + sans',
    display:          '"Archivo Black", "Arial Black", Impact, sans-serif',
    body:             '"Archivo", ui-sans-serif, system-ui, sans-serif',
    bodyWeight:       500,
    displayTransform: 'none',
    displayTracking:  '-0.02em',
  },
  editorial: {
    name:             'Serif display + sans',
    display:          '"DM Serif Display", "Playfair Display", Georgia, serif',
    body:             '"Inter", ui-sans-serif, system-ui, sans-serif',
    bodyWeight:       400,
    displayTransform: 'none',
    displayTracking:  '-0.015em',
  },
  workwear: {
    name:             'All caps condensed + mono',
    display:          '"Bebas Neue", "Oswald", "Arial Narrow", sans-serif',
    body:             '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
    bodyWeight:       400,
    displayTransform: 'uppercase',
    displayTracking:  '0.01em',
  },
  rounded: {
    name:             'Rounded geometric',
    display:          '"Fredoka", "Nunito", ui-rounded, system-ui, sans-serif',
    body:             '"Nunito", ui-sans-serif, system-ui, sans-serif',
    bodyWeight:       500,
    displayTransform: 'none',
    displayTracking:  '-0.01em',
  },
};

// ── Products ────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id:               'tee-leash',
    name:             'LEASH YOUR DOG TEE',
    tag:              'Heavyweight cotton · Screen printed',
    price:            38,
    colors:           ['#FF5B1F', '#1A1A1A', '#FFF4E6'],
    sizes:            ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    placeholderLabel: 'T-SHIRT / front',
    stripeColor:      '#FF5B1F',
    bgColor:          '#FFE8C9',
    details: [
      '100% heavyweight organic cotton',
      'Water-based screen print, SF print shop',
      'Unisex fit, runs true to size',
      '100% of proceeds → Bay Area shelters',
    ],
  },
  {
    id:               'cap-goodboy',
    name:             '"GOOD DOGS LEASH UP" CAP',
    tag:              'Unstructured 6-panel · Embroidered',
    price:            32,
    colors:           ['#1A1A1A', '#FF5B1F', '#2E6BE6'],
    sizes:            ['One size'],
    placeholderLabel: 'CAP / 3Q view',
    stripeColor:      '#2E6BE6',
    bgColor:          '#FFF4E6',
    details: [
      'Unstructured, 6-panel, adjustable strap',
      'Chain-stitch embroidery',
      'Dad-hat profile, low crown',
      '100% of proceeds → Bay Area shelters',
    ],
  },
  {
    id:               'poster-manifesto',
    name:             'MANIFESTO POSTER 18×24',
    tag:              '2-color screenprint · Edition of 300',
    price:            28,
    colors:           ['#FF5B1F', '#1A1A1A'],
    sizes:            ['18×24"'],
    placeholderLabel: 'POSTER / flat',
    stripeColor:      '#1A1A1A',
    bgColor:          '#FFF4E6',
    details: [
      '2-color screen print, 18 × 24 inches',
      'Signed + numbered edition of 300',
      'French Paper 100lb cover, cream',
      '100% of proceeds → Bay Area shelters',
    ],
  },
];

// ── Copy ─────────────────────────────────────────────────────────────────────
const COPY = {
  brandName:   'LEASH YOUR DOG',
  tagline:     'A tiny shop from San Francisco',
  missionHead: '100% profit goes to dogs',
  missionBody: 'Raise awareness about the off-leash dog epidemic.\n\nWe screen print everything in our basement in San Francisco, and donate everything after supply costs.',
  sheltersBtn: 'SHELTERS →',
  storyBtn:    'STORY',
  ctaHint:     'PSST — CATCH THE DOG TO SHOP',
  missionPct:  '100%',
};

// ── Banner phrases ────────────────────────────────────────────────────────────
const TICKER_PHRASES = [
  '100% OF PROCEEDS → BAY AREA SHELTERS',
  'PLEASE LEASH YOUR DOG',
  'PRINTED IN SAN FRANCISCO',
  'GOOD DOGS WEAR LEASHES',
  'SHIPPING NATIONWIDE',
];
