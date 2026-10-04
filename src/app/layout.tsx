import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

const clashDisplay = localFont({
  variable: "--font-clash",
  src: [
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600" },
  ],
});

export const metadata: Metadata = {
  title: "Dhimaz — Portfolio",
  description: "Digital designer and developer portfolio",
};

// Applies the choice saved by ThemeToggle before first paint, so the page never flashes the other theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: themeScript sets data-theme before React hydrates
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
