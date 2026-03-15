"use client";

const episodes = [
  {
    number: "#3",
    title: "Miksi uni ei parane vaikka nukkuisit 8 tuntia",
    desc: "Unen määrä ei ole ongelma. Laatu on. Tässä jaksossa: yksi muutos, joka oikeasti vaikuttaa.",
    duration: "38 min",
    tag: "Uni",
    color: "#4A7A50",
    accent: "#A8C5AB",
  },
  {
    number: "#2",
    title: "Liikunta ilman motivaatiota — miten se käytännössä toimii",
    desc: "Motivaatio ei kanna. Systeemi kantaa. Rakennetaan yksi trigger joka toimii.",
    duration: "42 min",
    tag: "Liikunta",
    color: "#C4714A",
    accent: "#EDE8E1",
  },
  {
    number: "#1",
    title: "Slow — Miksi teimme tämän podcastin",
    desc: "Aloitusjaksossa Ville ja Maiju kertovat miksi hyvinvointi on rikki — ja mitä Slow yrittää korjata.",
    duration: "29 min",
    tag: "Aloitus",
    color: "#2C3E2D",
    accent: "#7A9E7E",
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
                Jaksot
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
              Uusimmat jaksot
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
            Kaikki jaksot →
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
      {/* Episode artwork placeholder */}
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
        }}
      >
        <PlayIcon color="#F7F3EE" />
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
          }}
        >
          {ep.desc}
        </p>
      </div>
    </div>
  );
}

function PlayIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
