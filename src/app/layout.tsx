import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Animated_Cursor from "@/components/Animated_Cursor";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maruf Suborno - Web Designer & Developer",
  description: "Welcome to Maruf Suborno's portfolio website. Discover my work and skills as a web designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}
        <Animated_Cursor/>
        <Footer/>
      </body>
    </html>
  );
}
