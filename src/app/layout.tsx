import type { Metadata } from "next";
import { globalfont } from "@/app/ui/fonts";
import "./globals.scss";
import PageContent from "./dashboard/pagecontent";

export const metadata: Metadata = {
  title: "Portfolio DOR Developer",
  description: "Next.js project to showcase css layouts and web a dinamic webpage - By Daniel Otero Rivera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`${globalfont.className} antialiased`}>
        <PageContent childNode={children}/>
      </body>
    </html>
  );
}