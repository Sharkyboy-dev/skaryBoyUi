"use client";
import styles from "./page.module.css";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";
import About from "@/components/about";
import OriginStory from "@/components/originstory";
import Roadmap from "@/components/roadmap";
import Faqs from "@/components/faqs";
import HowToMint from "@/components/howToMint";

export default function Home() {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.HeroCOntainer}>
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
