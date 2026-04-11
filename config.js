// ═══════════════════════════════════════════════════════════════
//  config.js — Map settings, API key, colors, and icons
//  Edit this file to change the look and feel of your map.
// ═══════════════════════════════════════════════════════════════

const CONFIG = {

  // ─── STADIA MAPS API KEY ─────────────────────────────────────
  // Get or manage your key at: https://client.stadiamaps.com/dashboard
  apiKey: "bcaf1f18-4afa-486e-bc86-765d2320d1a7",

  // ─── MAP TITLE & SUBTITLE ────────────────────────────────────
  // Also update the <h1> and <p> in index.html to match.
  title:    "The Frey-Levins Atlas",
  subtitle: "Mapped In Memmories",

  // ─── STARTING VIEW ───────────────────────────────────────────
  // [latitude, longitude] and zoom level.
  // Lower zoom = zoomed out (whole country). Higher = zoomed in (city).
  startCenter: [39.96952819705063, -90.13796385479888],
  startZoom: 8,

  // ─── CLUSTER SETTINGS ────────────────────────────────────────
  // disableClusteringAtZoom: pins always show individually at this zoom and above.
  // maxClusterRadius: pixels within which pins get grouped (lower = less aggressive).
  disableClusteringAtZoom: 8,
  maxClusterRadius: 60,

  // ─── EVENT TYPE COLORS ───────────────────────────────────────
  // Each event type gets a color. Add or rename types here,
  // and make sure your locations.js entries use matching type names.
  eventColors: {
    "engagement":  "#c0392b",   // deep red
    "wedding":     "#8e44ad",   // purple
    "honeymoon":   "#2980b9",   // blue
    "birthplace":  "#27ae60",   // green
    "home":   "#d35400",   // orange
    "immigration": "#16a085",   // teal
    "wheat harvest": "#F5DEB3", // wheat
    "other":       "#7f8c8d",   // gray
  },

  // ─── EMOJI ICONS FOR EACH EVENT TYPE ─────────────────────────
  eventIcons: {
    "engagement":  "💍",
    "wedding":     "💒",
    "honeymoon":   "⛵",
    "birthplace":  "⭐",
    "home":   "🏡",
    "immigration": "🚢",
    "wheat harvest": "🌾",
    "other":       "📍",
  },

};
