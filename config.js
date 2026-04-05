// ╔══════════════════════════════════════════════════════════════════╗
// ║  TURNERINGSINSTÄLLNINGAR — Ändra här för nästa turnering!      ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// Den här filen styr allt som är unikt för varje turnering.
// Du behöver BARA ändra i den här filen för att sätta upp en ny cup.
//
// Se setup.html för steg-för-steg-instruktioner.

const CONFIG = {

  // ── Turneringsnamn och klubb ──
  tournamentName: "Örebrocupen",
  year: 2026,
  clubName: "Segeltorps P15",
  subtitle: "17–19 april 2026 • Örebro",
  logo: "logo.png",        // Logotyp-fil (lägg i samma mapp)

  // ── Dagar ──
  // Lägg till eller ta bort dagar. id = kort namn, label = visas i kalendern.
  dates: [
    { id: "fri", label: "Fredag 17 april" },
    { id: "sat", label: "Lördag 18 april" },
    { id: "sun", label: "Söndag 19 april" }
  ],

  // ── Lag ──
  // Du kan ha 1, 2 eller fler lag. Varje lag har:
  //   id       = unikt kort namn (används internt)
  //   name     = visningsnamn
  //   color    = huvudfärg
  //   lightBg  = ljus bakgrund för matchblock
  //   assemblyBg = bakgrund för samlingsblock
  //   textColor = textfärg i block
  teams: [
    {
      id: "blue",
      name: "Lag Blå",
      color: "#2563eb",
      lightBg: "#dbeafe",
      assemblyBg: "#93bbfd",
      textColor: "#1e3a5f",
      // Färg för "Heja på"-block (visas på det ANDRA lagets matcher)
      cheerBg: "#bfdbfe",
      cheerBorder: "#3b82f6"
    },
    {
      id: "white",
      name: "Lag Vit",
      color: "#64748b",
      lightBg: "#f1f5f9",
      assemblyBg: "#cbd5e1",
      textColor: "#334155",
      cheerBg: "#e2e8f0",
      cheerBorder: "#94a3b8"
    }
  ],

  // ── Matchinställningar ──
  matchDuration: 40,     // Matchlängd i minuter
  assemblyBefore: 30,    // Samling antal minuter före match
  clubDisplayName: "Segeltorps IBK",  // Klubbens namn i matchblocket (t.ex. "Segeltorps IBK Blå vs ...")

  // ── Etiketter ──
  // Texter som visas i kalenderns block och legend.
  labels: {
    assembly: "Samling",        // Text för samlingsblocket (visas som "Samling Blå")
    match: "match",             // Visas i legenden som "Lag Blå – match"
    assemblyLegend: "samling",  // Visas i legenden som "Lag Blå – samling"
    cheerPrefix: "Heja på",     // Prefix för "Heja på Lag Vit"
  },

  // ── Kalender-vy ──
  timelineStart: 7,      // Kalendern börjar kl 07:00
  timelineEnd: 23,       // Kalendern slutar kl 23:00
  hourHeight: 90,        // Pixelhöjd per timme

  // ── Matcher ──
  // Alla matcher. Ändra, lägg till eller ta bort efter behov.
  // id = unikt id, team = lag-id (matchar teams ovan),
  // day = dag-id (matchar dates ovan), time = matchstart HH:MM,
  // opponent = motståndare, venue = hall, homeAway = "home" eller "away"
  defaultMatches: [
    { id: 'm1', team: 'white', day: 'fri', time: '19:45', opponent: 'Sundborns GoIF Röd', venue: 'Almbyskolan', homeAway: 'away' },
    { id: 'm2', team: 'white', day: 'sat', time: '12:15', opponent: 'Örebro SK Ungdom 1', venue: 'Almbyskolan', homeAway: 'home' },
    { id: 'm3', team: 'white', day: 'sat', time: '16:00', opponent: 'Strängnäs IBK', venue: 'Almbyskolan', homeAway: 'home' },
    { id: 'm4', team: 'white', day: 'sun', time: '09:30', opponent: 'Lillån IBK P2016', venue: 'Almbyskolan', homeAway: 'away' },
    { id: 'm5', team: 'white', day: 'sun', time: '13:15', opponent: 'Frillesås FF', venue: 'Almbyskolan', homeAway: 'home' },
    { id: 'm6', team: 'blue', day: 'fri', time: '17:30', opponent: 'Lillån IBK P-2017 1', venue: 'Tegelbruket 2', homeAway: 'home' },
    { id: 'm7', team: 'blue', day: 'sat', time: '12:00', opponent: 'IBF Älvstranden', venue: 'Tullängsgymnasiet', homeAway: 'home' },
    { id: 'm8', team: 'blue', day: 'sat', time: '18:15', opponent: 'Rönnby Västerås IBK Ungdom', venue: 'Almbyskolan', homeAway: 'away' },
    { id: 'm9', team: 'blue', day: 'sun', time: '10:15', opponent: 'Örebro SK Ungdom 5', venue: 'Tullängsgymnasiet', homeAway: 'away' },
    { id: 'm10', team: 'blue', day: 'sun', time: '14:45', opponent: 'Örebro SK Ungdom 2', venue: 'Almbyskolan', homeAway: 'home' },
  ],

  // ── Firebase (för realtidssynk mellan telefoner/datorer) ──
  // Följ instruktionerna i setup.html för att skapa ett Firebase-projekt.
  // Klistra in dina värden här.
  firebase: {
    apiKey: "AIzaSyB3i97Uls9GZkuP3bxHKwZLfqWWqKGIPuU",
    authDomain: "orebrocupen-2026.firebaseapp.com",
    databaseURL: "https://orebrocupen-2026-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "orebrocupen-2026",
    storageBucket: "orebrocupen-2026.firebasestorage.app",
    messagingSenderId: "953715494179",
    appId: "1:953715494179:web:32c96d70ea7c8c215d1096",
    measurementId: "G-6HM3BFTH3J"
  },

  // Rumsnamn — alla som delar samma rumsnamn ser varandras ändringar.
  // Byt till ett nytt namn varje turnering, t.ex. "segeltorps-gothia-2027"
  roomName: "segeltorps-cup-2026",

  // ── Händelsekategorier ──
  // Färger och namn för egna händelser (mat, resa, etc.)
  eventCategories: {
    meal:     { label: "Mat",       color: "#f59e0b", lightBg: "#fef3c7", textColor: "#92400e" },
    activity: { label: "Aktivitet", color: "#10b981", lightBg: "#d1fae5", textColor: "#065f46" },
    travel:   { label: "Resa",      color: "#ef4444", lightBg: "#fee2e2", textColor: "#991b1b" },
    other:    { label: "Övrigt",    color: "#9333ea", lightBg: "#faf5ff", textColor: "#7e22ce" }
  }
};

// ── Helper: get team by id ──
function getTeam(id) {
  return CONFIG.teams.find(t => t.id === id);
}

// ── Helper: get team name ──
function getTeamName(id) {
  const team = getTeam(id);
  return team ? team.name : id;
}

// ── Helper: build page title ──
function getPageTitle(pageName) {
  return `${pageName} — ${CONFIG.tournamentName} ${CONFIG.year}`;
}

// ── Helper: build header HTML ──
function getHeaderTitle() {
  return `${CONFIG.tournamentName} ${CONFIG.year} — ${CONFIG.clubName}`;
}
