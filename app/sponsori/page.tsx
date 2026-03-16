"use client";

import type { Metadata } from "next";

export default function SponsoriPage() {
  return (
    <div
      style={{
        backgroundColor: "#F7F3EE",
        minHeight: "100vh",
        color: "#2C2C2C",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <a
          href="/"
          style={{
            fontWeight: 800,
            fontSize: "18px",
            letterSpacing: "-0.02em",
            color: "#2C3E2D",
            textDecoration: "none",
          }}
        >
          slow<span style={{ color: "#D9916E" }}>.</span>
        </a>
        <a
          href="mailto:ville@kuulu.fi"
          style={{
            backgroundColor: "#C4714A",
            color: "#F7F3EE",
            padding: "11px 24px",
            borderRadius: "100px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            transition: "transform 0.2s, opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          Ota yhteyttä
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #2C3E2D 0%, #4A7A50 45%, #7A9E7E 70%, #C4714A 100%)",
          padding: "100px 48px 120px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(196, 113, 74, 0.18)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-8%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(122, 158, 126, 0.2)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(247, 243, 238, 0.12)",
              border: "1px solid rgba(247, 243, 238, 0.25)",
              borderRadius: "100px",
              padding: "6px 18px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#D9916E",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247, 243, 238, 0.85)",
              }}
            >
              Sponsoriyhteistyö 2026
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6.5vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F7F3EE",
              marginBottom: "28px",
            }}
          >
            Tavoita ne jotka
            <br />
            <span style={{ color: "#D9916E" }}>oikeasti kuuntelevat.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.65,
              color: "rgba(247, 243, 238, 0.75)",
              maxWidth: "540px",
              margin: "0 auto 52px",
              fontWeight: 400,
            }}
          >
            Slow Podcast on hyvinvointipodcast suorittajille. Kuuntelijamme ovat 28–45-vuotiaita
            yrittäjiä ja asiantuntijoita — ostovoimaisia, vaativia ja uskollisia.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#paketit"
              style={{
                backgroundColor: "#D9916E",
                color: "#F7F3EE",
                padding: "16px 36px",
                borderRadius: "100px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                transition: "transform 0.2s, opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Katso paketit
            </a>
            <a
              href="mailto:ville@kuulu.fi"
              style={{
                background: "rgba(247, 243, 238, 0.12)",
                border: "1px solid rgba(247, 243, 238, 0.3)",
                color: "#F7F3EE",
                padding: "16px 36px",
                borderRadius: "100px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(247, 243, 238, 0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(247, 243, 238, 0.12)";
              }}
            >
              Kysy lisää
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: "960px", margin: "-48px auto 0", padding: "0 48px", position: "relative", zIndex: 5 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            { value: "28–45v", label: "Kohderyhmä" },
            { value: "2×/kk", label: "Julkaisutahti" },
            { value: "20–30 min", label: "Jakson kesto" },
            { value: "Suomi", label: "Kieli ja markkina" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#F7F3EE",
                border: "1px solid rgba(44, 62, 45, 0.12)",
                borderRadius: "16px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(44, 62, 45, 0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  color: "#2C3E2D",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#7A9E7E",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kuuntelijaprofiili */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#C4714A",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Kenelle puhut
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#2C3E2D",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Ostovoimaisin segmentti Suomessa
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#6B6560", marginBottom: "20px" }}>
              Kuuntelijamme ovat kiireisiä yrittäjiä ja asiantuntijoita, jotka haluavat hidastaa —
              mutta eivät tiedä miten. He tekevät päätöksiä, heillä on budjetti, ja he ostavat
              tuotteita joihin luottavat.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#6B6560" }}>
              He kuuntelevat yksin, ajaessa tai lenkkeillessä — täydellä huomiolla. Ei
              taustamusiikkia.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Kohdistettu yleisö", desc: "Valikoidusti kiinnostuneet, ei massa" },
              { label: "Autenttinen mainos", desc: "Isäntien äänellä — ei käsikirjoitettu" },
              { label: "Luottamuspohjainen", desc: "Kuuntelijat luottavat isäntien suosituksiin" },
              { label: "Suomalainen konteksti", desc: "Kotimarkkina, premium niche" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#EDE8E1",
                  border: "1px solid rgba(44, 62, 45, 0.08)",
                  borderRadius: "14px",
                  padding: "20px 24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#C4714A",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2C3E2D",
                      marginBottom: "4px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "14px", color: "#6B6560" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketit */}
      <section
        id="paketit"
        style={{
          background: "linear-gradient(180deg, #F7F3EE 0%, #EDE8E1 100%)",
          padding: "80px 48px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(196, 113, 74, 0.08)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                fontSize: "11px",
                color: "#C4714A",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Yhteistyöpaketit
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 800,
                color: "#2C3E2D",
                letterSpacing: "-0.02em",
              }}
            >
              Kolme tapaa olla mukana
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Taso 1 */}
            <div
              style={{
                background: "#F7F3EE",
                border: "1px solid rgba(44, 62, 45, 0.1)",
                borderRadius: "20px",
                padding: "40px 32px",
                boxShadow: "0 2px 20px rgba(44, 62, 45, 0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#7A9E7E",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Taso 1
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#2C3E2D",
                  marginBottom: "8px",
                }}
              >
                Jaksomainos
              </div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#2C3E2D",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                150–300 €
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#7A9E7E",
                  marginBottom: "32px",
                  fontWeight: 500,
                }}
              >
                per jakso
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  "Pre-roll tai mid-roll, 15 sek",
                  "Isäntien äänellä, autenttinen",
                  "Linkki show notes -osioon",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: "#6B6560",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#C4714A",
                        flexShrink: 0,
                        marginTop: "6px",
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:ville@kuulu.fi?subject=Slow Podcast – jaksomainos"
                style={{
                  display: "block",
                  border: "1.5px solid rgba(44, 62, 45, 0.2)",
                  color: "#2C3E2D",
                  padding: "14px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4714A";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196, 113, 74, 0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(44, 62, 45, 0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                Kysy lisää
              </a>
            </div>

            {/* Taso 2 — highlighted */}
            <div
              style={{
                background: "linear-gradient(145deg, #2C3E2D 0%, #4A7A50 100%)",
                borderRadius: "20px",
                padding: "40px 32px",
                position: "relative",
                boxShadow: "0 8px 40px rgba(44, 62, 45, 0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#D9916E",
                  color: "#F7F3EE",
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "5px 18px",
                  borderRadius: "100px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Suosituin
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(247, 243, 238, 0.5)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Taso 2
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#F7F3EE",
                  marginBottom: "8px",
                }}
              >
                Jakson pääsponssori
              </div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#F7F3EE",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                500–900 €
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(247, 243, 238, 0.5)",
                  marginBottom: "32px",
                  fontWeight: 500,
                }}
              >
                per jakso
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  "60 sek intro + 30 sek outro",
                  "Integroitu maininta sisällössä",
                  "Sosiaalimediajulkaisu (IG/LI)",
                  "Show notes -artikkeli maininnalla",
                  "Yksi sponsori per jakso",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: "rgba(247, 243, 238, 0.85)",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#D9916E",
                        flexShrink: 0,
                        marginTop: "6px",
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:ville@kuulu.fi?subject=Slow Podcast – pääsponssori"
                style={{
                  display: "block",
                  backgroundColor: "#D9916E",
                  color: "#F7F3EE",
                  padding: "14px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  transition: "transform 0.2s, opacity 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
              >
                Ota yhteyttä
              </a>
            </div>

            {/* Taso 3 */}
            <div
              style={{
                background: "#F7F3EE",
                border: "1px solid rgba(44, 62, 45, 0.1)",
                borderRadius: "20px",
                padding: "40px 32px",
                boxShadow: "0 2px 20px rgba(44, 62, 45, 0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#7A9E7E",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Taso 3
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#2C3E2D",
                  marginBottom: "8px",
                }}
              >
                Sesonkisponssori
              </div>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#2C3E2D",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                  lineHeight: 1,
                }}
              >
                3 500–6 000 €
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#7A9E7E",
                  marginBottom: "32px",
                  fontWeight: 500,
                }}
              >
                3 kuukautta (~12 jaksoa)
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  "Kaikki taso 2:n sisällöt",
                  "Eksklusiivisuus kategoriassa",
                  "Integraatio jaksoaiheisiin",
                  "Yhteinen some-kampanja",
                  "Bränditarinan rakentaminen",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "14px",
                      color: "#6B6560",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#C4714A",
                        flexShrink: 0,
                        marginTop: "6px",
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:ville@kuulu.fi?subject=Slow Podcast – sesonkisponssori"
                style={{
                  display: "block",
                  border: "1.5px solid rgba(44, 62, 45, 0.2)",
                  color: "#2C3E2D",
                  padding: "14px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4714A";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196, 113, 74, 0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(44, 62, 45, 0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                Neuvotellaan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sopivat kategoriat */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#C4714A",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Sopivat brändit
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "#2C3E2D",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Valitsemme kumppanit harkiten
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6B6560",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Emme myy mainospaikkoja kaikille. Kumppanin tuote tulee olla aito ostos
            kuuntelijoillemme.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            { cat: "Hyvinvointiruoka & juoma", ex: "Paulig, Foodin, kombucha" },
            { cat: "Sovellukset & wearables", ex: "Oura, Calm, Whoop, Suunto" },
            { cat: "Lifestyle & design", ex: "Iittala, Artek, skandinaavinen" },
            { cat: "Palvelut", ex: "Firstbeat, coaching, analytiikka" },
            { cat: "Terveys & palautuminen", ex: "Lisäravinteet, uni, stressi" },
            { cat: "Suomalaiset brändit", ex: "Kotimarkkina, premium niche" },
          ].map((item) => (
            <div
              key={item.cat}
              style={{
                background: "#EDE8E1",
                border: "1px solid rgba(44, 62, 45, 0.08)",
                borderRadius: "14px",
                padding: "24px 22px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#7A9E7E",
                  marginBottom: "14px",
                }}
              />
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#2C3E2D",
                  marginBottom: "6px",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.cat}
              </div>
              <div style={{ fontSize: "13px", color: "#7A9E7E", fontWeight: 500 }}>{item.ex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Isännät */}
      <section
        style={{
          background: "#EDE8E1",
          borderTop: "1px solid rgba(44, 62, 45, 0.08)",
          padding: "80px 48px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div
              style={{
                fontSize: "11px",
                color: "#C4714A",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Keille puhutaan
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#2C3E2D",
                letterSpacing: "-0.02em",
              }}
            >
              Isännät
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "#F7F3EE",
                border: "1px solid rgba(44, 62, 45, 0.1)",
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 2px 20px rgba(44, 62, 45, 0.06)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4A7A50, #2C3E2D)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#F7F3EE",
                  marginBottom: "20px",
                }}
              >
                V
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#2C3E2D",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                Ville Pohjonen
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#C4714A",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Toimitusjohtaja, Kuulu Oy
              </div>
              <p style={{ fontSize: "14px", color: "#6B6560", lineHeight: 1.7 }}>
                Sarjayrittäjä ja markkinoinnin ammattilainen. Puhuu suorittajuudesta omasta
                kokemuksesta.
              </p>
            </div>
            <div
              style={{
                background: "#F7F3EE",
                border: "1px solid rgba(44, 62, 45, 0.1)",
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 2px 20px rgba(44, 62, 45, 0.06)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #D9916E, #C4714A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#F7F3EE",
                  marginBottom: "20px",
                }}
              >
                M
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#2C3E2D",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                Maiju Markkanen
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#C4714A",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Co-host
              </div>
              <p style={{ fontSize: "14px", color: "#6B6560", lineHeight: 1.7 }}>
                Hyvinvoinnin asiantuntija. Tuo ääneen rehellisen, epätäydellisen arjen näkökulman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #2C3E2D 0%, #4A7A50 50%, #C4714A 100%)",
          padding: "100px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "rgba(217, 145, 110, 0.12)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: "#F7F3EE",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Kiinnostuitko?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(247, 243, 238, 0.75)",
              marginBottom: "48px",
              maxWidth: "440px",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Laita viestiä — puhutaan 15 minuuttia ja katsotaan sopiiko yhteistyö.
          </p>
          <a
            href="mailto:ville@kuulu.fi?subject=Slow Podcast – sponsoriyhteistyö"
            style={{
              backgroundColor: "#D9916E",
              color: "#F7F3EE",
              padding: "18px 48px",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "17px",
              fontWeight: 700,
              display: "inline-block",
              letterSpacing: "-0.01em",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            ville@kuulu.fi
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#2C3E2D",
          padding: "32px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "rgba(247, 243, 238, 0.4)",
            fontWeight: 400,
          }}
        >
          © 2026 Slow Podcast. Ville Pohjonen & Maiju Markkanen.
        </div>
        <a
          href="/"
          style={{
            fontSize: "13px",
            color: "rgba(247, 243, 238, 0.5)",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#F7F3EE";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247, 243, 238, 0.5)";
          }}
        >
          ← Takaisin etusivulle
        </a>
      </footer>
    </div>
  );
}
