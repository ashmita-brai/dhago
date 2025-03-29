import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Handmade Crochet Shop | Unique Handcrafted Items",
  description: "Discover beautiful handmade crochet items crafted with love. Each piece is uniquely created by hand, bringing warmth and style to your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
