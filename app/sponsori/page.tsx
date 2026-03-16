import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsoroi Slow Podcastia — Tavoita päättäjät",
  description: "Slow Podcast tavoittaa 28–45-vuotiaat yrittäjät ja asiantuntijat. Sponsoroi podcastia joka puhuu kuuntelijoiden arvomaailmaa.",
  openGraph: {
    title: "Sponsoroi Slow Podcastia",
    description: "Tavoita ostovoimaiset suorittajat autenttisella podcast-mainonnalla.",
    type: "website",
  },
};

export default function SponsoriPage() {
  return (
    <div style={{ backgroundColor: "#1b1b1b", minHeight: "100vh", color: "#c5c1b9", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Nav */}
      <nav style={{ padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(197,193,185,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#c5c1b9", letterSpacing: "-0.02em" }}>Slow Podcast</span>
        </div>
        <a
          href="mailto:ville@kuulu.fi"
          style={{ backgroundColor: "#575ECF", color: "#fff", padding: "10px 22px", borderRadius: "6px", textDecoration: "none", fontSize: "14px", fontWeight: 600, letterSpacing: "0.01em" }}
        >
          Ota yhteyttä
        </a>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "100px 40px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", backgroundColor: "rgba(87,94,207,0.15)", border: "1px solid rgba(87,94,207,0.4)", borderRadius: "100px", padding: "6px 16px", marginBottom: "32px" }}>
          <span style={{ fontSize: "12px", color: "#575ECF", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Sponsoriyhteistyö 2026</span>
        </div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#e8e4dc", marginBottom: "24px" }}>
          Tavoita 28–45-vuotiaat<br />
          <span style={{ color: "#575ECF" }}>yrittäjät ja asiantuntijat</span>
        </h1>
        <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#a09c94", maxWidth: "600px", margin: "0 auto 48px" }}>
          Slow Podcast on hyvinvointipodcast suorittajille. Ei optimointia, ei biohakkerointia — vaan rehellinen puhe jaksamisesta. Kuuntelijat luottavat isäntiin. Se tekee mainonnasta tehokasta.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#paketit" style={{ backgroundColor: "#575ECF", color: "#fff", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "16px", fontWeight: 700 }}>
            Katso paketit
          </a>
          <a href="mailto:ville@kuulu.fi" style={{ border: "1px solid rgba(197,193,185,0.3)", color: "#c5c1b9", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "16px", fontWeight: 600 }}>
            Kysy lisää
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", backgroundColor: "rgba(197,193,185,0.1)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(197,193,185,0.1)" }}>
          {[
            { value: "28–45v", label: "Kohderyhmä" },
            { value: "2×/kk", label: "Julkaisutahti" },
            { value: "20–30 min", label: "Jakson kesto" },
            { value: "Suomi", label: "Kieli ja markkina" },
          ].map((stat) => (
            <div key={stat.label} style={{ backgroundColor: "#222", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em", marginBottom: "8px" }}>{stat.value}</div>
              <div style={{ fontSize: "13px", color: "#6b6760", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kuuntelijaprofiili */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 40px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "12px", color: "#575ECF", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Kenelle puhut</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "24px" }}>
              Ostovoimaisin segmentti Suomessa
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#a09c94", marginBottom: "24px" }}>
              Kuuntelijamme ovat kiireisiä yrittäjiä ja asiantuntijoita, jotka haluavat hidastaa — mutta eivät tiedä miten. He tekevät päätöksiä, heillä on budjetti, ja he ostavat tuotteita joihin luottavat.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#a09c94" }}>
              Kuuntelijat eivät kuuntele podcastia taustamusiikkina. He kuuntelevat yksin, ajaessa tai lenkkeillessä — täydellä huomiolla.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: "🎯", title: "Kohdistettu yleisö", desc: "Valikoidusti kiinnostuneet, ei massa" },
              { icon: "💬", title: "Autenttinen mainos", desc: "Isäntien äänellä, ei käsikirjoitettu" },
              { icon: "🤝", title: "Luottamuspohjainen", desc: "Kuuntelijat luottavat isäntien suosituksiin" },
              { icon: "🇫🇮", title: "Suomalainen konteksti", desc: "Kotimarkkina, premium niche" },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "#222", border: "1px solid rgba(197,193,185,0.08)", borderRadius: "10px", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "22px", lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#e8e4dc", marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ fontSize: "14px", color: "#6b6760" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketit */}
      <section id="paketit" style={{ maxWidth: "960px", margin: "0 auto", padding: "0 40px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "12px", color: "#575ECF", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Yhteistyöpaketit</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em" }}>
            Kolme tapaa olla mukana
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>

          {/* Taso 1 */}
          <div style={{ backgroundColor: "#222", border: "1px solid rgba(197,193,185,0.1)", borderRadius: "12px", padding: "36px 28px" }}>
            <div style={{ fontSize: "12px", color: "#6b6760", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Taso 1</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e4dc", marginBottom: "8px" }}>Jaksomainos</div>
            <div style={{ fontSize: "38px", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em", marginBottom: "4px" }}>150–300 €</div>
            <div style={{ fontSize: "13px", color: "#6b6760", marginBottom: "28px" }}>per jakso</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Pre-roll tai mid-roll, 15 sek",
                "Isäntien äänellä, autenttinen",
                "Linkki show notes -osioon",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#a09c94", alignItems: "flex-start" }}>
                  <span style={{ color: "#575ECF", fontSize: "16px", lineHeight: "1.2" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – jaksomainos" style={{ display: "block", border: "1px solid rgba(197,193,185,0.2)", color: "#c5c1b9", padding: "12px", borderRadius: "6px", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: 600 }}>
              Kysy lisää
            </a>
          </div>

          {/* Taso 2 — highlighted */}
          <div style={{ backgroundColor: "#575ECF", border: "1px solid rgba(87,94,207,0.8)", borderRadius: "12px", padding: "36px 28px", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#e8e4dc", color: "#1b1b1b", fontSize: "11px", fontWeight: 800, padding: "4px 14px", borderRadius: "100px", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Suosituin
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Taso 2</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Jakson pääsponssori</div>
            <div style={{ fontSize: "38px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "4px" }}>500–900 €</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>per jakso</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "60 sek intro + 30 sek outro",
                "Integroitu maininta sisällössä",
                "Sosiaalimediajulkaisu (IG/LI)",
                "Show notes -artikkeli maininnalla",
                "Yksi sponsori per jakso",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.85)", alignItems: "flex-start" }}>
                  <span style={{ color: "#fff", fontSize: "16px", lineHeight: "1.2" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – pääsponssori" style={{ display: "block", backgroundColor: "#fff", color: "#575ECF", padding: "12px", borderRadius: "6px", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: 700 }}>
              Ota yhteyttä
            </a>
          </div>

          {/* Taso 3 */}
          <div style={{ backgroundColor: "#222", border: "1px solid rgba(197,193,185,0.1)", borderRadius: "12px", padding: "36px 28px" }}>
            <div style={{ fontSize: "12px", color: "#6b6760", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Taso 3</div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e4dc", marginBottom: "8px" }}>Sesonkisponssori</div>
            <div style={{ fontSize: "38px", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em", marginBottom: "4px" }}>3 500–6 000 €</div>
            <div style={{ fontSize: "13px", color: "#6b6760", marginBottom: "28px" }}>3 kuukautta (~12 jaksoa)</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Kaikki taso 2:n sisällöt",
                "Eksklusiivisuus kategoriassa",
                "Integraatio jaksoaiheisiin",
                "Yhteinen some-kampanja",
                "Bränditarinan rakentaminen",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#a09c94", alignItems: "flex-start" }}>
                  <span style={{ color: "#575ECF", fontSize: "16px", lineHeight: "1.2" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – sesonkisponssori" style={{ display: "block", border: "1px solid rgba(197,193,185,0.2)", color: "#c5c1b9", padding: "12px", borderRadius: "6px", textDecoration: "none", textAlign: "center", fontSize: "14px", fontWeight: 600 }}>
              Neuvotellaan
            </a>
          </div>

        </div>
      </section>

      {/* Sopivat kategoriat */}
      <section style={{ backgroundColor: "#202020", borderTop: "1px solid rgba(197,193,185,0.08)", borderBottom: "1px solid rgba(197,193,185,0.08)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "12px", color: "#575ECF", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Sopivat brändit</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em" }}>
              Valitsemme kumppanit harkiten
            </h2>
            <p style={{ fontSize: "16px", color: "#a09c94", marginTop: "16px", maxWidth: "520px", margin: "16px auto 0" }}>
              Emme myy mainospaikkoja kaikille. Kumppanin tuote tulee olla aito ostos kuuntelijoillemme.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { cat: "Hyvinvointiruoka & juoma", ex: "Paulig, Foodin, kombucha" },
              { cat: "Sovellukset & wearables", ex: "Oura, Calm, Whoop, Suunto" },
              { cat: "Lifestyle & design", ex: "Iittala, Artek, skandinaavinen" },
              { cat: "Palvelut", ex: "Firstbeat, coaching, analytiikka" },
              { cat: "Terveys & palautuminen", ex: "Lisäravinteet, uni, stressi" },
              { cat: "Suomalaiset brändit", ex: "Kotimarkkina, premium niche" },
            ].map((item) => (
              <div key={item.cat} style={{ backgroundColor: "#1b1b1b", border: "1px solid rgba(197,193,185,0.08)", borderRadius: "10px", padding: "20px 20px" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e4dc", marginBottom: "6px" }}>{item.cat}</div>
                <div style={{ fontSize: "13px", color: "#6b6760" }}>{item.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Isännät */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div style={{ backgroundColor: "#222", border: "1px solid rgba(197,193,185,0.08)", borderRadius: "12px", padding: "36px 28px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#575ECF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "20px" }}>V</div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#e8e4dc", marginBottom: "4px" }}>Ville Pohjonen</div>
            <div style={{ fontSize: "13px", color: "#575ECF", fontWeight: 600, marginBottom: "16px" }}>Toimitusjohtaja, Kuulu Oy</div>
            <p style={{ fontSize: "14px", color: "#a09c94", lineHeight: 1.7 }}>
              Sarjayrittäjä ja markkinoinnin ammattilainen. Puhuu suorittajuudesta omasta kokemuksesta.
            </p>
          </div>
          <div style={{ backgroundColor: "#222", border: "1px solid rgba(197,193,185,0.08)", borderRadius: "12px", padding: "36px 28px" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#c5c1b9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#1b1b1b", marginBottom: "20px" }}>M</div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#e8e4dc", marginBottom: "4px" }}>Maiju Markkanen</div>
            <div style={{ fontSize: "13px", color: "#575ECF", fontWeight: 600, marginBottom: "16px" }}>Co-host</div>
            <p style={{ fontSize: "14px", color: "#a09c94", lineHeight: 1.7 }}>
              Hyvinvoinnin asiantuntija. Tuo ääneen rehellisen, epätäydellisen arjen näkökulman.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ borderTop: "1px solid rgba(197,193,185,0.08)", padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#e8e4dc", letterSpacing: "-0.02em", marginBottom: "20px" }}>
          Kiinnostuitko?
        </h2>
        <p style={{ fontSize: "18px", color: "#a09c94", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
          Laita viestiä — puhutaan 15 minuuttia ja katsotaan sopiiko yhteistyö.
        </p>
        <a
          href="mailto:ville@kuulu.fi?subject=Slow Podcast – sponsoriyhteistyö"
          style={{ backgroundColor: "#575ECF", color: "#fff", padding: "18px 40px", borderRadius: "6px", textDecoration: "none", fontSize: "17px", fontWeight: 700, display: "inline-block" }}
        >
          ville@kuulu.fi
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(197,193,185,0.08)", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ fontSize: "14px", color: "#6b6760" }}>© 2026 Slow Podcast. Ville Pohjonen & Maiju Markkanen.</div>
        <a href="/" style={{ fontSize: "14px", color: "#6b6760", textDecoration: "none" }}>← Takaisin etusivulle</a>
      </footer>

    </div>
  );
}
