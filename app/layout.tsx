import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slow Podcast — Hyvinvointi ilman bullshittiä",
  description: "Hyvinvointipodcast suorittajille. Joka jaksossa yksi konkreettinen askel parempaan hyvinvointiin. Ville Pohjonen & Maiju Markkanen.",
  openGraph: {
    title: "Slow Podcast",
    description: "Hyvinvointi ilman bullshittiä.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
