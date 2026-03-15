"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#2C3E2D",
        padding: "80px 48px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(196, 113, 74, 0.12)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "300px" }}>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "28px",
                letterSpacing: "-0.03em",
                color: "#F7F3EE",
                marginBottom: "12px",
              }}
            >
              slow
              <span style={{ color: "#D9916E" }}>.</span>
            </div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.65,
                color: "rgba(247, 243, 238, 0.55)",
                fontWeight: 400,
              }}
            >
              Hyvinvointi ilman bullshittiä.
              <br />
              Yksi askel. Joka viikko.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              gap: "64px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(247, 243, 238, 0.4)",
                  marginBottom: "20px",
                }}
              >
                Kuuntele
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Spotify", href: "https://open.spotify.com/show/slowpodcast" },
                  { label: "Apple Podcasts", href: "https://podcasts.apple.com/slowpodcast" },
                  { label: "Kaikki jaksot", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href !== "#" ? "_blank" : undefined}
                    rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(247, 243, 238, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F7F3EE";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247, 243, 238, 0.7)";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(247, 243, 238, 0.4)",
                  marginBottom: "20px",
                }}
              >
                Seuraa
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/slowpodcast" },
                  { label: "TikTok", href: "https://tiktok.com/@slowpodcast" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(247, 243, 238, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#F7F3EE";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247, 243, 238, 0.7)";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(247, 243, 238, 0.1)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(247, 243, 238, 0.35)",
              fontWeight: 400,
            }}
          >
            © 2025 Slow Podcast. Ville Pohjonen & Maiju Markkanen.
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(247, 243, 238, 0.25)",
              fontWeight: 400,
            }}
          >
            @slowpodcast
          </p>
        </div>
      </div>
    </footer>
  );
}
