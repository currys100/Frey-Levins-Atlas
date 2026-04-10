// ═══════════════════════════════════════════════════════════════
//  locations.js — All family history map pins
//  This is the only file you need to edit to add new locations.
// ═══════════════════════════════════════════════════════════════
//
//  Each location needs:
//    title       - Short name of the event/place
//    year        - Year or date range (e.g. "1948" or "Summer 1952")
//    type        - Must match one of the keys in config.js eventColors
//    lat / lng   - Coordinates. Find them at maps.google.com by
//                  right-clicking any spot — they appear at the top
//                  of the context menu.
//    description - Story text shown in the popup
//    photo       - (optional) path to a photo file, e.g. "photos/wedding.jpg"
//                  or a full URL. Set to null if you don't have one yet.
// ═══════════════════════════════════════════════════════════════

const LOCATIONS = [

  {
    title: "Charlie and Betty's Engagement",
    year: "October 1953",
    type: "engagement",
    lat: 40.81699270537178,
    lng: -91.09799556026705,
    description: "Charlie proposed to Betty at Crapo Park in Burlington. She said yes!",
    photo: "photos/Crapo_Park.jpg",
  },
  {
    title: "George and Marilyn Weingart Home",
    year: "",
    type: "other",
    lat: 41.14336259432814,
    lng: -91.19098089409037,
    description: "!",
    photo: null,
  },
  {
    title: "Charlie and Betty's Wedding",
    year: "February 13, 1954",
    type: "wedding",
    lat: 41.15797045505555,
    lng: -91.19469548475591,
    description: "",
    photo: null,
  },
  {
    title: "Charlie and Betty's Wedding Tree",
    year: "February 13, 1954",
    type: "honeymoon",
    lat: 40.8471212656259, 
    lng: -90.96185079717505,
    description: "",
    photo: "photos/WeddingTree.png",
  },
  {
    title: "Charlie and Betty's Honeymoon",
    year: "February 13, 1954",
    type: "honeymoon",
    lat: 38.62621744105799,
    lng: -90.17633994487356,
    description: "",
    photo: null,
  },
  {
    title: "Charlie's Birthplace",
    year: "October 24, 1929",
    type: "birthplace",
    lat: 38.75843042150345,
    lng: -89.66842906796467,
    description: "Charlie was born in Highland, Illinois.",
    photo: null,
  },
  {
    title: "Betty's Birthplace",
    year: "January 28, 1933",
    type: "birthplace",
    lat: 40.826440140250675,
    lng: -91.18543853263421,
    description: "Betty grew up in Burlington, Iowa. She was the fifth child of 16.",
    photo: null,
  },
  {
    title: "Petrys Arrived",
    year: "1864",
    type: "immigration",
    lat: 40.6892,
    lng: -74.0445,
    description: "Valentine Petry and Louisa Gau immigrated from Switzerland to Blackjack, Illinois in 1864.",
    photo: null,
  },
  {
    title: "Frey Family's 2nd Home",
    year: "1958",
    type: "childhood",
    lat: 39.86854805317539,
    lng: -88.9528352220882,
    description: "Frey Family Home where Jeanne, Celeste, Beth, Tommy, Joseph, and Charles grew up.",
    photo: null,
  },
  {
    title: "Betty and Charlie's Empty Nest Home",
    year: "1980",
    type: "childhood",
    lat: 39.9160309423404, 
    lng: -88.96566445477156,
    description: "Betty and Charlie lived here after their six children left the nest.",
    photo: "photos/cortezhome.png",
  },
  {
    title: "Betty and Charlie at Tanglewood",
    year: "2026",
    type: "childhood",
    lat: 39.827904198186744, 
    lng: -88.90266484248819,
    description: "Betty and Charlie lived here after their six children left the nest.",
    photo: "photos/grandsAtTanglewood.png",
  },
  {
    title: "Frey Family's 1st Home",
    year: "1954-1958",
    type: "childhood",
    lat: 39.851602066982416, 
    lng: -88.97504530385152,
    description: "",
    photo: "photos/UniversityHouse.png",
  },
  {
    title: "White Water Rafting",
    year: "1968",
    type: "childhood",
    lat: 37.577534795665926, 
    lng: -80.87396927695254,
    description: "Frey Family Rafting Trip!",
    photo: "photos/whitewaterrafting.png",
  },
  
];


// 707 E wood street = hospital where where 5/6 kids were born. 
// St mary's = hospital where CMF was born
// 1030 N University = 1954-1958 (1st home)
// Charlie's hitch hiking adventures
//
//  Frey Family Vacations
// Charlie Frey's Wheat Harvest
//
//
