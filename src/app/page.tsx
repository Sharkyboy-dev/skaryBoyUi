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
    <div className={`${styles.Maincontainer} bg-gradient-to-b from-black via-zinc-900 to-black text-white`}>
      <div className={`${styles.HeroCOntainer} flex flex-col items-center justify-center`}>
        <Navbar />
        <MintContainer />
      </div>

      <main className="px-4 sm:px-8 md:px-16 max-w-screen-xl mx-auto space-y-24">
        <About />
        <OriginStory />
        <Roadmap />
        <HowToMint />
        <Faqs />
      </main>

      <Footer />
    </div>
  );
}
