import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

// Awesome Serif Italic — headers, subheaders, and highlight text only
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

// Note: Helvetica Neue is a system font — no import needed

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
        className={`${awesomeSerif.variable} font-sans`}
      >
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
