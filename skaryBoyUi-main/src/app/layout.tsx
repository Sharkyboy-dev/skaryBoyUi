import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./zing.otf", // correct path
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
      <body>{children}</body>
    </html>
  );
}
