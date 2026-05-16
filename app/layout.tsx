import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Archana Kowshik — Visual Designer & Illustrator",
  description: "Portfolio of Archana Kowshik, a visual designer and illustrator based in Bangalore.",
  icons: { icon: "/cat.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmSans.variable} font-body`}>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
