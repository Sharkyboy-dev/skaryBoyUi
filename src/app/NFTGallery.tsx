"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

const nftImages = [
  "/nfts/nft1.png",
  "/nfts/nft2.png",
  "/nfts/nft3.png",
  "/nfts/nft4.png",
  "/nfts/nft5.png"
];

const NFTGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.scroller}>
        {nftImages.map((src, i) => (
          <img key={i} src={src} alt={`SharkyBoy NFT ${i}`} />
        ))}
        {nftImages.map((src, i) => (
          <img key={`loop-${i}`} src={src} alt={`SharkyBoy NFT ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;

