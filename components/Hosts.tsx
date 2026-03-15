"use client";

const hosts = [
  {
    name: "Ville Pohjonen",
    role: "Isäntä",
    bio: "Yrittäjä, myyntikouluttaja ja itsensä kanssa kamppaileva suorittaja. Kiinnostunut siitä miksi tietää mitä pitäisi tehdä, muttei tee. Vastaus löytyy yllättävän läheltä.",
    initials: "VP",
    gradientFrom: "#4A7A50",
    gradientTo: "#7A9E7E",
    handle: "@villepohjonen",
  },
  {
    name: "Maiju Markkanen",
    role: "Isäntä",
    bio: "Hyvinvointiasiantuntija joka ei usko wellness-hömpötykseen. Etsii käytännöllisiä, tutkimuspohjaisia tapoja elää paremmin — ilman elitistisiä odotuksia.",
    initials: "MM",
    gradientFrom: "#C4714A",
    gradientTo: "#D9916E",
    handle: "@maijumarkkanen",
  },
];

export default function Hosts() {
  return (
    <section
      style={{
        background: "#F7F3EE",
        padding: "120px 48px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
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
              background: "#C4714A",
            }}
          />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#C4714A",
            }}
          >
            Isännät
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
            marginBottom: "64px",
          }}
        >
          Ihmiset mikrofonin takana
        </h2>

        {/* Hosts grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {hosts.map((host) => (
            <HostCard key={host.name} host={host} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HostCard({ host }: { host: typeof hosts[0] }) {
  return (
    <div
      style={{
        background: "#EDE8E1",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Photo placeholder */}
      <div
        style={{
          height: "260px",
          background: `linear-gradient(135deg, ${host.gradientFrom} 0%, ${host.gradientTo} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative rings */}
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(247, 243, 238, 0.15)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid rgba(247, 243, 238, 0.08)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Initials */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(247, 243, 238, 0.2)",
            border: "2px solid rgba(247, 243, 238, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "24px",
            fontWeight: 700,
            color: "#F7F3EE",
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          {host.initials}
        </div>
      </div>

      {/* Text content */}
      <div style={{ padding: "32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#2C2C2C",
            }}
          >
            {host.name}
          </h3>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              color: "#6B6560",
              letterSpacing: "0.04em",
            }}
          >
            {host.handle}
          </span>
        </div>

        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: host.gradientFrom,
            marginBottom: "16px",
          }}
        >
          {host.role}
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#6B6560",
            fontWeight: 400,
          }}
        >
          {host.bio}
        </p>
      </div>
    </div>
  );
}
