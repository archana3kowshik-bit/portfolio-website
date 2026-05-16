import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

// Instrument Serif — new primary display font (editorial, warm, humanist)
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

// Awesome Serif Italic — kept for the hero name only (it's special)
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
      <body className={`${awesomeSerif.variable} ${instrumentSerif.variable} font-sans`}>
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
