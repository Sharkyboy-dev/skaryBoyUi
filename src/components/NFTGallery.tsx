"use client";
import React from "react";
import styles from "./nftGallery.module.css";

const TOTAL_IMAGES = 50; // ✅ You can raise this to 1000 when ready

const NFTGallery = () => {
  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/nfts/${i + 1}.png`);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.scrollTrack}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`SharkyBoy #${index + 1}`}
            className={styles.nftImage}
          />
        ))}
        {/* 🔁 Duplicate for seamless scroll loop */}
        {images.map((src, index) => (
          <img
            key={`dupe-${index}`}
            src={src}
            alt={`SharkyBoy #${index + 1} duplicate`}
            className={styles.nftImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
