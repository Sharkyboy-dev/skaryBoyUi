import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: [
    {
      path: "./zing.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--my-font",
});

export const metadata: Metadata = {
  title: "SharkyBoy Genesis Collection Mint",
  description: "SharkyBoy Genesis Collection Mint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    position: "relative",
    paddingBottom: "4px",
    transition: "color 0.3s ease",
  };

  const navLinkHoverStyle = `
    header a:hover::after {
      transform: scaleX(1);
      opacity: 1;
    }
    header a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #0ff;
      box-shadow: 0 0 8px #0ff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }
  `;

  return (
    <html lang="en" className={myFont.variable}>
      <head>
        <style>{navLinkHoverStyle}</style>
      </head>
      <body style={{ margin: 0 }}>
        {/* Sticky Glowing Header */}
        <header
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "1.5rem 3rem",
            borderBottom: "2px solid white",
            position: "sticky",
            top: 0,
            zIndex: 999,
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: "1.6rem",
              textTransform: "uppercase",
              gap: "2rem",
            }}
          >
            <Link href="/" style={navLinkStyle}>
              Home
            </Link>
            <a href="#about" style={navLinkStyle}>
              About
            </a>
            <a href="#howtobuy" style={navLinkStyle}>
              How to Buy
            </a>
            <a href="#faqs" style={navLinkStyle}>
              FAQs
            </a>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
