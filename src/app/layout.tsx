import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-body bg-canvas">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
