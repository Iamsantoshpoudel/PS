import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Poudel Solutions",
    template: "%s | Poudel Solutions",
  },
  description: "Find all the solutions for class 8 & 10. Developed by Poudel.",
  keywords: [
    "Poudel Solutions",
    "Class 8 Solutions",
    "Class 10 Solutions",
    "Education",
    "Homework Help",
    "Nepal Curriculum",
  ],
  authors: [{ name: "Poudel", url: "https://santoshpoudel.com.np" }],
  creator: "Poudel",
  generator: "Next.js",
  metadataBase: new URL("https://santoshpoudel.com.np"),
  openGraph: {
    title: "Poudel Solutions",
    description: "Find all the solutions for class 8 & 10.",
    url: "https://santoshpoudel.com.np",
    siteName: "Poudel Solutions",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Poudel Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poudel Solutions",
    description: "Find all the solutions for class 8 & 10.",
    creator: "@poudel", // Replace if you have a Twitter handle
    images: ["/Logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
