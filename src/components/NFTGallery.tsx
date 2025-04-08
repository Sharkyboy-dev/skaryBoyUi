"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

const TOTAL_IMAGES = 100;
const BASE_URL = "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final";

const NFTGallery = () => {
  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
    return `${BASE_URL}/${i + 1}.png`;
  });

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
              e.currentTarget.style.display = "none";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
