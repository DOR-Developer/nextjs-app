import type { Metadata } from "next";
import { globalfont } from "@/app/ui/fonts";
import "./globals.scss";
import SideNav from "@/app/dashboard/sidenav";

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
        <aside>
          <SideNav />
        </aside>
        <main>{children}</main>
      </body>
    </html>
  );
}