"use client";

export default function Meista() {
  return (
    <section
      style={{
        background: "#2C3E2D",
        padding: "120px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blur */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(196, 113, 74, 0.12)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "32px", height: "2px", background: "#C4714A" }} />
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
            Meistä
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#F7F3EE",
            lineHeight: 1.1,
            marginBottom: "32px",
            maxWidth: "680px",
          }}
        >
          Ei guru-puheita.
          <br />
          <span style={{ color: "#7A9E7E" }}>Suorittajalta suorittajalle.</span>
        </h2>

        {/* Intro */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(247, 243, 238, 0.75)",
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Slow Podcast syntyi turhautumisesta. Biohakkerointi-kulttuuri lupaa kaiken —
          kunhan ostat oikean lisäravinteen, nukut täsmälleen 8h ja teet kylmäsuihkun joka aamu.
          Optimointi alkaa stressata enemmän kuin se auttaa.
        </p>

        {/* Key angles grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
            background: "rgba(247, 243, 238, 0.08)",
            border: "1px solid rgba(247, 243, 238, 0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "64px",
          }}
        >
          {[
            {
              icon: "👋",
              title: "Puhumme suorittajille",
              desc: "Et ole väärässä ammatissa tai väärässä elämässä. Olet vaan ottanut liian paljon. Tämä podcast on tehty ihmiselle, joka tunnistaa itsensä sanasta 'suorittaja'.",
            },
            {
              icon: "🚫",
              title: "Ei biohakkerointia",
              desc: "Emme myy kylmäsuihkuja, HRV-sormuksia tai 5 AM -klubi-ideologiaa. Jos jokin ei toimi tai kuulostaa bullshitiltä, sanomme sen ääneen.",
            },
            {
              icon: "🗝️",
              title: "Suorittajan sisäpiiritieto",
              desc: "Me olemme itse matkalla — emme valmiita. Ville on myyntikouluttaja joka kamppailee oman pään kanssa. Maiju on hyvinvointiasiantuntija joka ei usko wellness-hömpötykseen. Yhdessä.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(247, 243, 238, 0.04)",
                padding: "40px 36px",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{item.icon}</div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#F7F3EE",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "rgba(247, 243, 238, 0.65)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: "3px solid #C4714A",
            paddingLeft: "32px",
            margin: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.5,
              color: "#F7F3EE",
              marginBottom: "16px",
            }}
          >
            "Jos stressaat siitä ettet tehnyt kylmäsuihkua, se optimointi lisää stressiä
            — ei vähennä sitä."
          </p>
          <cite
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7A9E7E",
              fontStyle: "normal",
            }}
          >
            Slow Podcast — jakso 1
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
