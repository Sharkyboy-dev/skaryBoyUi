import React from "react";
import styles from "./roadmap.module.css";

const Roadmap = () => {
  return (
    <div className={styles.RoadmapContainer} id="roadmap">
      <span className={styles.heading}>Roadmap</span>
      <div className={styles.description}>
        <p>PHASE 1: THE GENESIS MINT (LAUNCH)</p>
        <ol>
          <li>RELEASE OF 1,000 GENESIS NFTS</li>
          <li>
            EXCLUSIVE HOLDER PERKS: VOTING RIGHTS, AIRDROPS, AND EARLY ACCESS{" "}
          </li>
          <li>
            COMMUNITY ONBOARDING: GROW THE SHARKYGANG ON TWITTER, TELEGRAM, AND
            DISCORD
          </li>
          <li>
            MINT FUNDS ALLOCATION: SECURING FUTURE DEVELOPMENT, MARKETING, AND
            COMMUNITY REWARDS
          </li>
        </ol>
      </div>
      <div className={styles.description}>
        <p>PHASE 2: THE STORY BEGINS (LORE & COMICS)</p>
        <ul>
          <li>GENESIS HOLDERS VOTE ON THE NEXT SHARKYBOY STORYLINE</li>
          <li>
            FIRST OFFICIAL DIGITAL COMIC BOOK RELEASE - NFT HOLDERS GET EARLY
            ACCESS
          </li>
          <li>
            EXCLUSIVE AIRDROPS FOR HOLDERS (NFTS, SPECIAL COLLECTIBLES, $FIN
            TOKENS)
          </li>
          <li>
            COMMUNITY-DESIGNED MERCH: HOLDERS VOTE ON SHARKYBOY MERCH DROPS
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <p> PHASE 3: THE LOST FIN CLAN EXPANSION</p>
        <ul>
          <li>GENESIS HOLDERS DECIDE THE NEXT CHARACTER NFT DROP</li>
          <li>
            COMIC SEQUEL & PHYSICAL PRINTS (GENESIS HOLDERS GET SPECIAL
            EDITIONS)
          </li>
          <li>DAO FORMATION: HOLDERS VOTE ON MAJOR PROJECT DECISIONS</li>
          <li>
            SHARKYBOY MERCH STORE LAUNCH - NFT HOLDERS GET DISCOUNTS &
            EXCLUSIVES
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <p>PHASE 4: SHARKYBOY UNIVERSE GROWS</p>
        <ul>
          <li>NEW NFT UTILITY & FUTURE RELEASES (HOLDERS DECIDE)</li>
          <li>IRL MEETUPS & SHARKYBOY EVENTS</li>
          <li>COLLABORATIONS & PARTNERSHIPS WITH WEB3 PROJECTS</li>
          <li>FUTURE LORE-DRIVEN NFT DROPS (EXPANDING THE SHARKYBOY WORLD)</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
