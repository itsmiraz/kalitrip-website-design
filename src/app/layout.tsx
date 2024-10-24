/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
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
    <html lang="en">
       <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body
        className={` max-w-[1600px] mx-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
