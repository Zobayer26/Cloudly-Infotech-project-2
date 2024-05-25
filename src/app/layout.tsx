import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shop home",
  description: "develop by zobayer hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` h-screen flex flex-col ${inter.className}`}>
        <main className=" flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
