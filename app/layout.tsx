import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

// 1. Awesome Serif Italic — the real deal, two optical sizes
const awesomeSerif = localFont({
  src: [
    {
      path: "../public/fonts/AwesomeSerifItalic-Regular.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/AwesomeSerifItalic-Tall.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-awesome-serif",
});

// 2. Caveat — handwriting for scrapbook annotations + sticky notes (unchanged)
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600", "700"],
});

// Note: Helvetica Neue is loaded as a system font — no import needed

export const metadata: Metadata = {
  title: "Archana Kowshik — Visual Designer & Illustrator",
  description:
    "Portfolio of Archana Kowshik, a visual/graphic designer and illustrator with a bold and captivating style.",
  icons: { icon: "/cat.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${awesomeSerif.variable} ${caveat.variable} font-display`}
      >
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
