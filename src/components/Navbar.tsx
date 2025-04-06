"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <style jsx>{`
        nav a {
          color: #fff;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        nav a::after {
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

        nav a:hover::after {
          transform: scaleX(1);
          opacity: 1;
        }

        header {
          background-color: #000;
          color: #fff;
          padding: 1.5rem 3rem;
          border-bottom: 2px solid white;
          position: sticky;
          top: 0;
          z-index: 999;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 1.6rem;
          text-transform: uppercase;
          gap: 2rem;
        }
      `}</style>

      <header>
        <nav>
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#howtobuy">How to Buy</a>
          <a href="#faqs">FAQs</a>
        </nav>
      </header>
    </>
  );
}
