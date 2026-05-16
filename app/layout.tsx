import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

// Playfair Display — hero sentence + name
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

// Caveat — the "special word" inside the hero sentence (Sierra Hopkins trick)
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

// DM Sans — body, labels, UI
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Archana Kowshik — Visual Designer & Illustrator",
  description: "Portfolio of Archana Kowshik, visual designer and illustrator based in Bangalore.",
  icons: { icon: "/cat.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${caveat.variable} ${dmSans.variable} font-body`}>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
