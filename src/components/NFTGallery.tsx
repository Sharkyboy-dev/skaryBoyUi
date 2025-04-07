"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

// ✅ Number of images to scroll
const TOTAL_IMAGES = 250;

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
