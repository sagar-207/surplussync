import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SurplusSync — Route surplus where it's needed",
  description:
    "SurplusSync connects businesses with surplus food and goods to the people, shelters, and communities who need them — before it goes to waste.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sand font-body text-forest-950 antialiased">
        {children}
      </body>
    </html>
  );
}
