import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanmay Bhosale | Graphic Designer",
  description: "Personal portfolio of Tanmay Bhosale, Graphic Designer.",
  metadataBase: new URL("https://tanmaybhosale.vercel.app"),
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Tanmay Bhosale | Graphic Designer",
    description: "Personal portfolio of Tanmay Bhosale, Graphic Designer.",
    url: "https://tanmaybhosale.vercel.app",
    siteName: "Tanmay Bhosale Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Bhosale | Graphic Designer",
    description: "Personal portfolio of Tanmay Bhosale, Graphic Designer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} h-full antialiased bg-black-main text-foreground`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
