import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Public_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.className}`}>
      <body className="flex h-screen w-full flex-col">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
