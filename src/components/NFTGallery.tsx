"use client";
import React from "react";
import styles from "./NFTGallery.module.css";
import { nftImageMap } from "../data/nftImageMap";

const NFTGallery = () => {
  const images = Object.entries(nftImageMap);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.scrollTrack}>
        {images.map(([id, src]) => (
          <img
            key={id}
            src={src}
            alt={`SharkyBoy #${id}`}
            className={styles.nftImage}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
