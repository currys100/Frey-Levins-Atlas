// ═══════════════════════════════════════════════════════════════
//  trails.js — Family history trails
//
//  Each trail has:
//    name   - Display label shown in the Trails key
//    color  - Hex color for the trail line and highlighted markers
//    stops  - Ordered array of location titles (must exactly match
//             the `title` field in locations.js)
//
//  A location can appear in more than one trail.
//  Stops are displayed in the order listed here.
// ═══════════════════════════════════════════════════════════════

const TRAILS = [

  {
    name: "Charlie & Betty's Story",
    color: "#8e44ad",
    stops: [
      "Charlie's Birthplace",
      "Betty's Birthplace",
      "Charlie and Betty's Engagement",
      "Charlie and Betty's Wedding",
      "Charlie and Betty's Honeymoon", 
      "Frey Family's 1st Home",
      "Frey Family's 2nd Home",
      "Betty and Charlie's Empty Nest Home", 
      "Betty and Charlie at Tanglewood"
    ],
  },

  {
    name: "Frey Family Vacations",
    color: "#d35400",
    stops: [
      "George and Marilyn Weingart Home",
      "White Water Rafting",
    ],
  },

  {
    name: "Weingart Family Roots",
    color: "#16a085",
    stops: [
      "Betty's Birthplace",
      "George and Marilyn Weingart Home",
    ],
  },

  // ─── TEMPLATE: copy and fill in to add a new trail ───────────
  // {
  //   name: "Frey Family Vacations",
  //   color: "#2980b9",
  //   stops: [
  //     "First Stop Title",
  //     "Second Stop Title",
  //   ],
  // },

];
