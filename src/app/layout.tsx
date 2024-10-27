/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { clashDisplay, inter } from "./fonts";
// app/fonts.ts

export const metadata: Metadata = {
  title: "Kali Trip Landing Page",
  description: "Created by Miraj Hossen (mirajhossen7731@gmail.com)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${clashDisplay.variable} `}
    >
      <body
        className={`transition-all ease-in-out duration-300 max-w-[2000px] mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
