import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

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
      <body className={`${bebas.variable} ${mono.variable} ${caveat.variable} ${dmSans.variable} font-body bg-cream`}>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
