import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const boldType = localFont({
  src: "./fonts/bold_type.ttf",
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Owó Ẹyọ",
    default: "Owó Ẹyọ — Modern Finance for Africa",
  },
  description:
    "Owó Ẹyọ is a next-generation fintech platform empowering Africans with seamless payments, savings, and investments. Send money, grow wealth, and build a better financial future.",
  keywords: [
    "fintech",
    "Africa",
    "payments",
    "savings",
    "investments",
    "Owó Ẹyọ",
    "mobile money",
  ],
  openGraph: {
    title: "Owó Ẹyọ — Modern Finance for Africa",
    description:
      "Empowering Africans with seamless payments, savings, and investments.",
    url: "https://owoeyo.com",
    siteName: "Owó Ẹyọ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owó Ẹyọ — Modern Finance for Africa",
    description:
      "Empowering Africans with seamless payments, savings, and investments.",
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
      className={`${boldType.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-canvas">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
