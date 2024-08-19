import { Footer, Navbar } from "@/components/shared";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Pegboard Tracker",
  description: "It's a simple expense tracker app using next.js",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "unknowndoc",
      url: "https://www.github.com/nair-ayush",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128.png" },
    { rel: "icon", url: "icons/icon-128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
