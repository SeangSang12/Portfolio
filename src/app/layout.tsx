import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import AppHeader from "@/layout/header";
import Footer from "@/layout/footer";
import I18nProvider from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raceSport = localFont({
  src: "../../public/font/Race Sport.ttf",
  variable: "--font-race-sport",
});

const hanuman = localFont({
  src: "../../public/font/Hanuman.ttf",
  variable: "--font-hanuman",
});

export const metadata: Metadata = {
  title: "seang sang portfolio",
  description: "seangsang portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raceSport.variable} ${hanuman.variable} antialiased`}
      >
        <I18nProvider>
          <AppHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
