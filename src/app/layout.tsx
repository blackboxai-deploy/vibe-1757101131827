import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JastipGlobal - Your Trusted International Shopping Service",
  description: "Get anything from anywhere in the world through our trusted network of verified service providers. Safe, secure, and affordable international shopping made easy.",
  keywords: "jastip, international shopping, global marketplace, trusted service providers, overseas shopping",
  authors: [{ name: "JastipGlobal" }],
  openGraph: {
    title: "JastipGlobal - Your Trusted International Shopping Service",
    description: "Get anything from anywhere in the world through our trusted network of verified service providers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JastipGlobal - Your Trusted International Shopping Service",
    description: "Get anything from anywhere in the world through our trusted network of verified service providers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}