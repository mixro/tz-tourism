// Central media library for CHONG ADVENTURE (demo site).
// Photos come from Unsplash (free under the Unsplash License).
// Change an ID here and every page that uses it updates.

export const unsplash = (id, w = 1200) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=${w}`

const U = unsplash

// Photo IDs (reused across the site where the demo has fewer photos than slots)
const ID = {
  migration: 'H1THPgRuKg0',   // wildebeest crossing, Serengeti
  leopard: 'IYMeU7G3L4E',     // leopard in a tree, Serengeti
  elephants: 'FmUx8z_Tz4A',   // elephants, Serengeti
  wildebeest: 'ZaMYDt6FE58',  // wildebeest grazing, Serengeti
  gazelle: 'Y2fRDPQyAj4',     // gazelle, Serengeti
  rongai: 'DDEBAl7ULAo',      // hikers on the Rongai route
  kiliMoshi: 'KDQ6D6V5RtM',   // Kilimanjaro from Moshi
  kiliPlains: 'NZHU5vfPo3M',  // elephants on the plains below Kilimanjaro
  coast: 'VqxfYDgg8RQ',       // aerial Zanzibar coast
  hammock: 'G4zORfstMW0',     // hammock between palms, Zanzibar
  stoneTown: 'nkLfKiCf3EQ',   // Stone Town from above
  kite: '3WsA4s8XAMI',        // kitesurfer at Paje
  bwejuu: 'EM8-MJSBRWs',      // Bwejuu village from above
  palms: '0DDEIeraxMU',       // Stone Town waterfront and palms
  crater: '46wm-yYcYEs',      // elephants, Ngorongoro Crater
  highlands: 'mYiFarnp-ko',   // Ngorongoro highlands
  tarangire: 'AtYVjxDqlPI',   // elephant, Tarangire
}

// ---------- Photos used by the data files, keyed by the old /images/<name>.jpg ----------
export const photo = {
  // page heroes and sections
  hero: U(ID.migration, 1800),
  migration: U(ID.wildebeest, 1800),
  cta: U(ID.hammock, 1800),
  about: U(ID.highlands, 1800),
  // destinations (tile + page hero)
  serengeti: U(ID.elephants, 1600),
  kilimanjaro: U(ID.kiliMoshi, 1600),
  ngorongoro: U(ID.crater, 1600),
  zanzibar: U(ID.coast, 1600),
  tarangire: U(ID.tarangire, 1600),
  nyerere: U(ID.leopard, 1600), // TODO: placeholder, swap for a Nyerere / Selous photo
  // experiences
  'exp-wildlife': U(ID.leopard, 900),
  'exp-trek': U(ID.rongai, 900),
  'exp-zanzibar': U(ID.stoneTown, 900),
  'exp-culture': U(ID.bwejuu, 900),
  'exp-honeymoon': U(ID.hammock, 900),
  'exp-family': U(ID.gazelle, 900),
  'exp-photo': U(ID.wildebeest, 900),
  'exp-luxury': U(ID.palms, 900),
  'exp-combo': U(ID.kite, 900),
  // safaris
  'safari-classic': U(ID.wildebeest, 900),
  'safari-luxury': U(ID.highlands, 900),
  'safari-family': U(ID.gazelle, 900),
  'safari-photo': U(ID.leopard, 900),
  'safari-private': U(ID.crater, 900),
  'safari-adventure': U(ID.tarangire, 900),
  // journal covers
  'j-serengeti': U(ID.elephants, 900),
  'j-kili': U(ID.rongai, 900),
  'j-zanzibar': U(ID.stoneTown, 900),
  'j-migration': U(ID.migration, 900),
  'j-parks': U(ID.tarangire, 900),
  'j-first': U(ID.gazelle, 900),
}

// ---------- Destination galleries (keys match route slugs) ----------
// Some parks have few photos in this demo, so northern-circuit wildlife shots fill the grid.
const northern = [
  { src: U(ID.elephants), alt: 'Elephants on the northern-circuit plains' },
  { src: U(ID.wildebeest), alt: 'Wildebeest grazing in open savannah' },
  { src: U(ID.gazelle), alt: 'Gazelle in dry grass' },
]

export const galleries = {
  serengeti: [
    { src: U(ID.wildebeest), alt: 'Wildebeest grazing in the Serengeti' },
    { src: U(ID.leopard), alt: 'Leopard resting in a tree' },
    { src: U(ID.elephants), alt: 'Elephants on the Serengeti plains' },
    { src: U(ID.gazelle), alt: 'Gazelle in dry grass' },
    { src: U(ID.migration), alt: 'Wildebeest crossing the plains' },
  ],
  kilimanjaro: [
    { src: U(ID.rongai), alt: 'Hikers on the Rongai route' },
    { src: U(ID.kiliMoshi), alt: 'Kilimanjaro rising above Moshi' },
    { src: U(ID.kiliPlains), alt: 'Elephants on the plains below Kilimanjaro' },
  ],
  zanzibar: [
    { src: U(ID.coast), alt: 'Aerial view of the Zanzibar coast' },
    { src: U(ID.hammock), alt: 'Hammock between palm trees' },
    { src: U(ID.stoneTown), alt: 'Stone Town from above' },
    { src: U(ID.kite), alt: 'Kitesurfer at Paje Beach' },
    { src: U(ID.bwejuu), alt: 'Bwejuu village from above' },
    { src: U(ID.palms), alt: 'Stone Town waterfront and palms' },
  ],
  ngorongoro: [
    { src: U(ID.crater), alt: 'Elephant herd in Ngorongoro Crater' },
    { src: U(ID.highlands), alt: 'Clouds over the Ngorongoro highlands' },
    { src: U(ID.elephants), alt: 'Elephants on the northern-circuit plains' },
  ],
  tarangire: [
    { src: U(ID.tarangire), alt: 'Elephant in Tarangire National Park' },
    ...northern.slice(0, 2),
  ],
  nyerere: [
    { src: U(ID.leopard), alt: 'Leopard (placeholder for Nyerere)' },
    ...northern.slice(1),
  ],
}

// ---------- Videos ----------
// Paste a direct .mp4 link (or a file in /public/videos) into `src` to turn a hero into a video.
// While `src` is empty the poster photo is shown.
export const videos = {
  home: { src: '', poster: U(ID.migration, 1600) },
  safaris: { src: '', poster: U(ID.wildebeest, 1600) },
  kilimanjaro: { src: '', poster: U(ID.kiliMoshi, 1600) },
  zanzibar: { src: '', poster: U(ID.coast, 1600) },
}
