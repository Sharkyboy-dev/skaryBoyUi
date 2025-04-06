"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import About from "@/components/about";
import OriginStory from "@/components/originstory";
import Roadmap from "@/components/roadmap";
import Faqs from "@/components/faqs";
import HowToMint from "@/components/howToMint";

export default function Home() {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.HeroCOntainer}>
        <Navbar />
        <MintContainer />
      </div>
      <About />
      <OriginStory />
      <Roadmap />
      <HowToMint />
      <Faqs />
      <Footer />
    </div>
  );
}
