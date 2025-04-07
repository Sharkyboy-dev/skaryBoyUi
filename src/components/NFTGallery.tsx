"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

// 🔹 Total images you want to show (start with 100 for speed, 1000 max)
const TOTAL_IMAGES = 100;

// ✅ Replace with your actual blob domain
const BASE_URL = "https://skary-boy-ui-blob.vercel.app";

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
              e.currentTarget.style.display = "none"; // Hide broken ones
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
