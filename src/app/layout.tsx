import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { DESCRIPTION, FULL_NAME, SITE_NAME, SITE_URL, TITLE, personJsonLd, websiteJsonLd } from "./seo";
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
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  keywords: [
    "Dhimaz",
    FULL_NAME,
    "Dhimaz programmer",
    "Dhimaz Binus",
    "Dhimaz Malang",
    "Full-Stack Developer",
    "Software Engineer",
    "Binus University",
    "Malang",
    "Indonesia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
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
        <script
          type="application/ld+json"
          // < is escaped so the JSON can never close the script tag
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main className="overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
