"use client";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2C3E2D 0%, #4A7A50 40%, #7A9E7E 70%, #C4714A 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(196, 113, 74, 0.15)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(122, 158, 126, 0.2)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "-0.02em",
            color: "#F7F3EE",
          }}
        >
          slow
          <span style={{ color: "#D9916E" }}>.</span>
        </div>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(247, 243, 238, 0.6)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          @slowpodcast
        </div>
      </nav>

      {/* Main content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 48px",
          paddingTop: "80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(247, 243, 238, 0.1)",
            border: "1px solid rgba(247, 243, 238, 0.2)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#D9916E",
            }}
          />
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(247, 243, 238, 0.8)",
            }}
          >
            Hyvinvointipodcast suorittajille
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(42px, 7vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F7F3EE",
            marginBottom: "24px",
            maxWidth: "780px",
          }}
        >
          Sä et oo rikki.
          <br />
          <span style={{ color: "#D9916E" }}>Sä oot vaan</span>
          <br />
          liian nopeella.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "rgba(247, 243, 238, 0.75)",
            marginBottom: "52px",
            maxWidth: "520px",
          }}
        >
          Hyvinvointi ilman bullshittiä. Joka jaksossa yksi konkreettinen askel
          — ei elämäntaparemonttia, ei 5-askelista ohjelmaa. Vain yksi asia.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://open.spotify.com/show/slowpodcast"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#1DB954",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.95";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            <SpotifyIcon />
            Kuuntele Spotifyssa
          </a>

          <a
            href="https://podcasts.apple.com/slowpodcast"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(247, 243, 238, 0.12)",
              border: "1px solid rgba(247, 243, 238, 0.25)",
              color: "#F7F3EE",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
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
            <AppleIcon />
            Apple Podcasts
          </a>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(247, 243, 238, 0.4)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "rgba(247, 243, 238, 0.3)",
            }}
          />
          Scroll
        </div>
      </div>
    </section>
  );
}

function SpotifyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
