"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

const nftImageMap: { [id: number]: string } = {
  1: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/1-vzKeuJfnuppyxGKgjWGyCdc2kLAD6v.png",
  2: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/2-uSPdPJbS2fytr8YZM1TF3gWphrFOhG.png",
  10: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/10-n9HVnl6ylkOVkGDnxEX9Ujpdqz22lv.png",
  11: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/11-zzmhK6I7doc4nyjOBKRs0dKAy0Fp6q.png",
  12: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/12-FgdXGIVGwDSNiLKuKIlTBy4SckH0jL.png",
  13: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/13-UUo9mgzhu7aXYExvtX3NzD2j2S8FKV.png",
  14: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/14-VTXjzQEis0zfubXksSgWlyaHiUsj86.png",
  15: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/15-li7ooX05u7OdgmSzSpmp034Jsmha4N.png",
  16: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/16-pv5c6vIXDnmIN1MUvSHnCoDTsUOZw3.png",
  17: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/17-bNoI74JWcT4DM3JXoRsNTlVKkzyyZB.png",
  18: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/18-Veu8TUXAswPFaPcisi4sF10e4UBfAs.png",
  19: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/19-HYAmWtGWjSt3K9p9AVyeCUbgd5WRPR.png",
  20: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/20-4cDu7eUxoQgMRRoNww408O6rGFUPDN.png",
  21: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/21-BkaMoLQ0GG3KH4TFaQmNF5ysXrIqid.png",
  22: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/22-tJjbRM89QKSQnlXV7TWFh87sO6wkhR.png",
  23: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/23-lZPjKem76OuH5k0aOykOJko38XS8Cm.png",
  24: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/24-YAsWjRD72gbGa9tKCSHz1h2GOu6x9V.png",
  25: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/25-3w8fKsYX5WFtSD30fP7RT2Q3q2y40E.png",
  26: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/26-VvePkx3eq4MwFWbtCIzOzZn6mQ2BAw.png",
  28: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/28-KIlLWVgd1UdTcNz4cLLy2FBIBghtmX.png"
};

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
