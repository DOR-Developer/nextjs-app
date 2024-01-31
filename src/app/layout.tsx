import type { Metadata } from "next";
import { globalfont } from "@/app/ui/fonts";
import "./globals.scss";
import SideNav from "@/app/dashboard/sidenav";
import Footer from "./dashboard/footer";

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
        <aside className="flex flex-col p-2 shadow-md bg-white">
          <SideNav />
        </aside>
        <main className="flex-auto flex flex-col items-center">
          <div className="max-w-screen-md m-auto">
            {children}
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}