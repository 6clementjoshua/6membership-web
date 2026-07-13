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
  metadataBase: new URL("https://www.6membership.com"),

  title: {
    default: "6membership",
    template: "%s | 6membership",
  },

  description:
    "The official membership and recognition platform for individuals seeking an established relationship with 6clement Joshua and affiliated organizations.",

  applicationName: "6membership",

  icons: {
    icon: [
      {
        url: "/favicon.PNG",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.PNG",
    apple: [
      {
        url: "/favicon.PNG",
        type: "image/png",
      },
    ],
  },

  keywords: [
    "6membership",
    "6clement Joshua",
    "membership application",
    "official membership",
    "member recognition",
    "6 organization",
  ],

  authors: [
    {
      name: "6clement Joshua",
      url: "https://www.6membership.com",
    },
  ],

  creator: "6clement Joshua",
  publisher: "6membership",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.6membership.com",
    siteName: "6membership",
    title: "6membership",
    description:
      "Apply for official recognition and membership access within the 6clement Joshua network.",
    images: [
      {
        url: "/6logo.png",
        alt: "6membership official logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "6membership",
    description:
      "Apply for official recognition and membership access within the 6clement Joshua network.",
    images: ["/6logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
