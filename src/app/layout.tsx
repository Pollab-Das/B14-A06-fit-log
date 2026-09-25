// src/app/layout.tsx
import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import  WorkoutsProvider from "@/context/WorkoutsContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "Train with intent. Log every set. FitLog is a dark, no-nonsense gym companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="bg-[#0C0D10] text-white min-h-screen flex flex-col antialiased">
        <WorkoutsProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
            toastStyle={{
              background: "#15171D",
              color: "#ffffff",
              border: "1px solid #222630",
            }}
          />
        </WorkoutsProvider>
      </body>
    </html>
  );
}