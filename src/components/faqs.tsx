import React from "react";
import styles from "./faqs.module.css";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className={styles.faqsContainer} id="faqs">
      <span className={styles.Heading}>Faq</span>
      <div className={styles.ContentContainer}>
        <div className={styles.FAQs}>
          <span>WHAT IS SHARKYBOY NFT?</span>
          <p>
            A COMMUNITY-DRIVEN NFT WHERE HOLDERS INFLUENCE THE STORY, NEXT NFTS,
            AND MERCH.
          </p>
        </div>
        <div className={styles.FAQs}>
          <span>WHAT DO GENESIS HOLDERS GET?</span>
          <p>✅VOTING POWER ✅Airdrops ✅MERCH ACCESS ✅Comic Influence</p>
        </div>
        <div className={styles.FAQs}>
          <span>WHAT'S NEXT FOR SHARKYBOY?</span>
          <p>
            HOLDERS DECIDE THE NEXT NFT RELEASE, COMIC BOOK, AND EXCLUSIVE
            REWARDS.
          </p>
        </div>
        <div className={styles.FAQs}>
          <span>WHAT'S AN NFT?</span>
          <p>
            An NFT on the Solana network is a unique digital asset stored on the Solana blockchain that represents ownership or authenticity of something like art, music, collectibles, or virtual items. Like NFTs on Ethereum, Solana NFTs are non-fungible, meaning each one is distinct and cannot be directly swapped for another of equal value.


          </p>
        </div>
        <div className={styles.FAQs}>
          <span>WHY SHARKYBOY?</span>
          <p>
            BY COLLECTING SHARKYBOY YOU'LL HAVE A VOICE IN THE COMMUNITY AND
            HELP GUIDE THE DIRECTION OF THE PROJECT AND DEVELOPMENT OF THE
            STORY. ALREADY SOME GREAT IDEAS HAVE COME FROM THE COMMUNITY.
            WORKING TOGETHER WE CAN CONTINUE THE GROW THE SHARKYBOY ECOSYSTEM!
          </p>
        </div>
        <div className={styles.FAQs}>
          <span>WHAT IS SHARKYBOY?</span>
          <p>
            SHARKYBOY IS A STORY-DRIVEN NFT PROJECT THAT BLENDS ART, COMMUNITY,
            AND INTERACTIVE STORYTELLING INTO A UNIQUE WEB3 EXPERIENCE. THE
            GENESIS COLLECTION INTRODUCES 1,000 HAND- CRAFTED NFTS, EACH
            REPRESENTING A WARRIOR FROM THE LOST FIN CLAN-A LEGENDARY
            BROTHERHOOD FIGHTING FOR SURVIVAL IN THE DEEP-SEA UNIVERSE.
          </p>
        </div>
      </div>
      <div className={styles.IconsContainer}>
        <a href="https://t.co/2PyAgbMLEj" target="_blank">
          <FaTelegram />
        </a>
        <a href="http://instagram.com/sharkyboy_nft" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/Sharkyboy-dev" target="_blank">
          <FaGithub />
        </a>
        <a href=" https://x.com/sharkyboy_nft" target="_blank">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Faqs;
