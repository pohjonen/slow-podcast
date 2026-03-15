"use client";

const episodes = [
  {
    number: "01",
    title: "The Slow Morning — Miten päivä rakennetaan rauhallisesti mutta tarkoituksella",
    desc: "Aloitusjaksossa Ville ja Maiju rikkovat kiireisen aamurutiinin myytin. Miksi nopea start ei johda parempaan päivään — ja mitä oikeasti tapahtuu, kun hidastat.",
    duration: "30–35 min",
    tag: "Aamurutiini",
    step: "Aseta puhelin eri huoneeseen ennen heräämistä. Ensimmäiset 15 minuuttia — pelkkä oleminen.",
    color: "#2C3E2D",
    accent: "#7A9E7E",
  },
  {
    number: "02",
    title: "Liikunta ilman motivaatiota — miten se käytännössä toimii",
    desc: "Motivaatio ei kanna. Systeemi kantaa. Rakennetaan yksi trigger, joka toimii — ei willpowerin varassa.",
    duration: "35–40 min",
    tag: "Liikunta",
    step: "Laita treenisetti valmiiksi illan aikana. Päätös on jo tehty kun herää.",
    color: "#C4714A",
    accent: "#EDE8E1",
  },
  {
    number: "03",
    title: "Miksi uni ei parane vaikka nukkuisit 8 tuntia",
    desc: "Unen määrä ei ole ongelma — laatu on. Tässä jaksossa yksi muutos, joka oikeasti vaikuttaa syvään uneen.",
    duration: "38 min",
    tag: "Uni",
    step: "Laita puhelin laturiin toiseen huoneeseen tänä iltana. Ei poikkeuksia.",
    color: "#4A7A50",
    accent: "#A8C5AB",
  },
  {
    number: "04",
    title: "Offline Energy — Digiraja, joka oikeasti toimii",
    desc: "Hermosto ei erota 'rentoa' scrollaamista stressistä. Miksi digitaalinen tauko tuntuu vaikealta — ja miten se tehdään ilman elämäntaparemonttia.",
    duration: "35 min",
    tag: "Digitaalinen detox",
    step: "Yksi tunti ilman puhelinta tänään. Ei töissä — vapaa-ajalla.",
    color: "#5B7FA6",
    accent: "#BDD4E8",
  },
  {
    number: "05",
    title: "Energy Over Time — Suunnittele elämä energian mukaan, ei kalenterin",
    desc: "Kalenteri täyttyy. Energia ei kerry itsestään. Miten rakentaa arki, jossa palautuminen on aikataulutettu yhtä tiukasti kuin palaverit.",
    duration: "40 min",
    tag: "Energia",
    step: "Merkitse kalenteriin yksi palauttava tauko — ja pidä se yhtä pyhänä kuin asiakaspalaveri.",
    color: "#8B6E5B",
    accent: "#D4C4B8",
  },
];

export default function Episodes() {
  return (
    <section
      style={{
        background: "#EDE8E1",
        padding: "120px 48px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#7A9E7E",
                }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7A9E7E",
                }}
              >
                Kausi 1
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#2C2C2C",
                lineHeight: 1.1,
              }}
            >
              Jaksot
            </h2>
          </div>

          <a
            href="https://open.spotify.com/show/slowpodcast"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#7A9E7E",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderBottom: "1px solid #A8C5AB",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            Spotify →
          </a>
        </div>

        {/* Episodes list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {episodes.map((ep) => (
            <EpisodeCard key={ep.number} ep={ep} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EpisodeCard({ ep }: { ep: typeof episodes[0] }) {
  return (
    <div
      style={{
        background: "#F7F3EE",
        borderRadius: "16px",
        padding: "32px 36px",
        display: "flex",
        gap: "28px",
        alignItems: "flex-start",
        cursor: "default",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(44,44,44,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Episode artwork */}
      <div
        style={{
          minWidth: "72px",
          height: "72px",
          borderRadius: "14px",
          background: `linear-gradient(135deg, ${ep.color} 0%, ${ep.accent} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "13px",
          fontWeight: 800,
          color: "#F7F3EE",
          letterSpacing: "-0.01em",
        }}
      >
        {ep.number}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6B6560",
            }}
          >
            Jakso {ep.number}
          </span>
          <span
            style={{
              background: ep.color,
              color: "#F7F3EE",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              padding: "2px 10px",
              borderRadius: "100px",
              letterSpacing: "0.04em",
            }}
          >
            {ep.tag}
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#6B6560",
              marginLeft: "auto",
            }}
          >
            {ep.duration}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#2C2C2C",
            lineHeight: 1.3,
            marginBottom: "8px",
          }}
        >
          {ep.title}
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#6B6560",
            fontWeight: 400,
            marginBottom: "16px",
          }}
        >
          {ep.desc}
        </p>

        {/* Yksi askel */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "10px",
            background: `${ep.color}12`,
            border: `1px solid ${ep.color}30`,
            borderRadius: "10px",
            padding: "10px 14px",
          }}
        >
          <span style={{ fontSize: "14px", flexShrink: 0 }}>🦶</span>
          <div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: ep.color,
                marginBottom: "3px",
              }}
            >
              Yksi askel
            </div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                lineHeight: 1.5,
                color: "#4A4A4A",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {ep.step}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
