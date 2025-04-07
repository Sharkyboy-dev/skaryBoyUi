"use client";
import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutWrapper} id="about">
      <div className={styles.aboutPanel}>
        <h2 className={styles.aboutTitle}>ABOUT US</h2>

        <div className={styles.speechBubble}>
          A DEEP-SEA SAGA POWERED BY THE COMMUNITY 🦈💥
        </div>

        <div className={styles.descriptionBox}>
          <p>
            SHARKYBOY IS MORE THAN JUST AN NFT COLLECTION — IT'S A STORY-DRIVEN
            COMMUNITY BUILT AROUND A RICH, EVOLVING NARRATIVE AND EXCLUSIVE
            HOLDER-DRIVEN EXPERIENCES. INSPIRED BY THE LOST FIN CLAN, THE GENESIS
            COLLECTION INTRODUCES 1,000 UNIQUE SHARKYBOY NFTS, EACH REPRESENTING A
            WARRIOR IN THE DEEP-SEA UNIVERSE WHERE HONOR, POWER, AND LEGACY SHAPE
            THEIR FATE.
          </p>
          <p>
            AS A GENESIS HOLDER, YOU'RE NOT JUST COLLECTING AN NFT — YOU'RE BECOMING
            PART OF THE SHARKYBOY UNIVERSE. HOLDERS GET EXCLUSIVE VOTING RIGHTS ON
            FUTURE CHARACTER RELEASES, COMIC BOOK STORYLINES, MERCH DESIGNS, AND
            MORE — BUILT FOR THE COMMUNITY, BY THE COMMUNITY.
          </p>
          <ul>
            <li>🦈 EARLY ACCESS TO FUTURE DROPS & EVENTS</li>
            <li>📖 INTERACTIVE COMIC STORYLINES</li>
            <li>🌐 COMMUNITY-POWERED GOVERNANCE</li>
          </ul>
        </div>

        <div className={styles.descriptionBox}>
          <p>
            JOIN US AS WE EXPAND THE SHARKYBOY UNIVERSE — FROM NFTS TO COMICS,
            COLLECTIBLES, AND BEYOND. THIS IS JUST THE BEGINNING. WILL YOU BE PART
            OF THE LEGEND?
          </p>
          <p>🔥 JOIN THE MOVEMENT. OWN A SHARKYBOY. SHAPE THE STORY.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
