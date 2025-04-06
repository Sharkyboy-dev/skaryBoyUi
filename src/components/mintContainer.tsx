"use client";
import React from "react";
import styles from "./mintContainer.module.css";
import { FaGithub, FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MintContainer = () => {
  return (
    <section className={styles.MintDiv}>
      <div className={styles.ContentContainer}>
        {/* Left: Image + Mint Now */}
        <div className={styles.ContentLeft}>
          <img src="/logoGif.gif" alt="Sharkyboy NFT" />
          <Link href="https://mint.sharkyboy.com" target="_blank">
            <button>Mint Now</button>
          </Link>
        </div>

        {/* Right: Text, Buttons, Icons */}
        <div className={styles.ContentRight}>
          <div className={styles.DescDiv}>
            <span>OWN THE STORY. SHAPE THE FUTURE. JOIN THE SHARKYGANG.</span>

            <div className={styles.ButtonsContainer}>
              <Link href="#orign">
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
    </section>
  );
};

export default MintContainer;
