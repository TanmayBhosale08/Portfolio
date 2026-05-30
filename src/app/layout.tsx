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
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tanmay Bhosale | Graphic Designer",
    description: "Personal portfolio of Tanmay Bhosale, Graphic Designer.",
    url: "https://tanmaybhosale.vercel.app",
    siteName: "Tanmay Bhosale Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Tanmay Bhosale Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tanmay Bhosale | Graphic Designer",
    description: "Personal portfolio of Tanmay Bhosale, Graphic Designer.",
    images: ["/logo.png"],
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
