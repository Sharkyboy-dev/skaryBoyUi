import React from "react";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaXTwitter,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterTop}>
        {/* Social Icons */}
        <div className={styles.FooterLinksBox}>
          <span>Follow us on</span>
          <div className={styles.Icons}>
            <a href="https://t.co/2PyAgbMLEj" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
            <a href="http://instagram.com/sharkyboy_nft" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/Sharkyboy-dev" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/sharkyboy_nft" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className={styles.FooterLinksBox}>
          <span>Legal</span>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/termsandcondition">Terms & Conditions</a>
        </div>

        {/* Newsletter */}
        <div className={styles.FooterLinksBox}>
          <span>Subscribe to our Newsletter</span>
          <div className={styles.NewsLetter}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <span className={styles.FooterText}>
        SHARKYBOY NFTs DAO Copyright © 2025 SHARKYBOY NFTs - All rights reserved
      </span>
    </div>
  );
};

export default Footer;
