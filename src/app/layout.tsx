import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Custom components
import MUIProvider from "@/components/MUIProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courier Hub for Food Delivery Job",
  description:
    "Food Delivery rider platform where courier person can find Delivery contract, substitute, subcontract for Wolt, Foodora, Uber Eats, Kokit app and Posti, Taxi grocery shop. Find substitutes, make contracts, and manage your work efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MUIProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MUIProvider>
      </body>
    </html>
  );
}
