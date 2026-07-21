import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeLink™ | AI-Powered Trade Matching",
  description: "Describe your home emergency, get an instant fair quote, and watch a vetted local professional arrive on a live map.",
  openGraph: {
    title: "TradeLink™ | AI-Powered Trade Matching",
    description: "Describe your home emergency, get an instant fair quote, and watch a vetted local professional arrive on a live map.",
    url: "https://tradelink.com",
    siteName: "TradeLink",
    images: [
      {
        url: "/images/tradelink/10-social-og-card.webp",
        width: 1200,
        height: 630,
        alt: "TradeLink Social Preview Card",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeLink™ | AI-Powered Trade Matching",
    description: "Describe your home emergency, get an instant fair quote, and watch a vetted local professional arrive on a live map.",
    images: ["/images/tradelink/10-social-og-card.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex text-slate-100 selection:bg-teal-500/30">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          
          {/* Topbar */}
          <Topbar />

          {/* Page Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
