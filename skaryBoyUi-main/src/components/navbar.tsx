"use client";

import React from "react";
import styles from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const handleScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.Botom}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <img src="/logo.png" alt="" />
        <Link href="#howtobuy">How to Buy</Link>
        <Link href="#faqs">FAQs</Link>
        {/* <div className={styles.Hbtn}>
          <RxHamburgerMenu />
        </div> */}
      </div>
      {/* <div className={styles.menu}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">How to Buy</a>
        <a href="/">FAQs</a>
      </div> */}
    </div>
  );
};

export default Navbar;
