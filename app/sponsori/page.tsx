"use client";

export default function SponsoriPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@400;500;600;700&display=swap');

        .sponsori-wrap * { box-sizing: border-box; }

        .sponsori-wrap {
          background-color: #0D0B09;
          min-height: 100vh;
          color: #F0EDE8;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient blobs */
        .blob {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: drift 18s ease-in-out infinite alternate;
        }
        .blob-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%);
          top: -200px; left: -100px;
          filter: blur(80px);
        }
        .blob-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(232,150,63,0.10), transparent 70%);
          bottom: 10%; right: -100px;
          filter: blur(100px);
          animation-delay: -9s;
        }
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.08); }
        }

        /* Nav */
        .sp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 20px 48px;
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(13,11,9,0.80);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s;
        }
        .sp-logo {
          font-family: 'Fraunces', serif;
          font-weight: 800;
          font-size: 20px;
          letter-spacing: 5px;
          text-transform: uppercase;
          text-decoration: none;
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sp-nav-btn {
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          color: #0F0E0C;
          padding: 10px 24px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.2s, opacity 0.2s;
        }
        .sp-nav-btn:hover { transform: translateY(-2px); opacity: 0.9; }

        /* Hero */
        .sp-hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 160px 48px 100px;
          position: relative; z-index: 1;
        }
        .sp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(167,139,250,0.12);
          border: 1px solid rgba(167,139,250,0.25);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 40px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #A78BFA;
        }
        .sp-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #E8963F; flex-shrink: 0;
        }
        .sp-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(40px, 6.5vw, 80px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #F0EDE8;
          margin: 0 0 24px;
        }
        .sp-h1 .grad {
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sp-sub {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.65;
          color: #8A8580;
          max-width: 540px;
          margin: 0 auto 52px;
        }
        .sp-ctas {
          display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
        }
        .sp-cta-primary {
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          color: #0F0E0C;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 16px; font-weight: 700;
          transition: transform 0.2s, opacity 0.2s;
        }
        .sp-cta-primary:hover { transform: translateY(-2px); opacity: 0.9; }
        .sp-cta-ghost {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(167,139,250,0.3);
          color: #F0EDE8;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 16px; font-weight: 600;
          backdrop-filter: blur(10px);
          transition: transform 0.2s, background 0.2s;
        }
        .sp-cta-ghost:hover { transform: translateY(-2px); background: rgba(255,255,255,0.10); }

        /* Stats row */
        .sp-stats {
          position: relative; z-index: 1;
          max-width: 960px; margin: 0 auto;
          padding: 0 48px 80px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .sp-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        .sp-stat-val {
          font-size: 30px; font-weight: 700;
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 6px;
        }
        .sp-stat-label {
          font-size: 12px; color: #8A8580;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
        }

        /* Section headers */
        .sp-section {
          position: relative; z-index: 1;
          max-width: 960px; margin: 0 auto; padding: 80px 48px;
        }
        .sp-section-eye {
          font-size: 11px; color: #A78BFA;
          font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .sp-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #F0EDE8;
          margin: 0 0 20px;
        }
        .sp-body {
          font-size: 16px; line-height: 1.7; color: #8A8580;
        }

        /* Profile grid */
        .sp-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
        }
        @media (max-width: 700px) {
          .sp-profile-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .sp-feature-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px 24px;
          display: flex; gap: 16px; align-items: flex-start;
          margin-bottom: 12px;
        }
        .sp-dot-amber {
          width: 8px; height: 8px; border-radius: 50%;
          background: #E8963F; flex-shrink: 0; margin-top: 6px;
        }
        .sp-dot-purple {
          width: 8px; height: 8px; border-radius: 50%;
          background: #A78BFA; flex-shrink: 0; margin-top: 6px;
        }
        .sp-feature-title { font-size: 15px; font-weight: 700; color: #F0EDE8; margin-bottom: 4px; }
        .sp-feature-desc { font-size: 14px; color: #8A8580; }

        /* Paketit */
        .sp-paketit-bg {
          position: relative; z-index: 1;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 80px 48px;
        }
        .sp-paketit-inner {
          max-width: 960px; margin: 0 auto;
        }
        .sp-paketit-head { text-align: center; margin-bottom: 64px; }
        .sp-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .sp-pkg-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 40px 32px;
          transition: border-color 0.3s;
        }
        .sp-pkg-card:hover { border-color: rgba(167,139,250,0.25); }
        .sp-pkg-card-featured {
          background: rgba(167,139,250,0.08);
          border: 1px solid rgba(167,139,250,0.3);
          border-radius: 20px;
          padding: 40px 32px;
          position: relative;
          box-shadow: 0 0 40px rgba(167,139,250,0.12);
        }
        .sp-pkg-badge {
          position: absolute; top: -14px; left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          color: #0F0E0C;
          font-size: 11px; font-weight: 800;
          padding: 5px 18px;
          border-radius: 100px;
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap;
        }
        .sp-pkg-tier {
          font-size: 11px; color: #8A8580;
          font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .sp-pkg-name { font-size: 16px; font-weight: 700; color: #F0EDE8; margin-bottom: 8px; }
        .sp-pkg-price {
          font-family: 'Fraunces', serif;
          font-size: 40px; font-weight: 700;
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; margin-bottom: 4px;
        }
        .sp-pkg-period { font-size: 13px; color: #8A8580; margin-bottom: 32px; }
        .sp-pkg-list {
          list-style: none; padding: 0; margin: 0 0 36px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .sp-pkg-li {
          display: flex; gap: 12px; font-size: 14px; color: #8A8580; align-items: flex-start;
        }
        .sp-pkg-li-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #A78BFA; flex-shrink: 0; margin-top: 5px;
        }
        .sp-pkg-btn {
          display: block;
          border: 1px solid rgba(167,139,250,0.3);
          color: #A78BFA;
          padding: 14px;
          border-radius: 100px;
          text-decoration: none;
          text-align: center;
          font-size: 14px; font-weight: 700;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .sp-pkg-btn:hover {
          border-color: #A78BFA;
          background: rgba(167,139,250,0.1);
          color: #F0EDE8;
        }
        .sp-pkg-btn-featured {
          display: block;
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          color: #0F0E0C;
          padding: 14px;
          border-radius: 100px;
          text-decoration: none;
          text-align: center;
          font-size: 14px; font-weight: 700;
          transition: transform 0.2s, opacity 0.2s;
        }
        .sp-pkg-btn-featured:hover { transform: translateY(-2px); opacity: 0.9; }

        /* Categories */
        .sp-cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        .sp-cat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 24px 22px;
          transition: border-color 0.2s;
        }
        .sp-cat-card:hover { border-color: rgba(167,139,250,0.2); }
        .sp-cat-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          margin-bottom: 14px;
        }
        .sp-cat-title { font-size: 15px; font-weight: 700; color: #F0EDE8; margin-bottom: 6px; }
        .sp-cat-sub { font-size: 13px; color: #8A8580; }

        /* Hosts */
        .sp-hosts-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; max-width: 700px; margin: 0 auto;
        }
        @media (max-width: 600px) { .sp-hosts-grid { grid-template-columns: 1fr; } }
        .sp-host-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 36px 28px;
        }
        .sp-host-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 800; color: #F0EDE8;
          margin-bottom: 20px;
        }
        .sp-host-name {
          font-family: 'Fraunces', serif;
          font-size: 18px; font-weight: 700;
          color: #F0EDE8; margin-bottom: 4px;
        }
        .sp-host-role { font-size: 13px; color: #A78BFA; font-weight: 600; margin-bottom: 16px; }

        /* Final CTA */
        .sp-cta-section {
          position: relative; z-index: 1;
          padding: 100px 48px;
          text-align: center;
          background: radial-gradient(ellipse at center, rgba(167,139,250,0.08) 0%, transparent 70%);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .sp-cta-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 700;
          color: #F0EDE8;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0 0 24px;
        }
        .sp-cta-email {
          background: linear-gradient(135deg, #A78BFA, #E8963F);
          color: #0F0E0C;
          padding: 18px 48px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 17px; font-weight: 700;
          display: inline-block;
          transition: transform 0.2s, opacity 0.2s;
          margin-top: 48px;
        }
        .sp-cta-email:hover { transform: translateY(-3px); opacity: 0.9; }

        /* Footer */
        .sp-footer {
          position: relative; z-index: 1;
          background: #0A0908;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 48px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .sp-footer a { text-decoration: none; transition: color 0.2s; }
        .sp-footer-copy { font-size: 13px; color: rgba(240,237,232,0.35); }
        .sp-footer-back { font-size: 13px; color: rgba(240,237,232,0.45); }
        .sp-footer-back:hover { color: #A78BFA; }

        @media (max-width: 768px) {
          .sp-nav { padding: 16px 24px; }
          .sp-hero { padding: 120px 24px 80px; }
          .sp-stats { padding: 0 24px 60px; }
          .sp-section { padding: 60px 24px; }
          .sp-paketit-bg { padding: 60px 24px; }
          .sp-cta-section { padding: 80px 24px; }
          .sp-footer { padding: 28px 24px; }
        }
      `}</style>

      <div className="sponsori-wrap">
        {/* Ambient blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Nav */}
        <nav className="sp-nav">
          <a href="/" className="sp-logo">SLOW</a>
          <a href="mailto:ville@kuulu.fi" className="sp-nav-btn">Ota yhteyttä</a>
        </nav>

        {/* Hero */}
        <section className="sp-hero">
          <div className="sp-eyebrow">
            <div className="sp-eyebrow-dot" />
            Sponsoriyhteistyö 2026
          </div>
          <h1 className="sp-h1">
            Tavoita ne jotka
            <br />
            <span className="grad">oikeasti kuuntelevat.</span>
          </h1>
          <p className="sp-sub">
            Slow Podcast on hyvinvointipodcast suorittajille. Kuuntelijamme ovat
            28–45-vuotiaita yrittäjiä ja asiantuntijoita — ostovoimaisia, vaativia ja
            uskollisia.
          </p>
          <div className="sp-ctas">
            <a href="#paketit" className="sp-cta-primary">Katso paketit</a>
            <a href="mailto:ville@kuulu.fi" className="sp-cta-ghost">Kysy lisää</a>
          </div>
        </section>

        {/* Stats */}
        <div className="sp-stats">
          {[
            { value: "28–45v", label: "Kohderyhmä" },
            { value: "2×/kk", label: "Julkaisutahti" },
            { value: "20–30 min", label: "Jakson kesto" },
            { value: "Suomi", label: "Markkina" },
          ].map((s) => (
            <div key={s.label} className="sp-stat-card">
              <div className="sp-stat-val">{s.value}</div>
              <div className="sp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Kuuntelijaprofiili */}
        <section className="sp-section">
          <div className="sp-profile-grid">
            <div>
              <div className="sp-section-eye">Kenelle puhut</div>
              <h2 className="sp-h2">Ostovoimaisin segmentti Suomessa</h2>
              <p className="sp-body" style={{ marginBottom: "20px" }}>
                Kuuntelijamme ovat kiireisiä yrittäjiä ja asiantuntijoita, jotka haluavat
                hidastaa — mutta eivät tiedä miten. He tekevät päätöksiä, heillä on
                budjetti, ja he ostavat tuotteita joihin luottavat.
              </p>
              <p className="sp-body">
                He kuuntelevat yksin, ajaessa tai lenkkeillessä — täydellä huomiolla. Ei
                taustamusiikkia.
              </p>
            </div>
            <div>
              {[
                { label: "Kohdistettu yleisö", desc: "Valikoidusti kiinnostuneet, ei massa" },
                { label: "Autenttinen mainos", desc: "Isäntien äänellä — ei käsikirjoitettu" },
                { label: "Luottamuspohjainen", desc: "Kuuntelijat luottavat isäntien suosituksiin" },
                { label: "Suomalainen konteksti", desc: "Kotimarkkina, premium niche" },
              ].map((item) => (
                <div key={item.label} className="sp-feature-card">
                  <div className="sp-dot-purple" />
                  <div>
                    <div className="sp-feature-title">{item.label}</div>
                    <div className="sp-feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paketit */}
        <div className="sp-paketit-bg" id="paketit">
          <div className="sp-paketit-inner">
            <div className="sp-paketit-head">
              <div className="sp-section-eye">Yhteistyöpaketit</div>
              <h2 className="sp-h2">Kolme tapaa olla mukana</h2>
            </div>
            <div className="sp-cards-grid">
              {/* Taso 1 */}
              <div className="sp-pkg-card">
                <div className="sp-pkg-tier">Taso 1</div>
                <div className="sp-pkg-name">Jaksomainos</div>
                <div className="sp-pkg-price">150–300 €</div>
                <div className="sp-pkg-period">per jakso</div>
                <ul className="sp-pkg-list">
                  {["Pre-roll tai mid-roll, 15 sek", "Isäntien äänellä, autenttinen", "Linkki show notes -osioon"].map((i) => (
                    <li key={i} className="sp-pkg-li">
                      <div className="sp-pkg-li-dot" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – jaksomainos" className="sp-pkg-btn">
                  Kysy lisää
                </a>
              </div>

              {/* Taso 2 — featured */}
              <div className="sp-pkg-card-featured">
                <div className="sp-pkg-badge">Suosituin</div>
                <div className="sp-pkg-tier" style={{ color: "rgba(240,237,232,0.5)" }}>Taso 2</div>
                <div className="sp-pkg-name">Jakson pääsponssori</div>
                <div className="sp-pkg-price">500–900 €</div>
                <div className="sp-pkg-period">per jakso</div>
                <ul className="sp-pkg-list">
                  {[
                    "60 sek intro + 30 sek outro",
                    "Integroitu maininta sisällössä",
                    "Sosiaalimediajulkaisu (IG/LI)",
                    "Show notes -artikkeli maininnalla",
                    "Yksi sponsori per jakso",
                  ].map((i) => (
                    <li key={i} className="sp-pkg-li" style={{ color: "rgba(240,237,232,0.8)" }}>
                      <div className="sp-pkg-li-dot" style={{ background: "#E8963F" }} />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – pääsponssori" className="sp-pkg-btn-featured">
                  Ota yhteyttä
                </a>
              </div>

              {/* Taso 3 */}
              <div className="sp-pkg-card">
                <div className="sp-pkg-tier">Taso 3</div>
                <div className="sp-pkg-name">Sesonkisponssori</div>
                <div className="sp-pkg-price">3 500–6 000 €</div>
                <div className="sp-pkg-period">3 kuukautta (~12 jaksoa)</div>
                <ul className="sp-pkg-list">
                  {[
                    "Kaikki taso 2:n sisällöt",
                    "Eksklusiivisuus kategoriassa",
                    "Integraatio jaksoaiheisiin",
                    "Yhteinen some-kampanja",
                    "Bränditarinan rakentaminen",
                  ].map((i) => (
                    <li key={i} className="sp-pkg-li">
                      <div className="sp-pkg-li-dot" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:ville@kuulu.fi?subject=Slow Podcast – sesonkisponssori" className="sp-pkg-btn">
                  Neuvotellaan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sopivat kategoriat */}
        <section className="sp-section">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="sp-section-eye">Sopivat brändit</div>
            <h2 className="sp-h2">Valitsemme kumppanit harkiten</h2>
            <p className="sp-body" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Emme myy mainospaikkoja kaikille. Kumppanin tuote tulee olla aito ostos
              kuuntelijoillemme.
            </p>
          </div>
          <div className="sp-cat-grid">
            {[
              { cat: "Hyvinvointiruoka & juoma", ex: "Paulig, Foodin, kombucha" },
              { cat: "Sovellukset & wearables", ex: "Oura, Calm, Whoop, Suunto" },
              { cat: "Lifestyle & design", ex: "Iittala, Artek, skandinaavinen" },
              { cat: "Palvelut", ex: "Firstbeat, coaching, analytiikka" },
              { cat: "Terveys & palautuminen", ex: "Lisäravinteet, uni, stressi" },
              { cat: "Suomalaiset brändit", ex: "Kotimarkkina, premium niche" },
            ].map((item) => (
              <div key={item.cat} className="sp-cat-card">
                <div className="sp-cat-dot" />
                <div className="sp-cat-title">{item.cat}</div>
                <div className="sp-cat-sub">{item.ex}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Isännät */}
        <section className="sp-section" style={{ paddingTop: 0 }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="sp-section-eye">Keille puhutaan</div>
            <h2 className="sp-h2">Isännät</h2>
          </div>
          <div className="sp-hosts-grid">
            <div className="sp-host-card">
              <div className="sp-host-avatar" style={{ border: "2px solid #A78BFA" }}>V</div>
              <div className="sp-host-name">Ville Pohjonen</div>
              <div className="sp-host-role">Toimitusjohtaja, Kuulu Oy</div>
              <p className="sp-body" style={{ fontSize: "14px" }}>
                Sarjayrittäjä ja markkinoinnin ammattilainen. Puhuu suorittajuudesta omasta
                kokemuksesta.
              </p>
            </div>
            <div className="sp-host-card">
              <div className="sp-host-avatar" style={{ border: "2px solid #E8963F" }}>M</div>
              <div className="sp-host-name">Maiju Markkanen</div>
              <div className="sp-host-role">Co-host</div>
              <p className="sp-body" style={{ fontSize: "14px" }}>
                Hyvinvoinnin asiantuntija. Tuo ääneen rehellisen, epätäydellisen arjen
                näkökulman.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="sp-cta-section">
          <h2 className="sp-cta-h2">Kiinnostuitko?</h2>
          <p className="sp-body" style={{ maxWidth: "440px", margin: "0 auto" }}>
            Laita viestiä — puhutaan 15 minuuttia ja katsotaan sopiiko yhteistyö.
          </p>
          <a
            href="mailto:ville@kuulu.fi?subject=Slow Podcast – sponsoriyhteistyö"
            className="sp-cta-email"
          >
            ville@kuulu.fi
          </a>
        </section>

        {/* Footer */}
        <footer className="sp-footer">
          <div className="sp-footer-copy">© 2026 Slow Podcast. Ville Pohjonen &amp; Maiju Markkanen.</div>
          <a href="/" className="sp-footer-back">← Takaisin etusivulle</a>
        </footer>
      </div>
    </>
  );
}
