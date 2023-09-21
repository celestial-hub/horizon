import { Inter as FontSans } from "next/font/google";
import LocalFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = LocalFont({
  src: "./fonts/iosevka.ttf",
  display: "swap",
  variable: "--font-mono",
});
