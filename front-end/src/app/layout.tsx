import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/smartforge.ico" sizes = "any"/>
      <title>SmartForge</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tl from-neutral-950 via-neutral-900 to-neutral-800`}
      >
        {children}
      </body>
    </html>
  );
}
