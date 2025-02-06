import SideBar from "@/components/sidebar/SideBar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-screen w-full bg-background">
        <SideBar />
        <main className="ml-auto w-[calc(100%-17vw)] px-9 py-7">
          {children}
        </main>
      </body>
    </html>
  );
}
