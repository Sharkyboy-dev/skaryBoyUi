"use client";
import React from "react";
import styles from "./mintContainer.module.css";
import { FaGithub, FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MintContainer = () => {
  return (
    <section className="comic-panel" style={{ position: "relative", overflow: "hidden" }}>
      {/* ✅ Floating Emoji Bubbles (Sharks & Diamonds) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "2rem",
        opacity: 0.6
      }}>
        <div className="emoji-bubble shark">🦈</div>
        <div className="emoji-bubble diamond">💎</div>
        <div className="emoji-bubble shark">🦈</div>
        <div className="emoji-bubble diamond">💎</div>
        <div className="emoji-bubble shark">🦈</div>
      </div>

      <div className={styles.MintDiv} style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.ContentContainer}>
          {/* LEFT SIDE */}
          <div className={styles.ContentLeft}>
            <img src="/logoGif.gif" alt="SharkyBoy" />

            {/* ✅ Speech Bubble ABOVE Mint button */}
            <div className="speechBubble">
              GENESIS AWAKENS. MINT NOW
            </div>

            <Link href="https://mint.sharkyboy.com" target="_blank">
              <button className={styles.mintButton}>ENTER</button>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.ContentRight}>
            <div className={styles.DescDiv}>
              <span
                style={{
                  fontFamily: "var(--comic-title)",
                  fontSize: "2em",
                  lineHeight: "1.3",
                  textAlign: "center",
                }}
              >
                OWN THE STORY. SHAPE THE FUTURE.
                <br />
                JOIN THE SHARKYGANG.
              </span>

              <div className={styles.ButtonsContainer}>
                <Link href="#origin">
                  <button>Origin Story</button>
                </Link>
                <Link href="#roadmap">
                  <button>Roadmap</button>
                </Link>
              </div>

              <div className={styles.IconsContainer}>
                <Link href="https://t.co/2PyAgbMLEj" target="_blank">
                  <FaTelegram />
                </Link>
                <Link href="http://instagram.com/sharkyboy_nft" target="_blank">
                  <FaInstagram />
                </Link>
                <Link href="https://github.com/Sharkyboy-dev" target="_blank">
                  <FaGithub />
                </Link>
                <Link href="https://x.com/sharkyboy_nft" target="_blank">
                  <FaXTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MintContainer;
