"use client";
import React from "react";
import styles from "./mintContainer.module.css";
import { FaGithub, FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MintContainer = () => {
  return (
    <section className="comic-panel">
      <div className={styles.MintDiv}>
        <div className={styles.ContentContainer}>
          {/* LEFT SIDE */}
          <div className={styles.ContentLeft}>
            <img src="/logoGif.gif" alt="SharkyBoy" />
            <Link href="https://mint.sharkyboy.com" target="_blank">
              <button className={styles.mintButton}>ENTER</button>
            </Link>

            {/* ✅ Speech Bubble moved here under the button */}
            <div className="speechBubble">
              GENESIS AWAKENS. MINT NOW
            </div>
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
