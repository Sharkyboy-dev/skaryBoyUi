"use client";
import React from "react";
import styles from "./nftGallery.module.css";

const TOTAL_IMAGES = 50; // 🔄 Adjust based on performance

const NFTGallery = () => {
  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/nfts/${i + 1}.png`);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.scrollTrack}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`SharkyBoy #${index + 1}`} className={styles.nftImage} />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
