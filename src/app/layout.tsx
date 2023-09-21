import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import { twMerge } from "tailwind-merge";

import { Navbar } from "@/components/ui/navbar";
import { fontMono, fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Providers } from "@/lib/providers";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
          fontMono.className,
        )}
      >
        <Providers>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Made by</span>
                <p className="bg-gradient-to-br from-[#c53030] to-[#ff8a4d] bg-clip-text font-bold text-transparent">
                  Daniel Boll
                </p>
                🎴
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
