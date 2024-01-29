import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/ui/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Porfolio DOR Developer",
  description: "Next.js project to showcase css layouts and web a dinamic webpage - By Daniel Otero Rivera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
