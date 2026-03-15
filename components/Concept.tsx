"use client";

export default function Concept() {
  const pillars = [
    {
      number: "01",
      title: "Yksi askel.",
      desc: "Ei 10-kohtaista listaa. Ei elämäntaparemonttia. Yksi asia per jakso — kokeiltavissa heti.",
    },
    {
      number: "02",
      title: "Ei höpötystä.",
      desc: "Puhumme suoraan. Jos jokin ei toimi, sanomme sen. Rehellisyys menee positiivisuuspornon edelle.",
    },
    {
      number: "03",
      title: "Suorittajille.",
      desc: "Tiedät mitä pitäisi tehdä. Ongelma on ettei aika riitä. Meillä ei ole enemmän aikaa — meillä on parempi fokus.",
    },
  ];

  return (
    <section
      style={{
        background: "#F7F3EE",
        padding: "120px 48px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "48px",
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
            Konsepti
          </span>
        </div>

        {/* Main statement */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#2C2C2C",
            marginBottom: "24px",
            maxWidth: "640px",
          }}
        >
          Joka jaksossa yksi askel.
          <br />
          <span style={{ color: "#7A9E7E" }}>Se riittää.</span>
        </h2>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#6B6560",
            marginBottom: "80px",
            maxWidth: "540px",
          }}
        >
          Hyvinvointi ei tarvitse enemmän willpoweria. Se tarvitsee vähemmän
          monimutkaisuutta. Slow Podcast tekee yhdestä asiasta kerrallaan
          helpomman.
        </p>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2px",
            background: "#EDE8E1",
            border: "2px solid #EDE8E1",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.number}
              style={{
                background: "#F7F3EE",
                padding: "40px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#C4714A",
                  marginBottom: "20px",
                }}
              >
                {p.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#2C2C2C",
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#6B6560",
                  fontWeight: 400,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
