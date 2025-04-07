"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

// ✅ Number of images to scroll
const TOTAL_IMAGES = 250; // or 1000 if you're ready

// ✅ GitHub raw image base URL
const BASE_URL = "https://raw.githubusercontent.com/Sharkyboy-dev/sharkyboy-nft-images/main/nfts";

const NFTGallery = () => {
  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => `${BASE_URL}/${i + 1}.png`);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.scrollTrack}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`SharkyBoy #${index + 1}`}
            className={styles.nftImage}
            onError={(e) => {
              e.currentTarget.style.display = "none"; // Hide broken images
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
