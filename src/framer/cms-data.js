// CMS data for the Framer "Shoes" collection.
// Field IDs come from the exported bundle's collection schema:
//   wjbVR4laR: Slug, X3CtE80s9: Product Title, L0XvF6Czl: Price,
//   ULM6scxx_: Tagline, ENbbVp8vc: Total Product Images,
//   cxkHsOrjz: Primary Thumbnail, yp6exRXCn: Secondary Thumbnail
//
// The stripped __framer_useQueryData stub does NOT apply the query's
// limit/offset, so each alias below holds exactly the single item its
// query (limit 1, offset N, Best Seller == true) would resolve to.

const img = (id, alt) => ({
  src: `https://framerusercontent.com/images/${id}.png?width=1254&height=1254`,
  srcSet: `https://framerusercontent.com/images/${id}.png?scale-down-to=512&width=1254&height=1254 512w,https://framerusercontent.com/images/${id}.png?scale-down-to=1024&width=1254&height=1254 1024w,https://framerusercontent.com/images/${id}.png?width=1254&height=1254 1254w`,
  alt,
});

const SHOES = [
  {
    id: 'shoe-addies-kadhi-og',
    wjbVR4laR: 'addies-kadhi-og',
    X3CtE80s9: 'Addies Kadhi OG',
    L0XvF6Czl: 115,
    ULM6scxx_: 'Timeless icon inspired by its football roots.',
    NF5HioKUo: true,
    ENbbVp8vc: 5,
    cxkHsOrjz: img('mHScIQT5WNYeUKqkIQbiTWNY', 'Addies Kadhi OG Primary'),
    yp6exRXCn: img('Jupqi5lHrug7ePWqdEZrxuWp98', 'Addies Kadhi OG Secondary'),
  },
  {
    id: 'shoe-nyke-air-flex-white',
    wjbVR4laR: 'nyke-air-flex-white',
    X3CtE80s9: 'Nyke Air Flex White',
    L0XvF6Czl: 95,
    ULM6scxx_: "White Men's Shoes",
    NF5HioKUo: true,
    ENbbVp8vc: 5,
    cxkHsOrjz: img('pZdSdIZYz4e37aJWQpR3uVujzE', 'Air Flex White Showcase'),
    yp6exRXCn: img('0FKAOIVtlb9HkKA6OZBK9L5LS40', 'Product Image'),
  },
  {
    id: 'shoe-nyke-air-alpha-trainer',
    wjbVR4laR: 'nyke-air-alpha-trainer',
    X3CtE80s9: 'Nyke Air Alpha Trainer',
    L0XvF6Czl: 90,
    ULM6scxx_: "Men's Workout Shoes",
    NF5HioKUo: true,
    ENbbVp8vc: 5,
    cxkHsOrjz: img('QPBcofSDjFAKBNF0mLz1foZi0y0', 'Nyke Air Alpha Trainer Primary Thumbnail'),
    yp6exRXCn: img('of9is0zRGTWvib4s7Jm07gIlVg', 'Nyke Air Alpha Trainer Secondary Thumbnail'),
  },
  {
    id: 'shoe-nyke-air-jet-retro-club',
    wjbVR4laR: 'nyke-air-jet-retro-club',
    X3CtE80s9: 'Nyke Air Jet Retro Club',
    L0XvF6Czl: 120,
    ULM6scxx_: "Men's Shoe",
    NF5HioKUo: true,
    ENbbVp8vc: 5,
    cxkHsOrjz: img('iRbGkk0Eci8mCTQCs5jh9pAaNdY', 'Nyke Air Jet Retro Club Primary'),
    yp6exRXCn: img('kEFuqVlK3DvguIGfaaqBPHvb3s', 'Nyke Air Jet Retro Club Secondary'),
  },
];

export const __FRAMER_CMS_DATA__ = {
  // Best sellers — Carousel Large (Desktop), one query per card at offsets 0..3
  tLinFvMiO: [SHOES[0]],
  ga50Ov9PY: [SHOES[1]],
  d64M_s95a: [SHOES[2]],
  oDvU2QsiU: [SHOES[3]],
  // Best sellers — Carousel Small (Tablet/Phone), offsets 0..3
  dZciX5yRx: [SHOES[0]],
  YX5CBN3TN: [SHOES[1]],
  nXOaWt_Ll: [SHOES[2]],
  yCJSc6ZLg: [SHOES[3]],
};
