import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import {Montserrat} from "next/font/google";

const myfont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
})

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
      <body className={myfont.className}>
        <Navbar />
        {children}
       < Footer/>
      </body>
    </html>
  );
}
