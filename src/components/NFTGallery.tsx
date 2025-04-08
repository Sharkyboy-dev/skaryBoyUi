"use client";
import React from "react";
import styles from "./NFTGallery.module.css";

const nftImageMap: { [id: number]: string } = {
  78: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/78-0xXJmygMyICm6ljzLLcLozEJr1UUO3.png",
  12: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/12-FgdXGIVGwDSNiLKuKIlTBy4SckH0jL.png",
  24: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/24-YAsWjRD72gbGa9tKCSHz1h2GOu6x9V.png",
  10: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/10-n9HVnl6ylkOVkGDnxEX9Ujpdqz22lv.png",
  96: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/96-pyfAm8b4umCAAUczUH2aMXRpnIPGx3.png",
  2: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/2-uSPdPJbS2fytr8YZM1TF3gWphrFOhG.png",
  28: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/28-KIlLWVgd1UdTcNz4cLLy2FBIBghtmX.png",
  44: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/44-5QL2jsJctnn35I2zMVvCjuKZMEOsFS.png",
  26: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/26-VvePkx3eq4MwFWbtCIzOzZn6mQ2BAw.png",
  21: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/21-BkaMoLQ0GG3KH4TFaQmNF5ysXrIqid.png",
  65: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/65-KkufWSIemvpKvYAsIIXpjN5DH8wK70.png",
  15: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/15-li7ooX05u7OdgmSzSpmp034Jsmha4N.png",
  13: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/13-UUo9mgzhu7aXYExvtX3NzD2j2S8FKV.png",
  19: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/19-HYAmWtGWjSt3K9p9AVyeCUbgd5WRPR.png",
  11: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/11-zzmhK6I7doc4nyjOBKRs0dKAy0Fp6q.png",
  23: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/23-lZPjKem76OuH5k0aOykOJko38XS8Cm.png",
  20: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/20-4cDu7eUxoQgMRRoNww408O6rGFUPDN.png",
  51: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/51-TlVMsdWZvQ9dyalYmyMyVTnsPMNWps.png",
  16: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/16-pv5c6vIXDnmIN1MUvSHnCoDTsUOZw3.png",
  36: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/36-a1WzY2M12jbbf0wzds42agJBEiR4mv.png",
  18: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/18-Veu8TUXAswPFaPcisi4sF10e4UBfAs.png",
  80: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/80-VTG3fOzzkASwDc62eZ1No2zC6IgkEp.png",
  38: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/38-vHtWKlIFCtMSr9BXDA4ke6RRLP65zt.png",
  52: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/52-a4jg3M33uE7eHWSeF6GrnucSRmK2NP.png",
  22: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/22-tJjbRM89QKSQnlXV7TWFh87sO6wkhR.png",
  14: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/14-VTXjzQEis0zfubXksSgWlyaHiUsj86.png",
  32: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/32-okon6ZeifgP65MHMPGGXThxFRE6h3z.png",
  25: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/25-3w8fKsYX5WFtSD30fP7RT2Q3q2y40E.png",
  1: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/1-vzKeuJfnuppyxGKgjWGyCdc2kLAD6v.png",
  17: "https://nte2vqorwtt1wdls.public.blob.vercel-storage.com/nfts_clean_final/17-bNoI74JWcT4DM3JXoRsNTlVKkzyyZB.png"
};

const NFTGallery = () => {
  const images = Object.entries(nftImageMap);
  const loopedImages = [...images, ...images, ...images]; // Triple for seamless looping

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.scrollTrack}>
        {loopedImages.map(([id, src], index) => (
          <img
            key={`${id}-${index}`}
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
