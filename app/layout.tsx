import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maestrobuiltconstructions.com"),
  title: {
    default: "Maestro Built Constructions",
    template: "%s | Maestro Built Constructions",
  },
  description:
    "Maestro Built Constructions delivers refined residential and commercial construction with a focus on craftsmanship, clarity, and dependable project delivery.",
  applicationName: "Maestro Built Constructions",
  keywords: [
    "Maestro Built Constructions",
    "construction company",
    "custom homes",
    "renovations",
    "extensions",
    "commercial construction",
  ],
  openGraph: {
    title: "Maestro Built Constructions",
    description:
      "Premium construction services spanning custom homes, renovations, extensions, and commercial delivery.",
    url: "https://www.maestrobuiltconstructions.com",
    siteName: "Maestro Built Constructions",
    locale: "en_AU",
    type: "website",
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
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#101020] text-white">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
