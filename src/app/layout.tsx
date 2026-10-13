import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "ARMUX | Custom Basketball Wear and Gear",
    template: "%s | ARMUX",
  },
  description:
    "ARMUX delivers premium custom basketball uniforms and teamwear designed around your identity, your colors, and your game.",
  keywords: [
    "ARMUX",
    "custom basketball wear and gear",
    "basketball jerseys",
    "teamwear",
    "custom basketball uniforms",
    "coach uniforms",
    "sportswear accessories",
  ],
  icons: {
    icon: "/web logo.png",
    shortcut: "/web logo.png",
    apple: "/web logo.png",
  },
  openGraph: {
    title: "ARMUX | Custom Basketball Wear and Gear",
    description:
      "Premium custom basketball uniforms and teamwear designed around your team's identity.",
    url: "https://armuxofficial.com",
    siteName: "ARMUX",
    images: [
      {
        url: "/images/hero_basketball.jpg",
        width: 1200,
        height: 630,
        alt: "ARMUX Custom Basketball Uniforms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 antialiased min-h-screen flex flex-col selection:bg-amber-400 selection:text-black">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
