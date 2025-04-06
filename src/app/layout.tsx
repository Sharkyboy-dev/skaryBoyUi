import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar"; // ✅ Import the new Navbar component

const myFont = localFont({
  src: [
    {
      path: "./zing.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--my-font",
});

export const metadata: Metadata = {
  title: "SharkyBoy Genesis Collection Mint",
  description: "SharkyBoy Genesis Collection Mint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <head />
      <body style={{ margin: 0 }}>
        <Navbar /> {/* ✅ Replaces the old <header> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
