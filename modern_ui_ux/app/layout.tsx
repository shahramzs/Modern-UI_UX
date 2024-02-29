import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";


export const metadata: Metadata = {
  title: "Trip",
  description: "Trip UI/UX APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
