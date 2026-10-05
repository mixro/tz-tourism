// Central media library for CHONG ADVENTURE (demo site).
// All photos come from Unsplash (free under the Unsplash License).
// Swap any ID or URL here and every page updates automatically.

export const unsplash = (id, w = 1200) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=${w}`;

const U = unsplash;

// ---------- Videos ----------
// Add direct .mp4 links (e.g. from Pexels, Mixkit or Coverr) in `src`.
// While `src` is empty, <VideoBackground /> automatically shows the poster image.
export const videos = {
  home: { src: '', poster: U('H1THPgRuKg0', 1600) },
  safaris: { src: '', poster: U('ZaMYDt6FE58', 1600) },
  kilimanjaro: { src: '', poster: U('DDEBAl7ULAo', 1600) },
  zanzibar: { src: '', poster: U('VqxfYDgg8RQ', 1600) },
};

// ---------- Destinations (keys match the route slugs) ----------
export const destinations = {
  serengeti: {
    cover: U('H1THPgRuKg0', 900),
    hero: U('H1THPgRuKg0', 1800),
    gallery: [
      { src: U('ZaMYDt6FE58'), alt: 'Wildebeest grazing in the Serengeti' },
      { src: U('IYMeU7G3L4E'), alt: 'Leopard resting in a tree' },
      { src: U('FmUx8z_Tz4A'), alt: 'Elephants on the Serengeti plains' },
      { src: U('Y2fRDPQyAj4'), alt: 'Gazelle in dry grass' },
    ],
  },
  kilimanjaro: {
    cover: U('DDEBAl7ULAo', 900),
    hero: U('DDEBAl7ULAo', 1800),
    gallery: [
      { src: U('DDEBAl7ULAo'), alt: 'Hikers on the Rongai route' },
      { src: U('KDQ6D6V5RtM'), alt: 'Kilimanjaro rising above Moshi' },
    ],
  },
  zanzibar: {
    cover: U('VqxfYDgg8RQ', 900),
    hero: U('VqxfYDgg8RQ', 1800),
    gallery: [
      { src: U('VqxfYDgg8RQ'), alt: 'Aerial view of the Zanzibar coast' },
      { src: U('G4zORfstMW0'), alt: 'Hammock between palm trees' },
      { src: U('nkLfKiCf3EQ'), alt: 'Stone Town from above' },
      { src: U('3WsA4s8XAMI'), alt: 'Kitesurfer at Paje Beach' },
      { src: U('EM8-MJSBRWs'), alt: 'Bwejuu village from above' },
    ],
  },
  ngorongoro: {
    cover: U('46wm-yYcYEs', 900),
    hero: U('46wm-yYcYEs', 1800),
    gallery: [
      { src: U('46wm-yYcYEs'), alt: 'Elephant herd in Ngorongoro Crater' },
      { src: U('mYiFarnp-ko'), alt: 'Clouds over the Ngorongoro highlands' },
    ],
  },
  tarangire: {
    cover: U('AtYVjxDqlPI', 900),
    hero: U('AtYVjxDqlPI', 1800),
    gallery: [{ src: U('AtYVjxDqlPI'), alt: 'Elephant in Tarangire National Park' }],
  },
  // TODO: replace with real Nyerere photos (search "selous game reserve" on Unsplash).
  nyerere: {
    cover: U('IYMeU7G3L4E', 900),
    hero: U('IYMeU7G3L4E', 1800),
    gallery: [{ src: U('IYMeU7G3L4E'), alt: 'Wildlife in the southern safari circuit (placeholder)' }],
  },
};

// ---------- Page-level images ----------
export const pages = {
  home: {
    hero: U('H1THPgRuKg0', 1800),
    story: U('FmUx8z_Tz4A', 1200),
    cta: U('G4zORfstMW0', 1800),
  },
  destinations: { hero: U('ZaMYDt6FE58', 1800) },
  experiences: { hero: U('IYMeU7G3L4E', 1800) },
  safaris: { hero: U('ZaMYDt6FE58', 1800) },
  kilimanjaro: { hero: U('DDEBAl7ULAo', 1800), alt: U('KDQ6D6V5RtM', 1200) },
  zanzibar: { hero: U('VqxfYDgg8RQ', 1800), alt: U('nkLfKiCf3EQ', 1200) },
  about: { hero: U('FmUx8z_Tz4A', 1800), team: U('46wm-yYcYEs', 1200) },
  journal: { hero: U('mYiFarnp-ko', 1800) },
  contact: { hero: U('G4zORfstMW0', 1800), side: U('AtYVjxDqlPI', 1000) },
};

// ---------- Cards ----------
// Keys are suggestions: rename them to match the slugs/ids in your own data files.
export const experiences = {
  'game-drives': U('IYMeU7G3L4E', 800),
  'great-migration': U('H1THPgRuKg0', 800),
  'mountain-trekking': U('DDEBAl7ULAo', 800),
  'beach-escapes': U('G4zORfstMW0', 800),
  'culture-heritage': U('nkLfKiCf3EQ', 800),
  'wildlife-photography': U('FmUx8z_Tz4A', 800),
};

export const journal = [
  U('mYiFarnp-ko', 900),
  U('3WsA4s8XAMI', 900),
  U('KDQ6D6V5RtM', 900),
];

// Handy helper: pick an image for any slug, with a safe fallback.
export const coverFor = (slug) => destinations[slug]?.cover ?? pages.home.hero;
